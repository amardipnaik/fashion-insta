<!DOCTYPE html>
<html>
<body>


  <h1>Fashion and Fashion</h1>

<table>
  About Us    :

 <tr ng-repeat="x in webDetails">
 <td>
  {{x.about_Us}}
  </td>
 </tr>
 </table>
 <br>
  Update About Us:
 <!--  <input type="" placeholder="Notification Message" name="nmeg" id="nmsg" /><br> -->
<textarea name="nmeg" id="nmsg">Enter Contain...</textarea><br>

     
     <button ng-click="updateWebDetailsAbout()">Update About Us Contain</button>
</body>
</html>
