#!/bin/bash

# Ensures that all bash scripts in the repository use `set -euox pipefail` or `set -euo pipefail` statement at the beginning.

set -euo pipefail

INVALID_FILES_FOUND=0

while IFS= read -r -d '' BASH_SCRIPT
do
    echo "checking ${BASH_SCRIPT}"
    if ( ! grep -q "set -euo pipefail" "${BASH_SCRIPT}" ) && ( ! grep -q "set -euox pipefail" "${BASH_SCRIPT}" )
    then
        echo "${BASH_SCRIPT}"
        INVALID_FILES_FOUND=1
    fi
done < <(find . -type f -name "*.sh" -print0) # See https://github.com/koalaman/shellcheck/wiki/SC2044

if [[ INVALID_FILES_FOUND -eq 1 ]]
then
    echo ""
    echo "The bash scripts above must include either 'set -euo pipefail' or 'set -euox pipefail."
    exit 1
else
    echo "euox-pipefaile check finished successfully"
fi