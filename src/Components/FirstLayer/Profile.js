import React, { Component } from 'react'
import Profile1 from '../SecondLayer/Profile'
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import UpdateFormModal from "../SecondLayer/UpdateFormModal";

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileData: [],
            showprofile: false,
            showUpdateModal: false,
            profile: {},
            id: '',
            type: '',
        }
    }

    componentDidMount() {

        try {

            axios.get(`${process.env.REACT_APP_SERVER}/profile?email=${this.props.auth0.user.email}`).then(profileReader => {
                this.setState({
                    profileData: profileReader.data,
                    showprofile: true,
                });
            }).catch(err => {
                console.log(err);
            });


        } catch (error) {
            console.error(error);
        }

    }



    delete = (id, type) => {



        try {

            axios.delete(`${process.env.REACT_APP_SERVER}/delete/${id}?email=${this.props.auth0.user.email}&type=${type}`).then(deletData => {
                console.log("datadatatadasdsadasedasdasdas", deletData.data);
                this.setState({
                    profileData: deletData.data,

                });
            }).catch(err => {
                console.log(err);
            });
        } catch (error) {
            console.error(error);
        }

    }

    updateModel = async (id, type) => {

        console.log('asdasdfasfgasfgasfasf', this.state.profileData);
        if (type === 'comic') {
            await this.setState({
                showUpdateModal: true,
                id: id,
                type: type,
                profile: this.state.profileData.comic.find(element => element._id === id),
            })
        } else if (type === 'character') {
            await this.setState({
                showUpdateModal: true,
                id: id,
                type: type,
                profile: this.state.profileData.characters.find(element => element._id === id),
            })
        } else if (type === 'movie') {
            await this.setState({
                showUpdateModal: true,
                id: id,
                type: type,
                profile: this.state.profileData.movies.find(element => element._id === id),
            })
        }

        console.log("saffgaslkjghbnasljkgnzxlknvzxl;knvzxln", this.state.profile);
    }

    update = (event) => {
        event.preventDefault();
        console.log("fassAFASFASF;knvzxln", event);
        const updateFormData = {
            type: this.state.type,
            email: this.props.auth0.user.email,
            name: event.target.name.value,
            img: event.target.img.value,
        }

        try {

            axios
                .put(`${process.env.REACT_APP_SERVER}/put/${this.state.id}`, updateFormData)
                .then(updateData => {

                    this.setState({
                        profileData: updateData.data
                    })
                }).catch(err => {
                    console.log(err);
                });

        } catch (error) {
            console.error(error);
        }

    }

    handleModalClosing = () => {
        this.setState({
            showUpdateModal: false,
        })
    }

    render() {
        return (
            <div id="navbackground">
                {this.state.showprofile && <Profile1 profileData={this.state.profileData} delete={this.delete} updateModel={this.updateModel} />}

                <UpdateFormModal update={this.update} showModal={this.state.showUpdateModal} closing={this.handleModalClosing} profile={this.state.profile} />
            </div>
        )
    }
}

export default withAuth0(Profile)
