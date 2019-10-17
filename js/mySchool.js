var mouse_is_inside = false;

$(function () {
    //slide left
    $( '.icon-spread' ).on( 'click', function() {
    	$( this )
            .closest( '.main-area' ).toggleClass( 'is-active' );
    });

    //menu profile
    $( '.icon-profile' ).on( 'click', function() {
    	$( this )
            .parent().toggleClass( 'is-active' )
            .siblings().removeClass( 'is-active' );
        mouse_is_inside = true;
    });
    //menu profile - check mouse in/outside
    $( '.menuMe-pop' ).hover(function(){ 
        mouse_is_inside = true; 
    }, function(){ 
        mouse_is_inside = false; 
    });
    $( 'body' ).mouseup(function(){ 
        if(! mouse_is_inside) {
            $( '.icon-profile' ).parent().removeClass( 'is-active' );
        }
    });
    
    //menu sitemap
    $( '.icon-menu' ).on( 'click', function() {
    	$( this )
            .parent().toggleClass( 'is-active' )
            .siblings().removeClass( 'is-active' );
    });
    $( '.icon-close' ).on( 'click', function() {
    	$( this )
            .closest( '.menuAll' ).removeClass( 'is-active' );
    });

    //advance search
    $( '.btn-advSearch' ).on( 'click', function() {
        $( '.searchLv-2' ).removeClass( 'is-disable' );
        $( '.searchLv-1' ).addClass( 'is-disable' );
        $( '.searchLv-1 input, .searchLv-1 select' ).prop('disabled', true);
    });
    $( '#searchClose' ).on( 'click', function() {
        $( '.searchLv-2' ).addClass( 'is-disable' );
        $( '.searchLv-1' ).removeClass( 'is-disable' );
        $( '.searchLv-1 input, .searchLv-1 select' ).prop('disabled', false);
    });

    //check all
    $( 'input[name=checkAll]' ).on( 'click', function() {
        var checkParent = $( this ).parents( 'table' );
        checkParent.find( 'input[type=checkbox]' ).prop('checked', this.checked);
    });

    //radio Yes/no
    $( '.select-yn' ).on( 'click', function() {
        var getData = $( this ).data('radio');
        var getName = $( this ).attr('name');

        if( getData.length == 0 ) {
            return;
        }

        if ( getData == 'yes' ) {
            $( '.radioInput[data-radio="'+ getName + '"]' ).prop('disabled', false);
        } else {
            $( '.radioInput[data-radio="'+ getName + '"]' ).prop('disabled', true);
        }
    });

    //select show/hide
    $( '.select-option' ).on( 'change', function() {
        var getName = $( this ).data('name');
        var getSelect = $( this ).find(":selected, :checked").data('select');

        if( getSelect.length == 0 ) {
            return;
        }

        $( '.select-field[data-name="'+ getName + '"][data-select="'+ getSelect + '"]' )
            .addClass( 'is-active' )
            .siblings().removeClass( 'is-active' );      
    });

    //dropdown
    $( '.u-dropdown-top' ).on( 'click', function() {
        $( this ).parent().toggleClass( 'is-active' );
    });
    $( '.u-dropdown-item' ).on( 'click', function() {
        var getSelected = $.trim( $( this ).html() );
        var getDropdownTop = $( this ).parents( '.u-dropdown-list' ).siblings();
        var getDropdown = $( this ).parents( '.u-dropdown' );

        getDropdownTop.html( getSelected );
        getDropdown.toggleClass( 'is-active' );
    });
});