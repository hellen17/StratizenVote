//test data
var candidates = [{
    name: "John Gachihi",
    image: "../homepage/media/images/4.jpg"
},{
    name: "Hassan Kinyua",
    image: "../homepage/media/images/5.jpg"
},{
    name: "Peter Kinyua",
    image: "../homepage/media/images/12.jpg"
},{
    name: "Ephestus Mwaniki",
    image: "../homepage/media/images/1.jpg"
},{
    name: "Leonard Mbele",
    image: "../homepage/media/images/5.jpg"
},{
    name: "Ceon Lee",
    image: "../homepage/media/images/12.jpg"
},{
    name: "Milly Mrembo",
    image: "../homepage/media/images/1.jpg"
},{
    name: "Kleo Manda",
    image: "../homepage/media/images/12.jpg"
},{
    name: "Felix Kalima",
    image: "../homepage/media/images/4.jpg"
},{
    name: "Sonny Lee",
    image: "../homepage/media/images/5.jpg"
},{
    name: "Andrew Samuel",
    image: "../homepage/media/images/1.jpg"
}];

// var cand3 = [{
//     key: 20,
//     name: "John Gachihi",
//     image: "../homepage/media/images/1.jpg"
// },{
//     key: 22,
//     name: "Simon Mandela",
//     image: "../homepage/media/images/1.jpg"
// },{
//     key: 23,
//     name: "Susan Buu",
//     image: "../homepage/media/images/1.jpg"
// }];


class CandidateCard extends React.Component {
    render(){
        return (
            <a href="#j">
                <div className="card border-primary" style={{width: "18rem"}}>
                    <img className="card-img-top" src={this.props.candidateImage} alt={this.props.candidateName}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.candidateName}
                        </h5>
                    </div>
                </div>
            </a>
        )
    }
}

class CarouselRow extends React.Component {

    renderCandidateCard(candidate, index){
        return <CandidateCard key={index} candidateName={candidate.name} candidateImage={candidate.image}/>
    }

    render() {
        

        return (
            <div className={"carousel-item " + (this.props.first ? "active" : "")}>
                <div className="row">
                    <div className="card-deck">
                        {
                            this.props.candidates.map((candidate, index) => {
                                console.log("card ", index, candidate.name);
                                return this.renderCandidateCard(candidate, index);
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

class Carousel extends React.Component {
    
    render(){
        var dividedCandidates = [];

        var dividedCand = () => {
            for (let i=0; i<this.props.candidates.length; i+=4){
                let t = [], n = 0;
                for (let j=0; j<4; j++){
                    t.push(i+j+1>this.props.candidates.length ? 
                        this.props.candidates[n++] : this.props.candidates[i+j]);
                }
                dividedCandidates.push(t);
            }
            return dividedCandidates;
        }
        console.log(dividedCand());

        return (
            <div id="candidatesCarousel" className="carousel" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        dividedCandidates.map((c, i) => {
                            return <CarouselRow candidates={c} first={i==0 ? true : false}/>
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#candidatesCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#candidatesCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }

}


ReactDOM.render (
    <Carousel candidates={candidates}/>,
    document.getElementById("root")
);