'use strict';

import Projects from './projects.js';
var about = document.getElementById('about'),
projects = document.getElementById('projects'),
body = document.querySelector('body'),
imageDiv = document.getElementById('largeImageDiv'),
contact = document.getElementById('contact'),
abt = document.getElementById('abt'),
prj = document.getElementById('prj'),
con = document.getElementById('con'),
aboutDiv = document.getElementById('aboutDiv'),
projectDiv = document.getElementById('projectDiv'),
contactDiv = document.getElementById('contactDiv'),
nav = document.getElementById('nav'),
list = document.getElementById('projectList'),
home = document.getElementById('home-header'),
footer = document.getElementById('footer'),
panels = document.getElementById('heading'),
aProject = '',
navOn = false,
openImages = [],
openTech = [],
clicked = false,
projectOpen = false,
projectsShown = false,
activeDiv = '',
tooltip = document.getElementById('tooltip'),
tooltipText = document.getElementById('tooltipText');


abt.onmouseover = ()=>{
	about.classList.remove('hidden');
	about.classList.add('show');
}

abt.onmouseout = ()=>{
	if(!clicked){
		about.classList.remove('show');
	}
}

prj.onmouseenter = ()=>{
	projects.classList.remove('hidden');
	projects.classList.add('show');
}

prj.onmouseleave = ()=>{
	if(!clicked){
		projects.classList.remove('show');
	}
}

con.onmouseover = ()=>{
	contact.classList.remove('hidden');
	contact.classList.add('show');
}

con.onmouseout = ()=>{
	if(!clicked){
		contact.classList.remove('show');
	}
}

imageDiv.onclick = ()=>{
	imageDiv.classList.remove('showImage');
	imageDiv.classList.add('hideImage');
}

const largeImage = (img)=>{
	let image = document.getElementById('imageDiv');
	imageDiv.classList.remove('hideImage');
	imageDiv.classList.add('showImage');
	image.src = img;
}

const showProject = (project) =>{
	if(project.images){
		if(openImages.indexOf(project.title) > -1){
			return
		}else{
			openImages.push(project.title)
			project.images.map((image)=>{
				let newImage = document.createElement('img');
				let index = project.images.indexOf(image);
				newImage.setAttribute('src', image);
				newImage.setAttribute('alt', `${project.title} - image`)
				newImage.setAttribute('id', `${project.title}-${index}`);
				newImage.onclick = ()=>{
					largeImage(image)
				}
				document.getElementById(`images-${project.title}`).appendChild(newImage);
			});
		}
	}
	if(project.tech){
		if(openTech.indexOf(project.title) > -1){
			return
		}else{
			openTech.push(project.title)
			project.tech.map((tech)=>{
				let newTech = document.createElement('div');
				if(tech.text){
					newTech.innerHTML = `${tech.text}<p>${tech.name}</p>`;
					newTech.setAttribute('class', 'techList')
				}else{
					newTech.innerHTML = `<div class='techList'><i class="techIcon homeIcon prjFont ${tech.id}" aria-hidden="true"></i>${tech.name}</div>`
				}
				document.getElementById(`techList-${project.title}`).appendChild(newTech)
			})
		}
	}
}

const showProjects = ()=>{
	projectsShown = true;
	Projects.map((project)=>{
		let item = document.createElement('li'),
		newPanel = document.createElement('div'),
		index = Projects.indexOf(project);
		let previous = '', next = '', description= '', link= '', code = '', codeLink = '', svg = '';
		if(index !== 0){
			previous = `<p class='previous'><a href=#/projects/${Projects[index - 1].title}><i class='fa fa-chevron-left projectNav' aria-hidden='true'></i></a></p>`;
		}
		if(index !== Projects.length - 1){
			next = `<p class='next'><a href=#/projects/${Projects[index + 1].title}><i class='fa fa-chevron-right projectNav' aria-hidden="true"></i></a></p>`;
		}
		if(project.description){
			description = project.description
		}
		if(project.link){
			link = `<p class='dLink'><a href=${project.link} target="_blank"><button class='codeBtn'>View Website</button></a></p>`;
		}
		if(project.link && project.id === 'api-projects'){
			link = `<div class='col-left api-left'><p><a target="_blank" href=${project.link[0].link}>${project.link[0].name}</a></p><p><a href=${project.link[1].link}>${project.link[1].name}</a></p><p><a href=${project.link[2].link}>${project.link[2].name}</a></p><p><a href=${project.link[3].link}>${project.link[3].name}</a></p></div>
					<div class='col-right api-right'><p><a target="_blank" href=${project.code[0]}>Code</a></p><p><a href=${project.code[1]}>Code</a></p><p><a href=${project.code[2]}>Code</a></p><p><a href=${project.code[3]}>Code</a></p></div>`
		}
		if(project.code && project.id !== 'api-projects'){
			code = `<p class='cLink'><a href=${project.code} target="_blank"><button class='codeBtn'>View Code</button></a></p>`;
		}
		if(project.codepen){
			code = `<p class='pLink'><a href=${project.codepen} target="_blank"><button class='codeBtn'>View Code & Demo</button></a></p>`
		}
		if(project.id !== 'api-projects'){
			codeLink = `<div class='codeLink'>
							${code}
							${link}
						</div>`
		}
		if(project.id === 'api-projects'){
			codeLink = `<div class='api-CodeLink container'>
							${link}
						</div>`
		}
		if(project.svg){
			svg = project.svg;
			
		}else{
			svg = `<div class='project-svg'></div>`
		}
		item.setAttribute('id', project.id);
		item.setAttribute('class', 'project');
		list.appendChild(item);
		document.getElementById(project.id).innerHTML = `<a href=#/projects/${project.title}>
															<div class='projectDiv' id=${project.listId}>
																<div class='overlay'>
																	<p class='text type'>${project.type}</p>
																	<p class='text title'>${project.name}</p>
																	<p class='text listDescription'>${project.listDescription}</p>
																	<p class='text listTech'>${project.listTech}</p>
																	<p class='text read'>See More</p>
																	<div class='arrows'><i class="fa fa-angle-right" aria-hidden="true"></i><i class="fa fa-angle-right" aria-hidden="true"></i><i class="fa fa-angle-right" aria-hidden="true"></i></div>
																</div>
															</div>
														</a>`
		newPanel.setAttribute('id', project.title);
		newPanel.setAttribute('class', 'projectPanel displayHide');
		panels.appendChild(newPanel);
		let projectTitle = document.getElementById(project.title);
		projectTitle.innerHTML = `<div class='titleBar'>
									<div class='titleContainer'>
										<div class='prjBtns'>
											${next}
											${previous}
										</div>
										<p class='prjTitle'>${project.name}</p>
									</div>
								</div>
								<div class='scrollDiv'>
									<div class='projectIcon'>
										${svg}
									</div>
									<div class='description'>
										<p>${description}</p>
									</div>
									${codeLink}
									<div class='toolbox'>
										<hr>
										<h3 class='techTitle'>Built With</h3>
										<div class='button container projectTech' id='techList-${project.title}'>
										</div>
										<hr>
									</div>
									<div class='project-images' id="images-${project.title}"></div>
							  		<a href=#/projects><button class='codeBtn'>View All Projects</button></a>
							  	 <div>`;
	});
}
const showTooltip = (text, type)=>{
    tooltipText.innerHTML = text;
    tooltip.classList.add('show');
    tooltip.classList.remove('hide');
    if(type === 'Error'){
        tooltip.classList.add('error');
    }else{
        tooltip.classList.add('success')
    }
    setTimeout(()=>{
        tooltip.classList.add('hide');
        tooltip.classList.remove('show');
        tooltip.classList.remove('error');
        tooltip.classList.remove('success');
    }, 3000)
}

const bodyScroll = ()=>{
	if(clicked){
		body.scrollTop = 0;
		body.classList.add('no-scroll');
	}else{
		body.classList.remove('no-scroll');
		body.scrollTop = 0;
	};
};

let startHash = window.location.hash.split('/');

let findProject = (title)=>{
	let arr = [];
	for(let i in Projects){
		if(Projects[i].title === title){
			arr.push(i)
		}
	}
	return arr
}

const changeActive = (active)=>{
	if(active === 'about'){
		aboutDiv.classList.remove('showDiv');
		about.classList.remove('show');
		setTimeout(()=>{
			if(activeDiv !== 'about'){
				aboutDiv.classList.remove('displayShow');
				aboutDiv.classList.add('displayHide');
			}
		}, 900)
	}else if(active === 'projects'){
		projectDiv.classList.remove('showDiv');
		projects.classList.remove('show');
		setTimeout(()=>{
			if(activeDiv !== 'projects'){
				projectDiv.classList.remove('displayShow');
				projectDiv.classList.add('displayHide');
			}
		}, 900)
	}else if (active === 'contact'){
		contactDiv.classList.remove('showDiv');
		contact.classList.remove('show');
		setTimeout(()=>{
			if(activeDiv !== 'contact'){
				contactDiv.classList.remove('displayShow');
				contactDiv.classList.add('displayHide');
			}
		}, 900)
	}
}

const startPage =()=>{
	if(!startHash[1] || startHash[1] === ''){
		console.log(startHash)
	}else{
		switch(startHash[1]){
			case 'about':
				activeDiv = 'about';
				setTimeout(()=>{
					clicked = true;
					bodyScroll();
					navShow();
					aboutDiv.classList.add('displayShow');
					aboutDiv.classList.remove('displayHide');
					setTimeout(()=>{
						aboutDiv.classList.add('showDiv');
						about.classList.remove('hidden');
						about.classList.add('show');
					}, 20);
				}, 500)
				break;
			case 'projects':
				if(!projectsShown){
					showProjects();
				}
				activeDiv = 'projects';
				setTimeout(()=>{
					clicked = true;
					bodyScroll();
					navShow();
					projectDiv.classList.add('displayShow');
					projectDiv.classList.remove('displayHide');
					setTimeout(()=>{
						projectDiv.classList.add('showDiv');
						projects.classList.remove('hidden');
						projects.classList.add('show');
					}, 20);
				}, 500)
				if(startHash[2] && !projectOpen){
					let num = findProject(startHash[2]);
					if (num[0] === undefined){
						window.location.hash = '/projects';
						showTooltip('Page does not exist.', 'Error');
					}else{
						let nNum = num[0];
						showProject(Projects[nNum]);
						aProject = document.getElementById(startHash[2]);
						aProject.classList.add('displayShow');
						aProject.classList.remove('displayHide');
						setTimeout(()=>{
							projectOpen = true;
							aProject.classList.add('showDiv');
						}, 750)
					}
				}
				break;
			case 'contact':
				activeDiv = 'contact';
				setTimeout(()=>{
					clicked = true;
					bodyScroll();
					navShow();
					contactDiv.classList.add('displayShow');
					contactDiv.classList.remove('displayHide');
					setTimeout(()=>{
						contactDiv.classList.add('showDiv');
						contact.classList.remove('hidden');
						contact.classList.add('show');
					}, 20);
				}, 500)
				break;
			default:
				window.location.hash = '';
				showTooltip('Page does not exist.', 'Error');
				break;
		}
	}
}


const newActive = (active)=>{
	switch(active){
		case 'about':
			aboutDiv.classList.remove('showDiv');
			about.classList.add('hidden');
			about.classList.remove('show');
			setTimeout(()=>{
				if(activeDiv !== 'about'){
					aboutDiv.classList.remove('displayShow');
					aboutDiv.classList.add('displayHide');
				}
			}, 600)
			break;
		case 'projects':
			if(!projectsShown){
				showProjects();
			}
			projectDiv.classList.remove('showDiv');
			projects.classList.add('hidden');
			projects.classList.remove('show');
			setTimeout(()=>{
				if(activeDiv !== 'projects'){
					projectDiv.classList.remove('displayShow');
					projectDiv.classList.add('displayHide');
				}
			}, 600)
			break;
		case 'contact':
			contactDiv.classList.remove('showDiv');
			contact.classList.add('hidden');
			contact.classList.remove('show');
			setTimeout(()=>{
				if(activeDiv !== 'contact'){
					contactDiv.classList.remove('displayShow');
					contactDiv.classList.add('displayHide');
				}
			}, 600)
			break;
		default:
			aProject.classList.remove('showDiv');
			setTimeout(()=>{
				aProject.classList.add('displayHide');
				aProject.classList.remove('displayShow');
				aProject = '';
			}, 600)
			projectOpen = false;
			break;
	}
}
const navShow = ()=>{
	if(!navOn && clicked){
		home.classList.remove('hideNav')
		footer.classList.add('fNav')
		nav.classList.remove('hidden')
		nav.classList.add('show')
		navOn = true;
	}else if(navOn && clicked){
		return
	}else if(navOn && !clicked){
		nav.classList.remove('show');
		navOn = false;
	}
}
const hashChange = ()=>{
	let hash = window.location.hash.split('/');
	if(!hash[1] || hash[1] === '' || hash[1] === '/'){
		if(aProject !== '' && projectOpen){
			newActive(aProject)
		}
		clicked = false;
		bodyScroll()
		navShow()
		changeActive(activeDiv);
		activeDiv = '';
	}else{
		switch(hash[1]){
			case 'about':
				if(activeDiv !== ''){
					newActive(activeDiv);
				};
				if(aProject !== '' && projectOpen){
					newActive(aProject)
				}
				clicked = true;
				bodyScroll()
				navShow()
				activeDiv = 'about';
				aboutDiv.classList.add('displayShow');
				aboutDiv.classList.remove('displayHide');
				setTimeout(()=>{
					aboutDiv.classList.add('showDiv');
					about.classList.remove('hidden');
					about.classList.add('show');
				}, 50)
				break;
			case 'projects':
				if(!projectsShown){
					showProjects();
				}
				if(activeDiv !== '' && activeDiv !== 'projects'){
					newActive(activeDiv);
				};
				if(hash[2] && !projectOpen){
					let num = findProject(hash[2]);
					if(num[0] === undefined){
						window.location.hash = '/projects';
						showTooltip('Page does not exist.', 'Error');
					}else{
						aProject = document.getElementById(hash[2]);
						projectOpen = true;
						aProject.classList.add('displayShow');
						aProject.classList.remove('displayHide');
						setTimeout(()=>{
							aProject.classList.add('showDiv');
						}, 50)
						showProject(Projects[num]);
					}
				}else if(aProject !== '' && projectOpen && !hash[2]){
					newActive(aProject)
				}else if(hash[2] && projectOpen && hash[2] !== aProject){
					let num = findProject(hash[2]);
					if(num[0] === undefined){
						window.location.hash = '/projects';
						showTooltip('Page does not exist.', 'Error');
					}else{
						let arr = [];
						arr.push(aProject);
						aProject.classList.remove('showDiv');
						setTimeout(()=>{
							arr[0].classList.remove('displayShow');
							arr[0].classList.add('displayHide');
						}, 600)
						aProject = document.getElementById(hash[2]);
						showProject(Projects[num]);
						aProject.classList.add('displayShow');
						aProject.classList.remove('displayHide');
						setTimeout(()=>{
							aProject.classList.add('showDiv');
						}, 50);
					}
				}
				clicked = true;
				bodyScroll()
				navShow()
				activeDiv = 'projects'
				projectDiv.classList.add('displayShow');
				projectDiv.classList.remove('displayHide');
				setTimeout(()=>{
					projectDiv.classList.add('showDiv');
					projects.classList.remove('hidden');
					projects.classList.add('show');
				}, 50)
				break;
			case 'contact':
				if(activeDiv !== '' && activeDiv !== 'contact'){
					newActive(activeDiv);
				};
				if(aProject !== '' && projectOpen){
					newActive(aProject)
				}
				clicked = true;
				bodyScroll()
				navShow()
				activeDiv = 'contact';
				contactDiv.classList.add('displayShow');
				contactDiv.classList.remove('displayHide');
				setTimeout(()=>{
					contact.classList.remove('hidden');
					contact.classList.add('show');
					contactDiv.classList.add('showDiv');
				}, 50)
				break;
			default:
				if(aProject !== '' && projectOpen){
					newActive(aProject)
				}
				clicked = false;
				bodyScroll()
				navShow()
				changeActive(activeDiv);
				activeDiv = '';
				window.location.hash = '';
				showTooltip('Page does not exist.', 'Error');
				break;
		}
	}
}

window.onhashchange = hashChange;
startPage();