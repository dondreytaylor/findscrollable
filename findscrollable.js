(function( $ )
{
	
	if ($.fn)
	{
		$.fn.findScrollable = function() {
	      
	        var hasHorizontalScrollbar;
	        var hasVerticalScrollbar;
	        var scrollableElements  = []; 
	        var defer               = $.Deferred(); 
	        var elements; 
	        var callback            = typeof arguments === 'object' && typeof arguments[0] === 'function' ? arguments[0] : arguments[1];
	        var elementsArray       = typeof arguments === 'object' && typeof arguments[0] === 'object' ? arguments[0] : undefined;
	        
	        try
	        {
	           if (this[0] === window)
	           {
	              scrollableElements.push(this);
	           }
	           
	            elements = typeof elementsArray === 'object' && elementsArray.join ? ( this[0] === window ? $(elementsArray.join(',')) : this.find(elementsArray.join(','))) : ( this[0] === window ? $('*') : this.find('*'));
	            

	            elements.each(function(index)
	            {
	                
	                hasHorizontalScrollbar = $(this).get(0).scrollWidth>$(this).get(0).clientWidth;
	                hasVerticalScrollbar = $(this).get(0).scrollHeight>$(this).get(0).clientHeight; 
	                
	               if (hasHorizontalScrollbar || hasVerticalScrollbar)
	                {
	                    scrollableElements.push($(this));
	                }

	                if (index === elements.length - 1)
	                {
	                    defer.resolve();
	                }
	            });  
	        }
	        catch(e)
	        {
	            defer.resolve();
	        }

	        defer.promise().done(function()
	        {
	            if (typeof callback === 'function')
	            {
	                callback(scrollableElements);
	             }
	        });
	    };
	}

})( jQuery );