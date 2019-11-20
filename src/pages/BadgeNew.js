import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import NavBar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'


class BadgeNew extends React.Component {

    state = { 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        } 
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render(){
        return (
            <React.Fragment>
                <div>
                    <div className="BadgeNew__hero">
                        <img className="img-fluid" src={header} alt="logo"/>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Badge 
                                    firstName={this.state.form.firstName}
                                    lastName={this.state.form.lastName}
                                    twitter={this.state.form.twitter}
                                    jobTitle={this.state.form.jobTitle}
                                    email={this.state.form.email}
                                    avatarUrl="https://img.pixers.pics/pho_wat(s3:700/FO/11/22/26/74/2/700_FO112226742_fbba9cb8ae1dd2e216192c5f7eaf5a35.jpg,700,473,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,423,jpg)/vinilos-para-armario-paisaje-natural-de-lago-de-la-onu.jpg.jpg"
                                />
                            </div>
                            <div className="col-6">
                                <BadgeForm 
                                    onChange={this.handleChange}
                                    formValues={this.state.form}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;