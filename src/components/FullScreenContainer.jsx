import React from 'react';
import Header from './Header';
import Footer from './Footer';
/*
 * Component
 */
const FullScreenContainer = (props) => {
	let newStyle = Object.assign(styles.container, props.style);
	return (
		<div style={newStyle}>
			{props.showHeader ?
				<Header {...props} screenName={props.screenName}>
					{props.children}
				</Header>
				: <div>
					{props.children}
				</div>
			}
			{props.showFooter ?
				<Footer {...props} style={styles.footer} />
				: null
			}
		</div>
	);
}

/*
 * Style
 */
const styles = {
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		width: '100%',
		overflowY: 'hidden'
	}
};

export default FullScreenContainer;