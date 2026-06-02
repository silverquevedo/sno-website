#!/bin/bash
# Pre-commit / pre-build check: no em dashes in dossier HTML content
# Run: bash scripts/check-em-dashes.sh
# Exit 1 if any em dashes found in visible content

ERRORS=0
for f in public/albums/*/Lore/*.html; do
  # Check only text between HTML tags (skip <style> blocks)
  COUNT=$(python3 -c "
import re
with open('$f') as fh:
    c = fh.read()
# Strip style blocks
c = re.sub(r'<style[^>]*>.*?</style>', '', c, flags=re.DOTALL)
# Count em dashes
count = c.count('—')
print(count)
")
  if [ "$COUNT" -gt 0 ]; then
    echo "❌ $f: $COUNT em dash(es)"
    ERRORS=$((ERRORS + COUNT))
  fi
done

if [ "$ERRORS" -gt 0 ]; then
  echo ""
  echo "🚫 BLOCKED: $ERRORS em dash(es) found. Replace with ',' or '·' or split sentences."
  exit 1
else
  echo "✅ No em dashes in any dossier"
  exit 0
fi
