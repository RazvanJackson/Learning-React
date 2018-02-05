import React from 'react'

class Movies extends React.Component{
    render(){
        return(
            <div id="Movies">
                <div className="container">
                    <h1 className="title is-4 movie-title">Movies:</h1>
                    <div className="columns">
                        <div className="column">
                            <div className="movie">
                                <h1 className="title is-5"><p>I – The Phantom Menace <br/> (1999)</p></h1>
                                <div className="content first-movie">
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="movie">
                                <h1 className="title is-5"><p>II – Attack of the Clones <br/> (2002)</p></h1>
                                <div className="content second-movie">
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="movie">
                                <h1 className="title is-5"><p>III – Revenge of the Sith <br/> (2005)</p></h1>
                                <div className="content third-movie">
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="movie">
                                <h1 className="title is-5"><p>IV – A New Hope <br/> (1977)</p></h1>
                                <div className="content fourth-movie">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="movie">
                                <h1 className="title is-5"><p>V – The Empire Strikes Back <br/> (1980)</p></h1>
                                <div className="content fifth-movie">
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="movie">
                                <h1 className="title is-5"><p>VI – Return of the Jedi <br/> (1983)</p></h1>
                                <div className="content sixth-movie">
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="movie">
                                <h1 className="title is-5"><p>VII – The Force Awakens <br/> (2015)</p></h1>
                                <div className="content seventh-movie">
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="movie">
                                <h1 className="title is-5"><p>VIII – The Last Jedi <br/> (2017)</p></h1>
                                <div className="content eighth-movie">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies