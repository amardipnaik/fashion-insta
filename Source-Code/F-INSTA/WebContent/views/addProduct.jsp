
<<script type="text/javascript">

function addProduct()
{

	var form = document.productForm;

	 var pname = form.pname.value;
	var pprice = form.pprice.value;
	var pbrand = form.pbrand.value;
	var sex = form.sex.value;
	var file = form.file.value;
	
	if(pname=="")
	{
	alert("Please Enter Product Name !!!")
	return
	}

if(pbrand=="")
{
alert("Please Enter Product Brand !!!")
return
}

if(sex=="")
{
alert("Please select Sex !!!")
return
}

if(file=="")
{
alert("Please Upload File !!!")
return
}

alert("Product Added Successfully")

form.action = "<%=request.getContextPath()%>/addProduct";
	form.method = "post";
	form.submit();
}
</script>
<h2>Add Product</h2>

<form name="productForm" method="post" enctype="multipart/form-data">
     Product Name:
     <input type="text" placeholder="Enter Product Name" name="pname" id="pname" /><br>
 <!--     Product Category:
     <input type="text" placeholder="Enter Product Category" name="pcat" id="pcat" /><br> -->
         Product Price :
    
       <input type="text" placeholder="Enter Product Price" name="pprice" id="pprice" /><br>
         Product Brand:
     <input type="text" placeholder="Product Brand" name="pbrand" id="pbrand" /><br>
     
     Select Category:<br>
     <input type="radio"  name="sex" id="sex">Male<br>
     <input type="radio"  name="sex" id="sex">Female<br>
         Product Image    :
  <input type="file" placeholder="Product Image" name="file" id="file" file-model="file" /><br>
(Note:File Size Must Be Less Than 20K)

     
     <button onclick="addProduct()">Add Product</button>
     
     </form>
     
     
  <!--    <br>
      <ul>
    <li ng-repeat='(key, value) in resultData'>
       <h4> <span>RESULT: {{value}}</span></h4>
    </li>
</ul> -->