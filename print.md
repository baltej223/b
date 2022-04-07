# print()
this function can change inner html of any html element
#### usage:
print(what to print,id|class,if class then index);

always specify about id and class by putting '#' before id and '.' befour class name
examples:
```markdown
print("hello id","#ele");
```
above code will change inner html of element having id ele to 'hello id'
```markdown
print('hello class','.ele,'0');
```
above code will change inner html of element having class name ele and index 0 to 'hello class'

if you will not specify index of an element in class name case, then it will change all the elements having that class name

Example:
```markdown 
<p class="p"></p>
<p class="p"></p>
<p class="p"></p>
<script>
print('hi cls','.p');
</script>
```
The above code will change the inner HTML of all elements having class p
