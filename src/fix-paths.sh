#!/bin/bash

# Specify the folder path as the first argument when running the script
input_folder="$1"

if [ -z "$input_folder" ]; then
    echo "Usage: $0 <input_folder>"
    exit 1
fi

# Find all .js files in the specified folder and its subdirectories
js_files=$(find "$input_folder" -type f -name "*.js")

# Loop through each .js file
for file in $js_files; do
    # Use sed to replace image paths with .png or .jpg extensions to .webp
    sed -i '' -E 's/(\.png|\.jpg)/.webp/g' "$file"
    echo "Altered image paths in $file"
done

echo "Alteration complete."

