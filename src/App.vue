<script>

export default {
  name: 'app',
  data () {
    return {
      header: 'Photo diary',
      subhead: 'Welcome to our photo diary, here you can find pictures from our adventures',
      info: '',
    }
  }
}


</script>

<template>
  <div id="app">
    <div class="jumbotron">
      <h1>{{header}}</h1>      
      <p>{{subhead}}</p>
    </div>
    <div class="container">
      <div id="photos"></div>
    </div>
  </div>
</template>

<style lang="scss">

img:hover, button:hover, input:hover {
  cursor:pointer;
}
.hidden {
  display:none;
  margin:5px 0 5px 0;
}

figcaption {
  line-height:2em;
}

.editbtn {
  width: 15px;
  height: 15px;
  background:none;
  border:none;
  background-image: url(https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Edit-512.png);
  background-repeat: no-repeat;
  background-size: 15px 15px;
  margin:0 0 5px 0;
  padding:0;
  position:relative;
  top:0;
  left:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/*Gallery*/
        #photos {
            /* Prevent vertical gaps */
            line-height: 0;
            background-color:#E9ECEF;
            -webkit-column-count: 4;
            -webkit-column-gap:   0px;
            -moz-column-count:    4;
            -moz-column-gap:      0px;
            column-count:         4;
            column-gap:           0px;
            padding:25px;
            margin-top:100px;
            
         }
         
         #photos  {
           /* Just in case there are inline attributes */
           width: 100% !important;
           height: auto !important;
           border:5px solid #E9ECEF;
         }

         #photos figure img {
           width: 100% !important;
           height: auto !important;
         }
         
         @media (max-width: 1200px) {
           #photos {
           -moz-column-count:    4;
           -webkit-column-count: 4;
           column-count:         4;
           }
         }
         @media (max-width: 1000px) {
           #photos {
           -moz-column-count:    3;
           -webkit-column-count: 3;
           column-count:         3;
           }
         }
         @media (max-width: 800px) {
           #photos {
           -moz-column-count:    2;
           -webkit-column-count: 2;
           column-count:         2;
           }
         }
         @media (max-width: 400px) {
           #photos {
           -moz-column-count:    1;
           -webkit-column-count: 1;
           column-count:         1;
           }
         }
         body { 
          background: url(http://aotsuki.me/collections/web-page-background-color-cool-html-printable-for.jpg) no-repeat center center fixed; 
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }
         .container {
          }
         figure {
          text-align: left;
          font-style: italic;
          font-size: smaller;
          text-indent: 0;
          border: thin silver solid;
          padding: 0.5em;
          margin: 1.5em;
          overflow:auto;
          height:100%;
          background:#404040;
          color:white;
        }
        figcaption {
          margin-top:0.5em;
          padding:0.3em;
          overflow:auto;
        }
</style>
