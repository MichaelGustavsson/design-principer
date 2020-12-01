//////////////////////////////////
// THE MEDIATOR PATTERN...
//////////////////////////////////

//Create the mediator...
class Mediator {
  constructor() {
    this.colleagues = [];
  }

  registerColleagues(colleague){
    if(this.isValidColleague(colleague)){
      this.colleagues.push(colleague);
      return this;
    }
  }

  isValidColleague(colleague){
    return(
      typeof colleague.canHandle === "function" 
        && typeof colleague.handle === "function"
    );
  }

  send(message){
    for(let i = 0; i < this.colleagues.length; i++){
      let colleague = this.colleagues[i];
      if(colleague.canHandle(message)){
        return colleague.handle(message);
      }
    }
  }
}

class Colleague {
  canHandle(){}
  handle(){}
}

class InspectionColleague extends Colleague {
  canHandle(message){
    const {inspection} = message;
    return inspection === undefined ? false : true;
  }
  handle(message){
    console.log('Sent to Inspection: ' + message.message);
  }
}

class CustomerConfirmationColleague extends Colleague {
  canHandle(message){
    const {email} = message;
    return email === undefined ? false : true;
  }

  handle(message){
    console.log('Customer confirmation: ' + message.message);
  }
}

function init(){
  //Should be a singleton
  const mediator = new Mediator();
  const inspection = new InspectionColleague();
  const customer = new CustomerConfirmationColleague();

  mediator.registerColleagues(inspection);
  mediator.registerColleagues(customer);

  mediator.send({inspection: true, message: 'To inspection'});
  mediator.send({email: 'test@gmail.com', message: 'We have received Your vehicle for valuation.'});
}

init();
