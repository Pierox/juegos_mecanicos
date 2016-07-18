// JavaScript Document

/************************/	

/************************/	


$(document).ready(function(e) {
	
	var entra = $("#sonido1")[0]; //la intro de santillana.
	var fond = $("#sonido2")[0]; //musica de fondo.
	var elect = $("#sonido3")[0]; //musica de electricidad.
	var chokke = $("#sonido4")[0]; //choque
	var carrro = $("#sonido5")[0]; //carro chispea
	var rapp = $("#sonido6")[0]; //carro chispea
	var hojja = $("#sonido7")[0]; //hoja
	var linnk = $("#sonido8")[0]; //recurso
	var evall = $("#sonido9")[0]; //evaluacion
	var connc = $("#sonido10")[0]; //evaluacion
	var brincc = $("#sonido11")[0]; //niño salta
	var pong = $("#sonido12")[0]; //niño salta
	var pin = $("#sonido13")[0]; //niño salta
	var fin = $("#sonido14")[0]; //niño salta
	
entra.play();
$("#caratula").fadeIn(5);		
$("#intro").delay(100).fadeIn(1000,function(){
	$("#pres1").fadeIn(1);
	$("#pres2").fadeIn(1);
	}).delay(1000).fadeOut(1000,function(){
	presentacion();
	});

/***************************************************************/
/************ efecto de la presentacion inicial ****************/
/***************************************************************/

$("#t2").mouseover(function(){
	pong.play();
	pong.currentTime = 0;
	$("#globo").animate({
		width:'31%',
		top:'201px',
		left:'-29px'
		});
	});
	
$("#t2").click(function(){
	pong.play();
	pong.currentTime = 0;
	$("#globo").animate({
		width:'31%',
		top:'201px',
		left:'-29px'
		});
	});

$("#t2").mouseleave(function(){
	pong.pause();
	pong.currentTime = 0;
	$("#globo").animate({
		width:'0%',
		top:'286px',
		left:'170px'
		});
	});

$(".izq").mouseover(function(){
	$(".iii").fadeIn(1);
	$(".iii").sprite({fps: 15, no_of_frames: 5, play_frames: 5});
	});

$(".izq").mouseleave(function(){
	$(".iii").fadeOut(1);
	$(".iii").destroy();
	$(".iii").css('background-position','0px 0px');
	});
	
$(".der").mouseover(function(){
	$(".ddd").fadeIn(1);
	$(".ddd").sprite({fps: 15, no_of_frames: 5, play_frames: 5});
	});

$(".der").mouseleave(function(){
	$(".ddd").fadeOut(1);
	$(".ddd").destroy();
	$(".ddd").css('background-position','0px 0px');
	});




function presentacion()
{		
		fond.play();
		$("#pres1").sprite({fps: 15, no_of_frames: 16, play_frames: 16});
		$("#pres1").delay(1200).fadeOut(1,function(){
			$("#pres2").sprite({fps: 15, no_of_frames: 30, play_frames: 30});
			});
		$("#pres2").delay(4000).fadeOut(1,function(){
				$("#pres3").sprite({fps: 15, no_of_frames: 7, play_frames: 7});
				});
		
		$("#titulo_car").delay(4500).fadeIn(300,function(){ elect.play();}).animate({
			opacity:'0.5'
			},200,function(){
				$("#titulo_car").animate({
					opacity:'1'
					},200,function(){
						$("#titulo_car").animate({
							opacity:'0.5'
							},200,function(){
								$("#titulo_car").animate({
									opacity:'1'
									},200,function(){
										$("#titulo_car").animate({
											opacity:'0.5'
											},200,function(){
												$("#titulo_car").animate({
													opacity:'1'
													},200,function(){
														$("#c1").fadeIn(5);
	$("#hum1").fadeIn(5);
	$("#hum1").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
	$("#m1").animate({
		width:'30%',
		top:'58px',
		left:'43px'
		},300,function(){
	$("#m1").animate({
		width:'26%',
		top:'60px',
		left:'58px'
		},300,function(){
			$("#c2").fadeIn(5);
			$("#hum2").fadeIn(5);
			$("#hum2").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
			$("#m2").animate({
				width:'30%',
				top:'152px',
				left:'70px'
				},300,function(){
			$("#m2").animate({
				width:'26%',
				top:'157px',
				left:'87px'
				},300,function(){
					$("#c3").fadeIn(5);
					$("#hum3").fadeIn(5);
					$("#hum3").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
					$("#m3").animate({
						width:'30%',
						top:'249px',
						left:'93px'
						},300,function(){
					$("#m3").animate({
						width:'26%',
						top:'256px',
						left:'102px'
						},300,function(){
							$("#c4").fadeIn(5);
							$("#hum4").fadeIn(5);
							$("#hum4").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
							$("#m4").animate({
								width:'30%',
								top:'54px',
								left:'616px'
								},300,function(){
							$("#m4").animate({
								width:'26%',
								top:'60px',
								left:'640px'
								},300,function(){
									$("#c5").fadeIn(5);
									$("#hum5").fadeIn(5);
									$("#hum5").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
									$("#m5").animate({
										width:'30%',
										top:'152px',
										left:'667px'
										},300,function(){
									$("#m5").animate({
										width:'26%',
										top:'157px',
										left:'689px'
										 },300,function(){
											$("#c6").fadeIn(5);
											$("#hum6").fadeIn(5);
											$("#hum6").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
											$("#m6").animate({
												width:'30%',
												top:'252px',
												left:'639px'
												},300,function(){
											$("#m6").animate({
												width:'26%',
												top:'256px',
												left:'653px'
												},300,function(){
													estrella();																				
												});
											});							
										});
									});								
								});
							});							
						});
					});
				});
			});
		});
	});
														});
												});
										});
								});
						});
				});
		
}

/***************************************************************/
/******** efectos de la introduccion ***************************/
/***************************************************************/
function avanzar1(){
carrro.play();
$("#carro1").delay(1000).animate({
	left:'112px'
	},1000);
}

function chocar1(){
	chokke.play();
	$("#carro2").animate({
		left:'-99px'
		},500,function(){
			$("#carro3").animate({
					left:'983px'
					},1000,function(){
						$("#carro2").animate({
							left:'-80px'
							},100,function(){
								$("#carro2").animate({
									left:'112px'
									},500,function(){
										
										});
								});
						});			
			});
	}


function chocar2(){
	chokke.play();
	$("#carro4").animate({
		left:'-99px'
		},500,function(){
			$("#carro5").animate({
					left:'983px'
					},1000,function(){
						$("#carro4").animate({
							left:'-80px'
							},100,function(){
								$("#carro4").animate({
									left:'112px'
									},500,function(){
										
										});
								});
						});			
			});
	}

function let2(){
	$("#letras2").fadeIn(5);
	$("#text1_2").delay(1000).fadeIn(5);
	$("#letras2").sprite({fps: 17, no_of_frames: 17, play_frames: 17});
	
	}

function let3(){
	$("#letras3").fadeIn(5);
	$("#text1_3").delay(1000).fadeIn(5);
	$("#letras3").sprite({fps: 17, no_of_frames: 17, play_frames: 17});
	}
/***************************************************************/
/******** efecto cuando los botones del menu aparecen **********/
/***************************************************************/

function botones_menu(){
	$("#c1").fadeIn(5);
	$("#hum1").fadeIn(5);
	$("#hum1").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
	$("#m1").animate({
		width:'30%',
		top:'58px',
		left:'43px'
		},300,function(){
	$("#m1").animate({
		width:'26%',
		top:'60px',
		left:'58px'
		},300,function(){
			$("#c2").fadeIn(5);
			$("#hum2").fadeIn(5);
			$("#hum2").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
			$("#m2").animate({
				width:'30%',
				top:'152px',
				left:'70px'
				},300,function(){
			$("#m2").animate({
				width:'26%',
				top:'157px',
				left:'87px'
				},300,function(){
					$("#c3").fadeIn(5);
					$("#hum3").fadeIn(5);
					$("#hum3").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
					$("#m3").animate({
						width:'30%',
						top:'249px',
						left:'93px'
						},300,function(){
					$("#m3").animate({
						width:'26%',
						top:'256px',
						left:'102px'
						},300,function(){
							$("#c4").fadeIn(5);
							$("#hum4").fadeIn(5);
							$("#hum4").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
							$("#m4").animate({
								width:'30%',
								top:'54px',
								left:'616px'
								},300,function(){
							$("#m4").animate({
								width:'26%',
								top:'60px',
								left:'640px'
								},300,function(){
									$("#c5").fadeIn(5);
									$("#hum5").fadeIn(5);
									$("#hum5").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
									$("#m5").animate({
										width:'30%',
										top:'152px',
										left:'667px'
										},300,function(){
									$("#m5").animate({
										width:'26%',
										top:'157px',
										left:'689px'
										 },300,function(){
											$("#c6").fadeIn(5);
											$("#hum6").fadeIn(5);
											$("#hum6").sprite({fps: 15, no_of_frames: 14, play_frames: 14});
											$("#m6").animate({
												width:'30%',
												top:'252px',
												left:'639px'
												},300,function(){
											$("#m6").animate({
												width:'26%',
												top:'256px',
												left:'653px'
												},300,function(){
													estrella();																				
												});
											});							
										});
									});								
								});
							});							
						});
					});
				});
			});
		});
	});
}

/***************************************************************/
/********** efecto over del boton de Inicio ********************/
/***************************************************************/

$(".ini").mouseover(function(){
	$(".inicio").css('width','9%');
	$(".inicio").css('top','25px');
	$(".inicio").css('left','818px');
	});

$(".ini").mouseleave(function(){
	$(".inicio").css('width','7%');
	$(".inicio").css('top','37px');
	$(".inicio").css('left','828px');
	});

/***************************************************************/
/********** efecto over de los botones del menu ****************/
/***************************************************************/

$("#c1").mouseover(function(){
	$("#m1").animate({
		width:'30%',
		top:'58px',
		left:'43px'
		},100,function(){
			$("#m1").animate({
				width:'26%',
				top:'60px',
				left:'58px'
				},100,function(){
					$("#m1").animate({
						width:'30%',
						top:'58px',
						left:'43px'
						},100,function(){
							$("#m1").animate({
								width:'26%',
								top:'60px',
								left:'58px'
								},100,function(){
																																
							});																								
						});																							
				});
		});	
	});

$("#c2").mouseover(function(){
	$("#m2").animate({
		width:'30%',
		top:'152px',
		left:'70px'
		},100,function(){
			$("#m2").animate({
				width:'26%',
				top:'157px',
				left:'87px'
				},100,function(){
					$("#m2").animate({
						width:'30%',
						top:'152px',
						left:'70px'
						},100,function(){
							$("#m2").animate({
								width:'26%',
								top:'157px',
								left:'87px'
								},100,function(){
																																
							});																								
						});																							
				});
		});	
	});

$("#c3").mouseover(function(){
	$("#m3").animate({
		width:'30%',
		top:'249px',
		left:'73px'
		},100,function(){
			$("#m3").animate({
				width:'26%',
				top:'256px',
				left:'102px'
				},100,function(){
					$("#m3").animate({
						width:'30%',
						top:'249px',
						left:'73px'
						},100,function(){
							$("#m3").animate({
								width:'26%',
								top:'256px',
								left:'102px'
								},100,function(){
																																
							});																								
						});																							
				});
		});	
	});
	
$("#c4").mouseover(function(){
	$("#m4").animate({
		width:'30%',
		top:'54px',
		left:'626px'
		},100,function(){
			$("#m4").animate({
				width:'26%',
				top:'60px',
				left:'640px'
				},100,function(){
					$("#m4").animate({
						width:'30%',
						top:'54px',
						left:'626px'
						},100,function(){
							$("#m4").animate({
								width:'26%',
								top:'60px',
								left:'640px'
								},100,function(){
																																
							});																								
						});																							
				});
		});	
	});
	
$("#c5").mouseover(function(){
	$("#m5").animate({
		width:'30%',
		top:'152px',
		left:'667px'
		},100,function(){
			$("#m5").animate({
				width:'26%',
				top:'157px',
				left:'689px'
				},100,function(){
					$("#m5").animate({
						width:'30%',
						top:'152px',
						left:'667px'
						},100,function(){
							$("#m5").animate({
								width:'26%',
								top:'157px',
								left:'689px'
								},100,function(){
																																
							});																								
						});																							
				});
		});	
	});
	
$("#c6").mouseover(function(){
	$("#m6").animate({
		width:'30%',
		top:'252px',
		left:'639px'
		},100,function(){
			$("#m6").animate({
				width:'26%',
				top:'256px',
				left:'653px'
				},100,function(){
					$("#m6").animate({
						width:'30%',
						top:'252px',
						left:'639px'
						},100,function(){
							$("#m6").animate({
								width:'26%',
								top:'256px',
								left:'653px'
								},100,function(){
																																
							});																								
						});																							
				});
		});	
	});
	
/***************************************************************/
/****************** efectos de Tarea ***************************/
/***************************************************************/

function brilo(){
	$("#brillo").animate({
		width:'18%',
		top:'313px',
		left:'709px'
		},200);
	};
function hoja(){
$("#text5").delay(400).fadeIn(5);
$("#papel2").delay(400).animate({
		height:'318px'
		},300);
	};
	
/***************************************************************/
/****************** efectos de Procesos ************************/
/***************************************************************/
function rulet(){
$("#ruleta").sprite({fps: 10, no_of_frames: 6});
}

/***************************************************************/
/****************** efectos de Recursos ************************/
/***************************************************************/

$("#link1").mouseover(function(){
	linnk.play();
	$("#carrusel2").fadeIn(1);
	$("#carrusel2").sprite({fps: 15, no_of_frames: 8, play_frames: 8});
	});
	
$("#link1").mouseleave(function(){
	linnk.pause();
	linnk.currentTime = 0;
	$("#carrusel2").fadeOut(1);
	$("#carrusel2").destroy();
	$("#carrusel2").css('background-position','0px 0px');
	});


$("#link2").mouseover(function(){
	linnk.play();
	$("#algo2").fadeIn(1);
	$("#algo2").sprite({fps: 15, no_of_frames: 8, play_frames: 8});
	});
	
$("#link2").mouseleave(function(){
	linnk.pause();
	linnk.currentTime = 0;
	$("#algo2").fadeOut(1);
	$("#algo2").destroy();
	$("#algo2").css('background-position','0px 0px');
	});


$("#link3").mouseover(function(){
	linnk.play();
	$("#algodon2").fadeIn(1);
	$("#algodon2").sprite({fps: 15, no_of_frames: 7, play_frames: 7});
	});
	
$("#link3").mouseleave(function(){
	linnk.pause();
	linnk.currentTime = 0;
	$("#algodon2").fadeOut(1);
	$("#algodon2").destroy();
	$("#algodon2").css('background-position','0px 0px');
	});

/***************************************************************/
/****************** efectos de Evaluacion **********************/
/***************************************************************/
function evaluar()
{
evall.play();
$("#hoja").animate({
	left:'46px'
	},500);
}

/***************************************************************/
/****************** efectos de Conclusion **********************/
/***************************************************************/

function mega(){
	connc.play();
	$("#megafono").sprite({fps: 15, no_of_frames: 7});
	$("#megafono2").delay(1500).fadeIn(5,function(){
		$("#megafono").fadeOut(5);
		$("#mm2").fadeOut(5);
		$("#megafono2").animate({
			width:'29%',
			top:'107px',
			left:'62px'
			},1000);
		$("#fondo_conclusion").animate({
			width:'100%',
			top:'0px',
			left:'0px'
			},1000);
		$("#azul").animate({
			width:'100%',
			top:'493px',
			left:'-54px'
			},1000,function(){
				$("#der11").fadeIn(5);
				$("#izq11").fadeIn(5);
				$("#d11").fadeIn(5);
				$("#i11").fadeIn(5);
				$("#ini11").fadeIn(5);
				$("#inicio11").fadeIn(5);
				$("#titulo_conclusion").fadeIn(5);
				$("#text_conc").fadeIn(5);
				$("#fam").fadeIn(5,function(){
					brincc.play();
					$("#fam").sprite({fps: 15, no_of_frames: 8, play_frames: 8});
					});
				cintaseis();
				});
		});
	}

/***************************************************************/
/************** enlace de los botones del menu *****************/
/***************************************************************/	

$("#c1").click(function(){
	pong.play();
	fond.pause();
	fond.currentTime = 0;
	elect.pause();
	elect.currentTime = 0;
	$("#caratula").fadeOut(5);
	$("#escena1").fadeIn(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintauno();
	avanzar1();
	});

$("#c2").click(function(){
	pong.play();
	fond.pause();
	fond.currentTime = 0;
	elect.pause();
	elect.currentTime = 0;
	rapp.play();
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeIn(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintados();
	brilo();
	});

$("#c3").click(function(){
	pong.play();
	fond.pause();
	fond.currentTime = 0;
	elect.pause();
	elect.currentTime = 0;
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeIn(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintatres();
	rulet();
	});
	
$("#c4").click(function(){
	pong.play();
	fond.pause();
	fond.currentTime = 0;
	elect.pause();
	elect.currentTime = 0;
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeIn(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintacuatro();
	});

$("#c5").click(function(){
	pong.play();
	fond.pause();
	fond.currentTime = 0;
	elect.pause();
	elect.currentTime = 0;
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeIn(5);
	$("#escena11").fadeOut(5);
	cintacinco();
	evaluar();
	});

$("#c6").click(function(){
	pong.play();
	fond.pause();
	fond.currentTime = 0;
	elect.pause();
	elect.currentTime = 0;
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeIn(5);
	mega();
	});

/***************************************************************/
/***** enlaces de los botones de izquierda y derecha ***********/
/***************************************************************/	
$(".ini").click(function(){
	pong.play();
	reseto();
	$("#caratula").fadeIn(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	presentacion();
	
	$("#c1").fadeOut(5);
	$("#c2").fadeOut(5);
	$("#c3").fadeOut(5);
	$("#c4").fadeOut(5);
	$("#c5").fadeOut(5);
	$("#c6").fadeOut(5);
	
	$("#m1").css('width','0%').stop();
	$("#m2").css('width','0%').stop();
	$("#m3").css('width','0%').stop();
	$("#m4").css('width','0%').stop();
	$("#m5").css('width','0%').stop();
	$("#m6").css('width','0%').stop();
	
	$("#estrellam").fadeOut(1);
	$("#estrellam").css('width','5%');
	$("#estrellam").css('top','127px');
	$("#estrellam").css('left','466px');
	
	$("#m1").css('top','77px');
	$("#m1").css('left','184px');
	
	$("#m2").css('top','174px');
	$("#m2").css('left','185px');
	
	$("#m3").css('top','270px');
	$("#m3").css('left','195px');
	
	$("#m4").css('top','67px');
	$("#m4").css('left','715px');
	
	$("#m5").css('top','176px');
	$("#m5").css('left','734px');
	
	$("#m6").css('top','270px');
	$("#m6").css('left','722px');
	
	$(".hum").fadeOut(1);
	$(".hum").css('background-position','0px 0px');
	
	rapp.pause();
	rapp.currentTime = 0;
	chokke.pause();
	chokke.currentTime = 0;
	carrro.pause();
	carrro.currentTime = 0;
	hojja.pause();
	hojja.currentTime = 0;
	evall.pause();
	evall.currentTime = 0;
	connc.pause();
	connc.currentTime = 0;
		});


$("#i1").click(function(){
	reseto();
	$("#caratula").fadeIn(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	presentacion();
	
	$("#c1").fadeOut(5);
	$("#c2").fadeOut(5);
	$("#c3").fadeOut(5);
	$("#c4").fadeOut(5);
	$("#c5").fadeOut(5);
	$("#c6").fadeOut(5);
	
	$("#m1").css('width','0%').stop();
	$("#m2").css('width','0%').stop();
	$("#m3").css('width','0%').stop();
	$("#m4").css('width','0%').stop();
	$("#m5").css('width','0%').stop();
	$("#m6").css('width','0%').stop();
	
	$("#estrellam").fadeOut(1);
	$("#estrellam").css('width','5%');
	$("#estrellam").css('top','127px');
	$("#estrellam").css('left','466px');
	
	$("#m1").css('top','77px');
	$("#m1").css('left','184px');
	
	$("#m2").css('top','174px');
	$("#m2").css('left','185px');
	
	$("#m3").css('top','270px');
	$("#m3").css('left','195px');
	
	$("#m4").css('top','67px');
	$("#m4").css('left','715px');
	
	$("#m5").css('top','176px');
	$("#m5").css('left','734px');
	
	$("#m6").css('top','270px');
	$("#m6").css('left','722px');
	
	$(".hum").fadeOut(1);
	$(".hum").css('background-position','0px 0px');
	
	carrro.pause();
	carrro.currentTime = 0;

	});



$("#d1").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeIn(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	chocar1();
	let2();
	
	carrro.pause();
	carrro.currentTime = 0;
	});
	
$("#i2").click(function(){
	chokke.pause();
	chokke.currentTime = 0;
	$("#caratula").fadeOut(5);
	$("#escena1").fadeIn(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintauno();
	avanzar1();
	});

$("#d2").click(function(){
	chokke.pause();
	chokke.currentTime = 0;
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeIn(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	let3();
	chocar2();
	});
	
$("#i3").click(function(){
	chokke.pause();
	chokke.currentTime = 0;
	
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeIn(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	chocar1();
	let2();
	});

$("#d3").click(function(){
	chokke.pause();
	chokke.currentTime = 0;
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeIn(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintados();
	brilo();
	rapp.play();
	});

$("#i4").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeIn(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	chocar2();
	let3();
	rapp.pause();
	rapp.currentTime = 0;
	});

$("#d4").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeIn(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	hoja();
	rapp.pause();
	rapp.currentTime = 0;
	hojja.play();
	});

$("#i5").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeIn(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	chocar2();
	let3();
	hojja.pause();
	hojja.currentTime = 0;
	});

$("#d5").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeIn(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintatres();
	rulet();
	hojja.pause();
	hojja.currentTime = 0;
	});

$("#i6").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeIn(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintados();
	brilo();
	reseto();
	rapp.play();
	});

$("#d6").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeIn(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	hojja.play();
	reseto();
	});

$("#i7").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeIn(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintatres();
	rulet();
	hojja.play();
	});

$("#d7").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeIn(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	hojja.play();
	});

$("#i8").click(function(){
	hojja.play();
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeIn(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	});

$("#d8").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeIn(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintacuatro();
	});


$("#i9").click(function(){
	hojja.play();
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeIn(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	});

$("#d9").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeIn(5);
	$("#escena11").fadeOut(5);
	cintacinco();
	evaluar();
	});

$("#i10").click(function(){
	
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeIn(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintacuatro();
	evall.pause();
	evall.currentTime = 0;
	});

$("#d10").click(function(){
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeIn(5);
	mega();
	
	evall.pause();
	evall.currentTime = 0;
	});

$("#i11").click(function(){
	brincc.currentTime = 0;
	connc.pause();
	connc.currentTime = 0;
	cintacinco();
	evaluar();
	reseto()
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeIn(5);
	$("#escena11").fadeOut(5);
	});

$("#d11").click(function(){
	$("#escena11").delay(1700).fadeOut(5);
	fin.play();
	connc.pause();
	connc.currentTime = 0;
	$("#final").fadeIn(1);
	$("#final").sprite({fps: 15, no_of_frames: 20, play_frames: 20});
	//location.reload();
	if(window.top==window) {
    // you're not in a frame so you reload the site
    window.setTimeout('location.reload()', 1700); //reloads after 3 seconds
	} else {
		//you're inside a frame, so you stop reloading
	}
	});

$("#brillo").click(function(){
	hojja.play();
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeIn(5);
	$("#escena6").fadeOut(5);
	hoja();
	});

$("#ruleta").mouseover(function(){
	pin.play();
	pin.currentTime = 0;
	});

$("#ruleta").click(function(){
	hojja.play();
	pong.play();
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeOut(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeIn(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	reseto();
	});

$("#t").click(function(){
	pong.play();
	$("#caratula").fadeOut(5);
	$("#escena1").fadeOut(5);
	$("#escena2").fadeOut(5);
	$("#escena3").fadeOut(5);
	$("#escena4").fadeIn(5);
	$("#escena5").fadeOut(5);
	$("#escena6").fadeOut(5);
	$("#escena7").fadeOut(5);
	$("#escena8").fadeOut(5);
	$("#escena9").fadeOut(5);
	$("#escena10").fadeOut(5);
	$("#escena11").fadeOut(5);
	cintados();
	brilo();
	rapp.play();
	});

$("#t").mouseover(function(){
	pin.play();
	pin.currentTime = 0;
	});
/***************************************************************/
/**************** efecto estrella del menu *********************/
/***************************************************************/

function estrella(){
	$("#estrellam").fadeIn(5);
	$("#estrellam").delay(4000).animate({
		width:'8%',
		top:'110px',
		left:'450px'
		},200,function(){
			$("#estrellam").animate({
				width:'5%',
				top:'127px',
				left:'466px'
				},200,function(){
					
					});
			});
	}

/***************************************************************/
/**************** efectos de la escena 1 ***********************/
/***************************************************************/
function cintauno()
{
$("#cinta1_1").delay(200).animate({
	width:'983px'
	},300);
}

function cintados()
{
$("#cinta2_1").delay(200).animate({
	width:'983px'
	},300);
}

function cintatres()
{
$("#cinta3_1").delay(200).animate({
	width:'983px'
	},300);
}

function cintacuatro()
{
$("#cinta4_1").delay(200).animate({
	width:'983px'
	},300);
}

function cintacinco()
{
$("#cinta5_1").delay(200).animate({
	width:'983px'
	},300);
}

function cintaseis()
{
$("#cinta6_1").delay(200).animate({
	width:'983px'
	},300);
}
/***************************************************************/
/***************************************************************/
/***************************************************************/
/***************************************************************/

function reseto(){
	$("#ruleta").destroy();
	$("#ruleta").css('background-position','0px 0px');
	$("#megafono").destroy();
	$("#megafono").css('background-position','0px 0px');
	$("#fam").destroy();
	$("#fam").css('background-position','0px 0px');
	$("#megafono").fadeIn(1);
	$("#mm2").fadeIn(1);	
	$("#pres1").fadeIn(1);
	$("#pres2").fadeIn(1);
	$("#pres1").css('background-position','0px 0px');
	$("#pres2").css('background-position','0px 0px');
	$("#pres3").css('background-position','0px 0px');
	}

function reseteo(){
	$("#m1").css('width','0%');
	$("#m1").css('top','77px');
	$("#m1").css('left','184px');
	
	$("#m2").css('width','0%');
	$("#m2").css('top','174px');
	$("#m2").css('left','185px');
	
	$("#m3").css('width','0%');
	$("#m3").css('top','270px');
	$("#m3").css('left','195px');
	
	$("#m4").css('width','0%');
	$("#m4").css('top','67px');
	$("#m4").css('left','715px');
	
	$("#m5").css('width','0%');
	$("#m5").css('top','176px');
	$("#m5").css('left','734px');
	
	$("#m6").css('width','0%');
	$("#m6").css('top','270px');
	$("#m6").css('left','722px');
	
	
	
	$("#estrellam").css('display','none');
	
	$("#estrellam").css('width','5%');
	$("#estrellam").css('top','127px');
	$("#estrellam").css('left','466px');
	}



$(".c").on("click", function () {
	$("#estrellam").fadeOut(1);
	$("#estrellam").css('width','5%');
	$("#estrellam").css('top','127px');
	$("#estrellam").css('left','466px');
	
	$("#titulo_car").css('display','none');
})



$("#ini1").on("click", function () {
		$('#cinta1_1').clearQueue().stop().css('width','0px');
		$('#carro1').clearQueue().stop().css('left','-255px');	
	});

/************************************************************************/

$("#i1").on("click", function () {
			$('#cinta1_1').clearQueue().stop().css('width','0px');
			$('#carro1').clearQueue().stop().css('left','-255px');
	});
$("#d1").on("click", function () {
			$('#cinta1_1').clearQueue().stop().css('width','0px');
			$('#carro1').clearQueue().stop().css('left','-255px');
			
	});

/************************************************************************/
$("#ini2").on("click", function () {
			$('#text1_2').clearQueue().stop().css('display','none');
			$('#carro2').clearQueue().stop().css('left','-255px');
			$('#carro3').clearQueue().stop().css('left','112px');
	});
	
$("#i2").on("click", function () {
			$('#text1_2').clearQueue().stop().css('display','none');
			$('#carro2').clearQueue().stop().css('left','-255px');
			$('#carro3').clearQueue().stop().css('left','112px');
	});
$("#d2").on("click", function () {
			$('#text1_2').clearQueue().stop().css('display','none');
			$('#carro2').clearQueue().stop().css('left','-255px');
			$('#carro3').clearQueue().stop().css('left','112px');
	});

/************************************************************************/
$("#ini3").on("click", function () {
			$('#text1_3').clearQueue().stop().css('display','none');
			$('#carro4').clearQueue().stop().css('left','-255px');
			$('#carro5').clearQueue().stop().css('left','112px');
	});
$("#i3").on("click", function () {
			$('#text1_3').clearQueue().stop().css('display','none');
			$('#carro4').clearQueue().stop().css('left','-255px');
			$('#carro5').clearQueue().stop().css('left','112px');
	});
$("#d3").on("click", function () {
			$('#text1_3').clearQueue().stop().css('display','none');
			$('#carro4').clearQueue().stop().css('left','-255px');
			$('#carro5').clearQueue().stop().css('left','112px');
	});
	
/************************************************************************/
$("#ini4").on("click", function () {
			$('#brillo').clearQueue().stop().css('width','60%');
			$('#brillo').clearQueue().stop().css('top','-93px');
			$('#brillo').clearQueue().stop().css('left','499px');
	});
$("#i4").on("click", function () {
			$('#brillo').clearQueue().stop().css('width','60%');
			$('#brillo').clearQueue().stop().css('top','-93px');
			$('#brillo').clearQueue().stop().css('left','499px');
	});
$("#d4").on("click", function () {
			$('#brillo').clearQueue().stop().css('width','60%');
			$('#brillo').clearQueue().stop().css('top','-93px');
			$('#brillo').clearQueue().stop().css('left','499px');
	});
$("#brillo").on("click", function () {
			$('#brillo').clearQueue().stop().css('width','60%');
			$('#brillo').clearQueue().stop().css('top','-93px');
			$('#brillo').clearQueue().stop().css('left','499px');
	});
	
/*************************************************************************/
$("#i4").on("click", function () {
			$('#cinta2_1').clearQueue().stop().css('width','0px');
	});
$("#d4").on("click", function () {
			$('#cinta2_1').clearQueue().stop().css('width','0px');
	});

/*************************************************************************/
$("#ini5").on("click", function () {
			$('#papel2').clearQueue().stop().css('height','0px');
			$('#text5').clearQueue().stop().css('display','none');
	});
$("#i5").on("click", function () {
			$('#papel2').clearQueue().stop().css('height','0px');
			$('#text5').clearQueue().stop().css('display','none');
	});
$("#d5").on("click", function () {
			$('#papel2').clearQueue().stop().css('height','0px');
			$('#text5').clearQueue().stop().css('display','none');
	});

/*************************************************************************/	
$("#ini6").on("click", function () {
			$('#cinta3_1').clearQueue().stop().css('width','0px');
	});
$("#i6").on("click", function () {
			$('#cinta3_1').clearQueue().stop().css('width','0px');
	});
$("#d6").on("click", function () {
			$('#cinta3_1').clearQueue().stop().css('width','0px');
	});



$("#ini9").on("click", function () {
			$('#cinta4_1').clearQueue().stop().css('width','0px');
	});
$("#i9").on("click", function () {
			$('#cinta4_1').clearQueue().stop().css('width','0px');
	});
$("#d9").on("click", function () {
			$('#cinta4_1').clearQueue().stop().css('width','0px');
	});
	
/******************************************************************/	
$("#ini10").on("click", function () {
			$('#cinta5_1').clearQueue().stop().css('width','0px');
			$('#hoja').clearQueue().stop().css('left','-851px');
	});
$("#i10").on("click", function () {
			$('#cinta5_1').clearQueue().stop().css('width','0px');
			$('#hoja').clearQueue().stop().css('left','-851px');
	});
$("#d10").on("click", function () {
			$('#cinta5_1').clearQueue().stop().css('width','0px');
			$('#hoja').clearQueue().stop().css('left','-851px');
	});

/******************************************************************/	
$("#ini11").on("click", function () {
			$('#ini11').clearQueue().stop().css('display','none');
			$('#inicio11').clearQueue().stop().css('display','none');
			
			$('#cinta6_1').clearQueue().stop().css('width','0px');
			$('#der11').clearQueue().stop().css('display','none');
			$('#d11').clearQueue().stop().css('display','none');
			$('#izq11').clearQueue().stop().css('display','none');
			$('#i11').clearQueue().stop().css('display','none');
			$('#megafono2').clearQueue().stop().css('display','none');
			$('#megafono2').clearQueue().stop().css('width','52%');
			$('#megafono2').clearQueue().stop().css('top','82px');
			$('#megafono2').clearQueue().stop().css('left','112px');
			
			$('#fondo_conclusion').clearQueue().stop().css('width','148%');
			$('#fondo_conclusion').clearQueue().stop().css('top','10px');
			$('#fondo_conclusion').clearQueue().stop().css('left','-317px');
			
			$('#azul').clearQueue().stop().css('width','150%');
			$('#azul').clearQueue().stop().css('top','360px');
			$('#azul').clearQueue().stop().css('left','-116px');
			
			$('#titulo_conclusion').clearQueue().stop().css('display','none');
			$('#text_conc').clearQueue().stop().css('display','none');
			$('#fam').clearQueue().stop().css('display','none');
	});

$("#i11").on("click", function () {
			$('#ini11').clearQueue().stop().css('display','none');
			$('#inicio11').clearQueue().stop().css('display','none');
			
			$('#cinta6_1').clearQueue().stop().css('width','0px');
			$('#der11').clearQueue().stop().css('display','none');
			$('#d11').clearQueue().stop().css('display','none');
			$('#izq11').clearQueue().stop().css('display','none');
			$('#i11').clearQueue().stop().css('display','none');
			$('#megafono2').clearQueue().stop().css('display','none');
			$('#megafono2').clearQueue().stop().css('width','52%');
			$('#megafono2').clearQueue().stop().css('top','82px');
			$('#megafono2').clearQueue().stop().css('left','112px');
			
			$('#fondo_conclusion').clearQueue().stop().css('width','148%');
			$('#fondo_conclusion').clearQueue().stop().css('top','10px');
			$('#fondo_conclusion').clearQueue().stop().css('left','-317px');
			
			$('#azul').clearQueue().stop().css('width','150%');
			$('#azul').clearQueue().stop().css('top','360px');
			$('#azul').clearQueue().stop().css('left','-116px');
			
			$('#titulo_conclusion').clearQueue().stop().css('display','none');
			$('#text_conc').clearQueue().stop().css('display','none');
			$('#fam').clearQueue().stop().css('display','none');
	});


}); //fin de ready//


















