var dataconfirm = new Vue({
  el: '#Confirm',
  data: {
    familyName: '',
    name: '',
    promotion:'',
    email:'',
    event:'',
    myArray: [],
  },
   methods: {

     confirm: function() {
      /*On crée nos variables*/
      var client = {FamilyNm:this.familyName, Nm:this.name, promo:this.promotion, mail:this.email, ev:this.event};
      var txt = '';
        /*On crée le texte d'alerte : si plusieurs conditions ne sont pas validées
        plusieurs phrases apparaissent sur le même message d'alerte*/
        if (client.FamilyNm===''){
          txt=txt+'You forget to write your Family Name \n';}
        if (client.Nm===''){
          txt=txt+'You forget to put your name \n';}
        if (client.promo==''){
          txt=txt+'You forget to select your promotion \n';}
        if (client.ev==''){
          txt=txt+'You forget to select an event \n';}
        if (client.mail===''){
          txt=txt+'You forget to indicate your email adress\n';}
        if (client.FamilyNm!=''&&client.Nm!=''&&client.mail!=''&&client.ev!=''&&client.promo!='') {

            txt='Valid Inscription : Good luck';
            this.myArray.push(client);

        }
        alert(txt);
        this.familyName='';this.name='';this.promotion='';this.email='';this.event='';
        document.getElementById("familyname").value =document.getElementById("name").value=document.getElementById("email").value='';
        document.getElementById("event").value=document.getElementById("promotion").value='';

    },

    clear : function(){
      //console.log(this.myArray.FamilyNm[0]);
      var message = prompt("Research a name", "Put your name");
      //Essayer de comparer la variable "message" à celle contenant le nom lors du login
      if(message!=null){
        dataconfirm.myArray = dataconfirm.myArray.filter(function (person) {
          if(person.Nm!=message){
            return person.Nm.match(person.Nm)
          }
        })

      }
    }
  }
})
