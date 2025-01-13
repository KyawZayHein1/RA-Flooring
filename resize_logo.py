from PIL import Image

# Open the logo image
logo_path = "D:/My Documents/RA Flooring/images/logo.png"
logo = Image.open(logo_path)

# Resize the image to fit the left side of the web page
# Let's assume a suitable size for the logo is 150x150 pixels
logo_resized = logo.resize((150, 150))

# Save the resized image
resized_logo_path = "D:/My Documents/RA Flooring/images/logo_resized.png"
logo_resized.save(resized_logo_path)

print(f"The logo has been resized and saved as '{resized_logo_path}'.")
