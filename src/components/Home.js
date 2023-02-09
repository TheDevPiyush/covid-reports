import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            country: "india",
            cases: "",
            deaths: "",
            deathpermillion: "",
            totalCases: "",
            recovered: "",
            progress: "0%"
        }
    }
    getValue = (val) => {
        let check = val.target.value
        this.setState({ country: check })

    }

    FetchData = async () => {
        try {
            const options = {


                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'ccbbb9265fmsh23310fd9f46a253p1c2e41jsn6a15149f6366',
                    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                }
            };

            const url = `https://covid-193.p.rapidapi.com/statistics?country=${this.state.country}`
            this.setState({ progress: "0%" })
            this.setState({ progress: "2%" })



            let data = await fetch(url, options)
            this.setState({ progress: "7%" })
            let parseData = await data.json()
            this.setState({ progress: "15%" })


            console.log("Your county : ", parseData.response[0].country)
            console.log(parseData)
            this.setState({ country: parseData.response[0].country })
            this.setState({ deaths: parseData.response[0].deaths.total })
            this.setState({ deathpermillion: parseData.response[0].deaths['1M_pop'] })
            this.setState({ progress: "70%" })
            this.setState({ cases: parseData.response[0].cases.active })
            this.setState({ totalCases: parseData.response[0].cases.total })
            this.setState({ recovered: parseData.response[0].cases.recovered })
            this.setState({ progress: "100%" })

        }
        catch {
            console.log("Some Erorrr")
            alert("It seems that, the country you are trying to search is unavailable in our database :(")
            this.setState({ progress: "0%" })
        }

    }


    async componentDidMount() {
        await this.FetchData();

    }


    render() {
        return (
            <>

                <div className="main">

                    <div className="progress " style={{ "height": "10px" }} >
                        <div className="progress-bar bg-warning" role="progressbar" style={{ "width": this.state.progress }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div className="heading px-4 py-3 fw-bold  bg-primary text-white">
                        <h1>Country : {this.state.country}</h1>
                    </div>


                    <div className="container my-3">
                        <div className="row">
                            <div className="col">
                                <form className="d-flex " onSubmit={e => { e.preventDefault(); }} role="search">
                                    <input className="form-control my-1 border border-4 text-primary fw-bold border-info" type="text" onChange={this.getValue} placeholder="Search Countries" aria-label="text" />
                                </form>
                            </div>
                            <div className="col">
                                <button className="btn btn-success fw-bold my-1" onClick={this.FetchData} type="text">Search</button>
                            </div>
                        </div>
                    </div>


                    <div className="container  my-2">
                        <div className="card border border-info my-1 border-2 ">
                            <div className="card-body bg-dark container">
                                <h5 className="card-title text-white">Total Cases</h5>
                                <p className="card-text fw-bold fs-3  text-warning">{this.state.totalCases}</p>
                            </div>
                        </div>
                        <div className="card border border-info my-1 border-2">
                            <div className="card-body bg-dark container">
                                <h5 className="card-title text-white">Active Cases</h5>
                                <p className="card-text fw-bold fs-3  text-warning">{this.state.cases}</p>
                            </div>
                        </div>
                        <div className="card border border-info my-1 border-2">
                            <div className="card-body bg-dark container">
                                <h5 className="card-title text-white">Total Deaths</h5>
                                <p className="card-text fw-bold fs-3  text-danger">{this.state.deaths}</p>
                            </div>
                        </div>
                        <div className="card border border-info my-1 border-2">
                            <div className="card-body bg-dark container">
                                <h5 className="card-title text-white">Deaths per Million</h5>
                                <p className="card-text fw-bold fs-3  text-danger">{this.state.deathpermillion}</p>
                            </div>
                        </div>
                        <div className="card border border-info my-1 border-2">
                            <div className="card-body bg-dark container">
                                <h5 className="card-title text-white">Total Recovered Cases</h5>
                                <p className="card-text fw-bold fs-3  text-success">{this.state.recovered}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
