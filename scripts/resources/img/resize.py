from PIL import Image
from os import listdir

dev_path = "./devil/"
god_path = "./god/"

for file in listdir(dev_path):
	print(f"File: {dev_path}{file}")
	im = Image.open(f"{dev_path}{file}").convert("RGB")
	new_size = (im.width // 2, im.height // 2)
	im = im.resize(new_size)
	im.save(f"{dev_path}{file}")
	print(f"File: {dev_path}{file}")

for file in listdir(god_path):
	print(f"File: {god_path}{file}")
	im = Image.open(f"{god_path}{file}").convert("RGB")
	new_size = (im.width // 2, im.height // 2)
	im = im.resize(new_size)
	im.save(f"{dev_path}{file}")
	print(f"File: {file}")
