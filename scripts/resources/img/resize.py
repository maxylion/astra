from PIL import Image
from os import listdir, remove

dev_path = "./icons/devil/"
god_path = "./icons/god/"

for file in listdir(dev_path):
	new = dev_path + file
	print(f"File: {new}")
	im = Image.open(new).convert("RGB")
	if im.size == (256, 256):
		continue
	else:
		new_size = (im.width // 2, im.height // 2)
		im = im.resize(new_size)
		im.save(new.replace('.png', '.jpg'))
		print(f"File: {new}")
		remove(new)

for file in listdir(god_path):
	new = god_path + file
	print(f"File: {new}")
	im = Image.open(new).convert("RGB")
	if im.size == (256, 256):
		continue
	else:
		new_size = (im.width // 2, im.height // 2)
		im = im.resize(new_size)
		im.save(new.replace('.png', '.jpg'))
		print(f"File: {new}")
		remove(new)
