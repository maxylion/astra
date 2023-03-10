from PIL import Image
from os import listdir, remove

paths = [
    "./altered/",
    "./blessed/",
    "./consecrate/",
    "./exhalted/",
    "./favor/"
]
for path in paths:
	for file in listdir(path):
		new = path + file
		print(f"File: {new}")
		im = Image.open(f"{new}").convert("RGB")
		new_size = (im.width // 2, im.height // 2)
		im = im.resize(new_size)
		im.save(f"{new.replace('.png', '.jpg')}")
		remove(new)