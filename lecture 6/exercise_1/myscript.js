<script>
    // array
    const text = '[ "Gloria Dumaha", "Novendra Kailas", "July Tuegeh", ]';

    // object array javascript
    const myArr = JSON.parse(text);

    // print console
    console.log(myArr);

    // view to html
    document.getElementById("demo3").innerHTML = "My name is "+myArr[0];
    
</script>