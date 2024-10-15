var uiControler = (function(){

    var DomStrings = {
        inputType : ".add__type",
        inputDesc : ".add__description",
        inputVal : ".add__value",
        addBtn : ".add__btn"
    };

    return{
        getIntup : function(){
            return{
                type : document.querySelector(DomStrings.inputType).value,
                description : document.querySelector(DomStrings.inputDesc).value,
                value : document.querySelector(DomStrings.inputVal).value,
            }
        },
        getDomStrings : function(){
            return DomStrings
        }
    }
})();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var financeController = (function(){
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var data = {
        allItems : {
            inc : [],
            exp : [],
        },
        total : {
            inc : 0,
            exp : 0
        }
    };
})();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var appController = (function(uiControler, financeController){
    //Add tovsh select hiih
    var ctrlAddItem = function(){
        console.log("duudagdlaa");
        //1.oruulah ugugdliig delgetsnees olj avna
        console.log(uiControler.getIntup());

        //2.olj avsan ugugdluudee financeControllert damjuulj hadgalna
        //3. olj avsan ugugdluudee web deeree tohiroh heseg deer gargana
        //4. tusuviig tootsoolno
        //5. etssiin toootsoog delgetsend gargana
    };
    var setupEventListeners = function(){
        var DOM = uiControler.getDomStrings();
        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);
        //keyPress
        document.addEventListener('keypress', function(event){
            if(event.key === "Enter"){
            ctrlAddItem();
        }
    });
    }
    
    return{
        init : function(){
            console.log("app started");
            setupEventListeners();
        }
    }
    
})(uiControler, financeController);

appController.init();