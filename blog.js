const blog = new XMLHttpRequest;
blog.onload = function() {
    const title = JSON.parse(this.responseText);
    document.getElementById("blog").innerHTML = `$${title[`title`]}`;
}
blog.open("GET", "http://localhost:8055/items/articles");
blog.send();
console.log(blog.onload);
