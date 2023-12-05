#!/bin/bash

# Specify the folder path as the first argument when running the script
input_folder="$1"

if [ -z "$input_folder" ]; then
    echo "Usage: $0 <input_folder>"
    exit 1
fi

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed. Please install it using 'brew install webp' (for Homebrew) or another method."
    exit 1
fi

# Convert PNG files to WebP
find "$input_folder" -type f -name "*.png" -print0 | while IFS= read -r -d '' file; do
    output_file="${file%.png}.webp"
    cwebp -q 80 "$file" -o "$output_file"
    echo "Converted $file to $output_file"
done

# Convert JPG files to WebP
find "$input_folder" -type f -name "*.jpg" -o -name "*.jpeg" -print0 | while IFS= read -r -d '' file; do
    output_file="${file%.jpg}.webp"
    cwebp -q 80 "$file" -o "$output_file"
    echo "Converted $file to $output_file"
done

echo "Conversion complete."
