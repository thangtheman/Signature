
$(document).ready(function() {
    //Button to pop-out form and replace variable.
    //$('#edit-1').click(function () {
    //    $('#editing-form').text("test");
    //});

    var name, role, aboutMe, email, birthday, address, phone, picture;
    //Click the button:
    $('#form-submit').submit(function(){
        fname = $('#inputFName').val();
        lname = $('#inputLName').val();
        role = $('#inputRole').val();
        email = $('#inputEmail').val();
        phone = $('#inputPhone').val();
        Ophone = $('#inputOP').val();
        address = $('#inputAddress').val();
        state = $('#inputCity').val();


        // After click submit the change
        //

        $('.oFname').html(fname);
        $('.oLname').html(lname);
        $('.oRole').html(role);
        $('.oEmail').html(email);
        $('.oFPhone').html(Ophone);
        $('.oPhone').html(phone);
        $('.oAddress').html(address);
        $('.oState').html(state);


// After clicking submit

        $('#myModal').modal('hide');


    })




});

