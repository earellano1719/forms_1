import React from 'react';
const data = require ('./country.json')

class MarsForm extends React.Component{
    constructor(){
        super();
        this.state = {
            date: "2000-01-01",
            countries: data, 
            firstname: "",
            lastname: "",
            reason: "",
            country: "",
            diet: "",
            submitInfo: false,
            message: false,
            breathe: "",
            marital: "",
            questionOne: "",
            questionTwo: "",
            familyHistory: {
                            Cancer: false,
                            Diabetes: false,
                            HeartDisease: false,
                            values: ""
                            }
        }
        this.baseState = this.state
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    resetForm() {
        this.setState(this.baseState);
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
                                    });
    }

    submitHandler = () => {
        this.setState({
            submitInfo: true
        })
    }

    handleSubmit = () => {
        this.setState({
            submitInfo: false,
            message: false
        })
    }

    handleChecked = (event) => {

        let newfamilyHistory = {...this.state.familyHistory}
        newfamilyHistory[event.target.name] = !newfamilyHistory[event.target.name]


        this.setState({ 
            familyHistory: newfamilyHistory       
        });
      }


    
    render(){
    
   
        const { countries, firstname, lastname, reason, country, diet, message, submitInfo, date, breathe, familyHistory} = this.state;

        let options = countries.map(country => { 
            return <option>{country.name}</option>
            
         });


        return(
            <>


                <h1>Mission to Mars Registration Form</h1>
                <form onChange={this.handleChange}>
                    <input type='text' name='firstname' value={firstname} placeholder='first name' required/><br />
                    <input type='text' name='lastname' value={lastname} placeholder='last name' required/>


                    <input type='date' id='start' name='date' 
                    value={date} 
                    min='1900-01-01' max="2019-01-01" required/>
                    <br />
                    <select name='country' value={country} onChange={this.handleChange}>
                    <option value="" disabled>-choose a country-</option>
                    {options}
                    </select>
                    <br />
                    <select name='diet' value={diet} required>
                        <option disabled value=''>-choose a diet-</option>
                        <option>omnivore</option>
                        <option>vegetarian</option>
                        <option>vegan</option>
                    </select>
                    <br />
                    <label htmlFor='reason'>Why do you want to be a Mars explorer?</label>
                    <br />
                    <input id='why' placeholder='type answer here' name='reason' value={reason}/>
                    <br />

                    <p htmlFor='breathe'>Can you breathe underwater longer than 1 minute?</p>
                    <input 
                    name='breathe' 
                    id='breathe' 
                    type='radio' 
                    value='yes' />
                    <label htmlFor='breathe'>Yes</label>
                    <br />

                    <input 
                    name='breathe' 
                    id='breathe' 
                    type='radio' 
                    value='no'/>
                    <label htmlFor='breathe'>No</label>
                    <br />
                    <input name='breathe' id='breathe' type='radio' value="I don't know" />
                    <label htmlFor='breathe'>I don't know</label>

                    <p htmlFor='marital'>What is your marital status?</p>

                    <input name='marital' id='marital' type='radio' value='Married'></input>
                    <label htmlFor='marital'>Married</label>
                    <br />
                    <input name='marital' id='marital' type='radio' value='Unmarried'></input>
                    <label htmlFor='marital'>Unmarried</label>

                    <p htmlFor='questionOne'>When you are in a stressful or difficult situation, how do you most frequently react?</p>

                    <input 
                    name='questionOne' 
                    type='radio' 
                    value='Determination: I continue to confront the situation.'/>
                    <label htmlFor='questionOne'>Determination: I continue to confront the situation.</label>
                    <br />

                    <input
                    name='questionOne'
                    type='radio'
                    value='Defeat: I stop confronting the situation.'/>
                    <label htmlFor='questionOne'>Defeat: I stop confronting the situation.</label>
                    <br />

                    <input
                    name='questionOne'
                    type='radio'
                    value='Anger: I become upset at the situation.' />
                    <label htmlFor='questionOne'>Anger: I become upset at the situation.</label>
                    <br />

                    <input
                    name='questionOne'
                    type='radio'
                    value='Resourcefulness: I seek help to confront the situation.' />
                    <label htmlFor='questionOne'>Resourcefulness: I seek help to confront the situation.</label>

                    <p htmlFor='questionTwo'>Are you claustrophobic?</p>

                    <input
                    name='questionTwo'
                    type='radio' 
                    value='Yes' />
                    <label htmlFor='questionTwo'>Yes</label>
                    <br />

                    <input
                    name='questionTwo'
                    type='radio'
                    value='No' />
                    <label htmlFor='questionTwo'>No</label>
                    <br />

                    <input
                    name='questionTwo'
                    type='radio'
                    value="I don't know" />
                    <label htmlFor='questionTwo'>I don't know</label>
                    <br />
                    <br />


                    <p htmlFor='familyHistory'>Does your family have a history of (check all that apply):</p>

                    <input
                    name='Cancer'
                    type='checkbox'
                    onChange={this.handleChecked}
                    checked={familyHistory.Cancer}
                    value='Cancer'
                    />


                    <label htmlFor='familyHistory'>Cancer</label>
                    <br />


                    <input
                    name='Diabetes'
                    type='checkbox'
                    onChange={this.handleChecked}
                    checked={familyHistory.Diabetes}
                    />


                    <label htmlFor='familyHistory'>Diabetes</label>
                    <br />


                    <input
                    name='HeartDisease'
                    type='checkbox'
                    onChange={this.handleChecked}
                    checked={familyHistory.HeartDisease}
                    />


                    <label htmlFor='HeartDisease'>Heart Disease</label>
                    <br />


                    
                    <button type="button" onClick={this.submitHandler}>Submit
                    </button>

                </form>


                <div>
                
                {submitInfo === false ?
                    <div />
                 :<div class="response">
                    <p>
                        <strong>Are you sure the information is correct?</strong>
                    </p>
                    <p>Name: {firstname} {lastname}</p>
                    <p>Date of birth:{date}</p>
                    <p>Country of Origin: {country}</p>
                    <p>Diet Preference: {diet}</p>
                    <p>Your Reasons for Going: {reason}</p>
                    {(event) => familyHistory[event.target.name] === true ?
                    <p>{{familyHistory[event.target.name]}}</p>
                    : <p>goodbye</p>
                    }
                    <br />
                    <button
                        onClick={event => {
                            this.handleSubmit();
                            this.resetForm();
                        }}>
                        Confirm
                    </button>
                    </div>
                }

                {message === true ? (
                    <p>Thanks for your submission!</p>
                ) : (
                    ""
                )}

                </div>

            </>
        )
    }
}

export default MarsForm;