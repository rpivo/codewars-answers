def between(a, b):
  arr = []
  for num in range(min(a, b), (max(a, b) + 1)):
    arr.append(num)
  return arr

between(1, 3)