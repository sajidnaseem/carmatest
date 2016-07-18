// JavaScript Document
define(function() {
	return {
		initChat: function() {
			var ChatComponent = React.createClass({
				getInitialState: function() {
					return {
						Error: '',
						ResultSet: [],
						count: 0
					};
				},
				componentDidMount: function() {
				$(".tooltip1").click(function(){  $(".msg_container_base, .panel-footer").toggle();   });
				},
				render: function() {
					return (
							<div className="container">
								<div className="row chat-window col-xs-5 col-md-3" id="chat_window_1">
									<div className="col-xs-12 col-md-12">
										<div className="panel panel-default">
											<div className="panel-heading top-bar">
												<div className="col-md-12 col-xs-12">
													<h3 className="panel-title"><span> 24 </span> online -<a title="This is some information for our tooltip." className="tooltip1"> click here to chat</a></h3> </div>
												</div>
											<div className="panel-body msg_container_base" >
												<div className="row msg_container base_sent">
													<div className="col-md-10 col-xs-10">
														<div className="messages msg_sent">
															<p>that mongodb thing looks good, huh? tiny master db, and huge document store</p> <time datetime="2009-11-13T20:00">Timothy • 51 min</time> </div>
													</div>
												<div className="col-md-2 col-xs-2 avatar"> <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive"/> </div>
												</div>
												<div className="row msg_container base_receive">
												<div className="col-md-2 col-xs-2 avatar"> <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive"/> </div>
													<div className="col-md-10 col-xs-10">
														<div className="messages msg_receive">
															<p>that mongodb thing looks good, huh? tiny master db, and huge document store</p> <time datetime="2009-11-13T20:00">Timothy • 51 min</time> </div>
													</div>
												</div>
												<div className="row msg_container base_receive">
												<div className="col-md-2 col-xs-2 avatar"> <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive"/> </div>
													<div className="col-xs-10 col-md-10">
														<div className="messages msg_receive">
															<p>that mongodb thing looks good, huh? tiny master db, and huge document store</p> <time datetime="2009-11-13T20:00">Timothy • 51 min</time> </div>
													</div>
												</div>
											</div>
											<div className="panel-footer">
												<div className="input-group"> <input id="btn-input" type="text" className="form-control input-sm chat_input" placeholder="Write your message here..." /> <span className="input-group-btn">
																				<button className="btn btn-primary btn-sm" id="btn-chat">Send</button>
																				</span> </div>
											</div>
										</div>
									</div>
								</div>
								<div className="btn-group dropup"> 
									<ul className="dropdown-menu" role="menu">
										<li><a href="#" id="new_chat"><span className="glyphicon glyphicon-plus"></span> Novo</a></li>
										<li><a href="#"><span className="glyphicon glyphicon-list"></span> Ver outras</a></li>
										<li><a href="#"><span className="glyphicon glyphicon-remove"></span> Fechar Tudo</a></li>
										<li className="divider"></li>
										<li><a href="#"><span className="glyphicon glyphicon-eye-close"></span> Invisivel</a></li>
									</ul>
								</div>
						</div>
					);
				}
			});
			ReactDOM.render(<ChatComponent source="https://stagingservices.drivecarma.ca/Api/Misc/SplashScreen/Content" />, document.getElementById('carma-chat'));
		}
	};
});