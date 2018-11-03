(function($) {
  $.fn.apps = function(order,fn) {
    const ap = "apps-";
    if (order == "load") {
      $(this).each(function() {
        if ($(this).is(":radio")) {
          if(localStorage.getItem(ap+$(this).attr("name"))){
            if (localStorage.getItem(ap+$(this).attr("name")) == this.id) {
              this.checked = true;
            }else{
              this.checked = false
            }
          }
          $(this).change(function() {
            localStorage.setItem(ap+$(this).attr("name"), this.id);
          });
        }else if($(this).is(":checkbox")){
          if(localStorage.getItem(sv+this.id)){
            this.checked = (localStorage.getItem(ap+this.id) == "1" ? true : false);
          }
          $(this).change(function() {
            localStorage.setItem(ap+this.id, (this.checked ? "1" : "0"));
          });
        }else if($(this).is("input") || $(this).is("textarea")) {
          if(localStorage.getItem(ap+this.id)){
            this.value = localStorage.getItem(sv+this.id);
          }
          $(this).keyup(function() {
            localStorage.setItem(ap+this.id, this.value);
          });
        }else if($(this).is("select")) {
          if ($(this).is("[multiple]")) {
            if(localStorage.getItem(ap+this.id)){
              $(this).val(localStorage.getItem(sv+this.id).split(","));
            }
            $(this).change(function() {
              localStorage.setItem(ap+this.id, $(this).val());
            });
          }else{
            if(localStorage.getItem(ap+this.id)){
              $(this).val(localStorage.getItem("savy-"+this.id));
            }
            $(this).change(function() {
              localStorage.setItem(ap+this.id, $(this).val());
            });
          }
        }
      });
      if ($.isFunction(fn)){fn();}
    }else if (order == "destroy") {
      $(this).each(function() {
        if(localStorage.getItem(ap+this.id)){
          localStorage.removeItem(ap+this.id)
        }
      });
      if ($.isFunction(fn)){fn();}
    }else{
      console.error("apps action not defined please use $('.classname').apps('load') to trigger apps to save all inputs")
    }
  };
})(jQuery);
