#Hello World!
#This is a demonstration of the "print" function
print("Hello World!")

#writing comments
print("Hey, how is it going?")

print("Hey how's it going?")

if(5 > 2):
    print("Five is greater than two!")

if (5 < 2):
    print("Five is less than two")

#x is now 5
x = 5
y = "Hello world" # y now has string Hello world

print(x)
print(y)

"""This a line of string to comment within"""

# You can declare the type of character 
a = str(5)
b = int(5)
c = float (5)
print(a)
print(b)
print(c)

#type tells the kind/type of variable 
print(type(a))
print(type(b))
print(type(c))

#you can assign variables to values, multiple ones, at a time
fruit, veg, meat = "apple", "carrot", "beef"
print(fruit)
print(veg)
print(meat)

#A collection of values that are being 'unpacked'
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)


d = "The"
e = "building"
f = "is red"
print(d, e, f)


i = "awesome"
# function from python
def myfunc():
  i = "cool"
  print("Python is " + i)

myfunc()
print(i)