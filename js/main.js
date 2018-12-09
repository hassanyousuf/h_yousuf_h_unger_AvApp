
var app = new Vue ({
    el: '#app',
    // el used to link id in html
    data: {
        message: "it is connected"
    },


    methods : {
      fetchData(e) {
        let targetURL = `./includes/connect.php`;// this will be a number (id)
        
        
        fetch(targetURL) // pass in the one or many query
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.textData(data[0]);
        })
        .catch(function(error) {
          console.error(error);
          
        });
      },
      info() {
        //debugger;
        this.info=true;
      },
      textData(data) {
        this.message = data.content
      }
    }
  });
  
  function inputData(text) {
    const {content} = message;
    document.querySelector(".contents").textContent = content;
    
    
  };

// --------------------------------------------------------------------------------------

// var app2 = new Vue({
//     el: '#app-2',
//     data: {
//       message: 'You loaded this page on' + new Date().toLocaleString()
//     }
//   });


  // var app2 = new Vue({
  //   el: '#app-2',
  //   data: {
  //     message: 'You loaded this page on' + new Date().toLocaleString()
  //   }
  // });

  // var app2 = new Vue({
  //   el: '#app-2',
  //   data: {
  //     message: 'You loaded this page on' + new Date().toLocaleString()
  //   }
  // });

  // var app2 = new Vue({
  //   el: '#app-2',
  //   data: {
  //     message: 'You loaded this page on' + new Date().toLocaleString()
  //   }
  // });

 