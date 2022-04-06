# get()

## how to use get()
Actually **document.getElementById("foo")** is same as **get("#foo")**
And **document.getElementsByClassName("foo")[0]** is same as **get(".foo","0")**.
### get elements by id
Usage: get("#id of Element")
Use '#' to specify that given data is an ID
```markdown 
<script>
get("#ele").innerHTML="panda";
//this will set innerHTML of element having ID ele to panda
</script>
```
### get elements by class name
Usage: get(".id of Element"," index ")
Use '#' to specify that given data is an class name.
```markdown 
<script>
get(".ele","0").innerHTML="panda";
//this will set innerHTML of element having class
//name ele and have index of 0, to panda
</script>
```
If index of the class will not be provided.
 This function will not work and you would be
 able to see an error in console saying 'index of class is not provided'
[go back to home]((https://baltej223.github.io/b.js/))
