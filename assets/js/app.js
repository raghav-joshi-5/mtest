let cl=console.log;

const moviecardContainer=document.getElementById('moviecardContainer');

let moviecardhtml='';

let setreating=(rating)=>{
	if(rating >7.5){
		return 'bg-success'
	}else if(rating <= 7.5 && rating >5){
		return 'bg-warning'
	}else{
		return 'bg-danger'
	}
}


movieArray.forEach((movie)=>{
	moviecardhtml +=`
					<div class="col-4 mb-4">
						<div class="card">
							<figure class="movieCard">
								<img 
									src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" 
									alt="moviePoster" 
									title="moviePoster"/>
								<figcaption>
									<div class="movieTitle">
										<div class="row">
											<div class="col-10">
												<h3 class="m-0">
													${movie.title}
												</h3>
											</div>
											<div class="col-2 align-self-center">
												<span class="${setreating(movie.vote_average)} rating p-1">${movie.vote_average}</span>
											</div>
										</div>
									</div>
									<div class="movieOverview">
										<h3>${movie.title}</h3>
										<p class="m-0">
											<em>overview</em>
											${movie.overview}
										</p>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
					`
})

moviecardContainer.innerHTML=moviecardhtml;