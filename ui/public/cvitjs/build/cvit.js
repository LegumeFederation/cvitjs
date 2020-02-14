(function () {
  'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".container{position:relative;max-width:960px;margin:0 auto;padding:0 20px}.column,.columns,.container{width:100%;box-sizing:border-box}.column,.columns{float:left}@media (min-width:400px){.container{width:85%;padding:0}}@media (min-width:550px){.container{width:80%}.column,.columns{margin-left:4%}.column:first-child,.columns:first-child{margin-left:0}.one.column,.one.columns{width:4.66666666667%}.two.columns{width:13.3333333333%}.three.columns{width:22%}.four.columns{width:30.6666666667%}.five.columns{width:39.3333333333%}.six.columns{width:48%}.seven.columns{width:56.6666666667%}.eight.columns{width:65.3333333333%}.nine.columns{width:74%}.ten.columns{width:82.6666666667%}.eleven.columns{width:91.3333333333%}.twelve.columns{width:100%;margin-left:0}.one-third.column{width:30.6666666667%}.two-thirds.column{width:65.3333333333%}.one-half.column{width:48%}.offset-by-one.column,.offset-by-one.columns{margin-left:8.66666666667%}.offset-by-two.column,.offset-by-two.columns{margin-left:17.3333333333%}.offset-by-three.column,.offset-by-three.columns{margin-left:26%}.offset-by-four.column,.offset-by-four.columns{margin-left:34.6666666667%}.offset-by-five.column,.offset-by-five.columns{margin-left:43.3333333333%}.offset-by-six.column,.offset-by-six.columns{margin-left:52%}.offset-by-seven.column,.offset-by-seven.columns{margin-left:60.6666666667%}.offset-by-eight.column,.offset-by-eight.columns{margin-left:69.3333333333%}.offset-by-nine.column,.offset-by-nine.columns{margin-left:78%}.offset-by-ten.column,.offset-by-ten.columns{margin-left:86.6666666667%}.offset-by-eleven.column,.offset-by-eleven.columns{margin-left:95.3333333333%}.offset-by-one-third.column,.offset-by-one-third.columns{margin-left:34.6666666667%}.offset-by-two-thirds.column,.offset-by-two-thirds.columns{margin-left:69.3333333333%}.offset-by-one-half.column,.offset-by-one-half.columns{margin-left:52%}}html{font-size:62.5%}body{font-size:1.5em;line-height:1.6;font-weight:400;font-family:Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif;color:#222}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:2rem;font-weight:300}h1{font-size:4rem;line-height:1.2}h1,h2{letter-spacing:-.1rem}h2{font-size:3.6rem;line-height:1.25}h3{font-size:3rem;line-height:1.3;letter-spacing:-.1rem}h4{font-size:2.4rem;line-height:1.35;letter-spacing:-.08rem}h5{font-size:1.8rem;line-height:1.5;letter-spacing:-.05rem}h6{font-size:1.5rem;line-height:1.6;letter-spacing:0}@media (min-width:550px){h1{font-size:5rem}h2{font-size:4.2rem}h3{font-size:3.6rem}h4{font-size:3rem}h5{font-size:2.4rem}h6{font-size:1.5rem}}p{margin-top:0}a{color:#1eaedb}a:hover{color:#0fa0ce}.button,button,input[type=button],input[type=reset],input[type=submit]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;letter-spacing:.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:initial;border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}.button:focus,.button:hover,button:focus,button:hover,input[type=button]:focus,input[type=button]:hover,input[type=reset]:focus,input[type=reset]:hover,input[type=submit]:focus,input[type=submit]:hover{color:#333;border-color:#888;outline:0}.button.button-primary,button.button-primary,input[type=button].button-primary,input[type=reset].button-primary,input[type=submit].button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}.button.button-primary:focus,.button.button-primary:hover,button.button-primary:focus,button.button-primary:hover,input[type=button].button-primary:focus,input[type=button].button-primary:hover,input[type=reset].button-primary:focus,input[type=reset].button-primary:hover,input[type=submit].button-primary:focus,input[type=submit].button-primary:hover{color:#fff;background-color:#1eaedb;border-color:#1eaedb}input[type=email],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=url],select,textarea{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}input[type=email],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=url],textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}textarea{min-height:65px;padding-top:6px;padding-bottom:6px}input[type=email]:focus,input[type=number]:focus,input[type=password]:focus,input[type=search]:focus,input[type=tel]:focus,input[type=text]:focus,input[type=url]:focus,select:focus,textarea:focus{border:1px solid #33c3f0;outline:0}label,legend{display:block;margin-bottom:.5rem;font-weight:600}fieldset{padding:0;border-width:0}input[type=checkbox],input[type=radio]{display:inline}label>.label-body{display:inline-block;margin-left:.5rem;font-weight:400}ul{list-style:circle inside}ol{list-style:decimal inside}ol,ul{padding-left:0;margin-top:0}ol ol,ol ul,ul ol,ul ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}li{margin-bottom:1rem}code{padding:.2rem .5rem;margin:0 .2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}pre>code{display:block;padding:1rem 1.5rem;white-space:pre}td,th{padding:12px 15px;text-align:left;border-bottom:1px solid #e1e1e1}td:first-child,th:first-child{padding-left:0}td:last-child,th:last-child{padding-right:0}.button,button{margin-bottom:1rem}fieldset,input,select,textarea{margin-bottom:1.5rem}blockquote,dl,figure,form,ol,p,pre,table,ul{margin-bottom:2.5rem}.u-full-width{width:100%;box-sizing:border-box}.u-max-full-width{max-width:100%;box-sizing:border-box}.u-pull-right{float:right}.u-pull-left{float:left}hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}.container:after,.row:after,.u-cf{content:\"\";display:table;clear:both}";
  styleInject(css);

  var css$1 = "#cvit-app{max-width:85%}#cvit-header{background:#666;display:none}#cvit-header .head-item{padding:1rem 0;text-align:center;color:#fff}#cvit-header .head-item:hover{background-color:#111}#cvit-header .active{background-color:#8fbc8f}#cvit-main{margin-top:1rem;margin-bottom:1rem;overflow-x:auto;overflow-y:hidden}#cvit-display{overflow-x:auto;max-width:91%}#cvit-controls hr{margin:.5rem 0 1rem}#cvit-controls .control-label{font-size:.75em;color:#666;text-align:center}#cvit-controls .cvit-button{padding:0;margin:0;border-radius:0}#cvit-controls .cvit-button:disabled{background:#8fbc8f;color:#fff}#cvit-controls .cvit-button i{position:relative;top:.5rem}.cvit-modal{overflow:hidden}.cvit-modal input{width:auto}.cvit-modal td{border:none}.cvit-modal .modal-confirm{margin:auto}.cvit-modal p{width:50%}#cvit-popover{position:absolute;display:inline-block;background:#fff;padding:1em;border:1px solid #666;border-radius:8px;overflow:hidden;height:40rem;width:20rem}#popover-contents{display:inline-block;position:relative;max-height:100%;width:100%;text-align:center;overflow-y:scroll}#cvit-footer{background:#666;text-align:center;font-size:1.5rem;color:#fff}#cvit-footer #toggle-title i{font-size:1.5rem;margin:0 2rem;color:#fff;position:relative;top:.25rem;transition:all .2s ease}#cvit-footer .collapsible{transition:max-height .2s ease-in-out;overflow:hidden}#cvit-footer .content{background:#fff;overflow-y:auto;transition:max-height .2s ease-in-out;color:#000}#cvit-footer .content td{border:none;width:7rem;padding:1rem 0 1rem 1rem}#cvit-footer .control-head{text-align:center}#cvit-footer .content table{margin-left:auto;margin-right:auto}.group-toggle{position:relative;width:80px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.group-toggle-label{display:block;overflow:hidden;cursor:pointer;border:2px solid #999;border-radius:0}.group-toggle-inner{display:block;width:200%;margin-left:-100%;transition:margin .3s ease-in 0s}.group-toggle-inner:after,.group-toggle-inner:before{display:block;float:left;width:50%;height:20px;padding:0;line-height:16px;font-size:1rem;color:#fff;box-sizing:border-box;border:2px solid transparent;background-clip:padding-box}.group-toggle-inner:before{content:\"ON\";padding-left:10px;background-color:#d4d4d4;color:#fff}.group-toggle-inner:after{content:\"OFF\";padding-right:10px;background-color:#d4d4d4;text-align:right}.group-toggle-switch{display:block;width:30px;margin:0;background:#a1a1a1;position:absolute;top:0;bottom:0;right:50px;transition:all .3s ease-in 0s}.group-toggle-checkbox:checked+.group-toggle-label .group-toggle-inner{margin-left:0}.group-toggle-checkbox:checked+.group-toggle-label .group-toggle-switch{right:0;background-color:#8fbc8f}.container input[type=checkbox],.group-toggle-checkbox{display:none}";
  styleInject(css$1);

  var VNode = function VNode() {};

  var options = {};

  var stack = [];

  var EMPTY_CHILDREN = [];

  function h(nodeName, attributes) {
  	var children = EMPTY_CHILDREN,
  	    lastSimple,
  	    child,
  	    simple,
  	    i;
  	for (i = arguments.length; i-- > 2;) {
  		stack.push(arguments[i]);
  	}
  	if (attributes && attributes.children != null) {
  		if (!stack.length) stack.push(attributes.children);
  		delete attributes.children;
  	}
  	while (stack.length) {
  		if ((child = stack.pop()) && child.pop !== undefined) {
  			for (i = child.length; i--;) {
  				stack.push(child[i]);
  			}
  		} else {
  			if (typeof child === 'boolean') child = null;

  			if (simple = typeof nodeName !== 'function') {
  				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
  			}

  			if (simple && lastSimple) {
  				children[children.length - 1] += child;
  			} else if (children === EMPTY_CHILDREN) {
  				children = [child];
  			} else {
  				children.push(child);
  			}

  			lastSimple = simple;
  		}
  	}

  	var p = new VNode();
  	p.nodeName = nodeName;
  	p.children = children;
  	p.attributes = attributes == null ? undefined : attributes;
  	p.key = attributes == null ? undefined : attributes.key;

  	return p;
  }

  function extend(obj, props) {
    for (var i in props) {
      obj[i] = props[i];
    }return obj;
  }

  function applyRef(ref, value) {
    if (ref != null) {
      if (typeof ref == 'function') ref(value);else ref.current = value;
    }
  }

  var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

  var items = [];

  function enqueueRender(component) {
  	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
  		(defer)(rerender);
  	}
  }

  function rerender() {
  	var p;
  	while (p = items.pop()) {
  		if (p._dirty) renderComponent(p);
  	}
  }

  function isSameNodeType(node, vnode, hydrating) {
  	if (typeof vnode === 'string' || typeof vnode === 'number') {
  		return node.splitText !== undefined;
  	}
  	if (typeof vnode.nodeName === 'string') {
  		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  	}
  	return hydrating || node._componentConstructor === vnode.nodeName;
  }

  function isNamedNode(node, nodeName) {
  	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
  }

  function getNodeProps(vnode) {
  	var props = extend({}, vnode.attributes);
  	props.children = vnode.children;

  	var defaultProps = vnode.nodeName.defaultProps;
  	if (defaultProps !== undefined) {
  		for (var i in defaultProps) {
  			if (props[i] === undefined) {
  				props[i] = defaultProps[i];
  			}
  		}
  	}

  	return props;
  }

  function createNode(nodeName, isSvg) {
  	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
  	node.normalizedNodeName = nodeName;
  	return node;
  }

  function removeNode(node) {
  	var parentNode = node.parentNode;
  	if (parentNode) parentNode.removeChild(node);
  }

  function setAccessor(node, name, old, value, isSvg) {
  	if (name === 'className') name = 'class';

  	if (name === 'key') ; else if (name === 'ref') {
  		applyRef(old, null);
  		applyRef(value, node);
  	} else if (name === 'class' && !isSvg) {
  		node.className = value || '';
  	} else if (name === 'style') {
  		if (!value || typeof value === 'string' || typeof old === 'string') {
  			node.style.cssText = value || '';
  		}
  		if (value && typeof value === 'object') {
  			if (typeof old !== 'string') {
  				for (var i in old) {
  					if (!(i in value)) node.style[i] = '';
  				}
  			}
  			for (var i in value) {
  				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
  			}
  		}
  	} else if (name === 'dangerouslySetInnerHTML') {
  		if (value) node.innerHTML = value.__html || '';
  	} else if (name[0] == 'o' && name[1] == 'n') {
  		var useCapture = name !== (name = name.replace(/Capture$/, ''));
  		name = name.toLowerCase().substring(2);
  		if (value) {
  			if (!old) node.addEventListener(name, eventProxy, useCapture);
  		} else {
  			node.removeEventListener(name, eventProxy, useCapture);
  		}
  		(node._listeners || (node._listeners = {}))[name] = value;
  	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
  		try {
  			node[name] = value == null ? '' : value;
  		} catch (e) {}
  		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
  	} else {
  		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

  		if (value == null || value === false) {
  			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
  		} else if (typeof value !== 'function') {
  			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
  		}
  	}
  }

  function eventProxy(e) {
  	return this._listeners[e.type](e);
  }

  var mounts = [];

  var diffLevel = 0;

  var isSvgMode = false;

  var hydrating = false;

  function flushMounts() {
  	var c;
  	while (c = mounts.shift()) {
  		if (c.componentDidMount) c.componentDidMount();
  	}
  }

  function diff(dom, vnode, context, mountAll, parent, componentRoot) {
  	if (!diffLevel++) {
  		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

  		hydrating = dom != null && !('__preactattr_' in dom);
  	}

  	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

  	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

  	if (! --diffLevel) {
  		hydrating = false;

  		if (!componentRoot) flushMounts();
  	}

  	return ret;
  }

  function idiff(dom, vnode, context, mountAll, componentRoot) {
  	var out = dom,
  	    prevSvgMode = isSvgMode;

  	if (vnode == null || typeof vnode === 'boolean') vnode = '';

  	if (typeof vnode === 'string' || typeof vnode === 'number') {
  		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
  			if (dom.nodeValue != vnode) {
  				dom.nodeValue = vnode;
  			}
  		} else {
  			out = document.createTextNode(vnode);
  			if (dom) {
  				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
  				recollectNodeTree(dom, true);
  			}
  		}

  		out['__preactattr_'] = true;

  		return out;
  	}

  	var vnodeName = vnode.nodeName;
  	if (typeof vnodeName === 'function') {
  		return buildComponentFromVNode(dom, vnode, context, mountAll);
  	}

  	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

  	vnodeName = String(vnodeName);
  	if (!dom || !isNamedNode(dom, vnodeName)) {
  		out = createNode(vnodeName, isSvgMode);

  		if (dom) {
  			while (dom.firstChild) {
  				out.appendChild(dom.firstChild);
  			}
  			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

  			recollectNodeTree(dom, true);
  		}
  	}

  	var fc = out.firstChild,
  	    props = out['__preactattr_'],
  	    vchildren = vnode.children;

  	if (props == null) {
  		props = out['__preactattr_'] = {};
  		for (var a = out.attributes, i = a.length; i--;) {
  			props[a[i].name] = a[i].value;
  		}
  	}

  	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
  		if (fc.nodeValue != vchildren[0]) {
  			fc.nodeValue = vchildren[0];
  		}
  	} else if (vchildren && vchildren.length || fc != null) {
  			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
  		}

  	diffAttributes(out, vnode.attributes, props);

  	isSvgMode = prevSvgMode;

  	return out;
  }

  function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
  	var originalChildren = dom.childNodes,
  	    children = [],
  	    keyed = {},
  	    keyedLen = 0,
  	    min = 0,
  	    len = originalChildren.length,
  	    childrenLen = 0,
  	    vlen = vchildren ? vchildren.length : 0,
  	    j,
  	    c,
  	    f,
  	    vchild,
  	    child;

  	if (len !== 0) {
  		for (var i = 0; i < len; i++) {
  			var _child = originalChildren[i],
  			    props = _child['__preactattr_'],
  			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
  			if (key != null) {
  				keyedLen++;
  				keyed[key] = _child;
  			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
  				children[childrenLen++] = _child;
  			}
  		}
  	}

  	if (vlen !== 0) {
  		for (var i = 0; i < vlen; i++) {
  			vchild = vchildren[i];
  			child = null;

  			var key = vchild.key;
  			if (key != null) {
  				if (keyedLen && keyed[key] !== undefined) {
  					child = keyed[key];
  					keyed[key] = undefined;
  					keyedLen--;
  				}
  			} else if (min < childrenLen) {
  					for (j = min; j < childrenLen; j++) {
  						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
  							child = c;
  							children[j] = undefined;
  							if (j === childrenLen - 1) childrenLen--;
  							if (j === min) min++;
  							break;
  						}
  					}
  				}

  			child = idiff(child, vchild, context, mountAll);

  			f = originalChildren[i];
  			if (child && child !== dom && child !== f) {
  				if (f == null) {
  					dom.appendChild(child);
  				} else if (child === f.nextSibling) {
  					removeNode(f);
  				} else {
  					dom.insertBefore(child, f);
  				}
  			}
  		}
  	}

  	if (keyedLen) {
  		for (var i in keyed) {
  			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
  		}
  	}

  	while (min <= childrenLen) {
  		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
  	}
  }

  function recollectNodeTree(node, unmountOnly) {
  	var component = node._component;
  	if (component) {
  		unmountComponent(component);
  	} else {
  		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

  		if (unmountOnly === false || node['__preactattr_'] == null) {
  			removeNode(node);
  		}

  		removeChildren(node);
  	}
  }

  function removeChildren(node) {
  	node = node.lastChild;
  	while (node) {
  		var next = node.previousSibling;
  		recollectNodeTree(node, true);
  		node = next;
  	}
  }

  function diffAttributes(dom, attrs, old) {
  	var name;

  	for (name in old) {
  		if (!(attrs && attrs[name] != null) && old[name] != null) {
  			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
  		}
  	}

  	for (name in attrs) {
  		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
  			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
  		}
  	}
  }

  var recyclerComponents = [];

  function createComponent(Ctor, props, context) {
  	var inst,
  	    i = recyclerComponents.length;

  	if (Ctor.prototype && Ctor.prototype.render) {
  		inst = new Ctor(props, context);
  		Component.call(inst, props, context);
  	} else {
  		inst = new Component(props, context);
  		inst.constructor = Ctor;
  		inst.render = doRender;
  	}

  	while (i--) {
  		if (recyclerComponents[i].constructor === Ctor) {
  			inst.nextBase = recyclerComponents[i].nextBase;
  			recyclerComponents.splice(i, 1);
  			return inst;
  		}
  	}

  	return inst;
  }

  function doRender(props, state, context) {
  	return this.constructor(props, context);
  }

  function setComponentProps(component, props, renderMode, context, mountAll) {
  	if (component._disable) return;
  	component._disable = true;

  	component.__ref = props.ref;
  	component.__key = props.key;
  	delete props.ref;
  	delete props.key;

  	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
  		if (!component.base || mountAll) {
  			if (component.componentWillMount) component.componentWillMount();
  		} else if (component.componentWillReceiveProps) {
  			component.componentWillReceiveProps(props, context);
  		}
  	}

  	if (context && context !== component.context) {
  		if (!component.prevContext) component.prevContext = component.context;
  		component.context = context;
  	}

  	if (!component.prevProps) component.prevProps = component.props;
  	component.props = props;

  	component._disable = false;

  	if (renderMode !== 0) {
  		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
  			renderComponent(component, 1, mountAll);
  		} else {
  			enqueueRender(component);
  		}
  	}

  	applyRef(component.__ref, component);
  }

  function renderComponent(component, renderMode, mountAll, isChild) {
  	if (component._disable) return;

  	var props = component.props,
  	    state = component.state,
  	    context = component.context,
  	    previousProps = component.prevProps || props,
  	    previousState = component.prevState || state,
  	    previousContext = component.prevContext || context,
  	    isUpdate = component.base,
  	    nextBase = component.nextBase,
  	    initialBase = isUpdate || nextBase,
  	    initialChildComponent = component._component,
  	    skip = false,
  	    snapshot = previousContext,
  	    rendered,
  	    inst,
  	    cbase;

  	if (component.constructor.getDerivedStateFromProps) {
  		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
  		component.state = state;
  	}

  	if (isUpdate) {
  		component.props = previousProps;
  		component.state = previousState;
  		component.context = previousContext;
  		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
  			skip = true;
  		} else if (component.componentWillUpdate) {
  			component.componentWillUpdate(props, state, context);
  		}
  		component.props = props;
  		component.state = state;
  		component.context = context;
  	}

  	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
  	component._dirty = false;

  	if (!skip) {
  		rendered = component.render(props, state, context);

  		if (component.getChildContext) {
  			context = extend(extend({}, context), component.getChildContext());
  		}

  		if (isUpdate && component.getSnapshotBeforeUpdate) {
  			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
  		}

  		var childComponent = rendered && rendered.nodeName,
  		    toUnmount,
  		    base;

  		if (typeof childComponent === 'function') {

  			var childProps = getNodeProps(rendered);
  			inst = initialChildComponent;

  			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
  				setComponentProps(inst, childProps, 1, context, false);
  			} else {
  				toUnmount = inst;

  				component._component = inst = createComponent(childComponent, childProps, context);
  				inst.nextBase = inst.nextBase || nextBase;
  				inst._parentComponent = component;
  				setComponentProps(inst, childProps, 0, context, false);
  				renderComponent(inst, 1, mountAll, true);
  			}

  			base = inst.base;
  		} else {
  			cbase = initialBase;

  			toUnmount = initialChildComponent;
  			if (toUnmount) {
  				cbase = component._component = null;
  			}

  			if (initialBase || renderMode === 1) {
  				if (cbase) cbase._component = null;
  				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
  			}
  		}

  		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
  			var baseParent = initialBase.parentNode;
  			if (baseParent && base !== baseParent) {
  				baseParent.replaceChild(base, initialBase);

  				if (!toUnmount) {
  					initialBase._component = null;
  					recollectNodeTree(initialBase, false);
  				}
  			}
  		}

  		if (toUnmount) {
  			unmountComponent(toUnmount);
  		}

  		component.base = base;
  		if (base && !isChild) {
  			var componentRef = component,
  			    t = component;
  			while (t = t._parentComponent) {
  				(componentRef = t).base = base;
  			}
  			base._component = componentRef;
  			base._componentConstructor = componentRef.constructor;
  		}
  	}

  	if (!isUpdate || mountAll) {
  		mounts.push(component);
  	} else if (!skip) {

  		if (component.componentDidUpdate) {
  			component.componentDidUpdate(previousProps, previousState, snapshot);
  		}
  	}

  	while (component._renderCallbacks.length) {
  		component._renderCallbacks.pop().call(component);
  	}if (!diffLevel && !isChild) flushMounts();
  }

  function buildComponentFromVNode(dom, vnode, context, mountAll) {
  	var c = dom && dom._component,
  	    originalComponent = c,
  	    oldDom = dom,
  	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
  	    isOwner = isDirectOwner,
  	    props = getNodeProps(vnode);
  	while (c && !isOwner && (c = c._parentComponent)) {
  		isOwner = c.constructor === vnode.nodeName;
  	}

  	if (c && isOwner && (!mountAll || c._component)) {
  		setComponentProps(c, props, 3, context, mountAll);
  		dom = c.base;
  	} else {
  		if (originalComponent && !isDirectOwner) {
  			unmountComponent(originalComponent);
  			dom = oldDom = null;
  		}

  		c = createComponent(vnode.nodeName, props, context);
  		if (dom && !c.nextBase) {
  			c.nextBase = dom;

  			oldDom = null;
  		}
  		setComponentProps(c, props, 1, context, mountAll);
  		dom = c.base;

  		if (oldDom && dom !== oldDom) {
  			oldDom._component = null;
  			recollectNodeTree(oldDom, false);
  		}
  	}

  	return dom;
  }

  function unmountComponent(component) {

  	var base = component.base;

  	component._disable = true;

  	if (component.componentWillUnmount) component.componentWillUnmount();

  	component.base = null;

  	var inner = component._component;
  	if (inner) {
  		unmountComponent(inner);
  	} else if (base) {
  		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

  		component.nextBase = base;

  		removeNode(base);
  		recyclerComponents.push(component);

  		removeChildren(base);
  	}

  	applyRef(component.__ref, null);
  }

  function Component(props, context) {
  	this._dirty = true;

  	this.context = context;

  	this.props = props;

  	this.state = this.state || {};

  	this._renderCallbacks = [];
  }

  extend(Component.prototype, {
  	setState: function setState(state, callback) {
  		if (!this.prevState) this.prevState = this.state;
  		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
  		if (callback) this._renderCallbacks.push(callback);
  		enqueueRender(this);
  	},
  	forceUpdate: function forceUpdate(callback) {
  		if (callback) this._renderCallbacks.push(callback);
  		renderComponent(this, 2);
  	},
  	render: function render() {}
  });

  function render(vnode, parent, merge) {
    return diff(merge, vnode, {}, false, parent, false);
  }

  class HeaderOption extends Component {
    static capitalise(str) {
      return str.replace(/\w\S*/g, word => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      });
    }

    onClick() {
      this.props.cvitModel.setActive(this.props.option);
    }

    render(props, state) {
      let compClass = 'three columns head-item';
      if (props.cvitModel.active === props.option) compClass += ' active';
      return h("div", {
        className: compClass,
        onClick: () => this.onClick()
      }, HeaderOption.capitalise(props.option));
    }

  }

  class CvitHeader extends Component {
    render(props, state) {
      return h("header", {
        className: 'row cvit',
        id: 'cvit-header'
      }, h(HeaderOption, {
        cvitModel: this.props.cvitModel,
        option: 'canvas'
      }), h(HeaderOption, {
        cvitModel: this.props.cvitModel,
        option: 'export'
      }), h(HeaderOption, {
        cvitModel: this.props.cvitModel,
        option: 'import'
      }), h(HeaderOption, {
        cvitModel: this.props.cvitModel,
        option: 'help'
      }));
    }

  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace (n) {
  	return n && n.default || n;
  }

  var empty = {};

  var empty$1 = /*#__PURE__*/Object.freeze({
    default: empty
  });

  // Reserved word lists for various dialects of the language

  var reservedWords = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict: "implements interface let package private protected public static yield",
    strictBind: "eval arguments"
  };

  // And the keywords

  var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

  var keywords = {
    5: ecma5AndLessKeywords,
    6: ecma5AndLessKeywords + " const class extends export import super"
  };

  var keywordRelationalOperator = /^in(stanceof)?$/;

  // ## Character categories

  // Big ugly regular expressions that match characters in the
  // whitespace, identifier, and identifier-start categories. These
  // are only applied when a character is found to actually have a
  // code point above 128.
  // Generated by `bin/generate-identifier-regex.js`.

  var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7b9\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab65\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
  var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

  nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

  // These are a run-length and offset encoded representation of the
  // >0xffff code points that are a valid part of identifiers. The
  // offset starts at 0x10000, and each pair of numbers represents an
  // offset to the next range, and then a size of the range. They were
  // generated by bin/generate-identifier-regex.js

  // eslint-disable-next-line comma-spacing
  var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,190,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,26,230,43,117,63,32,0,257,0,11,39,8,0,22,0,12,39,3,3,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,68,12,0,67,12,65,1,31,6129,15,754,9486,286,82,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541];

  // eslint-disable-next-line comma-spacing
  var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,280,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239];

  // This has a complexity linear to the value of the code. The
  // assumption is that looking up astral identifier characters is
  // rare.
  function isInAstralSet(code, set) {
    var pos = 0x10000;
    for (var i = 0; i < set.length; i += 2) {
      pos += set[i];
      if (pos > code) { return false }
      pos += set[i + 1];
      if (pos >= code) { return true }
    }
  }

  // Test whether a given character code starts an identifier.

  function isIdentifierStart(code, astral) {
    if (code < 65) { return code === 36 }
    if (code < 91) { return true }
    if (code < 97) { return code === 95 }
    if (code < 123) { return true }
    if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
    if (astral === false) { return false }
    return isInAstralSet(code, astralIdentifierStartCodes)
  }

  // Test whether a given character is part of an identifier.

  function isIdentifierChar(code, astral) {
    if (code < 48) { return code === 36 }
    if (code < 58) { return true }
    if (code < 65) { return false }
    if (code < 91) { return true }
    if (code < 97) { return code === 95 }
    if (code < 123) { return true }
    if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
    if (astral === false) { return false }
    return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
  }

  // ## Token types

  // The assignment of fine-grained, information-carrying type objects
  // allows the tokenizer to store the information it has about a
  // token in a way that is very cheap for the parser to look up.

  // All token type variables start with an underscore, to make them
  // easy to recognize.

  // The `beforeExpr` property is used to disambiguate between regular
  // expressions and divisions. It is set on all token types that can
  // be followed by an expression (thus, a slash after them would be a
  // regular expression).
  //
  // The `startsExpr` property is used to check if the token ends a
  // `yield` expression. It is set on all token types that either can
  // directly start an expression (like a quotation mark) or can
  // continue an expression (like the body of a string).
  //
  // `isLoop` marks a keyword as starting a loop, which is important
  // to know when parsing a label, in order to allow or disallow
  // continue jumps to that label.

  var TokenType = function TokenType(label, conf) {
    if ( conf === void 0 ) conf = {};

    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop || null;
    this.updateContext = null;
  };

  function binop(name, prec) {
    return new TokenType(name, {beforeExpr: true, binop: prec})
  }
  var beforeExpr = {beforeExpr: true};
  var startsExpr = {startsExpr: true};

  // Map keyword names to token types.

  var keywords$1 = {};

  // Succinct definitions of keyword token types
  function kw(name, options) {
    if ( options === void 0 ) options = {};

    options.keyword = name;
    return keywords$1[name] = new TokenType(name, options)
  }

  var types = {
    num: new TokenType("num", startsExpr),
    regexp: new TokenType("regexp", startsExpr),
    string: new TokenType("string", startsExpr),
    name: new TokenType("name", startsExpr),
    eof: new TokenType("eof"),

    // Punctuation token types.
    bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
    bracketR: new TokenType("]"),
    braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
    braceR: new TokenType("}"),
    parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
    parenR: new TokenType(")"),
    comma: new TokenType(",", beforeExpr),
    semi: new TokenType(";", beforeExpr),
    colon: new TokenType(":", beforeExpr),
    dot: new TokenType("."),
    question: new TokenType("?", beforeExpr),
    arrow: new TokenType("=>", beforeExpr),
    template: new TokenType("template"),
    invalidTemplate: new TokenType("invalidTemplate"),
    ellipsis: new TokenType("...", beforeExpr),
    backQuote: new TokenType("`", startsExpr),
    dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

    // Operators. These carry several kinds of properties to help the
    // parser use them properly (the presence of these properties is
    // what categorizes them as operators).
    //
    // `binop`, when present, specifies that this operator is a binary
    // operator, and will refer to its precedence.
    //
    // `prefix` and `postfix` mark the operator as a prefix or postfix
    // unary operator.
    //
    // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
    // binary operators with a very low precedence, that should result
    // in AssignmentExpression nodes.

    eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
    assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
    incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
    prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
    logicalOR: binop("||", 1),
    logicalAND: binop("&&", 2),
    bitwiseOR: binop("|", 3),
    bitwiseXOR: binop("^", 4),
    bitwiseAND: binop("&", 5),
    equality: binop("==/!=/===/!==", 6),
    relational: binop("</>/<=/>=", 7),
    bitShift: binop("<</>>/>>>", 8),
    plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
    modulo: binop("%", 10),
    star: binop("*", 10),
    slash: binop("/", 10),
    starstar: new TokenType("**", {beforeExpr: true}),

    // Keyword token types.
    _break: kw("break"),
    _case: kw("case", beforeExpr),
    _catch: kw("catch"),
    _continue: kw("continue"),
    _debugger: kw("debugger"),
    _default: kw("default", beforeExpr),
    _do: kw("do", {isLoop: true, beforeExpr: true}),
    _else: kw("else", beforeExpr),
    _finally: kw("finally"),
    _for: kw("for", {isLoop: true}),
    _function: kw("function", startsExpr),
    _if: kw("if"),
    _return: kw("return", beforeExpr),
    _switch: kw("switch"),
    _throw: kw("throw", beforeExpr),
    _try: kw("try"),
    _var: kw("var"),
    _const: kw("const"),
    _while: kw("while", {isLoop: true}),
    _with: kw("with"),
    _new: kw("new", {beforeExpr: true, startsExpr: true}),
    _this: kw("this", startsExpr),
    _super: kw("super", startsExpr),
    _class: kw("class", startsExpr),
    _extends: kw("extends", beforeExpr),
    _export: kw("export"),
    _import: kw("import"),
    _null: kw("null", startsExpr),
    _true: kw("true", startsExpr),
    _false: kw("false", startsExpr),
    _in: kw("in", {beforeExpr: true, binop: 7}),
    _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
    _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
    _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
    _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
  };

  // Matches a whole line break (where CRLF is considered a single
  // line break). Used to count lines.

  var lineBreak = /\r\n?|\n|\u2028|\u2029/;
  var lineBreakG = new RegExp(lineBreak.source, "g");

  function isNewLine(code, ecma2019String) {
    return code === 10 || code === 13 || (!ecma2019String && (code === 0x2028 || code === 0x2029))
  }

  var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

  var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

  var ref = Object.prototype;
  var hasOwnProperty = ref.hasOwnProperty;
  var toString = ref.toString;

  // Checks if an object has a property.

  function has(obj, propName) {
    return hasOwnProperty.call(obj, propName)
  }

  var isArray = Array.isArray || (function (obj) { return (
    toString.call(obj) === "[object Array]"
  ); });

  // These are used when `options.locations` is on, for the
  // `startLoc` and `endLoc` properties.

  var Position = function Position(line, col) {
    this.line = line;
    this.column = col;
  };

  Position.prototype.offset = function offset (n) {
    return new Position(this.line, this.column + n)
  };

  var SourceLocation = function SourceLocation(p, start, end) {
    this.start = start;
    this.end = end;
    if (p.sourceFile !== null) { this.source = p.sourceFile; }
  };

  // The `getLineInfo` function is mostly useful when the
  // `locations` option is off (for performance reasons) and you
  // want to find the line/column position for a given character
  // offset. `input` should be the code string that the offset refers
  // into.

  function getLineInfo(input, offset) {
    for (var line = 1, cur = 0;;) {
      lineBreakG.lastIndex = cur;
      var match = lineBreakG.exec(input);
      if (match && match.index < offset) {
        ++line;
        cur = match.index + match[0].length;
      } else {
        return new Position(line, offset - cur)
      }
    }
  }

  // A second optional argument can be given to further configure
  // the parser process. These options are recognized:

  var defaultOptions = {
    // `ecmaVersion` indicates the ECMAScript version to parse. Must
    // be either 3, 5, 6 (2015), 7 (2016), or 8 (2017). This influences support
    // for strict mode, the set of reserved words, and support for
    // new syntax features. The default is 7.
    ecmaVersion: 7,
    // `sourceType` indicates the mode the code should be parsed in.
    // Can be either `"script"` or `"module"`. This influences global
    // strict mode and parsing of `import` and `export` declarations.
    sourceType: "script",
    // `onInsertedSemicolon` can be a callback that will be called
    // when a semicolon is automatically inserted. It will be passed
    // th position of the comma as an offset, and if `locations` is
    // enabled, it is given the location as a `{line, column}` object
    // as second argument.
    onInsertedSemicolon: null,
    // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
    // trailing commas.
    onTrailingComma: null,
    // By default, reserved words are only enforced if ecmaVersion >= 5.
    // Set `allowReserved` to a boolean value to explicitly turn this on
    // an off. When this option has the value "never", reserved words
    // and keywords can also not be used as property names.
    allowReserved: null,
    // When enabled, a return at the top level is not considered an
    // error.
    allowReturnOutsideFunction: false,
    // When enabled, import/export statements are not constrained to
    // appearing at the top of the program.
    allowImportExportEverywhere: false,
    // When enabled, await identifiers are allowed to appear at the top-level scope,
    // but they are still not allowed in non-async functions.
    allowAwaitOutsideFunction: false,
    // When enabled, hashbang directive in the beginning of file
    // is allowed and treated as a line comment.
    allowHashBang: false,
    // When `locations` is on, `loc` properties holding objects with
    // `start` and `end` properties in `{line, column}` form (with
    // line being 1-based and column 0-based) will be attached to the
    // nodes.
    locations: false,
    // A function can be passed as `onToken` option, which will
    // cause Acorn to call that function with object in the same
    // format as tokens returned from `tokenizer().getToken()`. Note
    // that you are not allowed to call the parser from the
    // callback—that will corrupt its internal state.
    onToken: null,
    // A function can be passed as `onComment` option, which will
    // cause Acorn to call that function with `(block, text, start,
    // end)` parameters whenever a comment is skipped. `block` is a
    // boolean indicating whether this is a block (`/* */`) comment,
    // `text` is the content of the comment, and `start` and `end` are
    // character offsets that denote the start and end of the comment.
    // When the `locations` option is on, two more parameters are
    // passed, the full `{line, column}` locations of the start and
    // end of the comments. Note that you are not allowed to call the
    // parser from the callback—that will corrupt its internal state.
    onComment: null,
    // Nodes have their start and end characters offsets recorded in
    // `start` and `end` properties (directly on the node, rather than
    // the `loc` object, which holds line/column data. To also add a
    // [semi-standardized][range] `range` property holding a `[start,
    // end]` array with the same numbers, set the `ranges` option to
    // `true`.
    //
    // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
    ranges: false,
    // It is possible to parse multiple files into a single AST by
    // passing the tree produced by parsing the first file as
    // `program` option in subsequent parses. This will add the
    // toplevel forms of the parsed file to the `Program` (top) node
    // of an existing parse tree.
    program: null,
    // When `locations` is on, you can pass this to record the source
    // file in every node's `loc` object.
    sourceFile: null,
    // This value, if given, is stored in every node, whether
    // `locations` is on or off.
    directSourceFile: null,
    // When enabled, parenthesized expressions are represented by
    // (non-standard) ParenthesizedExpression nodes
    preserveParens: false,
    plugins: {}
  };

  // Interpret and default an options object

  function getOptions(opts) {
    var options = {};

    for (var opt in defaultOptions)
      { options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt]; }

    if (options.ecmaVersion >= 2015)
      { options.ecmaVersion -= 2009; }

    if (options.allowReserved == null)
      { options.allowReserved = options.ecmaVersion < 5; }

    if (isArray(options.onToken)) {
      var tokens = options.onToken;
      options.onToken = function (token) { return tokens.push(token); };
    }
    if (isArray(options.onComment))
      { options.onComment = pushComment(options, options.onComment); }

    return options
  }

  function pushComment(options, array) {
    return function(block, text, start, end, startLoc, endLoc) {
      var comment = {
        type: block ? "Block" : "Line",
        value: text,
        start: start,
        end: end
      };
      if (options.locations)
        { comment.loc = new SourceLocation(this, startLoc, endLoc); }
      if (options.ranges)
        { comment.range = [start, end]; }
      array.push(comment);
    }
  }

  // Registered plugins
  var plugins = {};

  function keywordRegexp(words) {
    return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
  }

  var Parser = function Parser(options, input, startPos) {
    this.options = options = getOptions(options);
    this.sourceFile = options.sourceFile;
    this.keywords = keywordRegexp(keywords[options.ecmaVersion >= 6 ? 6 : 5]);
    var reserved = "";
    if (!options.allowReserved) {
      for (var v = options.ecmaVersion;; v--)
        { if (reserved = reservedWords[v]) { break } }
      if (options.sourceType === "module") { reserved += " await"; }
    }
    this.reservedWords = keywordRegexp(reserved);
    var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
    this.reservedWordsStrict = keywordRegexp(reservedStrict);
    this.reservedWordsStrictBind = keywordRegexp(reservedStrict + " " + reservedWords.strictBind);
    this.input = String(input);

    // Used to signal to callers of `readWord1` whether the word
    // contained any escape sequences. This is needed because words with
    // escape sequences must not be interpreted as keywords.
    this.containsEsc = false;

    // Load plugins
    this.loadPlugins(options.plugins);

    // Set up token state

    // The current position of the tokenizer in the input.
    if (startPos) {
      this.pos = startPos;
      this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
      this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
    } else {
      this.pos = this.lineStart = 0;
      this.curLine = 1;
    }

    // Properties of the current token:
    // Its type
    this.type = types.eof;
    // For tokens that include more information than their type, the value
    this.value = null;
    // Its start and end offset
    this.start = this.end = this.pos;
    // And, if locations are used, the {line, column} object
    // corresponding to those offsets
    this.startLoc = this.endLoc = this.curPosition();

    // Position information for the previous token
    this.lastTokEndLoc = this.lastTokStartLoc = null;
    this.lastTokStart = this.lastTokEnd = this.pos;

    // The context stack is used to superficially track syntactic
    // context to predict whether a regular expression is allowed in a
    // given position.
    this.context = this.initialContext();
    this.exprAllowed = true;

    // Figure out if it's a module code.
    this.inModule = options.sourceType === "module";
    this.strict = this.inModule || this.strictDirective(this.pos);

    // Used to signify the start of a potential arrow function
    this.potentialArrowAt = -1;

    // Flags to track whether we are in a function, a generator, an async function.
    this.inFunction = this.inGenerator = this.inAsync = false;
    // Positions to delayed-check that yield/await does not exist in default parameters.
    this.yieldPos = this.awaitPos = 0;
    // Labels in scope.
    this.labels = [];

    // If enabled, skip leading hashbang line.
    if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
      { this.skipLineComment(2); }

    // Scope tracking for duplicate variable names (see scope.js)
    this.scopeStack = [];
    this.enterFunctionScope();

    // For RegExp validation
    this.regexpState = null;
  };

  // DEPRECATED Kept for backwards compatibility until 3.0 in case a plugin uses them
  Parser.prototype.isKeyword = function isKeyword (word) { return this.keywords.test(word) };
  Parser.prototype.isReservedWord = function isReservedWord (word) { return this.reservedWords.test(word) };

  Parser.prototype.extend = function extend (name, f) {
    this[name] = f(this[name]);
  };

  Parser.prototype.loadPlugins = function loadPlugins (pluginConfigs) {
      var this$1 = this;

    for (var name in pluginConfigs) {
      var plugin = plugins[name];
      if (!plugin) { throw new Error("Plugin '" + name + "' not found") }
      plugin(this$1, pluginConfigs[name]);
    }
  };

  Parser.prototype.parse = function parse () {
    var node = this.options.program || this.startNode();
    this.nextToken();
    return this.parseTopLevel(node)
  };

  var pp = Parser.prototype;

  // ## Parser utilities

  var literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;
  pp.strictDirective = function(start) {
    var this$1 = this;

    for (;;) {
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this$1.input)[0].length;
      var match = literal.exec(this$1.input.slice(start));
      if (!match) { return false }
      if ((match[1] || match[2]) === "use strict") { return true }
      start += match[0].length;
    }
  };

  // Predicate that tests whether the next token is of the given
  // type, and if yes, consumes it as a side effect.

  pp.eat = function(type) {
    if (this.type === type) {
      this.next();
      return true
    } else {
      return false
    }
  };

  // Tests whether parsed token is a contextual keyword.

  pp.isContextual = function(name) {
    return this.type === types.name && this.value === name && !this.containsEsc
  };

  // Consumes contextual keyword if possible.

  pp.eatContextual = function(name) {
    if (!this.isContextual(name)) { return false }
    this.next();
    return true
  };

  // Asserts that following token is given contextual keyword.

  pp.expectContextual = function(name) {
    if (!this.eatContextual(name)) { this.unexpected(); }
  };

  // Test whether a semicolon can be inserted at the current position.

  pp.canInsertSemicolon = function() {
    return this.type === types.eof ||
      this.type === types.braceR ||
      lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
  };

  pp.insertSemicolon = function() {
    if (this.canInsertSemicolon()) {
      if (this.options.onInsertedSemicolon)
        { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
      return true
    }
  };

  // Consume a semicolon, or, failing that, see if we are allowed to
  // pretend that there is a semicolon at this position.

  pp.semicolon = function() {
    if (!this.eat(types.semi) && !this.insertSemicolon()) { this.unexpected(); }
  };

  pp.afterTrailingComma = function(tokType, notNext) {
    if (this.type === tokType) {
      if (this.options.onTrailingComma)
        { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
      if (!notNext)
        { this.next(); }
      return true
    }
  };

  // Expect a token of a given type. If found, consume it, otherwise,
  // raise an unexpected token error.

  pp.expect = function(type) {
    this.eat(type) || this.unexpected();
  };

  // Raise an unexpected token error.

  pp.unexpected = function(pos) {
    this.raise(pos != null ? pos : this.start, "Unexpected token");
  };

  function DestructuringErrors() {
    this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
  }

  pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
    if (!refDestructuringErrors) { return }
    if (refDestructuringErrors.trailingComma > -1)
      { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
    var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
    if (parens > -1) { this.raiseRecoverable(parens, "Parenthesized pattern"); }
  };

  pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
    if (!refDestructuringErrors) { return false }
    var shorthandAssign = refDestructuringErrors.shorthandAssign;
    var doubleProto = refDestructuringErrors.doubleProto;
    if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
    if (shorthandAssign >= 0)
      { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
    if (doubleProto >= 0)
      { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
  };

  pp.checkYieldAwaitInDefaultParams = function() {
    if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
      { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
    if (this.awaitPos)
      { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
  };

  pp.isSimpleAssignTarget = function(expr) {
    if (expr.type === "ParenthesizedExpression")
      { return this.isSimpleAssignTarget(expr.expression) }
    return expr.type === "Identifier" || expr.type === "MemberExpression"
  };

  var pp$1 = Parser.prototype;

  // ### Statement parsing

  // Parse a program. Initializes the parser, reads any number of
  // statements, and wraps them in a Program node.  Optionally takes a
  // `program` argument.  If present, the statements will be appended
  // to its body instead of creating a new node.

  pp$1.parseTopLevel = function(node) {
    var this$1 = this;

    var exports = {};
    if (!node.body) { node.body = []; }
    while (this.type !== types.eof) {
      var stmt = this$1.parseStatement(true, true, exports);
      node.body.push(stmt);
    }
    this.adaptDirectivePrologue(node.body);
    this.next();
    if (this.options.ecmaVersion >= 6) {
      node.sourceType = this.options.sourceType;
    }
    return this.finishNode(node, "Program")
  };

  var loopLabel = {kind: "loop"};
  var switchLabel = {kind: "switch"};

  pp$1.isLet = function() {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
    if (nextCh === 91 || nextCh === 123) { return true } // '{' and '['
    if (isIdentifierStart(nextCh, true)) {
      var pos = next + 1;
      while (isIdentifierChar(this.input.charCodeAt(pos), true)) { ++pos; }
      var ident = this.input.slice(next, pos);
      if (!keywordRelationalOperator.test(ident)) { return true }
    }
    return false
  };

  // check 'async [no LineTerminator here] function'
  // - 'async /*foo*/ function' is OK.
  // - 'async /*\n*/ function' is invalid.
  pp$1.isAsyncFunction = function() {
    if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
      { return false }

    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length;
    return !lineBreak.test(this.input.slice(this.pos, next)) &&
      this.input.slice(next, next + 8) === "function" &&
      (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
  };

  // Parse a single statement.
  //
  // If expecting a statement and finding a slash operator, parse a
  // regular expression literal. This is to handle cases like
  // `if (foo) /blah/.exec(foo)`, where looking at the previous token
  // does not help.

  pp$1.parseStatement = function(declaration, topLevel, exports) {
    var starttype = this.type, node = this.startNode(), kind;

    if (this.isLet()) {
      starttype = types._var;
      kind = "let";
    }

    // Most types of statements are recognized by the keyword they
    // start with. Many are trivial to parse, some require a bit of
    // complexity.

    switch (starttype) {
    case types._break: case types._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
    case types._debugger: return this.parseDebuggerStatement(node)
    case types._do: return this.parseDoStatement(node)
    case types._for: return this.parseForStatement(node)
    case types._function:
      if (!declaration && this.options.ecmaVersion >= 6) { this.unexpected(); }
      return this.parseFunctionStatement(node, false)
    case types._class:
      if (!declaration) { this.unexpected(); }
      return this.parseClass(node, true)
    case types._if: return this.parseIfStatement(node)
    case types._return: return this.parseReturnStatement(node)
    case types._switch: return this.parseSwitchStatement(node)
    case types._throw: return this.parseThrowStatement(node)
    case types._try: return this.parseTryStatement(node)
    case types._const: case types._var:
      kind = kind || this.value;
      if (!declaration && kind !== "var") { this.unexpected(); }
      return this.parseVarStatement(node, kind)
    case types._while: return this.parseWhileStatement(node)
    case types._with: return this.parseWithStatement(node)
    case types.braceL: return this.parseBlock()
    case types.semi: return this.parseEmptyStatement(node)
    case types._export:
    case types._import:
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel)
          { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
        if (!this.inModule)
          { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
      }
      return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports)

      // If the statement does not start with a statement keyword or a
      // brace, it's an ExpressionStatement or LabeledStatement. We
      // simply start parsing an expression, and afterwards, if the
      // next token is a colon and the expression was a simple
      // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction()) {
        if (!declaration) { this.unexpected(); }
        this.next();
        return this.parseFunctionStatement(node, true)
      }

      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon))
        { return this.parseLabeledStatement(node, maybeName, expr) }
      else { return this.parseExpressionStatement(node, expr) }
    }
  };

  pp$1.parseBreakContinueStatement = function(node, keyword) {
    var this$1 = this;

    var isBreak = keyword === "break";
    this.next();
    if (this.eat(types.semi) || this.insertSemicolon()) { node.label = null; }
    else if (this.type !== types.name) { this.unexpected(); }
    else {
      node.label = this.parseIdent();
      this.semicolon();
    }

    // Verify that there is an actual destination to break or
    // continue to.
    var i = 0;
    for (; i < this.labels.length; ++i) {
      var lab = this$1.labels[i];
      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
        if (node.label && isBreak) { break }
      }
    }
    if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
  };

  pp$1.parseDebuggerStatement = function(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement")
  };

  pp$1.parseDoStatement = function(node) {
    this.next();
    this.labels.push(loopLabel);
    node.body = this.parseStatement(false);
    this.labels.pop();
    this.expect(types._while);
    node.test = this.parseParenExpression();
    if (this.options.ecmaVersion >= 6)
      { this.eat(types.semi); }
    else
      { this.semicolon(); }
    return this.finishNode(node, "DoWhileStatement")
  };

  // Disambiguating between a `for` and a `for`/`in` or `for`/`of`
  // loop is non-trivial. Basically, we have to parse the init `var`
  // statement or expression, disallowing the `in` operator (see
  // the second parameter to `parseExpression`), and then check
  // whether the next token is `in` or `of`. When there is no init
  // part (semicolon immediately after the opening parenthesis), it
  // is a regular `for` loop.

  pp$1.parseForStatement = function(node) {
    this.next();
    var awaitAt = (this.options.ecmaVersion >= 9 && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) && this.eatContextual("await")) ? this.lastTokStart : -1;
    this.labels.push(loopLabel);
    this.enterLexicalScope();
    this.expect(types.parenL);
    if (this.type === types.semi) {
      if (awaitAt > -1) { this.unexpected(awaitAt); }
      return this.parseFor(node, null)
    }
    var isLet = this.isLet();
    if (this.type === types._var || this.type === types._const || isLet) {
      var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
      this.next();
      this.parseVar(init$1, true, kind);
      this.finishNode(init$1, "VariableDeclaration");
      if ((this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1 &&
          !(kind !== "var" && init$1.declarations[0].init)) {
        if (this.options.ecmaVersion >= 9) {
          if (this.type === types._in) {
            if (awaitAt > -1) { this.unexpected(awaitAt); }
          } else { node.await = awaitAt > -1; }
        }
        return this.parseForIn(node, init$1)
      }
      if (awaitAt > -1) { this.unexpected(awaitAt); }
      return this.parseFor(node, init$1)
    }
    var refDestructuringErrors = new DestructuringErrors;
    var init = this.parseExpression(true, refDestructuringErrors);
    if (this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) { this.unexpected(awaitAt); }
        } else { node.await = awaitAt > -1; }
      }
      this.toAssignable(init, false, refDestructuringErrors);
      this.checkLVal(init);
      return this.parseForIn(node, init)
    } else {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, init)
  };

  pp$1.parseFunctionStatement = function(node, isAsync) {
    this.next();
    return this.parseFunction(node, true, false, isAsync)
  };

  pp$1.parseIfStatement = function(node) {
    this.next();
    node.test = this.parseParenExpression();
    // allow function declarations in branches, but only in non-strict mode
    node.consequent = this.parseStatement(!this.strict && this.type === types._function);
    node.alternate = this.eat(types._else) ? this.parseStatement(!this.strict && this.type === types._function) : null;
    return this.finishNode(node, "IfStatement")
  };

  pp$1.parseReturnStatement = function(node) {
    if (!this.inFunction && !this.options.allowReturnOutsideFunction)
      { this.raise(this.start, "'return' outside of function"); }
    this.next();

    // In `return` (and `break`/`continue`), the keywords with
    // optional arguments, we eagerly look for a semicolon or the
    // possibility to insert one.

    if (this.eat(types.semi) || this.insertSemicolon()) { node.argument = null; }
    else { node.argument = this.parseExpression(); this.semicolon(); }
    return this.finishNode(node, "ReturnStatement")
  };

  pp$1.parseSwitchStatement = function(node) {
    var this$1 = this;

    this.next();
    node.discriminant = this.parseParenExpression();
    node.cases = [];
    this.expect(types.braceL);
    this.labels.push(switchLabel);
    this.enterLexicalScope();

    // Statements under must be grouped (by label) in SwitchCase
    // nodes. `cur` is used to keep the node that we are currently
    // adding statements to.

    var cur;
    for (var sawDefault = false; this.type !== types.braceR;) {
      if (this$1.type === types._case || this$1.type === types._default) {
        var isCase = this$1.type === types._case;
        if (cur) { this$1.finishNode(cur, "SwitchCase"); }
        node.cases.push(cur = this$1.startNode());
        cur.consequent = [];
        this$1.next();
        if (isCase) {
          cur.test = this$1.parseExpression();
        } else {
          if (sawDefault) { this$1.raiseRecoverable(this$1.lastTokStart, "Multiple default clauses"); }
          sawDefault = true;
          cur.test = null;
        }
        this$1.expect(types.colon);
      } else {
        if (!cur) { this$1.unexpected(); }
        cur.consequent.push(this$1.parseStatement(true));
      }
    }
    this.exitLexicalScope();
    if (cur) { this.finishNode(cur, "SwitchCase"); }
    this.next(); // Closing brace
    this.labels.pop();
    return this.finishNode(node, "SwitchStatement")
  };

  pp$1.parseThrowStatement = function(node) {
    this.next();
    if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
      { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement")
  };

  // Reused empty array added for node fields that are always empty.

  var empty$2 = [];

  pp$1.parseTryStatement = function(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;
    if (this.type === types._catch) {
      var clause = this.startNode();
      this.next();
      if (this.eat(types.parenL)) {
        clause.param = this.parseBindingAtom();
        this.enterLexicalScope();
        this.checkLVal(clause.param, "let");
        this.expect(types.parenR);
      } else {
        if (this.options.ecmaVersion < 10) { this.unexpected(); }
        clause.param = null;
        this.enterLexicalScope();
      }
      clause.body = this.parseBlock(false);
      this.exitLexicalScope();
      node.handler = this.finishNode(clause, "CatchClause");
    }
    node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
    if (!node.handler && !node.finalizer)
      { this.raise(node.start, "Missing catch or finally clause"); }
    return this.finishNode(node, "TryStatement")
  };

  pp$1.parseVarStatement = function(node, kind) {
    this.next();
    this.parseVar(node, false, kind);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration")
  };

  pp$1.parseWhileStatement = function(node) {
    this.next();
    node.test = this.parseParenExpression();
    this.labels.push(loopLabel);
    node.body = this.parseStatement(false);
    this.labels.pop();
    return this.finishNode(node, "WhileStatement")
  };

  pp$1.parseWithStatement = function(node) {
    if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
    this.next();
    node.object = this.parseParenExpression();
    node.body = this.parseStatement(false);
    return this.finishNode(node, "WithStatement")
  };

  pp$1.parseEmptyStatement = function(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement")
  };

  pp$1.parseLabeledStatement = function(node, maybeName, expr) {
    var this$1 = this;

    for (var i$1 = 0, list = this$1.labels; i$1 < list.length; i$1 += 1)
      {
      var label = list[i$1];

      if (label.name === maybeName)
        { this$1.raise(expr.start, "Label '" + maybeName + "' is already declared");
    } }
    var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
    for (var i = this.labels.length - 1; i >= 0; i--) {
      var label$1 = this$1.labels[i];
      if (label$1.statementStart === node.start) {
        // Update information about previous labels on this node
        label$1.statementStart = this$1.start;
        label$1.kind = kind;
      } else { break }
    }
    this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
    node.body = this.parseStatement(true);
    if (node.body.type === "ClassDeclaration" ||
        node.body.type === "VariableDeclaration" && node.body.kind !== "var" ||
        node.body.type === "FunctionDeclaration" && (this.strict || node.body.generator || node.body.async))
      { this.raiseRecoverable(node.body.start, "Invalid labeled declaration"); }
    this.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement")
  };

  pp$1.parseExpressionStatement = function(node, expr) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement")
  };

  // Parse a semicolon-enclosed block of statements, handling `"use
  // strict"` declarations when `allowStrict` is true (used for
  // function bodies).

  pp$1.parseBlock = function(createNewLexicalScope) {
    var this$1 = this;
    if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;

    var node = this.startNode();
    node.body = [];
    this.expect(types.braceL);
    if (createNewLexicalScope) {
      this.enterLexicalScope();
    }
    while (!this.eat(types.braceR)) {
      var stmt = this$1.parseStatement(true);
      node.body.push(stmt);
    }
    if (createNewLexicalScope) {
      this.exitLexicalScope();
    }
    return this.finishNode(node, "BlockStatement")
  };

  // Parse a regular `for` loop. The disambiguation code in
  // `parseStatement` will already have parsed the init statement or
  // expression.

  pp$1.parseFor = function(node, init) {
    node.init = init;
    this.expect(types.semi);
    node.test = this.type === types.semi ? null : this.parseExpression();
    this.expect(types.semi);
    node.update = this.type === types.parenR ? null : this.parseExpression();
    this.expect(types.parenR);
    this.exitLexicalScope();
    node.body = this.parseStatement(false);
    this.labels.pop();
    return this.finishNode(node, "ForStatement")
  };

  // Parse a `for`/`in` and `for`/`of` loop, which are almost
  // same from parser's perspective.

  pp$1.parseForIn = function(node, init) {
    var type = this.type === types._in ? "ForInStatement" : "ForOfStatement";
    this.next();
    if (type === "ForInStatement") {
      if (init.type === "AssignmentPattern" ||
        (init.type === "VariableDeclaration" && init.declarations[0].init != null &&
         (this.strict || init.declarations[0].id.type !== "Identifier")))
        { this.raise(init.start, "Invalid assignment in for-in loop head"); }
    }
    node.left = init;
    node.right = type === "ForInStatement" ? this.parseExpression() : this.parseMaybeAssign();
    this.expect(types.parenR);
    this.exitLexicalScope();
    node.body = this.parseStatement(false);
    this.labels.pop();
    return this.finishNode(node, type)
  };

  // Parse a list of variable declarations.

  pp$1.parseVar = function(node, isFor, kind) {
    var this$1 = this;

    node.declarations = [];
    node.kind = kind;
    for (;;) {
      var decl = this$1.startNode();
      this$1.parseVarId(decl, kind);
      if (this$1.eat(types.eq)) {
        decl.init = this$1.parseMaybeAssign(isFor);
      } else if (kind === "const" && !(this$1.type === types._in || (this$1.options.ecmaVersion >= 6 && this$1.isContextual("of")))) {
        this$1.unexpected();
      } else if (decl.id.type !== "Identifier" && !(isFor && (this$1.type === types._in || this$1.isContextual("of")))) {
        this$1.raise(this$1.lastTokEnd, "Complex binding patterns require an initialization value");
      } else {
        decl.init = null;
      }
      node.declarations.push(this$1.finishNode(decl, "VariableDeclarator"));
      if (!this$1.eat(types.comma)) { break }
    }
    return node
  };

  pp$1.parseVarId = function(decl, kind) {
    decl.id = this.parseBindingAtom(kind);
    this.checkLVal(decl.id, kind, false);
  };

  // Parse a function declaration or literal (depending on the
  // `isStatement` parameter).

  pp$1.parseFunction = function(node, isStatement, allowExpressionBody, isAsync) {
    this.initFunction(node);
    if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync)
      { node.generator = this.eat(types.star); }
    if (this.options.ecmaVersion >= 8)
      { node.async = !!isAsync; }

    if (isStatement) {
      node.id = isStatement === "nullableID" && this.type !== types.name ? null : this.parseIdent();
      if (node.id) {
        this.checkLVal(node.id, this.inModule && !this.inFunction ? "let" : "var");
      }
    }

    var oldInGen = this.inGenerator, oldInAsync = this.inAsync,
        oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction;
    this.inGenerator = node.generator;
    this.inAsync = node.async;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.inFunction = true;
    this.enterFunctionScope();

    if (!isStatement)
      { node.id = this.type === types.name ? this.parseIdent() : null; }

    this.parseFunctionParams(node);
    this.parseFunctionBody(node, allowExpressionBody);

    this.inGenerator = oldInGen;
    this.inAsync = oldInAsync;
    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.inFunction = oldInFunc;
    return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression")
  };

  pp$1.parseFunctionParams = function(node) {
    this.expect(types.parenL);
    node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
  };

  // Parse a class declaration or literal (depending on the
  // `isStatement` parameter).

  pp$1.parseClass = function(node, isStatement) {
    var this$1 = this;

    this.next();

    this.parseClassId(node, isStatement);
    this.parseClassSuper(node);
    var classBody = this.startNode();
    var hadConstructor = false;
    classBody.body = [];
    this.expect(types.braceL);
    while (!this.eat(types.braceR)) {
      var member = this$1.parseClassMember(classBody);
      if (member && member.type === "MethodDefinition" && member.kind === "constructor") {
        if (hadConstructor) { this$1.raise(member.start, "Duplicate constructor in the same class"); }
        hadConstructor = true;
      }
    }
    node.body = this.finishNode(classBody, "ClassBody");
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
  };

  pp$1.parseClassMember = function(classBody) {
    var this$1 = this;

    if (this.eat(types.semi)) { return null }

    var method = this.startNode();
    var tryContextual = function (k, noLineBreak) {
      if ( noLineBreak === void 0 ) noLineBreak = false;

      var start = this$1.start, startLoc = this$1.startLoc;
      if (!this$1.eatContextual(k)) { return false }
      if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) { return true }
      if (method.key) { this$1.unexpected(); }
      method.computed = false;
      method.key = this$1.startNodeAt(start, startLoc);
      method.key.name = k;
      this$1.finishNode(method.key, "Identifier");
      return false
    };

    method.kind = "method";
    method.static = tryContextual("static");
    var isGenerator = this.eat(types.star);
    var isAsync = false;
    if (!isGenerator) {
      if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
        isAsync = true;
        isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
      } else if (tryContextual("get")) {
        method.kind = "get";
      } else if (tryContextual("set")) {
        method.kind = "set";
      }
    }
    if (!method.key) { this.parsePropertyName(method); }
    var key = method.key;
    if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" ||
        key.type === "Literal" && key.value === "constructor")) {
      if (method.kind !== "method") { this.raise(key.start, "Constructor can't have get/set modifier"); }
      if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
      if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
      method.kind = "constructor";
    } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
      this.raise(key.start, "Classes may not have a static property named prototype");
    }
    this.parseClassMethod(classBody, method, isGenerator, isAsync);
    if (method.kind === "get" && method.value.params.length !== 0)
      { this.raiseRecoverable(method.value.start, "getter should have no params"); }
    if (method.kind === "set" && method.value.params.length !== 1)
      { this.raiseRecoverable(method.value.start, "setter should have exactly one param"); }
    if (method.kind === "set" && method.value.params[0].type === "RestElement")
      { this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params"); }
    return method
  };

  pp$1.parseClassMethod = function(classBody, method, isGenerator, isAsync) {
    method.value = this.parseMethod(isGenerator, isAsync);
    classBody.body.push(this.finishNode(method, "MethodDefinition"));
  };

  pp$1.parseClassId = function(node, isStatement) {
    node.id = this.type === types.name ? this.parseIdent() : isStatement === true ? this.unexpected() : null;
  };

  pp$1.parseClassSuper = function(node) {
    node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
  };

  // Parses module export declaration.

  pp$1.parseExport = function(node, exports) {
    var this$1 = this;

    this.next();
    // export * from '...'
    if (this.eat(types.star)) {
      this.expectContextual("from");
      if (this.type !== types.string) { this.unexpected(); }
      node.source = this.parseExprAtom();
      this.semicolon();
      return this.finishNode(node, "ExportAllDeclaration")
    }
    if (this.eat(types._default)) { // export default ...
      this.checkExport(exports, "default", this.lastTokStart);
      var isAsync;
      if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
        var fNode = this.startNode();
        this.next();
        if (isAsync) { this.next(); }
        node.declaration = this.parseFunction(fNode, "nullableID", false, isAsync);
      } else if (this.type === types._class) {
        var cNode = this.startNode();
        node.declaration = this.parseClass(cNode, "nullableID");
      } else {
        node.declaration = this.parseMaybeAssign();
        this.semicolon();
      }
      return this.finishNode(node, "ExportDefaultDeclaration")
    }
    // export var|const|let|function|class ...
    if (this.shouldParseExportStatement()) {
      node.declaration = this.parseStatement(true);
      if (node.declaration.type === "VariableDeclaration")
        { this.checkVariableExport(exports, node.declaration.declarations); }
      else
        { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
      node.specifiers = [];
      node.source = null;
    } else { // export { x, y as z } [from '...']
      node.declaration = null;
      node.specifiers = this.parseExportSpecifiers(exports);
      if (this.eatContextual("from")) {
        if (this.type !== types.string) { this.unexpected(); }
        node.source = this.parseExprAtom();
      } else {
        // check for keywords used as local names
        for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
          var spec = list[i];

          this$1.checkUnreserved(spec.local);
        }

        node.source = null;
      }
      this.semicolon();
    }
    return this.finishNode(node, "ExportNamedDeclaration")
  };

  pp$1.checkExport = function(exports, name, pos) {
    if (!exports) { return }
    if (has(exports, name))
      { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
    exports[name] = true;
  };

  pp$1.checkPatternExport = function(exports, pat) {
    var this$1 = this;

    var type = pat.type;
    if (type === "Identifier")
      { this.checkExport(exports, pat.name, pat.start); }
    else if (type === "ObjectPattern")
      { for (var i = 0, list = pat.properties; i < list.length; i += 1)
        {
          var prop = list[i];

          this$1.checkPatternExport(exports, prop);
        } }
    else if (type === "ArrayPattern")
      { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
        var elt = list$1[i$1];

          if (elt) { this$1.checkPatternExport(exports, elt); }
      } }
    else if (type === "Property")
      { this.checkPatternExport(exports, pat.value); }
    else if (type === "AssignmentPattern")
      { this.checkPatternExport(exports, pat.left); }
    else if (type === "RestElement")
      { this.checkPatternExport(exports, pat.argument); }
    else if (type === "ParenthesizedExpression")
      { this.checkPatternExport(exports, pat.expression); }
  };

  pp$1.checkVariableExport = function(exports, decls) {
    var this$1 = this;

    if (!exports) { return }
    for (var i = 0, list = decls; i < list.length; i += 1)
      {
      var decl = list[i];

      this$1.checkPatternExport(exports, decl.id);
    }
  };

  pp$1.shouldParseExportStatement = function() {
    return this.type.keyword === "var" ||
      this.type.keyword === "const" ||
      this.type.keyword === "class" ||
      this.type.keyword === "function" ||
      this.isLet() ||
      this.isAsyncFunction()
  };

  // Parses a comma-separated list of module exports.

  pp$1.parseExportSpecifiers = function(exports) {
    var this$1 = this;

    var nodes = [], first = true;
    // export { x, y as z } [from '...']
    this.expect(types.braceL);
    while (!this.eat(types.braceR)) {
      if (!first) {
        this$1.expect(types.comma);
        if (this$1.afterTrailingComma(types.braceR)) { break }
      } else { first = false; }

      var node = this$1.startNode();
      node.local = this$1.parseIdent(true);
      node.exported = this$1.eatContextual("as") ? this$1.parseIdent(true) : node.local;
      this$1.checkExport(exports, node.exported.name, node.exported.start);
      nodes.push(this$1.finishNode(node, "ExportSpecifier"));
    }
    return nodes
  };

  // Parses import declaration.

  pp$1.parseImport = function(node) {
    this.next();
    // import '...'
    if (this.type === types.string) {
      node.specifiers = empty$2;
      node.source = this.parseExprAtom();
    } else {
      node.specifiers = this.parseImportSpecifiers();
      this.expectContextual("from");
      node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
    }
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration")
  };

  // Parses a comma-separated list of module imports.

  pp$1.parseImportSpecifiers = function() {
    var this$1 = this;

    var nodes = [], first = true;
    if (this.type === types.name) {
      // import defaultObj, { x, y as z } from '...'
      var node = this.startNode();
      node.local = this.parseIdent();
      this.checkLVal(node.local, "let");
      nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
      if (!this.eat(types.comma)) { return nodes }
    }
    if (this.type === types.star) {
      var node$1 = this.startNode();
      this.next();
      this.expectContextual("as");
      node$1.local = this.parseIdent();
      this.checkLVal(node$1.local, "let");
      nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
      return nodes
    }
    this.expect(types.braceL);
    while (!this.eat(types.braceR)) {
      if (!first) {
        this$1.expect(types.comma);
        if (this$1.afterTrailingComma(types.braceR)) { break }
      } else { first = false; }

      var node$2 = this$1.startNode();
      node$2.imported = this$1.parseIdent(true);
      if (this$1.eatContextual("as")) {
        node$2.local = this$1.parseIdent();
      } else {
        this$1.checkUnreserved(node$2.imported);
        node$2.local = node$2.imported;
      }
      this$1.checkLVal(node$2.local, "let");
      nodes.push(this$1.finishNode(node$2, "ImportSpecifier"));
    }
    return nodes
  };

  // Set `ExpressionStatement#directive` property for directive prologues.
  pp$1.adaptDirectivePrologue = function(statements) {
    for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
      statements[i].directive = statements[i].expression.raw.slice(1, -1);
    }
  };
  pp$1.isDirectiveCandidate = function(statement) {
    return (
      statement.type === "ExpressionStatement" &&
      statement.expression.type === "Literal" &&
      typeof statement.expression.value === "string" &&
      // Reject parenthesized strings.
      (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
    )
  };

  var pp$2 = Parser.prototype;

  // Convert existing expression atom to assignable pattern
  // if possible.

  pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
    var this$1 = this;

    if (this.options.ecmaVersion >= 6 && node) {
      switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await")
          { this.raise(node.start, "Can not use 'await' as identifier inside an async function"); }
        break

      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break

      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
        for (var i = 0, list = node.properties; i < list.length; i += 1) {
          var prop = list[i];

        this$1.toAssignable(prop, isBinding);
          // Early error:
          //   AssignmentRestProperty[Yield, Await] :
          //     `...` DestructuringAssignmentTarget[Yield, Await]
          //
          //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
          if (
            prop.type === "RestElement" &&
            (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
          ) {
            this$1.raise(prop.argument.start, "Unexpected token");
          }
        }
        break

      case "Property":
        // AssignmentProperty has type === "Property"
        if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
        this.toAssignable(node.value, isBinding);
        break

      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
        this.toAssignableList(node.elements, isBinding);
        break

      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern")
          { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
        break

      case "AssignmentExpression":
        if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
        // falls through to AssignmentPattern

      case "AssignmentPattern":
        break

      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding);
        break

      case "MemberExpression":
        if (!isBinding) { break }

      default:
        this.raise(node.start, "Assigning to rvalue");
      }
    } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
    return node
  };

  // Convert list of expression atoms to binding list.

  pp$2.toAssignableList = function(exprList, isBinding) {
    var this$1 = this;

    var end = exprList.length;
    for (var i = 0; i < end; i++) {
      var elt = exprList[i];
      if (elt) { this$1.toAssignable(elt, isBinding); }
    }
    if (end) {
      var last = exprList[end - 1];
      if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
        { this.unexpected(last.argument.start); }
    }
    return exprList
  };

  // Parses spread element.

  pp$2.parseSpread = function(refDestructuringErrors) {
    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    return this.finishNode(node, "SpreadElement")
  };

  pp$2.parseRestBinding = function() {
    var node = this.startNode();
    this.next();

    // RestElement inside of a function parameter must be an identifier
    if (this.options.ecmaVersion === 6 && this.type !== types.name)
      { this.unexpected(); }

    node.argument = this.parseBindingAtom();

    return this.finishNode(node, "RestElement")
  };

  // Parses lvalue (assignable) atom.

  pp$2.parseBindingAtom = function() {
    if (this.options.ecmaVersion >= 6) {
      switch (this.type) {
      case types.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern")

      case types.braceL:
        return this.parseObj(true)
      }
    }
    return this.parseIdent()
  };

  pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
    var this$1 = this;

    var elts = [], first = true;
    while (!this.eat(close)) {
      if (first) { first = false; }
      else { this$1.expect(types.comma); }
      if (allowEmpty && this$1.type === types.comma) {
        elts.push(null);
      } else if (allowTrailingComma && this$1.afterTrailingComma(close)) {
        break
      } else if (this$1.type === types.ellipsis) {
        var rest = this$1.parseRestBinding();
        this$1.parseBindingListItem(rest);
        elts.push(rest);
        if (this$1.type === types.comma) { this$1.raise(this$1.start, "Comma is not permitted after the rest element"); }
        this$1.expect(close);
        break
      } else {
        var elem = this$1.parseMaybeDefault(this$1.start, this$1.startLoc);
        this$1.parseBindingListItem(elem);
        elts.push(elem);
      }
    }
    return elts
  };

  pp$2.parseBindingListItem = function(param) {
    return param
  };

  // Parses assignment pattern around given atom if possible.

  pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
    left = left || this.parseBindingAtom();
    if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) { return left }
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssign();
    return this.finishNode(node, "AssignmentPattern")
  };

  // Verify that a node is an lval — something that can be assigned
  // to.
  // bindingType can be either:
  // 'var' indicating that the lval creates a 'var' binding
  // 'let' indicating that the lval creates a lexical ('let' or 'const') binding
  // 'none' indicating that the binding should be checked for illegal identifiers, but not for duplicate references

  pp$2.checkLVal = function(expr, bindingType, checkClashes) {
    var this$1 = this;

    switch (expr.type) {
    case "Identifier":
      if (this.strict && this.reservedWordsStrictBind.test(expr.name))
        { this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
      if (checkClashes) {
        if (has(checkClashes, expr.name))
          { this.raiseRecoverable(expr.start, "Argument name clash"); }
        checkClashes[expr.name] = true;
      }
      if (bindingType && bindingType !== "none") {
        if (
          bindingType === "var" && !this.canDeclareVarName(expr.name) ||
          bindingType !== "var" && !this.canDeclareLexicalName(expr.name)
        ) {
          this.raiseRecoverable(expr.start, ("Identifier '" + (expr.name) + "' has already been declared"));
        }
        if (bindingType === "var") {
          this.declareVarName(expr.name);
        } else {
          this.declareLexicalName(expr.name);
        }
      }
      break

    case "MemberExpression":
      if (bindingType) { this.raiseRecoverable(expr.start, "Binding member expression"); }
      break

    case "ObjectPattern":
      for (var i = 0, list = expr.properties; i < list.length; i += 1)
        {
      var prop = list[i];

      this$1.checkLVal(prop, bindingType, checkClashes);
    }
      break

    case "Property":
      // AssignmentProperty has type === "Property"
      this.checkLVal(expr.value, bindingType, checkClashes);
      break

    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];

      if (elem) { this$1.checkLVal(elem, bindingType, checkClashes); }
      }
      break

    case "AssignmentPattern":
      this.checkLVal(expr.left, bindingType, checkClashes);
      break

    case "RestElement":
      this.checkLVal(expr.argument, bindingType, checkClashes);
      break

    case "ParenthesizedExpression":
      this.checkLVal(expr.expression, bindingType, checkClashes);
      break

    default:
      this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
    }
  };

  // A recursive descent parser operates by defining functions for all
  // syntactic elements, and recursively calling those, each function
  // advancing the input stream and returning an AST node. Precedence
  // of constructs (for example, the fact that `!x[1]` means `!(x[1])`
  // instead of `(!x)[1]` is handled by the fact that the parser
  // function that parses unary prefix operators is called first, and
  // in turn calls the function that parses `[]` subscripts — that
  // way, it'll receive the node for `x[1]` already parsed, and wraps
  // *that* in the unary operator node.
  //
  // Acorn uses an [operator precedence parser][opp] to handle binary
  // operator precedence, because it is much more compact than using
  // the technique outlined above, which uses different, nesting
  // functions to specify precedence, for all of the ten binary
  // precedence levels that JavaScript defines.
  //
  // [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

  var pp$3 = Parser.prototype;

  // Check if property name clashes with already added.
  // Object/class getters and setters are not allowed to clash —
  // either with each other or with an init property — and in
  // strict mode, init properties are also not allowed to be repeated.

  pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
      { return }
    if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
      { return }
    var key = prop.key;
    var name;
    switch (key.type) {
    case "Identifier": name = key.name; break
    case "Literal": name = String(key.value); break
    default: return
    }
    var kind = prop.kind;
    if (this.options.ecmaVersion >= 6) {
      if (name === "__proto__" && kind === "init") {
        if (propHash.proto) {
          if (refDestructuringErrors && refDestructuringErrors.doubleProto < 0) { refDestructuringErrors.doubleProto = key.start; }
          // Backwards-compat kludge. Can be removed in version 6.0
          else { this.raiseRecoverable(key.start, "Redefinition of __proto__ property"); }
        }
        propHash.proto = true;
      }
      return
    }
    name = "$" + name;
    var other = propHash[name];
    if (other) {
      var redefinition;
      if (kind === "init") {
        redefinition = this.strict && other.init || other.get || other.set;
      } else {
        redefinition = other.init || other[kind];
      }
      if (redefinition)
        { this.raiseRecoverable(key.start, "Redefinition of property"); }
    } else {
      other = propHash[name] = {
        init: false,
        get: false,
        set: false
      };
    }
    other[kind] = true;
  };

  // ### Expression parsing

  // These nest, from the most general expression type at the top to
  // 'atomic', nondivisible expression types at the bottom. Most of
  // the functions will simply let the function(s) below them parse,
  // and, *if* the syntactic construct they handle is present, wrap
  // the AST node that the inner parser gave them in another node.

  // Parse a full expression. The optional arguments are used to
  // forbid the `in` operator (in for loops initalization expressions)
  // and provide reference for storing '=' operator inside shorthand
  // property assignment in contexts where both object expression
  // and object pattern might appear (so it's possible to raise
  // delayed syntax error at correct position).

  pp$3.parseExpression = function(noIn, refDestructuringErrors) {
    var this$1 = this;

    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
    if (this.type === types.comma) {
      var node = this.startNodeAt(startPos, startLoc);
      node.expressions = [expr];
      while (this.eat(types.comma)) { node.expressions.push(this$1.parseMaybeAssign(noIn, refDestructuringErrors)); }
      return this.finishNode(node, "SequenceExpression")
    }
    return expr
  };

  // Parse an assignment expression. This includes applications of
  // operators like `+=`.

  pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
    if (this.inGenerator && this.isContextual("yield")) { return this.parseYield() }

    var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
    if (refDestructuringErrors) {
      oldParenAssign = refDestructuringErrors.parenthesizedAssign;
      oldTrailingComma = refDestructuringErrors.trailingComma;
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
    } else {
      refDestructuringErrors = new DestructuringErrors;
      ownDestructuringErrors = true;
    }

    var startPos = this.start, startLoc = this.startLoc;
    if (this.type === types.parenL || this.type === types.name)
      { this.potentialArrowAt = this.start; }
    var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
    if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
    if (this.type.isAssign) {
      var node = this.startNodeAt(startPos, startLoc);
      node.operator = this.value;
      node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
      if (!ownDestructuringErrors) { DestructuringErrors.call(refDestructuringErrors); }
      refDestructuringErrors.shorthandAssign = -1; // reset because shorthand default was used correctly
      this.checkLVal(left);
      this.next();
      node.right = this.parseMaybeAssign(noIn);
      return this.finishNode(node, "AssignmentExpression")
    } else {
      if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
    }
    if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
    if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
    return left
  };

  // Parse a ternary conditional (`?:`) operator.

  pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprOps(noIn, refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    if (this.eat(types.question)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssign();
      this.expect(types.colon);
      node.alternate = this.parseMaybeAssign(noIn);
      return this.finishNode(node, "ConditionalExpression")
    }
    return expr
  };

  // Start the precedence parser.

  pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeUnary(refDestructuringErrors, false);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn)
  };

  // Parse binary operators with the operator precedence parsing
  // algorithm. `left` is the left-hand side of the operator.
  // `minPrec` provides context that allows the function to stop and
  // defer further parser to one of its callers when it encounters an
  // operator that has a lower precedence than the set it is parsing.

  pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
    var prec = this.type.binop;
    if (prec != null && (!noIn || this.type !== types._in)) {
      if (prec > minPrec) {
        var logical = this.type === types.logicalOR || this.type === types.logicalAND;
        var op = this.value;
        this.next();
        var startPos = this.start, startLoc = this.startLoc;
        var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
        var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical);
        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
      }
    }
    return left
  };

  pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.operator = op;
    node.right = right;
    return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
  };

  // Parse unary operators, both prefix and postfix.

  pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
    var this$1 = this;

    var startPos = this.start, startLoc = this.startLoc, expr;
    if (this.isContextual("await") && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))) {
      expr = this.parseAwait();
      sawUnary = true;
    } else if (this.type.prefix) {
      var node = this.startNode(), update = this.type === types.incDec;
      node.operator = this.value;
      node.prefix = true;
      this.next();
      node.argument = this.parseMaybeUnary(null, true);
      this.checkExpressionErrors(refDestructuringErrors, true);
      if (update) { this.checkLVal(node.argument); }
      else if (this.strict && node.operator === "delete" &&
               node.argument.type === "Identifier")
        { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
      else { sawUnary = true; }
      expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
    } else {
      expr = this.parseExprSubscripts(refDestructuringErrors);
      if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
      while (this.type.postfix && !this.canInsertSemicolon()) {
        var node$1 = this$1.startNodeAt(startPos, startLoc);
        node$1.operator = this$1.value;
        node$1.prefix = false;
        node$1.argument = expr;
        this$1.checkLVal(expr);
        this$1.next();
        expr = this$1.finishNode(node$1, "UpdateExpression");
      }
    }

    if (!sawUnary && this.eat(types.starstar))
      { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false) }
    else
      { return expr }
  };

  // Parse call, dot, and `[]`-subscript expressions.

  pp$3.parseExprSubscripts = function(refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprAtom(refDestructuringErrors);
    var skipArrowSubscripts = expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")";
    if (this.checkExpressionErrors(refDestructuringErrors) || skipArrowSubscripts) { return expr }
    var result = this.parseSubscripts(expr, startPos, startLoc);
    if (refDestructuringErrors && result.type === "MemberExpression") {
      if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
      if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
    }
    return result
  };

  pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
    var this$1 = this;

    var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
        this.lastTokEnd === base.end && !this.canInsertSemicolon() && this.input.slice(base.start, base.end) === "async";
    for (var computed = (void 0);;) {
      if ((computed = this$1.eat(types.bracketL)) || this$1.eat(types.dot)) {
        var node = this$1.startNodeAt(startPos, startLoc);
        node.object = base;
        node.property = computed ? this$1.parseExpression() : this$1.parseIdent(true);
        node.computed = !!computed;
        if (computed) { this$1.expect(types.bracketR); }
        base = this$1.finishNode(node, "MemberExpression");
      } else if (!noCalls && this$1.eat(types.parenL)) {
        var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this$1.yieldPos, oldAwaitPos = this$1.awaitPos;
        this$1.yieldPos = 0;
        this$1.awaitPos = 0;
        var exprList = this$1.parseExprList(types.parenR, this$1.options.ecmaVersion >= 8, false, refDestructuringErrors);
        if (maybeAsyncArrow && !this$1.canInsertSemicolon() && this$1.eat(types.arrow)) {
          this$1.checkPatternErrors(refDestructuringErrors, false);
          this$1.checkYieldAwaitInDefaultParams();
          this$1.yieldPos = oldYieldPos;
          this$1.awaitPos = oldAwaitPos;
          return this$1.parseArrowExpression(this$1.startNodeAt(startPos, startLoc), exprList, true)
        }
        this$1.checkExpressionErrors(refDestructuringErrors, true);
        this$1.yieldPos = oldYieldPos || this$1.yieldPos;
        this$1.awaitPos = oldAwaitPos || this$1.awaitPos;
        var node$1 = this$1.startNodeAt(startPos, startLoc);
        node$1.callee = base;
        node$1.arguments = exprList;
        base = this$1.finishNode(node$1, "CallExpression");
      } else if (this$1.type === types.backQuote) {
        var node$2 = this$1.startNodeAt(startPos, startLoc);
        node$2.tag = base;
        node$2.quasi = this$1.parseTemplate({isTagged: true});
        base = this$1.finishNode(node$2, "TaggedTemplateExpression");
      } else {
        return base
      }
    }
  };

  // Parse an atomic expression — either a single token that is an
  // expression, an expression started by a keyword like `function` or
  // `new`, or an expression wrapped in punctuation like `()`, `[]`,
  // or `{}`.

  pp$3.parseExprAtom = function(refDestructuringErrors) {
    var node, canBeArrow = this.potentialArrowAt === this.start;
    switch (this.type) {
    case types._super:
      if (!this.inFunction)
        { this.raise(this.start, "'super' outside of function or class"); }
      node = this.startNode();
      this.next();
      // The `super` keyword can appear at below:
      // SuperProperty:
      //     super [ Expression ]
      //     super . IdentifierName
      // SuperCall:
      //     super Arguments
      if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL)
        { this.unexpected(); }
      return this.finishNode(node, "Super")

    case types._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression")

    case types.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(this.type !== types.name);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function))
        { return this.parseFunction(this.startNodeAt(startPos, startLoc), false, false, true) }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types.arrow))
          { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false) }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
          id = this.parseIdent();
          if (this.canInsertSemicolon() || !this.eat(types.arrow))
            { this.unexpected(); }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
        }
      }
      return id

    case types.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = {pattern: value.pattern, flags: value.flags};
      return node

    case types.num: case types.string:
      return this.parseLiteral(this.value)

    case types._null: case types._true: case types._false:
      node = this.startNode();
      node.value = this.type === types._null ? null : this.type === types._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal")

    case types.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
          { refDestructuringErrors.parenthesizedAssign = start; }
        if (refDestructuringErrors.parenthesizedBind < 0)
          { refDestructuringErrors.parenthesizedBind = start; }
      }
      return expr

    case types.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression")

    case types.braceL:
      return this.parseObj(false, refDestructuringErrors)

    case types._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, false)

    case types._class:
      return this.parseClass(this.startNode(), false)

    case types._new:
      return this.parseNew()

    case types.backQuote:
      return this.parseTemplate()

    default:
      this.unexpected();
    }
  };

  pp$3.parseLiteral = function(value) {
    var node = this.startNode();
    node.value = value;
    node.raw = this.input.slice(this.start, this.end);
    this.next();
    return this.finishNode(node, "Literal")
  };

  pp$3.parseParenExpression = function() {
    this.expect(types.parenL);
    var val = this.parseExpression();
    this.expect(types.parenR);
    return val
  };

  pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
    var this$1 = this;

    var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
    if (this.options.ecmaVersion >= 6) {
      this.next();

      var innerStartPos = this.start, innerStartLoc = this.startLoc;
      var exprList = [], first = true, lastIsComma = false;
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
      this.yieldPos = 0;
      this.awaitPos = 0;
      while (this.type !== types.parenR) {
        first ? first = false : this$1.expect(types.comma);
        if (allowTrailingComma && this$1.afterTrailingComma(types.parenR, true)) {
          lastIsComma = true;
          break
        } else if (this$1.type === types.ellipsis) {
          spreadStart = this$1.start;
          exprList.push(this$1.parseParenItem(this$1.parseRestBinding()));
          if (this$1.type === types.comma) { this$1.raise(this$1.start, "Comma is not permitted after the rest element"); }
          break
        } else {
          exprList.push(this$1.parseMaybeAssign(false, refDestructuringErrors, this$1.parseParenItem));
        }
      }
      var innerEndPos = this.start, innerEndLoc = this.startLoc;
      this.expect(types.parenR);

      if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        return this.parseParenArrowList(startPos, startLoc, exprList)
      }

      if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
      if (spreadStart) { this.unexpected(spreadStart); }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;

      if (exprList.length > 1) {
        val = this.startNodeAt(innerStartPos, innerStartLoc);
        val.expressions = exprList;
        this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
      } else {
        val = exprList[0];
      }
    } else {
      val = this.parseParenExpression();
    }

    if (this.options.preserveParens) {
      var par = this.startNodeAt(startPos, startLoc);
      par.expression = val;
      return this.finishNode(par, "ParenthesizedExpression")
    } else {
      return val
    }
  };

  pp$3.parseParenItem = function(item) {
    return item
  };

  pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
  };

  // New's precedence is slightly tricky. It must allow its argument to
  // be a `[]` or dot subscript expression, but not a call — at least,
  // not without wrapping it in parentheses. Thus, it uses the noCalls
  // argument to parseSubscripts to prevent it from consuming the
  // argument list.

  var empty$1$1 = [];

  pp$3.parseNew = function() {
    var node = this.startNode();
    var meta = this.parseIdent(true);
    if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
      node.meta = meta;
      var containsEsc = this.containsEsc;
      node.property = this.parseIdent(true);
      if (node.property.name !== "target" || containsEsc)
        { this.raiseRecoverable(node.property.start, "The only valid meta property for new is new.target"); }
      if (!this.inFunction)
        { this.raiseRecoverable(node.start, "new.target can only be used in functions"); }
      return this.finishNode(node, "MetaProperty")
    }
    var startPos = this.start, startLoc = this.startLoc;
    node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
    if (this.eat(types.parenL)) { node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false); }
    else { node.arguments = empty$1$1; }
    return this.finishNode(node, "NewExpression")
  };

  // Parse template expression.

  pp$3.parseTemplateElement = function(ref) {
    var isTagged = ref.isTagged;

    var elem = this.startNode();
    if (this.type === types.invalidTemplate) {
      if (!isTagged) {
        this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
      }
      elem.value = {
        raw: this.value,
        cooked: null
      };
    } else {
      elem.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
        cooked: this.value
      };
    }
    this.next();
    elem.tail = this.type === types.backQuote;
    return this.finishNode(elem, "TemplateElement")
  };

  pp$3.parseTemplate = function(ref) {
    var this$1 = this;
    if ( ref === void 0 ) ref = {};
    var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

    var node = this.startNode();
    this.next();
    node.expressions = [];
    var curElt = this.parseTemplateElement({isTagged: isTagged});
    node.quasis = [curElt];
    while (!curElt.tail) {
      if (this$1.type === types.eof) { this$1.raise(this$1.pos, "Unterminated template literal"); }
      this$1.expect(types.dollarBraceL);
      node.expressions.push(this$1.parseExpression());
      this$1.expect(types.braceR);
      node.quasis.push(curElt = this$1.parseTemplateElement({isTagged: isTagged}));
    }
    this.next();
    return this.finishNode(node, "TemplateLiteral")
  };

  pp$3.isAsyncProp = function(prop) {
    return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
      (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types.star)) &&
      !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
  };

  // Parse an object literal or binding pattern.

  pp$3.parseObj = function(isPattern, refDestructuringErrors) {
    var this$1 = this;

    var node = this.startNode(), first = true, propHash = {};
    node.properties = [];
    this.next();
    while (!this.eat(types.braceR)) {
      if (!first) {
        this$1.expect(types.comma);
        if (this$1.afterTrailingComma(types.braceR)) { break }
      } else { first = false; }

      var prop = this$1.parseProperty(isPattern, refDestructuringErrors);
      if (!isPattern) { this$1.checkPropClash(prop, propHash, refDestructuringErrors); }
      node.properties.push(prop);
    }
    return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
  };

  pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
    var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
    if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
      if (isPattern) {
        prop.argument = this.parseIdent(false);
        if (this.type === types.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        return this.finishNode(prop, "RestElement")
      }
      // To disallow parenthesized identifier via `this.toAssignable()`.
      if (this.type === types.parenL && refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0) {
          refDestructuringErrors.parenthesizedAssign = this.start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = this.start;
        }
      }
      // Parse argument.
      prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
      // To disallow trailing comma via `this.toAssignable()`.
      if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
      // Finish
      return this.finishNode(prop, "SpreadElement")
    }
    if (this.options.ecmaVersion >= 6) {
      prop.method = false;
      prop.shorthand = false;
      if (isPattern || refDestructuringErrors) {
        startPos = this.start;
        startLoc = this.startLoc;
      }
      if (!isPattern)
        { isGenerator = this.eat(types.star); }
    }
    var containsEsc = this.containsEsc;
    this.parsePropertyName(prop);
    if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
      this.parsePropertyName(prop, refDestructuringErrors);
    } else {
      isAsync = false;
    }
    this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
    return this.finishNode(prop, "Property")
  };

  pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
    if ((isGenerator || isAsync) && this.type === types.colon)
      { this.unexpected(); }

    if (this.eat(types.colon)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
      prop.kind = "init";
    } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
      if (isPattern) { this.unexpected(); }
      prop.kind = "init";
      prop.method = true;
      prop.value = this.parseMethod(isGenerator, isAsync);
    } else if (!isPattern && !containsEsc &&
               this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
               (prop.key.name === "get" || prop.key.name === "set") &&
               (this.type !== types.comma && this.type !== types.braceR)) {
      if (isGenerator || isAsync) { this.unexpected(); }
      prop.kind = prop.key.name;
      this.parsePropertyName(prop);
      prop.value = this.parseMethod(false);
      var paramCount = prop.kind === "get" ? 0 : 1;
      if (prop.value.params.length !== paramCount) {
        var start = prop.value.start;
        if (prop.kind === "get")
          { this.raiseRecoverable(start, "getter should have no params"); }
        else
          { this.raiseRecoverable(start, "setter should have exactly one param"); }
      } else {
        if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
          { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
      }
    } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
      this.checkUnreserved(prop.key);
      prop.kind = "init";
      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
      } else if (this.type === types.eq && refDestructuringErrors) {
        if (refDestructuringErrors.shorthandAssign < 0)
          { refDestructuringErrors.shorthandAssign = this.start; }
        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
      } else {
        prop.value = prop.key;
      }
      prop.shorthand = true;
    } else { this.unexpected(); }
  };

  pp$3.parsePropertyName = function(prop) {
    if (this.options.ecmaVersion >= 6) {
      if (this.eat(types.bracketL)) {
        prop.computed = true;
        prop.key = this.parseMaybeAssign();
        this.expect(types.bracketR);
        return prop.key
      } else {
        prop.computed = false;
      }
    }
    return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(true)
  };

  // Initialize empty function node.

  pp$3.initFunction = function(node) {
    node.id = null;
    if (this.options.ecmaVersion >= 6) {
      node.generator = false;
      node.expression = false;
    }
    if (this.options.ecmaVersion >= 8)
      { node.async = false; }
  };

  // Parse object or class method.

  pp$3.parseMethod = function(isGenerator, isAsync) {
    var node = this.startNode(), oldInGen = this.inGenerator, oldInAsync = this.inAsync,
        oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction;

    this.initFunction(node);
    if (this.options.ecmaVersion >= 6)
      { node.generator = isGenerator; }
    if (this.options.ecmaVersion >= 8)
      { node.async = !!isAsync; }

    this.inGenerator = node.generator;
    this.inAsync = node.async;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.inFunction = true;
    this.enterFunctionScope();

    this.expect(types.parenL);
    node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
    this.parseFunctionBody(node, false);

    this.inGenerator = oldInGen;
    this.inAsync = oldInAsync;
    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.inFunction = oldInFunc;
    return this.finishNode(node, "FunctionExpression")
  };

  // Parse arrow function expression with given parameters.

  pp$3.parseArrowExpression = function(node, params, isAsync) {
    var oldInGen = this.inGenerator, oldInAsync = this.inAsync,
        oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction;

    this.enterFunctionScope();
    this.initFunction(node);
    if (this.options.ecmaVersion >= 8)
      { node.async = !!isAsync; }

    this.inGenerator = false;
    this.inAsync = node.async;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.inFunction = true;

    node.params = this.toAssignableList(params, true);
    this.parseFunctionBody(node, true);

    this.inGenerator = oldInGen;
    this.inAsync = oldInAsync;
    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.inFunction = oldInFunc;
    return this.finishNode(node, "ArrowFunctionExpression")
  };

  // Parse function body and check parameters.

  pp$3.parseFunctionBody = function(node, isArrowFunction) {
    var isExpression = isArrowFunction && this.type !== types.braceL;
    var oldStrict = this.strict, useStrict = false;

    if (isExpression) {
      node.body = this.parseMaybeAssign();
      node.expression = true;
      this.checkParams(node, false);
    } else {
      var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
      if (!oldStrict || nonSimple) {
        useStrict = this.strictDirective(this.end);
        // If this is a strict mode function, verify that argument names
        // are not repeated, and it does not try to bind the words `eval`
        // or `arguments`.
        if (useStrict && nonSimple)
          { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
      }
      // Start a new scope with regard to labels and the `inFunction`
      // flag (restore them to their old value afterwards).
      var oldLabels = this.labels;
      this.labels = [];
      if (useStrict) { this.strict = true; }

      // Add the params to varDeclaredNames to ensure that an error is thrown
      // if a let/const declaration in the function clashes with one of the params.
      this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && this.isSimpleParamList(node.params));
      node.body = this.parseBlock(false);
      node.expression = false;
      this.adaptDirectivePrologue(node.body.body);
      this.labels = oldLabels;
    }
    this.exitFunctionScope();

    if (this.strict && node.id) {
      // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
      this.checkLVal(node.id, "none");
    }
    this.strict = oldStrict;
  };

  pp$3.isSimpleParamList = function(params) {
    for (var i = 0, list = params; i < list.length; i += 1)
      {
      var param = list[i];

      if (param.type !== "Identifier") { return false
    } }
    return true
  };

  // Checks function params for various disallowed patterns such as using "eval"
  // or "arguments" and duplicate parameters.

  pp$3.checkParams = function(node, allowDuplicates) {
    var this$1 = this;

    var nameHash = {};
    for (var i = 0, list = node.params; i < list.length; i += 1)
      {
      var param = list[i];

      this$1.checkLVal(param, "var", allowDuplicates ? null : nameHash);
    }
  };

  // Parses a comma-separated list of expressions, and returns them as
  // an array. `close` is the token type that ends the list, and
  // `allowEmpty` can be turned on to allow subsequent commas with
  // nothing in between them to be parsed as `null` (which is needed
  // for array literals).

  pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
    var this$1 = this;

    var elts = [], first = true;
    while (!this.eat(close)) {
      if (!first) {
        this$1.expect(types.comma);
        if (allowTrailingComma && this$1.afterTrailingComma(close)) { break }
      } else { first = false; }

      var elt = (void 0);
      if (allowEmpty && this$1.type === types.comma)
        { elt = null; }
      else if (this$1.type === types.ellipsis) {
        elt = this$1.parseSpread(refDestructuringErrors);
        if (refDestructuringErrors && this$1.type === types.comma && refDestructuringErrors.trailingComma < 0)
          { refDestructuringErrors.trailingComma = this$1.start; }
      } else {
        elt = this$1.parseMaybeAssign(false, refDestructuringErrors);
      }
      elts.push(elt);
    }
    return elts
  };

  pp$3.checkUnreserved = function(ref) {
    var start = ref.start;
    var end = ref.end;
    var name = ref.name;

    if (this.inGenerator && name === "yield")
      { this.raiseRecoverable(start, "Can not use 'yield' as identifier inside a generator"); }
    if (this.inAsync && name === "await")
      { this.raiseRecoverable(start, "Can not use 'await' as identifier inside an async function"); }
    if (this.isKeyword(name))
      { this.raise(start, ("Unexpected keyword '" + name + "'")); }
    if (this.options.ecmaVersion < 6 &&
      this.input.slice(start, end).indexOf("\\") !== -1) { return }
    var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
    if (re.test(name)) {
      if (!this.inAsync && name === "await")
        { this.raiseRecoverable(start, "Can not use keyword 'await' outside an async function"); }
      this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
    }
  };

  // Parse the next token as an identifier. If `liberal` is true (used
  // when parsing properties), it will also convert keywords into
  // identifiers.

  pp$3.parseIdent = function(liberal, isBinding) {
    var node = this.startNode();
    if (liberal && this.options.allowReserved === "never") { liberal = false; }
    if (this.type === types.name) {
      node.name = this.value;
    } else if (this.type.keyword) {
      node.name = this.type.keyword;

      // To fix https://github.com/acornjs/acorn/issues/575
      // `class` and `function` keywords push new context into this.context.
      // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
      // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
      if ((node.name === "class" || node.name === "function") &&
          (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
        this.context.pop();
      }
    } else {
      this.unexpected();
    }
    this.next();
    this.finishNode(node, "Identifier");
    if (!liberal) { this.checkUnreserved(node); }
    return node
  };

  // Parses yield expression inside generator.

  pp$3.parseYield = function() {
    if (!this.yieldPos) { this.yieldPos = this.start; }

    var node = this.startNode();
    this.next();
    if (this.type === types.semi || this.canInsertSemicolon() || (this.type !== types.star && !this.type.startsExpr)) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = this.eat(types.star);
      node.argument = this.parseMaybeAssign();
    }
    return this.finishNode(node, "YieldExpression")
  };

  pp$3.parseAwait = function() {
    if (!this.awaitPos) { this.awaitPos = this.start; }

    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeUnary(null, true);
    return this.finishNode(node, "AwaitExpression")
  };

  var pp$4 = Parser.prototype;

  // This function is used to raise exceptions on parse errors. It
  // takes an offset integer (into the current `input`) to indicate
  // the location of the error, attaches the position to the end
  // of the error message, and then raises a `SyntaxError` with that
  // message.

  pp$4.raise = function(pos, message) {
    var loc = getLineInfo(this.input, pos);
    message += " (" + loc.line + ":" + loc.column + ")";
    var err = new SyntaxError(message);
    err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
    throw err
  };

  pp$4.raiseRecoverable = pp$4.raise;

  pp$4.curPosition = function() {
    if (this.options.locations) {
      return new Position(this.curLine, this.pos - this.lineStart)
    }
  };

  var pp$5 = Parser.prototype;

  // Object.assign polyfill
  var assign = Object.assign || function(target) {
    var sources = [], len = arguments.length - 1;
    while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

    for (var i = 0, list = sources; i < list.length; i += 1) {
      var source = list[i];

      for (var key in source) {
        if (has(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target
  };

  // The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

  pp$5.enterFunctionScope = function() {
    // var: a hash of var-declared names in the current lexical scope
    // lexical: a hash of lexically-declared names in the current lexical scope
    // childVar: a hash of var-declared names in all child lexical scopes of the current lexical scope (within the current function scope)
    // parentLexical: a hash of lexically-declared names in all parent lexical scopes of the current lexical scope (within the current function scope)
    this.scopeStack.push({var: {}, lexical: {}, childVar: {}, parentLexical: {}});
  };

  pp$5.exitFunctionScope = function() {
    this.scopeStack.pop();
  };

  pp$5.enterLexicalScope = function() {
    var parentScope = this.scopeStack[this.scopeStack.length - 1];
    var childScope = {var: {}, lexical: {}, childVar: {}, parentLexical: {}};

    this.scopeStack.push(childScope);
    assign(childScope.parentLexical, parentScope.lexical, parentScope.parentLexical);
  };

  pp$5.exitLexicalScope = function() {
    var childScope = this.scopeStack.pop();
    var parentScope = this.scopeStack[this.scopeStack.length - 1];

    assign(parentScope.childVar, childScope.var, childScope.childVar);
  };

  /**
   * A name can be declared with `var` if there are no variables with the same name declared with `let`/`const`
   * in the current lexical scope or any of the parent lexical scopes in this function.
   */
  pp$5.canDeclareVarName = function(name) {
    var currentScope = this.scopeStack[this.scopeStack.length - 1];

    return !has(currentScope.lexical, name) && !has(currentScope.parentLexical, name)
  };

  /**
   * A name can be declared with `let`/`const` if there are no variables with the same name declared with `let`/`const`
   * in the current scope, and there are no variables with the same name declared with `var` in the current scope or in
   * any child lexical scopes in this function.
   */
  pp$5.canDeclareLexicalName = function(name) {
    var currentScope = this.scopeStack[this.scopeStack.length - 1];

    return !has(currentScope.lexical, name) && !has(currentScope.var, name) && !has(currentScope.childVar, name)
  };

  pp$5.declareVarName = function(name) {
    this.scopeStack[this.scopeStack.length - 1].var[name] = true;
  };

  pp$5.declareLexicalName = function(name) {
    this.scopeStack[this.scopeStack.length - 1].lexical[name] = true;
  };

  var Node = function Node(parser, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    if (parser.options.locations)
      { this.loc = new SourceLocation(parser, loc); }
    if (parser.options.directSourceFile)
      { this.sourceFile = parser.options.directSourceFile; }
    if (parser.options.ranges)
      { this.range = [pos, 0]; }
  };

  // Start an AST node, attaching a start offset.

  var pp$6 = Parser.prototype;

  pp$6.startNode = function() {
    return new Node(this, this.start, this.startLoc)
  };

  pp$6.startNodeAt = function(pos, loc) {
    return new Node(this, pos, loc)
  };

  // Finish an AST node, adding `type` and `end` properties.

  function finishNodeAt(node, type, pos, loc) {
    node.type = type;
    node.end = pos;
    if (this.options.locations)
      { node.loc.end = loc; }
    if (this.options.ranges)
      { node.range[1] = pos; }
    return node
  }

  pp$6.finishNode = function(node, type) {
    return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
  };

  // Finish node at given position

  pp$6.finishNodeAt = function(node, type, pos, loc) {
    return finishNodeAt.call(this, node, type, pos, loc)
  };

  // The algorithm used to determine whether a regexp can appear at a
  // given point in the program is loosely based on sweet.js' approach.
  // See https://github.com/mozilla/sweet.js/wiki/design

  var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
    this.token = token;
    this.isExpr = !!isExpr;
    this.preserveSpace = !!preserveSpace;
    this.override = override;
    this.generator = !!generator;
  };

  var types$1 = {
    b_stat: new TokContext("{", false),
    b_expr: new TokContext("{", true),
    b_tmpl: new TokContext("${", false),
    p_stat: new TokContext("(", false),
    p_expr: new TokContext("(", true),
    q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
    f_stat: new TokContext("function", false),
    f_expr: new TokContext("function", true),
    f_expr_gen: new TokContext("function", true, false, null, true),
    f_gen: new TokContext("function", false, false, null, true)
  };

  var pp$7 = Parser.prototype;

  pp$7.initialContext = function() {
    return [types$1.b_stat]
  };

  pp$7.braceIsBlock = function(prevType) {
    var parent = this.curContext();
    if (parent === types$1.f_expr || parent === types$1.f_stat)
      { return true }
    if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr))
      { return !parent.isExpr }

    // The check for `tt.name && exprAllowed` detects whether we are
    // after a `yield` or `of` construct. See the `updateContext` for
    // `tt.name`.
    if (prevType === types._return || prevType === types.name && this.exprAllowed)
      { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
    if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow)
      { return true }
    if (prevType === types.braceL)
      { return parent === types$1.b_stat }
    if (prevType === types._var || prevType === types.name)
      { return false }
    return !this.exprAllowed
  };

  pp$7.inGeneratorContext = function() {
    var this$1 = this;

    for (var i = this.context.length - 1; i >= 1; i--) {
      var context = this$1.context[i];
      if (context.token === "function")
        { return context.generator }
    }
    return false
  };

  pp$7.updateContext = function(prevType) {
    var update, type = this.type;
    if (type.keyword && prevType === types.dot)
      { this.exprAllowed = false; }
    else if (update = type.updateContext)
      { update.call(this, prevType); }
    else
      { this.exprAllowed = type.beforeExpr; }
  };

  // Token-specific context update code

  types.parenR.updateContext = types.braceR.updateContext = function() {
    if (this.context.length === 1) {
      this.exprAllowed = true;
      return
    }
    var out = this.context.pop();
    if (out === types$1.b_stat && this.curContext().token === "function") {
      out = this.context.pop();
    }
    this.exprAllowed = !out.isExpr;
  };

  types.braceL.updateContext = function(prevType) {
    this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
    this.exprAllowed = true;
  };

  types.dollarBraceL.updateContext = function() {
    this.context.push(types$1.b_tmpl);
    this.exprAllowed = true;
  };

  types.parenL.updateContext = function(prevType) {
    var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
    this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
    this.exprAllowed = true;
  };

  types.incDec.updateContext = function() {
    // tokExprAllowed stays unchanged
  };

  types._function.updateContext = types._class.updateContext = function(prevType) {
    if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else &&
        !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat))
      { this.context.push(types$1.f_expr); }
    else
      { this.context.push(types$1.f_stat); }
    this.exprAllowed = false;
  };

  types.backQuote.updateContext = function() {
    if (this.curContext() === types$1.q_tmpl)
      { this.context.pop(); }
    else
      { this.context.push(types$1.q_tmpl); }
    this.exprAllowed = false;
  };

  types.star.updateContext = function(prevType) {
    if (prevType === types._function) {
      var index = this.context.length - 1;
      if (this.context[index] === types$1.f_expr)
        { this.context[index] = types$1.f_expr_gen; }
      else
        { this.context[index] = types$1.f_gen; }
    }
    this.exprAllowed = true;
  };

  types.name.updateContext = function(prevType) {
    var allowed = false;
    if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
      if (this.value === "of" && !this.exprAllowed ||
          this.value === "yield" && this.inGeneratorContext())
        { allowed = true; }
    }
    this.exprAllowed = allowed;
  };

  var data = {
    "$LONE": [
      "ASCII",
      "ASCII_Hex_Digit",
      "AHex",
      "Alphabetic",
      "Alpha",
      "Any",
      "Assigned",
      "Bidi_Control",
      "Bidi_C",
      "Bidi_Mirrored",
      "Bidi_M",
      "Case_Ignorable",
      "CI",
      "Cased",
      "Changes_When_Casefolded",
      "CWCF",
      "Changes_When_Casemapped",
      "CWCM",
      "Changes_When_Lowercased",
      "CWL",
      "Changes_When_NFKC_Casefolded",
      "CWKCF",
      "Changes_When_Titlecased",
      "CWT",
      "Changes_When_Uppercased",
      "CWU",
      "Dash",
      "Default_Ignorable_Code_Point",
      "DI",
      "Deprecated",
      "Dep",
      "Diacritic",
      "Dia",
      "Emoji",
      "Emoji_Component",
      "Emoji_Modifier",
      "Emoji_Modifier_Base",
      "Emoji_Presentation",
      "Extender",
      "Ext",
      "Grapheme_Base",
      "Gr_Base",
      "Grapheme_Extend",
      "Gr_Ext",
      "Hex_Digit",
      "Hex",
      "IDS_Binary_Operator",
      "IDSB",
      "IDS_Trinary_Operator",
      "IDST",
      "ID_Continue",
      "IDC",
      "ID_Start",
      "IDS",
      "Ideographic",
      "Ideo",
      "Join_Control",
      "Join_C",
      "Logical_Order_Exception",
      "LOE",
      "Lowercase",
      "Lower",
      "Math",
      "Noncharacter_Code_Point",
      "NChar",
      "Pattern_Syntax",
      "Pat_Syn",
      "Pattern_White_Space",
      "Pat_WS",
      "Quotation_Mark",
      "QMark",
      "Radical",
      "Regional_Indicator",
      "RI",
      "Sentence_Terminal",
      "STerm",
      "Soft_Dotted",
      "SD",
      "Terminal_Punctuation",
      "Term",
      "Unified_Ideograph",
      "UIdeo",
      "Uppercase",
      "Upper",
      "Variation_Selector",
      "VS",
      "White_Space",
      "space",
      "XID_Continue",
      "XIDC",
      "XID_Start",
      "XIDS"
    ],
    "General_Category": [
      "Cased_Letter",
      "LC",
      "Close_Punctuation",
      "Pe",
      "Connector_Punctuation",
      "Pc",
      "Control",
      "Cc",
      "cntrl",
      "Currency_Symbol",
      "Sc",
      "Dash_Punctuation",
      "Pd",
      "Decimal_Number",
      "Nd",
      "digit",
      "Enclosing_Mark",
      "Me",
      "Final_Punctuation",
      "Pf",
      "Format",
      "Cf",
      "Initial_Punctuation",
      "Pi",
      "Letter",
      "L",
      "Letter_Number",
      "Nl",
      "Line_Separator",
      "Zl",
      "Lowercase_Letter",
      "Ll",
      "Mark",
      "M",
      "Combining_Mark",
      "Math_Symbol",
      "Sm",
      "Modifier_Letter",
      "Lm",
      "Modifier_Symbol",
      "Sk",
      "Nonspacing_Mark",
      "Mn",
      "Number",
      "N",
      "Open_Punctuation",
      "Ps",
      "Other",
      "C",
      "Other_Letter",
      "Lo",
      "Other_Number",
      "No",
      "Other_Punctuation",
      "Po",
      "Other_Symbol",
      "So",
      "Paragraph_Separator",
      "Zp",
      "Private_Use",
      "Co",
      "Punctuation",
      "P",
      "punct",
      "Separator",
      "Z",
      "Space_Separator",
      "Zs",
      "Spacing_Mark",
      "Mc",
      "Surrogate",
      "Cs",
      "Symbol",
      "S",
      "Titlecase_Letter",
      "Lt",
      "Unassigned",
      "Cn",
      "Uppercase_Letter",
      "Lu"
    ],
    "Script": [
      "Adlam",
      "Adlm",
      "Ahom",
      "Anatolian_Hieroglyphs",
      "Hluw",
      "Arabic",
      "Arab",
      "Armenian",
      "Armn",
      "Avestan",
      "Avst",
      "Balinese",
      "Bali",
      "Bamum",
      "Bamu",
      "Bassa_Vah",
      "Bass",
      "Batak",
      "Batk",
      "Bengali",
      "Beng",
      "Bhaiksuki",
      "Bhks",
      "Bopomofo",
      "Bopo",
      "Brahmi",
      "Brah",
      "Braille",
      "Brai",
      "Buginese",
      "Bugi",
      "Buhid",
      "Buhd",
      "Canadian_Aboriginal",
      "Cans",
      "Carian",
      "Cari",
      "Caucasian_Albanian",
      "Aghb",
      "Chakma",
      "Cakm",
      "Cham",
      "Cherokee",
      "Cher",
      "Common",
      "Zyyy",
      "Coptic",
      "Copt",
      "Qaac",
      "Cuneiform",
      "Xsux",
      "Cypriot",
      "Cprt",
      "Cyrillic",
      "Cyrl",
      "Deseret",
      "Dsrt",
      "Devanagari",
      "Deva",
      "Duployan",
      "Dupl",
      "Egyptian_Hieroglyphs",
      "Egyp",
      "Elbasan",
      "Elba",
      "Ethiopic",
      "Ethi",
      "Georgian",
      "Geor",
      "Glagolitic",
      "Glag",
      "Gothic",
      "Goth",
      "Grantha",
      "Gran",
      "Greek",
      "Grek",
      "Gujarati",
      "Gujr",
      "Gurmukhi",
      "Guru",
      "Han",
      "Hani",
      "Hangul",
      "Hang",
      "Hanunoo",
      "Hano",
      "Hatran",
      "Hatr",
      "Hebrew",
      "Hebr",
      "Hiragana",
      "Hira",
      "Imperial_Aramaic",
      "Armi",
      "Inherited",
      "Zinh",
      "Qaai",
      "Inscriptional_Pahlavi",
      "Phli",
      "Inscriptional_Parthian",
      "Prti",
      "Javanese",
      "Java",
      "Kaithi",
      "Kthi",
      "Kannada",
      "Knda",
      "Katakana",
      "Kana",
      "Kayah_Li",
      "Kali",
      "Kharoshthi",
      "Khar",
      "Khmer",
      "Khmr",
      "Khojki",
      "Khoj",
      "Khudawadi",
      "Sind",
      "Lao",
      "Laoo",
      "Latin",
      "Latn",
      "Lepcha",
      "Lepc",
      "Limbu",
      "Limb",
      "Linear_A",
      "Lina",
      "Linear_B",
      "Linb",
      "Lisu",
      "Lycian",
      "Lyci",
      "Lydian",
      "Lydi",
      "Mahajani",
      "Mahj",
      "Malayalam",
      "Mlym",
      "Mandaic",
      "Mand",
      "Manichaean",
      "Mani",
      "Marchen",
      "Marc",
      "Masaram_Gondi",
      "Gonm",
      "Meetei_Mayek",
      "Mtei",
      "Mende_Kikakui",
      "Mend",
      "Meroitic_Cursive",
      "Merc",
      "Meroitic_Hieroglyphs",
      "Mero",
      "Miao",
      "Plrd",
      "Modi",
      "Mongolian",
      "Mong",
      "Mro",
      "Mroo",
      "Multani",
      "Mult",
      "Myanmar",
      "Mymr",
      "Nabataean",
      "Nbat",
      "New_Tai_Lue",
      "Talu",
      "Newa",
      "Nko",
      "Nkoo",
      "Nushu",
      "Nshu",
      "Ogham",
      "Ogam",
      "Ol_Chiki",
      "Olck",
      "Old_Hungarian",
      "Hung",
      "Old_Italic",
      "Ital",
      "Old_North_Arabian",
      "Narb",
      "Old_Permic",
      "Perm",
      "Old_Persian",
      "Xpeo",
      "Old_South_Arabian",
      "Sarb",
      "Old_Turkic",
      "Orkh",
      "Oriya",
      "Orya",
      "Osage",
      "Osge",
      "Osmanya",
      "Osma",
      "Pahawh_Hmong",
      "Hmng",
      "Palmyrene",
      "Palm",
      "Pau_Cin_Hau",
      "Pauc",
      "Phags_Pa",
      "Phag",
      "Phoenician",
      "Phnx",
      "Psalter_Pahlavi",
      "Phlp",
      "Rejang",
      "Rjng",
      "Runic",
      "Runr",
      "Samaritan",
      "Samr",
      "Saurashtra",
      "Saur",
      "Sharada",
      "Shrd",
      "Shavian",
      "Shaw",
      "Siddham",
      "Sidd",
      "SignWriting",
      "Sgnw",
      "Sinhala",
      "Sinh",
      "Sora_Sompeng",
      "Sora",
      "Soyombo",
      "Soyo",
      "Sundanese",
      "Sund",
      "Syloti_Nagri",
      "Sylo",
      "Syriac",
      "Syrc",
      "Tagalog",
      "Tglg",
      "Tagbanwa",
      "Tagb",
      "Tai_Le",
      "Tale",
      "Tai_Tham",
      "Lana",
      "Tai_Viet",
      "Tavt",
      "Takri",
      "Takr",
      "Tamil",
      "Taml",
      "Tangut",
      "Tang",
      "Telugu",
      "Telu",
      "Thaana",
      "Thaa",
      "Thai",
      "Tibetan",
      "Tibt",
      "Tifinagh",
      "Tfng",
      "Tirhuta",
      "Tirh",
      "Ugaritic",
      "Ugar",
      "Vai",
      "Vaii",
      "Warang_Citi",
      "Wara",
      "Yi",
      "Yiii",
      "Zanabazar_Square",
      "Zanb"
    ]
  };
  Array.prototype.push.apply(data.$LONE, data.General_Category);
  data.gc = data.General_Category;
  data.sc = data.Script_Extensions = data.scx = data.Script;

  var pp$9 = Parser.prototype;

  var RegExpValidationState = function RegExpValidationState(parser) {
    this.parser = parser;
    this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
    this.source = "";
    this.flags = "";
    this.start = 0;
    this.switchU = false;
    this.switchN = false;
    this.pos = 0;
    this.lastIntValue = 0;
    this.lastStringValue = "";
    this.lastAssertionIsQuantifiable = false;
    this.numCapturingParens = 0;
    this.maxBackReference = 0;
    this.groupNames = [];
    this.backReferenceNames = [];
  };

  RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
    var unicode = flags.indexOf("u") !== -1;
    this.start = start | 0;
    this.source = pattern + "";
    this.flags = flags;
    this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
    this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
  };

  RegExpValidationState.prototype.raise = function raise (message) {
    this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
  };

  // If u flag is given, this returns the code point at the index (it combines a surrogate pair).
  // Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
  RegExpValidationState.prototype.at = function at (i) {
    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return -1
    }
    var c = s.charCodeAt(i);
    if (!this.switchU || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
      return c
    }
    return (c << 10) + s.charCodeAt(i + 1) - 0x35FDC00
  };

  RegExpValidationState.prototype.nextIndex = function nextIndex (i) {
    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return l
    }
    var c = s.charCodeAt(i);
    if (!this.switchU || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
      return i + 1
    }
    return i + 2
  };

  RegExpValidationState.prototype.current = function current () {
    return this.at(this.pos)
  };

  RegExpValidationState.prototype.lookahead = function lookahead () {
    return this.at(this.nextIndex(this.pos))
  };

  RegExpValidationState.prototype.advance = function advance () {
    this.pos = this.nextIndex(this.pos);
  };

  RegExpValidationState.prototype.eat = function eat (ch) {
    if (this.current() === ch) {
      this.advance();
      return true
    }
    return false
  };

  function codePointToString$1(ch) {
    if (ch <= 0xFFFF) { return String.fromCharCode(ch) }
    ch -= 0x10000;
    return String.fromCharCode((ch >> 10) + 0xD800, (ch & 0x03FF) + 0xDC00)
  }

  /**
   * Validate the flags part of a given RegExpLiteral.
   *
   * @param {RegExpValidationState} state The state to validate RegExp.
   * @returns {void}
   */
  pp$9.validateRegExpFlags = function(state) {
    var this$1 = this;

    var validFlags = state.validFlags;
    var flags = state.flags;

    for (var i = 0; i < flags.length; i++) {
      var flag = flags.charAt(i);
      if (validFlags.indexOf(flag) === -1) {
        this$1.raise(state.start, "Invalid regular expression flag");
      }
      if (flags.indexOf(flag, i + 1) > -1) {
        this$1.raise(state.start, "Duplicate regular expression flag");
      }
    }
  };

  /**
   * Validate the pattern part of a given RegExpLiteral.
   *
   * @param {RegExpValidationState} state The state to validate RegExp.
   * @returns {void}
   */
  pp$9.validateRegExpPattern = function(state) {
    this.regexp_pattern(state);

    // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
    // parsing contains a |GroupName|, reparse with the goal symbol
    // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
    // exception if _P_ did not conform to the grammar, if any elements of _P_
    // were not matched by the parse, or if any Early Error conditions exist.
    if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
      state.switchN = true;
      this.regexp_pattern(state);
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
  pp$9.regexp_pattern = function(state) {
    state.pos = 0;
    state.lastIntValue = 0;
    state.lastStringValue = "";
    state.lastAssertionIsQuantifiable = false;
    state.numCapturingParens = 0;
    state.maxBackReference = 0;
    state.groupNames.length = 0;
    state.backReferenceNames.length = 0;

    this.regexp_disjunction(state);

    if (state.pos !== state.source.length) {
      // Make the same messages as V8.
      if (state.eat(0x29 /* ) */)) {
        state.raise("Unmatched ')'");
      }
      if (state.eat(0x5D /* [ */) || state.eat(0x7D /* } */)) {
        state.raise("Lone quantifier brackets");
      }
    }
    if (state.maxBackReference > state.numCapturingParens) {
      state.raise("Invalid escape");
    }
    for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
      var name = list[i];

      if (state.groupNames.indexOf(name) === -1) {
        state.raise("Invalid named capture referenced");
      }
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
  pp$9.regexp_disjunction = function(state) {
    var this$1 = this;

    this.regexp_alternative(state);
    while (state.eat(0x7C /* | */)) {
      this$1.regexp_alternative(state);
    }

    // Make the same message as V8.
    if (this.regexp_eatQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    if (state.eat(0x7B /* { */)) {
      state.raise("Lone quantifier brackets");
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
  pp$9.regexp_alternative = function(state) {
    while (state.pos < state.source.length && this.regexp_eatTerm(state))
      {  }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
  pp$9.regexp_eatTerm = function(state) {
    if (this.regexp_eatAssertion(state)) {
      // Handle `QuantifiableAssertion Quantifier` alternative.
      // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
      // is a QuantifiableAssertion.
      if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
        // Make the same message as V8.
        if (state.switchU) {
          state.raise("Invalid quantifier");
        }
      }
      return true
    }

    if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
      this.regexp_eatQuantifier(state);
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
  pp$9.regexp_eatAssertion = function(state) {
    var start = state.pos;
    state.lastAssertionIsQuantifiable = false;

    // ^, $
    if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
      return true
    }

    // \b \B
    if (state.eat(0x5C /* \ */)) {
      if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
        return true
      }
      state.pos = start;
    }

    // Lookahead / Lookbehind
    if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
      var lookbehind = false;
      if (this.options.ecmaVersion >= 9) {
        lookbehind = state.eat(0x3C /* < */);
      }
      if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
        this.regexp_disjunction(state);
        if (!state.eat(0x29 /* ) */)) {
          state.raise("Unterminated group");
        }
        state.lastAssertionIsQuantifiable = !lookbehind;
        return true
      }
    }

    state.pos = start;
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
  pp$9.regexp_eatQuantifier = function(state, noError) {
    if ( noError === void 0 ) noError = false;

    if (this.regexp_eatQuantifierPrefix(state, noError)) {
      state.eat(0x3F /* ? */);
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
  pp$9.regexp_eatQuantifierPrefix = function(state, noError) {
    return (
      state.eat(0x2A /* * */) ||
      state.eat(0x2B /* + */) ||
      state.eat(0x3F /* ? */) ||
      this.regexp_eatBracedQuantifier(state, noError)
    )
  };
  pp$9.regexp_eatBracedQuantifier = function(state, noError) {
    var start = state.pos;
    if (state.eat(0x7B /* { */)) {
      var min = 0, max = -1;
      if (this.regexp_eatDecimalDigits(state)) {
        min = state.lastIntValue;
        if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
          max = state.lastIntValue;
        }
        if (state.eat(0x7D /* } */)) {
          // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
          if (max !== -1 && max < min && !noError) {
            state.raise("numbers out of order in {} quantifier");
          }
          return true
        }
      }
      if (state.switchU && !noError) {
        state.raise("Incomplete quantifier");
      }
      state.pos = start;
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
  pp$9.regexp_eatAtom = function(state) {
    return (
      this.regexp_eatPatternCharacters(state) ||
      state.eat(0x2E /* . */) ||
      this.regexp_eatReverseSolidusAtomEscape(state) ||
      this.regexp_eatCharacterClass(state) ||
      this.regexp_eatUncapturingGroup(state) ||
      this.regexp_eatCapturingGroup(state)
    )
  };
  pp$9.regexp_eatReverseSolidusAtomEscape = function(state) {
    var start = state.pos;
    if (state.eat(0x5C /* \ */)) {
      if (this.regexp_eatAtomEscape(state)) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$9.regexp_eatUncapturingGroup = function(state) {
    var start = state.pos;
    if (state.eat(0x28 /* ( */)) {
      if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
        this.regexp_disjunction(state);
        if (state.eat(0x29 /* ) */)) {
          return true
        }
        state.raise("Unterminated group");
      }
      state.pos = start;
    }
    return false
  };
  pp$9.regexp_eatCapturingGroup = function(state) {
    if (state.eat(0x28 /* ( */)) {
      if (this.options.ecmaVersion >= 9) {
        this.regexp_groupSpecifier(state);
      } else if (state.current() === 0x3F /* ? */) {
        state.raise("Invalid group");
      }
      this.regexp_disjunction(state);
      if (state.eat(0x29 /* ) */)) {
        state.numCapturingParens += 1;
        return true
      }
      state.raise("Unterminated group");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
  pp$9.regexp_eatExtendedAtom = function(state) {
    return (
      state.eat(0x2E /* . */) ||
      this.regexp_eatReverseSolidusAtomEscape(state) ||
      this.regexp_eatCharacterClass(state) ||
      this.regexp_eatUncapturingGroup(state) ||
      this.regexp_eatCapturingGroup(state) ||
      this.regexp_eatInvalidBracedQuantifier(state) ||
      this.regexp_eatExtendedPatternCharacter(state)
    )
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
  pp$9.regexp_eatInvalidBracedQuantifier = function(state) {
    if (this.regexp_eatBracedQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
  pp$9.regexp_eatSyntaxCharacter = function(state) {
    var ch = state.current();
    if (isSyntaxCharacter(ch)) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }
    return false
  };
  function isSyntaxCharacter(ch) {
    return (
      ch === 0x24 /* $ */ ||
      ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
      ch === 0x2E /* . */ ||
      ch === 0x3F /* ? */ ||
      ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
      ch >= 0x7B /* { */ && ch <= 0x7D /* } */
    )
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
  // But eat eager.
  pp$9.regexp_eatPatternCharacters = function(state) {
    var start = state.pos;
    var ch = 0;
    while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
      state.advance();
    }
    return state.pos !== start
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
  pp$9.regexp_eatExtendedPatternCharacter = function(state) {
    var ch = state.current();
    if (
      ch !== -1 &&
      ch !== 0x24 /* $ */ &&
      !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
      ch !== 0x2E /* . */ &&
      ch !== 0x3F /* ? */ &&
      ch !== 0x5B /* [ */ &&
      ch !== 0x5E /* ^ */ &&
      ch !== 0x7C /* | */
    ) {
      state.advance();
      return true
    }
    return false
  };

  // GroupSpecifier[U] ::
  //   [empty]
  //   `?` GroupName[?U]
  pp$9.regexp_groupSpecifier = function(state) {
    if (state.eat(0x3F /* ? */)) {
      if (this.regexp_eatGroupName(state)) {
        if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
          state.raise("Duplicate capture group name");
        }
        state.groupNames.push(state.lastStringValue);
        return
      }
      state.raise("Invalid group");
    }
  };

  // GroupName[U] ::
  //   `<` RegExpIdentifierName[?U] `>`
  // Note: this updates `state.lastStringValue` property with the eaten name.
  pp$9.regexp_eatGroupName = function(state) {
    state.lastStringValue = "";
    if (state.eat(0x3C /* < */)) {
      if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
        return true
      }
      state.raise("Invalid capture group name");
    }
    return false
  };

  // RegExpIdentifierName[U] ::
  //   RegExpIdentifierStart[?U]
  //   RegExpIdentifierName[?U] RegExpIdentifierPart[?U]
  // Note: this updates `state.lastStringValue` property with the eaten name.
  pp$9.regexp_eatRegExpIdentifierName = function(state) {
    state.lastStringValue = "";
    if (this.regexp_eatRegExpIdentifierStart(state)) {
      state.lastStringValue += codePointToString$1(state.lastIntValue);
      while (this.regexp_eatRegExpIdentifierPart(state)) {
        state.lastStringValue += codePointToString$1(state.lastIntValue);
      }
      return true
    }
    return false
  };

  // RegExpIdentifierStart[U] ::
  //   UnicodeIDStart
  //   `$`
  //   `_`
  //   `\` RegExpUnicodeEscapeSequence[?U]
  pp$9.regexp_eatRegExpIdentifierStart = function(state) {
    var start = state.pos;
    var ch = state.current();
    state.advance();

    if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierStart(ch)) {
      state.lastIntValue = ch;
      return true
    }

    state.pos = start;
    return false
  };
  function isRegExpIdentifierStart(ch) {
    return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
  }

  // RegExpIdentifierPart[U] ::
  //   UnicodeIDContinue
  //   `$`
  //   `_`
  //   `\` RegExpUnicodeEscapeSequence[?U]
  //   <ZWNJ>
  //   <ZWJ>
  pp$9.regexp_eatRegExpIdentifierPart = function(state) {
    var start = state.pos;
    var ch = state.current();
    state.advance();

    if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierPart(ch)) {
      state.lastIntValue = ch;
      return true
    }

    state.pos = start;
    return false
  };
  function isRegExpIdentifierPart(ch) {
    return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
  pp$9.regexp_eatAtomEscape = function(state) {
    if (
      this.regexp_eatBackReference(state) ||
      this.regexp_eatCharacterClassEscape(state) ||
      this.regexp_eatCharacterEscape(state) ||
      (state.switchN && this.regexp_eatKGroupName(state))
    ) {
      return true
    }
    if (state.switchU) {
      // Make the same message as V8.
      if (state.current() === 0x63 /* c */) {
        state.raise("Invalid unicode escape");
      }
      state.raise("Invalid escape");
    }
    return false
  };
  pp$9.regexp_eatBackReference = function(state) {
    var start = state.pos;
    if (this.regexp_eatDecimalEscape(state)) {
      var n = state.lastIntValue;
      if (state.switchU) {
        // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
        if (n > state.maxBackReference) {
          state.maxBackReference = n;
        }
        return true
      }
      if (n <= state.numCapturingParens) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$9.regexp_eatKGroupName = function(state) {
    if (state.eat(0x6B /* k */)) {
      if (this.regexp_eatGroupName(state)) {
        state.backReferenceNames.push(state.lastStringValue);
        return true
      }
      state.raise("Invalid named reference");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
  pp$9.regexp_eatCharacterEscape = function(state) {
    return (
      this.regexp_eatControlEscape(state) ||
      this.regexp_eatCControlLetter(state) ||
      this.regexp_eatZero(state) ||
      this.regexp_eatHexEscapeSequence(state) ||
      this.regexp_eatRegExpUnicodeEscapeSequence(state) ||
      (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
      this.regexp_eatIdentityEscape(state)
    )
  };
  pp$9.regexp_eatCControlLetter = function(state) {
    var start = state.pos;
    if (state.eat(0x63 /* c */)) {
      if (this.regexp_eatControlLetter(state)) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$9.regexp_eatZero = function(state) {
    if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
      state.lastIntValue = 0;
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
  pp$9.regexp_eatControlEscape = function(state) {
    var ch = state.current();
    if (ch === 0x74 /* t */) {
      state.lastIntValue = 0x09; /* \t */
      state.advance();
      return true
    }
    if (ch === 0x6E /* n */) {
      state.lastIntValue = 0x0A; /* \n */
      state.advance();
      return true
    }
    if (ch === 0x76 /* v */) {
      state.lastIntValue = 0x0B; /* \v */
      state.advance();
      return true
    }
    if (ch === 0x66 /* f */) {
      state.lastIntValue = 0x0C; /* \f */
      state.advance();
      return true
    }
    if (ch === 0x72 /* r */) {
      state.lastIntValue = 0x0D; /* \r */
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
  pp$9.regexp_eatControlLetter = function(state) {
    var ch = state.current();
    if (isControlLetter(ch)) {
      state.lastIntValue = ch % 0x20;
      state.advance();
      return true
    }
    return false
  };
  function isControlLetter(ch) {
    return (
      (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
      (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
    )
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
  pp$9.regexp_eatRegExpUnicodeEscapeSequence = function(state) {
    var start = state.pos;

    if (state.eat(0x75 /* u */)) {
      if (this.regexp_eatFixedHexDigits(state, 4)) {
        var lead = state.lastIntValue;
        if (state.switchU && lead >= 0xD800 && lead <= 0xDBFF) {
          var leadSurrogateEnd = state.pos;
          if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
            var trail = state.lastIntValue;
            if (trail >= 0xDC00 && trail <= 0xDFFF) {
              state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
              return true
            }
          }
          state.pos = leadSurrogateEnd;
          state.lastIntValue = lead;
        }
        return true
      }
      if (
        state.switchU &&
        state.eat(0x7B /* { */) &&
        this.regexp_eatHexDigits(state) &&
        state.eat(0x7D /* } */) &&
        isValidUnicode(state.lastIntValue)
      ) {
        return true
      }
      if (state.switchU) {
        state.raise("Invalid unicode escape");
      }
      state.pos = start;
    }

    return false
  };
  function isValidUnicode(ch) {
    return ch >= 0 && ch <= 0x10FFFF
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
  pp$9.regexp_eatIdentityEscape = function(state) {
    if (state.switchU) {
      if (this.regexp_eatSyntaxCharacter(state)) {
        return true
      }
      if (state.eat(0x2F /* / */)) {
        state.lastIntValue = 0x2F; /* / */
        return true
      }
      return false
    }

    var ch = state.current();
    if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
  pp$9.regexp_eatDecimalEscape = function(state) {
    state.lastIntValue = 0;
    var ch = state.current();
    if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
      do {
        state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
        state.advance();
      } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
  pp$9.regexp_eatCharacterClassEscape = function(state) {
    var ch = state.current();

    if (isCharacterClassEscape(ch)) {
      state.lastIntValue = -1;
      state.advance();
      return true
    }

    if (
      state.switchU &&
      this.options.ecmaVersion >= 9 &&
      (ch === 0x50 /* P */ || ch === 0x70 /* p */)
    ) {
      state.lastIntValue = -1;
      state.advance();
      if (
        state.eat(0x7B /* { */) &&
        this.regexp_eatUnicodePropertyValueExpression(state) &&
        state.eat(0x7D /* } */)
      ) {
        return true
      }
      state.raise("Invalid property name");
    }

    return false
  };
  function isCharacterClassEscape(ch) {
    return (
      ch === 0x64 /* d */ ||
      ch === 0x44 /* D */ ||
      ch === 0x73 /* s */ ||
      ch === 0x53 /* S */ ||
      ch === 0x77 /* w */ ||
      ch === 0x57 /* W */
    )
  }

  // UnicodePropertyValueExpression ::
  //   UnicodePropertyName `=` UnicodePropertyValue
  //   LoneUnicodePropertyNameOrValue
  pp$9.regexp_eatUnicodePropertyValueExpression = function(state) {
    var start = state.pos;

    // UnicodePropertyName `=` UnicodePropertyValue
    if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
      var name = state.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(state)) {
        var value = state.lastStringValue;
        this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
        return true
      }
    }
    state.pos = start;

    // LoneUnicodePropertyNameOrValue
    if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
      var nameOrValue = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
      return true
    }
    return false
  };
  pp$9.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
    if (!data.hasOwnProperty(name) || data[name].indexOf(value) === -1) {
      state.raise("Invalid property name");
    }
  };
  pp$9.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
    if (data.$LONE.indexOf(nameOrValue) === -1) {
      state.raise("Invalid property name");
    }
  };

  // UnicodePropertyName ::
  //   UnicodePropertyNameCharacters
  pp$9.regexp_eatUnicodePropertyName = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyNameCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString$1(ch);
      state.advance();
    }
    return state.lastStringValue !== ""
  };
  function isUnicodePropertyNameCharacter(ch) {
    return isControlLetter(ch) || ch === 0x5F /* _ */
  }

  // UnicodePropertyValue ::
  //   UnicodePropertyValueCharacters
  pp$9.regexp_eatUnicodePropertyValue = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyValueCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString$1(ch);
      state.advance();
    }
    return state.lastStringValue !== ""
  };
  function isUnicodePropertyValueCharacter(ch) {
    return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
  }

  // LoneUnicodePropertyNameOrValue ::
  //   UnicodePropertyValueCharacters
  pp$9.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
    return this.regexp_eatUnicodePropertyValue(state)
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
  pp$9.regexp_eatCharacterClass = function(state) {
    if (state.eat(0x5B /* [ */)) {
      state.eat(0x5E /* ^ */);
      this.regexp_classRanges(state);
      if (state.eat(0x5D /* [ */)) {
        return true
      }
      // Unreachable since it threw "unterminated regular expression" error before.
      state.raise("Unterminated character class");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
  // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
  // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
  pp$9.regexp_classRanges = function(state) {
    var this$1 = this;

    while (this.regexp_eatClassAtom(state)) {
      var left = state.lastIntValue;
      if (state.eat(0x2D /* - */) && this$1.regexp_eatClassAtom(state)) {
        var right = state.lastIntValue;
        if (state.switchU && (left === -1 || right === -1)) {
          state.raise("Invalid character class");
        }
        if (left !== -1 && right !== -1 && left > right) {
          state.raise("Range out of order in character class");
        }
      }
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
  pp$9.regexp_eatClassAtom = function(state) {
    var start = state.pos;

    if (state.eat(0x5C /* \ */)) {
      if (this.regexp_eatClassEscape(state)) {
        return true
      }
      if (state.switchU) {
        // Make the same message as V8.
        var ch$1 = state.current();
        if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
          state.raise("Invalid class escape");
        }
        state.raise("Invalid escape");
      }
      state.pos = start;
    }

    var ch = state.current();
    if (ch !== 0x5D /* [ */) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
  pp$9.regexp_eatClassEscape = function(state) {
    var start = state.pos;

    if (state.eat(0x62 /* b */)) {
      state.lastIntValue = 0x08; /* <BS> */
      return true
    }

    if (state.switchU && state.eat(0x2D /* - */)) {
      state.lastIntValue = 0x2D; /* - */
      return true
    }

    if (!state.switchU && state.eat(0x63 /* c */)) {
      if (this.regexp_eatClassControlLetter(state)) {
        return true
      }
      state.pos = start;
    }

    return (
      this.regexp_eatCharacterClassEscape(state) ||
      this.regexp_eatCharacterEscape(state)
    )
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
  pp$9.regexp_eatClassControlLetter = function(state) {
    var ch = state.current();
    if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
      state.lastIntValue = ch % 0x20;
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
  pp$9.regexp_eatHexEscapeSequence = function(state) {
    var start = state.pos;
    if (state.eat(0x78 /* x */)) {
      if (this.regexp_eatFixedHexDigits(state, 2)) {
        return true
      }
      if (state.switchU) {
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
  pp$9.regexp_eatDecimalDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isDecimalDigit(ch = state.current())) {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
      state.advance();
    }
    return state.pos !== start
  };
  function isDecimalDigit(ch) {
    return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
  pp$9.regexp_eatHexDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isHexDigit(ch = state.current())) {
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return state.pos !== start
  };
  function isHexDigit(ch) {
    return (
      (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
      (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
      (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
    )
  }
  function hexToInt(ch) {
    if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
      return 10 + (ch - 0x41 /* A */)
    }
    if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
      return 10 + (ch - 0x61 /* a */)
    }
    return ch - 0x30 /* 0 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
  // Allows only 0-377(octal) i.e. 0-255(decimal).
  pp$9.regexp_eatLegacyOctalEscapeSequence = function(state) {
    if (this.regexp_eatOctalDigit(state)) {
      var n1 = state.lastIntValue;
      if (this.regexp_eatOctalDigit(state)) {
        var n2 = state.lastIntValue;
        if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
          state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
        } else {
          state.lastIntValue = n1 * 8 + n2;
        }
      } else {
        state.lastIntValue = n1;
      }
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
  pp$9.regexp_eatOctalDigit = function(state) {
    var ch = state.current();
    if (isOctalDigit(ch)) {
      state.lastIntValue = ch - 0x30; /* 0 */
      state.advance();
      return true
    }
    state.lastIntValue = 0;
    return false
  };
  function isOctalDigit(ch) {
    return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
  // And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
  pp$9.regexp_eatFixedHexDigits = function(state, length) {
    var start = state.pos;
    state.lastIntValue = 0;
    for (var i = 0; i < length; ++i) {
      var ch = state.current();
      if (!isHexDigit(ch)) {
        state.pos = start;
        return false
      }
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return true
  };

  // Object type used to represent tokens. Note that normally, tokens
  // simply exist as properties on the parser object. This is only
  // used for the onToken callback and the external tokenizer.

  var Token = function Token(p) {
    this.type = p.type;
    this.value = p.value;
    this.start = p.start;
    this.end = p.end;
    if (p.options.locations)
      { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
    if (p.options.ranges)
      { this.range = [p.start, p.end]; }
  };

  // ## Tokenizer

  var pp$8 = Parser.prototype;

  // Move to the next token

  pp$8.next = function() {
    if (this.options.onToken)
      { this.options.onToken(new Token(this)); }

    this.lastTokEnd = this.end;
    this.lastTokStart = this.start;
    this.lastTokEndLoc = this.endLoc;
    this.lastTokStartLoc = this.startLoc;
    this.nextToken();
  };

  pp$8.getToken = function() {
    this.next();
    return new Token(this)
  };

  // If we're in an ES6 environment, make parsers iterable
  if (typeof Symbol !== "undefined")
    { pp$8[Symbol.iterator] = function() {
      var this$1 = this;

      return {
        next: function () {
          var token = this$1.getToken();
          return {
            done: token.type === types.eof,
            value: token
          }
        }
      }
    }; }

  // Toggle strict mode. Re-reads the next number or string to please
  // pedantic tests (`"use strict"; 010;` should fail).

  pp$8.curContext = function() {
    return this.context[this.context.length - 1]
  };

  // Read a single token, updating the parser object's token-related
  // properties.

  pp$8.nextToken = function() {
    var curContext = this.curContext();
    if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

    this.start = this.pos;
    if (this.options.locations) { this.startLoc = this.curPosition(); }
    if (this.pos >= this.input.length) { return this.finishToken(types.eof) }

    if (curContext.override) { return curContext.override(this) }
    else { this.readToken(this.fullCharCodeAtPos()); }
  };

  pp$8.readToken = function(code) {
    // Identifier or keyword. '\uXXXX' sequences are allowed in
    // identifiers, so '\' also dispatches to that.
    if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
      { return this.readWord() }

    return this.getTokenFromCode(code)
  };

  pp$8.fullCharCodeAtPos = function() {
    var code = this.input.charCodeAt(this.pos);
    if (code <= 0xd7ff || code >= 0xe000) { return code }
    var next = this.input.charCodeAt(this.pos + 1);
    return (code << 10) + next - 0x35fdc00
  };

  pp$8.skipBlockComment = function() {
    var this$1 = this;

    var startLoc = this.options.onComment && this.curPosition();
    var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
    if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
    this.pos = end + 2;
    if (this.options.locations) {
      lineBreakG.lastIndex = start;
      var match;
      while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
        ++this$1.curLine;
        this$1.lineStart = match.index + match[0].length;
      }
    }
    if (this.options.onComment)
      { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                             startLoc, this.curPosition()); }
  };

  pp$8.skipLineComment = function(startSkip) {
    var this$1 = this;

    var start = this.pos;
    var startLoc = this.options.onComment && this.curPosition();
    var ch = this.input.charCodeAt(this.pos += startSkip);
    while (this.pos < this.input.length && !isNewLine(ch)) {
      ch = this$1.input.charCodeAt(++this$1.pos);
    }
    if (this.options.onComment)
      { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                             startLoc, this.curPosition()); }
  };

  // Called at the start of the parse and after every token. Skips
  // whitespace and comments, and.

  pp$8.skipSpace = function() {
    var this$1 = this;

    loop: while (this.pos < this.input.length) {
      var ch = this$1.input.charCodeAt(this$1.pos);
      switch (ch) {
      case 32: case 160: // ' '
        ++this$1.pos;
        break
      case 13:
        if (this$1.input.charCodeAt(this$1.pos + 1) === 10) {
          ++this$1.pos;
        }
      case 10: case 8232: case 8233:
        ++this$1.pos;
        if (this$1.options.locations) {
          ++this$1.curLine;
          this$1.lineStart = this$1.pos;
        }
        break
      case 47: // '/'
        switch (this$1.input.charCodeAt(this$1.pos + 1)) {
        case 42: // '*'
          this$1.skipBlockComment();
          break
        case 47:
          this$1.skipLineComment(2);
          break
        default:
          break loop
        }
        break
      default:
        if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
          ++this$1.pos;
        } else {
          break loop
        }
      }
    }
  };

  // Called at the end of every token. Sets `end`, `val`, and
  // maintains `context` and `exprAllowed`, and skips the space after
  // the token, so that the next one's `start` will point at the
  // right position.

  pp$8.finishToken = function(type, val) {
    this.end = this.pos;
    if (this.options.locations) { this.endLoc = this.curPosition(); }
    var prevType = this.type;
    this.type = type;
    this.value = val;

    this.updateContext(prevType);
  };

  // ### Token reading

  // This is the function that is called to fetch the next token. It
  // is somewhat obscure, because it works in character codes rather
  // than characters, and because operator parsing has been inlined
  // into it.
  //
  // All in the name of speed.
  //
  pp$8.readToken_dot = function() {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next >= 48 && next <= 57) { return this.readNumber(true) }
    var next2 = this.input.charCodeAt(this.pos + 2);
    if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
      this.pos += 3;
      return this.finishToken(types.ellipsis)
    } else {
      ++this.pos;
      return this.finishToken(types.dot)
    }
  };

  pp$8.readToken_slash = function() { // '/'
    var next = this.input.charCodeAt(this.pos + 1);
    if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
    if (next === 61) { return this.finishOp(types.assign, 2) }
    return this.finishOp(types.slash, 1)
  };

  pp$8.readToken_mult_modulo_exp = function(code) { // '%*'
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    var tokentype = code === 42 ? types.star : types.modulo;

    // exponentiation operator ** and **=
    if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
      ++size;
      tokentype = types.starstar;
      next = this.input.charCodeAt(this.pos + 2);
    }

    if (next === 61) { return this.finishOp(types.assign, size + 1) }
    return this.finishOp(tokentype, size)
  };

  pp$8.readToken_pipe_amp = function(code) { // '|&'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) { return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2) }
    if (next === 61) { return this.finishOp(types.assign, 2) }
    return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1)
  };

  pp$8.readToken_caret = function() { // '^'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) { return this.finishOp(types.assign, 2) }
    return this.finishOp(types.bitwiseXOR, 1)
  };

  pp$8.readToken_plus_min = function(code) { // '+-'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
          (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
        // A `-->` line comment
        this.skipLineComment(3);
        this.skipSpace();
        return this.nextToken()
      }
      return this.finishOp(types.incDec, 2)
    }
    if (next === 61) { return this.finishOp(types.assign, 2) }
    return this.finishOp(types.plusMin, 1)
  };

  pp$8.readToken_lt_gt = function(code) { // '<>'
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types.assign, size + 1) }
      return this.finishOp(types.bitShift, size)
    }
    if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
        this.input.charCodeAt(this.pos + 3) === 45) {
      // `<!--`, an XML-style comment that should be interpreted as a line comment
      this.skipLineComment(4);
      this.skipSpace();
      return this.nextToken()
    }
    if (next === 61) { size = 2; }
    return this.finishOp(types.relational, size)
  };

  pp$8.readToken_eq_excl = function(code) { // '=!'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) { return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
    if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
      this.pos += 2;
      return this.finishToken(types.arrow)
    }
    return this.finishOp(code === 61 ? types.eq : types.prefix, 1)
  };

  pp$8.getTokenFromCode = function(code) {
    switch (code) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46: // '.'
      return this.readToken_dot()

    // Punctuation tokens.
    case 40: ++this.pos; return this.finishToken(types.parenL)
    case 41: ++this.pos; return this.finishToken(types.parenR)
    case 59: ++this.pos; return this.finishToken(types.semi)
    case 44: ++this.pos; return this.finishToken(types.comma)
    case 91: ++this.pos; return this.finishToken(types.bracketL)
    case 93: ++this.pos; return this.finishToken(types.bracketR)
    case 123: ++this.pos; return this.finishToken(types.braceL)
    case 125: ++this.pos; return this.finishToken(types.braceR)
    case 58: ++this.pos; return this.finishToken(types.colon)
    case 63: ++this.pos; return this.finishToken(types.question)

    case 96: // '`'
      if (this.options.ecmaVersion < 6) { break }
      ++this.pos;
      return this.finishToken(types.backQuote)

    case 48: // '0'
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
        if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
      }

    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
      return this.readNumber(false)

    // Quotes produce strings.
    case 34: case 39: // '"', "'"
      return this.readString(code)

    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

    case 47: // '/'
      return this.readToken_slash()

    case 37: case 42: // '%*'
      return this.readToken_mult_modulo_exp(code)

    case 124: case 38: // '|&'
      return this.readToken_pipe_amp(code)

    case 94: // '^'
      return this.readToken_caret()

    case 43: case 45: // '+-'
      return this.readToken_plus_min(code)

    case 60: case 62: // '<>'
      return this.readToken_lt_gt(code)

    case 61: case 33: // '=!'
      return this.readToken_eq_excl(code)

    case 126: // '~'
      return this.finishOp(types.prefix, 1)
    }

    this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
  };

  pp$8.finishOp = function(type, size) {
    var str = this.input.slice(this.pos, this.pos + size);
    this.pos += size;
    return this.finishToken(type, str)
  };

  pp$8.readRegexp = function() {
    var this$1 = this;

    var escaped, inClass, start = this.pos;
    for (;;) {
      if (this$1.pos >= this$1.input.length) { this$1.raise(start, "Unterminated regular expression"); }
      var ch = this$1.input.charAt(this$1.pos);
      if (lineBreak.test(ch)) { this$1.raise(start, "Unterminated regular expression"); }
      if (!escaped) {
        if (ch === "[") { inClass = true; }
        else if (ch === "]" && inClass) { inClass = false; }
        else if (ch === "/" && !inClass) { break }
        escaped = ch === "\\";
      } else { escaped = false; }
      ++this$1.pos;
    }
    var pattern = this.input.slice(start, this.pos);
    ++this.pos;
    var flagsStart = this.pos;
    var flags = this.readWord1();
    if (this.containsEsc) { this.unexpected(flagsStart); }

    // Validate pattern
    var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
    state.reset(start, pattern, flags);
    this.validateRegExpFlags(state);
    this.validateRegExpPattern(state);

    // Create Literal#value property value.
    var value = null;
    try {
      value = new RegExp(pattern, flags);
    } catch (e) {
      // ESTree requires null if it failed to instantiate RegExp object.
      // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
    }

    return this.finishToken(types.regexp, {pattern: pattern, flags: flags, value: value})
  };

  // Read an integer in the given radix. Return null if zero digits
  // were read, the integer value otherwise. When `len` is given, this
  // will return `null` unless the integer has exactly `len` digits.

  pp$8.readInt = function(radix, len) {
    var this$1 = this;

    var start = this.pos, total = 0;
    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
      var code = this$1.input.charCodeAt(this$1.pos), val = (void 0);
      if (code >= 97) { val = code - 97 + 10; } // a
      else if (code >= 65) { val = code - 65 + 10; } // A
      else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
      else { val = Infinity; }
      if (val >= radix) { break }
      ++this$1.pos;
      total = total * radix + val;
    }
    if (this.pos === start || len != null && this.pos - start !== len) { return null }

    return total
  };

  pp$8.readRadixNumber = function(radix) {
    this.pos += 2; // 0x
    var val = this.readInt(radix);
    if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
    return this.finishToken(types.num, val)
  };

  // Read an integer, octal integer, or floating-point number.

  pp$8.readNumber = function(startsWithDot) {
    var start = this.pos;
    if (!startsWithDot && this.readInt(10) === null) { this.raise(start, "Invalid number"); }
    var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
    if (octal && this.strict) { this.raise(start, "Invalid number"); }
    if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
    var next = this.input.charCodeAt(this.pos);
    if (next === 46 && !octal) { // '.'
      ++this.pos;
      this.readInt(10);
      next = this.input.charCodeAt(this.pos);
    }
    if ((next === 69 || next === 101) && !octal) { // 'eE'
      next = this.input.charCodeAt(++this.pos);
      if (next === 43 || next === 45) { ++this.pos; } // '+-'
      if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
    }
    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

    var str = this.input.slice(start, this.pos);
    var val = octal ? parseInt(str, 8) : parseFloat(str);
    return this.finishToken(types.num, val)
  };

  // Read a string value, interpreting backslash-escapes.

  pp$8.readCodePoint = function() {
    var ch = this.input.charCodeAt(this.pos), code;

    if (ch === 123) { // '{'
      if (this.options.ecmaVersion < 6) { this.unexpected(); }
      var codePos = ++this.pos;
      code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
      ++this.pos;
      if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
    } else {
      code = this.readHexChar(4);
    }
    return code
  };

  function codePointToString(code) {
    // UTF-16 Decoding
    if (code <= 0xFFFF) { return String.fromCharCode(code) }
    code -= 0x10000;
    return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
  }

  pp$8.readString = function(quote) {
    var this$1 = this;

    var out = "", chunkStart = ++this.pos;
    for (;;) {
      if (this$1.pos >= this$1.input.length) { this$1.raise(this$1.start, "Unterminated string constant"); }
      var ch = this$1.input.charCodeAt(this$1.pos);
      if (ch === quote) { break }
      if (ch === 92) { // '\'
        out += this$1.input.slice(chunkStart, this$1.pos);
        out += this$1.readEscapedChar(false);
        chunkStart = this$1.pos;
      } else {
        if (isNewLine(ch, this$1.options.ecmaVersion >= 10)) { this$1.raise(this$1.start, "Unterminated string constant"); }
        ++this$1.pos;
      }
    }
    out += this.input.slice(chunkStart, this.pos++);
    return this.finishToken(types.string, out)
  };

  // Reads template string tokens.

  var INVALID_TEMPLATE_ESCAPE_ERROR = {};

  pp$8.tryReadTemplateToken = function() {
    this.inTemplateElement = true;
    try {
      this.readTmplToken();
    } catch (err) {
      if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
        this.readInvalidTemplateToken();
      } else {
        throw err
      }
    }

    this.inTemplateElement = false;
  };

  pp$8.invalidStringToken = function(position, message) {
    if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
      throw INVALID_TEMPLATE_ESCAPE_ERROR
    } else {
      this.raise(position, message);
    }
  };

  pp$8.readTmplToken = function() {
    var this$1 = this;

    var out = "", chunkStart = this.pos;
    for (;;) {
      if (this$1.pos >= this$1.input.length) { this$1.raise(this$1.start, "Unterminated template"); }
      var ch = this$1.input.charCodeAt(this$1.pos);
      if (ch === 96 || ch === 36 && this$1.input.charCodeAt(this$1.pos + 1) === 123) { // '`', '${'
        if (this$1.pos === this$1.start && (this$1.type === types.template || this$1.type === types.invalidTemplate)) {
          if (ch === 36) {
            this$1.pos += 2;
            return this$1.finishToken(types.dollarBraceL)
          } else {
            ++this$1.pos;
            return this$1.finishToken(types.backQuote)
          }
        }
        out += this$1.input.slice(chunkStart, this$1.pos);
        return this$1.finishToken(types.template, out)
      }
      if (ch === 92) { // '\'
        out += this$1.input.slice(chunkStart, this$1.pos);
        out += this$1.readEscapedChar(true);
        chunkStart = this$1.pos;
      } else if (isNewLine(ch)) {
        out += this$1.input.slice(chunkStart, this$1.pos);
        ++this$1.pos;
        switch (ch) {
        case 13:
          if (this$1.input.charCodeAt(this$1.pos) === 10) { ++this$1.pos; }
        case 10:
          out += "\n";
          break
        default:
          out += String.fromCharCode(ch);
          break
        }
        if (this$1.options.locations) {
          ++this$1.curLine;
          this$1.lineStart = this$1.pos;
        }
        chunkStart = this$1.pos;
      } else {
        ++this$1.pos;
      }
    }
  };

  // Reads a template token to search for the end, without validating any escape sequences
  pp$8.readInvalidTemplateToken = function() {
    var this$1 = this;

    for (; this.pos < this.input.length; this.pos++) {
      switch (this$1.input[this$1.pos]) {
      case "\\":
        ++this$1.pos;
        break

      case "$":
        if (this$1.input[this$1.pos + 1] !== "{") {
          break
        }
      // falls through

      case "`":
        return this$1.finishToken(types.invalidTemplate, this$1.input.slice(this$1.start, this$1.pos))

      // no default
      }
    }
    this.raise(this.start, "Unterminated template");
  };

  // Used to read escaped characters

  pp$8.readEscapedChar = function(inTemplate) {
    var ch = this.input.charCodeAt(++this.pos);
    ++this.pos;
    switch (ch) {
    case 110: return "\n" // 'n' -> '\n'
    case 114: return "\r" // 'r' -> '\r'
    case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
    case 117: return codePointToString(this.readCodePoint()) // 'u'
    case 116: return "\t" // 't' -> '\t'
    case 98: return "\b" // 'b' -> '\b'
    case 118: return "\u000b" // 'v' -> '\u000b'
    case 102: return "\f" // 'f' -> '\f'
    case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
    case 10: // ' \n'
      if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
      return ""
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(
            this.pos - 1 - octalStr.length,
            inTemplate
              ? "Octal literal in template string"
              : "Octal literal in strict mode"
          );
        }
        return String.fromCharCode(octal)
      }
      return String.fromCharCode(ch)
    }
  };

  // Used to read character escape sequences ('\x', '\u', '\U').

  pp$8.readHexChar = function(len) {
    var codePos = this.pos;
    var n = this.readInt(16, len);
    if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
    return n
  };

  // Read an identifier, and return it as a string. Sets `this.containsEsc`
  // to whether the word contained a '\u' escape.
  //
  // Incrementally adds only escaped chars, adding other chunks as-is
  // as a micro-optimization.

  pp$8.readWord1 = function() {
    var this$1 = this;

    this.containsEsc = false;
    var word = "", first = true, chunkStart = this.pos;
    var astral = this.options.ecmaVersion >= 6;
    while (this.pos < this.input.length) {
      var ch = this$1.fullCharCodeAtPos();
      if (isIdentifierChar(ch, astral)) {
        this$1.pos += ch <= 0xffff ? 1 : 2;
      } else if (ch === 92) { // "\"
        this$1.containsEsc = true;
        word += this$1.input.slice(chunkStart, this$1.pos);
        var escStart = this$1.pos;
        if (this$1.input.charCodeAt(++this$1.pos) !== 117) // "u"
          { this$1.invalidStringToken(this$1.pos, "Expecting Unicode escape sequence \\uXXXX"); }
        ++this$1.pos;
        var esc = this$1.readCodePoint();
        if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
          { this$1.invalidStringToken(escStart, "Invalid Unicode escape"); }
        word += codePointToString(esc);
        chunkStart = this$1.pos;
      } else {
        break
      }
      first = false;
    }
    return word + this.input.slice(chunkStart, this.pos)
  };

  // Read an identifier or keyword token. Will check for reserved
  // words when necessary.

  pp$8.readWord = function() {
    var word = this.readWord1();
    var type = types.name;
    if (this.keywords.test(word)) {
      if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword " + word); }
      type = keywords$1[word];
    }
    return this.finishToken(type, word)
  };

  // Acorn is a tiny, fast JavaScript parser written in JavaScript.
  //
  // Acorn was written by Marijn Haverbeke, Ingvar Stepanyan, and
  // various contributors and released under an MIT license.
  //
  // Git repositories for Acorn are available at
  //
  //     http://marijnhaverbeke.nl/git/acorn
  //     https://github.com/acornjs/acorn.git
  //
  // Please use the [github bug tracker][ghbt] to report issues.
  //
  // [ghbt]: https://github.com/acornjs/acorn/issues
  //
  // This file defines the main parser interface. The library also comes
  // with a [error-tolerant parser][dammit] and an
  // [abstract syntax tree walker][walk], defined in other files.
  //
  // [dammit]: acorn_loose.js
  // [walk]: util/walk.js

  var version = "5.7.3";

  // The main exported interface (under `self.acorn` when in the
  // browser) is a `parse` function that takes a code string and
  // returns an abstract syntax tree as specified by [Mozilla parser
  // API][api].
  //
  // [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

  function parse(input, options) {
    return new Parser(options, input).parse()
  }

  // This function tries to parse a single expression at a given
  // offset in a string. Useful for parsing mixed-language formats
  // that embed JavaScript expressions.

  function parseExpressionAt(input, pos, options) {
    var p = new Parser(options, input, pos);
    p.nextToken();
    return p.parseExpression()
  }

  // Acorn is organized as a tokenizer and a recursive-descent parser.
  // The `tokenizer` export provides an interface to the tokenizer.

  function tokenizer(input, options) {
    return new Parser(options, input)
  }

  // This is a terrible kludge to support the existing, pre-ES6
  // interface where the loose parser module retroactively adds exports
  // to this module.
  var parse_dammit;
  var LooseParser;
  var pluginsLoose; // eslint-disable-line camelcase
  function addLooseExports(parse, Parser$$1, plugins$$1) {
    parse_dammit = parse; // eslint-disable-line camelcase
    LooseParser = Parser$$1;
    pluginsLoose = plugins$$1;
  }

  var acorn_es = /*#__PURE__*/Object.freeze({
    version: version,
    parse: parse,
    parseExpressionAt: parseExpressionAt,
    tokenizer: tokenizer,
    get parse_dammit () { return parse_dammit; },
    get LooseParser () { return LooseParser; },
    get pluginsLoose () { return pluginsLoose; },
    addLooseExports: addLooseExports,
    Parser: Parser,
    plugins: plugins,
    defaultOptions: defaultOptions,
    Position: Position,
    SourceLocation: SourceLocation,
    getLineInfo: getLineInfo,
    Node: Node,
    TokenType: TokenType,
    tokTypes: types,
    keywordTypes: keywords$1,
    TokContext: TokContext,
    tokContexts: types$1,
    isIdentifierChar: isIdentifierChar,
    isIdentifierStart: isIdentifierStart,
    Token: Token,
    isNewLine: isNewLine,
    lineBreak: lineBreak,
    lineBreakG: lineBreakG,
    nonASCIIwhitespace: nonASCIIwhitespace
  });

  var require$$2 = getCjsExportFromNamespace(empty$1);

  var require$$1 = getCjsExportFromNamespace(acorn_es);

  var paperFull = createCommonjsModule(function (module) {
  /*!
   * Paper.js v0.12.0 - The Swiss Army Knife of Vector Graphics Scripting.
   * http://paperjs.org/
   *
   * Copyright (c) 2011 - 2016, Juerg Lehni & Jonathan Puckey
   * http://scratchdisk.com/ & https://puckey.studio/
   *
   * Distributed under the MIT license. See LICENSE file for details.
   *
   * All rights reserved.
   *
   * Date: Mon Dec 3 14:19:11 2018 +0100
   *
   ***
   *
   * Straps.js - Class inheritance library with support for bean-style accessors
   *
   * Copyright (c) 2006 - 2016 Juerg Lehni
   * http://scratchdisk.com/
   *
   * Distributed under the MIT license.
   *
   ***
   *
   * Acorn.js
   * https://marijnhaverbeke.nl/acorn/
   *
   * Acorn is a tiny, fast JavaScript parser written in JavaScript,
   * created by Marijn Haverbeke and released under an MIT license.
   *
   */

  var paper = function(self, undefined) {

  self = self || require$$2;
  var window = self.window,
  	document = self.document;

  var Base = new function() {
  	var hidden = /^(statics|enumerable|beans|preserve)$/,
  		array = [],
  		slice = array.slice,
  		create = Object.create,
  		describe = Object.getOwnPropertyDescriptor,
  		define = Object.defineProperty,

  		forEach = array.forEach || function(iter, bind) {
  			for (var i = 0, l = this.length; i < l; i++) {
  				iter.call(bind, this[i], i, this);
  			}
  		},

  		forIn = function(iter, bind) {
  			for (var i in this) {
  				if (this.hasOwnProperty(i))
  					iter.call(bind, this[i], i, this);
  			}
  		},

  		set = Object.assign || function(dst) {
  			for (var i = 1, l = arguments.length; i < l; i++) {
  				var src = arguments[i];
  				for (var key in src) {
  					if (src.hasOwnProperty(key))
  						dst[key] = src[key];
  				}
  			}
  			return dst;
  		},

  		each = function(obj, iter, bind) {
  			if (obj) {
  				var desc = describe(obj, 'length');
  				(desc && typeof desc.value === 'number' ? forEach : forIn)
  					.call(obj, iter, bind = bind || obj);
  			}
  			return bind;
  		};

  	function inject(dest, src, enumerable, beans, preserve) {
  		var beansNames = {};

  		function field(name, val) {
  			val = val || (val = describe(src, name))
  					&& (val.get ? val : val.value);
  			if (typeof val === 'string' && val[0] === '#')
  				val = dest[val.substring(1)] || val;
  			var isFunc = typeof val === 'function',
  				res = val,
  				prev = preserve || isFunc && !val.base
  						? (val && val.get ? name in dest : dest[name])
  						: null,
  				bean;
  			if (!preserve || !prev) {
  				if (isFunc && prev)
  					val.base = prev;
  				if (isFunc && beans !== false
  						&& (bean = name.match(/^([gs]et|is)(([A-Z])(.*))$/)))
  					beansNames[bean[3].toLowerCase() + bean[4]] = bean[2];
  				if (!res || isFunc || !res.get || typeof res.get !== 'function'
  						|| !Base.isPlainObject(res)) {
  					res = { value: res, writable: true };
  				}
  				if ((describe(dest, name)
  						|| { configurable: true }).configurable) {
  					res.configurable = true;
  					res.enumerable = enumerable != null ? enumerable : !bean;
  				}
  				define(dest, name, res);
  			}
  		}
  		if (src) {
  			for (var name in src) {
  				if (src.hasOwnProperty(name) && !hidden.test(name))
  					field(name);
  			}
  			for (var name in beansNames) {
  				var part = beansNames[name],
  					set = dest['set' + part],
  					get = dest['get' + part] || set && dest['is' + part];
  				if (get && (beans === true || get.length === 0))
  					field(name, { get: get, set: set });
  			}
  		}
  		return dest;
  	}

  	function Base() {
  		for (var i = 0, l = arguments.length; i < l; i++) {
  			var src = arguments[i];
  			if (src)
  				set(this, src);
  		}
  		return this;
  	}

  	return inject(Base, {
  		inject: function(src) {
  			if (src) {
  				var statics = src.statics === true ? src : src.statics,
  					beans = src.beans,
  					preserve = src.preserve;
  				if (statics !== src)
  					inject(this.prototype, src, src.enumerable, beans, preserve);
  				inject(this, statics, null, beans, preserve);
  			}
  			for (var i = 1, l = arguments.length; i < l; i++)
  				this.inject(arguments[i]);
  			return this;
  		},

  		extend: function() {
  			var base = this,
  				ctor,
  				proto;
  			for (var i = 0, obj, l = arguments.length;
  					i < l && !(ctor && proto); i++) {
  				obj = arguments[i];
  				ctor = ctor || obj.initialize;
  				proto = proto || obj.prototype;
  			}
  			ctor = ctor || function() {
  				base.apply(this, arguments);
  			};
  			proto = ctor.prototype = proto || create(this.prototype);
  			define(proto, 'constructor',
  					{ value: ctor, writable: true, configurable: true });
  			inject(ctor, this);
  			if (arguments.length)
  				this.inject.apply(ctor, arguments);
  			ctor.base = base;
  			return ctor;
  		}
  	}).inject({
  		enumerable: false,

  		initialize: Base,

  		set: Base,

  		inject: function() {
  			for (var i = 0, l = arguments.length; i < l; i++) {
  				var src = arguments[i];
  				if (src) {
  					inject(this, src, src.enumerable, src.beans, src.preserve);
  				}
  			}
  			return this;
  		},

  		extend: function() {
  			var res = create(this);
  			return res.inject.apply(res, arguments);
  		},

  		each: function(iter, bind) {
  			return each(this, iter, bind);
  		},

  		clone: function() {
  			return new this.constructor(this);
  		},

  		statics: {
  			set: set,
  			each: each,
  			create: create,
  			define: define,
  			describe: describe,

  			clone: function(obj) {
  				return set(new obj.constructor(), obj);
  			},

  			isPlainObject: function(obj) {
  				var ctor = obj != null && obj.constructor;
  				return ctor && (ctor === Object || ctor === Base
  						|| ctor.name === 'Object');
  			},

  			pick: function(a, b) {
  				return a !== undefined ? a : b;
  			},

  			slice: function(list, begin, end) {
  				return slice.call(list, begin, end);
  			}
  		}
  	});
  };

  module.exports = Base;

  Base.inject({
  	enumerable: false,

  	toString: function() {
  		return this._id != null
  			?  (this._class || 'Object') + (this._name
  				? " '" + this._name + "'"
  				: ' @' + this._id)
  			: '{ ' + Base.each(this, function(value, key) {
  				if (!/^_/.test(key)) {
  					var type = typeof value;
  					this.push(key + ': ' + (type === 'number'
  							? Formatter.instance.number(value)
  							: type === 'string' ? "'" + value + "'" : value));
  				}
  			}, []).join(', ') + ' }';
  	},

  	getClassName: function() {
  		return this._class || '';
  	},

  	importJSON: function(json) {
  		return Base.importJSON(json, this);
  	},

  	exportJSON: function(options) {
  		return Base.exportJSON(this, options);
  	},

  	toJSON: function() {
  		return Base.serialize(this);
  	},

  	set: function(props, exclude) {
  		if (props)
  			Base.filter(this, props, exclude, this._prioritize);
  		return this;
  	}
  }, {

  beans: false,
  statics: {
  	exports: {},

  	extend: function extend() {
  		var res = extend.base.apply(this, arguments),
  			name = res.prototype._class;
  		if (name && !Base.exports[name])
  			Base.exports[name] = res;
  		return res;
  	},

  	equals: function(obj1, obj2) {
  		if (obj1 === obj2)
  			return true;
  		if (obj1 && obj1.equals)
  			return obj1.equals(obj2);
  		if (obj2 && obj2.equals)
  			return obj2.equals(obj1);
  		if (obj1 && obj2
  				&& typeof obj1 === 'object' && typeof obj2 === 'object') {
  			if (Array.isArray(obj1) && Array.isArray(obj2)) {
  				var length = obj1.length;
  				if (length !== obj2.length)
  					return false;
  				while (length--) {
  					if (!Base.equals(obj1[length], obj2[length]))
  						return false;
  				}
  			} else {
  				var keys = Object.keys(obj1),
  					length = keys.length;
  				if (length !== Object.keys(obj2).length)
  					return false;
  				while (length--) {
  					var key = keys[length];
  					if (!(obj2.hasOwnProperty(key)
  							&& Base.equals(obj1[key], obj2[key])))
  						return false;
  				}
  			}
  			return true;
  		}
  		return false;
  	},

  	read: function(list, start, options, amount) {
  		if (this === Base) {
  			var value = this.peek(list, start);
  			list.__index++;
  			return value;
  		}
  		var proto = this.prototype,
  			readIndex = proto._readIndex,
  			begin = start || readIndex && list.__index || 0,
  			length = list.length,
  			obj = list[begin];
  		amount = amount || length - begin;
  		if (obj instanceof this
  			|| options && options.readNull && obj == null && amount <= 1) {
  			if (readIndex)
  				list.__index = begin + 1;
  			return obj && options && options.clone ? obj.clone() : obj;
  		}
  		obj = Base.create(proto);
  		if (readIndex)
  			obj.__read = true;
  		obj = obj.initialize.apply(obj, begin > 0 || begin + amount < length
  				? Base.slice(list, begin, begin + amount)
  				: list) || obj;
  		if (readIndex) {
  			list.__index = begin + obj.__read;
  			var filtered = obj.__filtered;
  			if (filtered) {
  				list.__filtered = filtered;
  				obj.__filtered = undefined;
  			}
  			obj.__read = undefined;
  		}
  		return obj;
  	},

  	peek: function(list, start) {
  		return list[list.__index = start || list.__index || 0];
  	},

  	remain: function(list) {
  		return list.length - (list.__index || 0);
  	},

  	readList: function(list, start, options, amount) {
  		var res = [],
  			entry,
  			begin = start || 0,
  			end = amount ? begin + amount : list.length;
  		for (var i = begin; i < end; i++) {
  			res.push(Array.isArray(entry = list[i])
  					? this.read(entry, 0, options)
  					: this.read(list, i, options, 1));
  		}
  		return res;
  	},

  	readNamed: function(list, name, start, options, amount) {
  		var value = this.getNamed(list, name),
  			hasObject = value !== undefined;
  		if (hasObject) {
  			var filtered = list.__filtered;
  			if (!filtered) {
  				filtered = list.__filtered = Base.create(list[0]);
  				filtered.__unfiltered = list[0];
  			}
  			filtered[name] = undefined;
  		}
  		var l = hasObject ? [value] : list,
  			res = this.read(l, start, options, amount);
  		return res;
  	},

  	getNamed: function(list, name) {
  		var arg = list[0];
  		if (list._hasObject === undefined)
  			list._hasObject = list.length === 1 && Base.isPlainObject(arg);
  		if (list._hasObject)
  			return name ? arg[name] : list.__filtered || arg;
  	},

  	hasNamed: function(list, name) {
  		return !!this.getNamed(list, name);
  	},

  	filter: function(dest, source, exclude, prioritize) {
  		var processed;

  		function handleKey(key) {
  			if (!(exclude && key in exclude) &&
  				!(processed && key in processed)) {
  				var value = source[key];
  				if (value !== undefined)
  					dest[key] = value;
  			}
  		}

  		if (prioritize) {
  			var keys = {};
  			for (var i = 0, key, l = prioritize.length; i < l; i++) {
  				if ((key = prioritize[i]) in source) {
  					handleKey(key);
  					keys[key] = true;
  				}
  			}
  			processed = keys;
  		}

  		Object.keys(source.__unfiltered || source).forEach(handleKey);
  		return dest;
  	},

  	isPlainValue: function(obj, asString) {
  		return Base.isPlainObject(obj) || Array.isArray(obj)
  				|| asString && typeof obj === 'string';
  	},

  	serialize: function(obj, options, compact, dictionary) {
  		options = options || {};

  		var isRoot = !dictionary,
  			res;
  		if (isRoot) {
  			options.formatter = new Formatter(options.precision);
  			dictionary = {
  				length: 0,
  				definitions: {},
  				references: {},
  				add: function(item, create) {
  					var id = '#' + item._id,
  						ref = this.references[id];
  					if (!ref) {
  						this.length++;
  						var res = create.call(item),
  							name = item._class;
  						if (name && res[0] !== name)
  							res.unshift(name);
  						this.definitions[id] = res;
  						ref = this.references[id] = [id];
  					}
  					return ref;
  				}
  			};
  		}
  		if (obj && obj._serialize) {
  			res = obj._serialize(options, dictionary);
  			var name = obj._class;
  			if (name && !obj._compactSerialize && (isRoot || !compact)
  					&& res[0] !== name) {
  				res.unshift(name);
  			}
  		} else if (Array.isArray(obj)) {
  			res = [];
  			for (var i = 0, l = obj.length; i < l; i++)
  				res[i] = Base.serialize(obj[i], options, compact, dictionary);
  		} else if (Base.isPlainObject(obj)) {
  			res = {};
  			var keys = Object.keys(obj);
  			for (var i = 0, l = keys.length; i < l; i++) {
  				var key = keys[i];
  				res[key] = Base.serialize(obj[key], options, compact,
  						dictionary);
  			}
  		} else if (typeof obj === 'number') {
  			res = options.formatter.number(obj, options.precision);
  		} else {
  			res = obj;
  		}
  		return isRoot && dictionary.length > 0
  				? [['dictionary', dictionary.definitions], res]
  				: res;
  	},

  	deserialize: function(json, create, _data, _setDictionary, _isRoot) {
  		var res = json,
  			isFirst = !_data,
  			hasDictionary = isFirst && json && json.length
  				&& json[0][0] === 'dictionary';
  		_data = _data || {};
  		if (Array.isArray(json)) {
  			var type = json[0],
  				isDictionary = type === 'dictionary';
  			if (json.length == 1 && /^#/.test(type)) {
  				return _data.dictionary[type];
  			}
  			type = Base.exports[type];
  			res = [];
  			for (var i = type ? 1 : 0, l = json.length; i < l; i++) {
  				res.push(Base.deserialize(json[i], create, _data,
  						isDictionary, hasDictionary));
  			}
  			if (type) {
  				var args = res;
  				if (create) {
  					res = create(type, args, isFirst || _isRoot);
  				} else {
  					res = new type(args);
  				}
  			}
  		} else if (Base.isPlainObject(json)) {
  			res = {};
  			if (_setDictionary)
  				_data.dictionary = res;
  			for (var key in json)
  				res[key] = Base.deserialize(json[key], create, _data);
  		}
  		return hasDictionary ? res[1] : res;
  	},

  	exportJSON: function(obj, options) {
  		var json = Base.serialize(obj, options);
  		return options && options.asString == false
  				? json
  				: JSON.stringify(json);
  	},

  	importJSON: function(json, target) {
  		return Base.deserialize(
  				typeof json === 'string' ? JSON.parse(json) : json,
  				function(ctor, args, isRoot) {
  					var useTarget = isRoot && target
  							&& target.constructor === ctor,
  						obj = useTarget ? target
  							: Base.create(ctor.prototype);
  					if (args.length === 1 && obj instanceof Item
  							&& (useTarget || !(obj instanceof Layer))) {
  						var arg = args[0];
  						if (Base.isPlainObject(arg))
  							arg.insert = false;
  					}
  					(useTarget ? obj.set : ctor).apply(obj, args);
  					if (useTarget)
  						target = null;
  					return obj;
  				});
  	},

  	push: function(list, items) {
  		var itemsLength = items.length;
  		if (itemsLength < 4096) {
  			list.push.apply(list, items);
  		} else {
  			var startLength = list.length;
  			list.length += itemsLength;
  			for (var i = 0; i < itemsLength; i++) {
  				list[startLength + i] = items[i];
  			}
  		}
  		return list;
  	},

  	splice: function(list, items, index, remove) {
  		var amount = items && items.length,
  			append = index === undefined;
  		index = append ? list.length : index;
  		if (index > list.length)
  			index = list.length;
  		for (var i = 0; i < amount; i++)
  			items[i]._index = index + i;
  		if (append) {
  			Base.push(list, items);
  			return [];
  		} else {
  			var args = [index, remove];
  			if (items)
  				Base.push(args, items);
  			var removed = list.splice.apply(list, args);
  			for (var i = 0, l = removed.length; i < l; i++)
  				removed[i]._index = undefined;
  			for (var i = index + amount, l = list.length; i < l; i++)
  				list[i]._index = i;
  			return removed;
  		}
  	},

  	capitalize: function(str) {
  		return str.replace(/\b[a-z]/g, function(match) {
  			return match.toUpperCase();
  		});
  	},

  	camelize: function(str) {
  		return str.replace(/-(.)/g, function(match, chr) {
  			return chr.toUpperCase();
  		});
  	},

  	hyphenate: function(str) {
  		return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  	}
  }});

  var Emitter = {
  	on: function(type, func) {
  		if (typeof type !== 'string') {
  			Base.each(type, function(value, key) {
  				this.on(key, value);
  			}, this);
  		} else {
  			var types = this._eventTypes,
  				entry = types && types[type],
  				handlers = this._callbacks = this._callbacks || {};
  			handlers = handlers[type] = handlers[type] || [];
  			if (handlers.indexOf(func) === -1) {
  				handlers.push(func);
  				if (entry && entry.install && handlers.length === 1)
  					entry.install.call(this, type);
  			}
  		}
  		return this;
  	},

  	off: function(type, func) {
  		if (typeof type !== 'string') {
  			Base.each(type, function(value, key) {
  				this.off(key, value);
  			}, this);
  			return;
  		}
  		var types = this._eventTypes,
  			entry = types && types[type],
  			handlers = this._callbacks && this._callbacks[type],
  			index;
  		if (handlers) {
  			if (!func || (index = handlers.indexOf(func)) !== -1
  					&& handlers.length === 1) {
  				if (entry && entry.uninstall)
  					entry.uninstall.call(this, type);
  				delete this._callbacks[type];
  			} else if (index !== -1) {
  				handlers.splice(index, 1);
  			}
  		}
  		return this;
  	},

  	once: function(type, func) {
  		return this.on(type, function handler() {
  			func.apply(this, arguments);
  			this.off(type, handler);
  		});
  	},

  	emit: function(type, event) {
  		var handlers = this._callbacks && this._callbacks[type];
  		if (!handlers)
  			return false;
  		var args = Base.slice(arguments, 1),
  			setTarget = event && event.target && !event.currentTarget;
  		handlers = handlers.slice();
  		if (setTarget)
  			event.currentTarget = this;
  		for (var i = 0, l = handlers.length; i < l; i++) {
  			if (handlers[i].apply(this, args) == false) {
  				if (event && event.stop)
  					event.stop();
  				break;
  		   }
  		}
  		if (setTarget)
  			delete event.currentTarget;
  		return true;
  	},

  	responds: function(type) {
  		return !!(this._callbacks && this._callbacks[type]);
  	},

  	attach: '#on',
  	detach: '#off',
  	fire: '#emit',

  	_installEvents: function(install) {
  		var types = this._eventTypes,
  			handlers = this._callbacks,
  			key = install ? 'install' : 'uninstall';
  		if (types) {
  			for (var type in handlers) {
  				if (handlers[type].length > 0) {
  					var entry = types[type],
  						func = entry && entry[key];
  					if (func)
  						func.call(this, type);
  				}
  			}
  		}
  	},

  	statics: {
  		inject: function inject(src) {
  			var events = src._events;
  			if (events) {
  				var types = {};
  				Base.each(events, function(entry, key) {
  					var isString = typeof entry === 'string',
  						name = isString ? entry : key,
  						part = Base.capitalize(name),
  						type = name.substring(2).toLowerCase();
  					types[type] = isString ? {} : entry;
  					name = '_' + name;
  					src['get' + part] = function() {
  						return this[name];
  					};
  					src['set' + part] = function(func) {
  						var prev = this[name];
  						if (prev)
  							this.off(type, prev);
  						if (func)
  							this.on(type, func);
  						this[name] = func;
  					};
  				});
  				src._eventTypes = types;
  			}
  			return inject.base.apply(this, arguments);
  		}
  	}
  };

  var PaperScope = Base.extend({
  	_class: 'PaperScope',

  	initialize: function PaperScope() {
  		paper = this;
  		this.settings = new Base({
  			applyMatrix: true,
  			insertItems: true,
  			handleSize: 4,
  			hitTolerance: 0
  		});
  		this.project = null;
  		this.projects = [];
  		this.tools = [];
  		this._id = PaperScope._id++;
  		PaperScope._scopes[this._id] = this;
  		var proto = PaperScope.prototype;
  		if (!this.support) {
  			var ctx = CanvasProvider.getContext(1, 1) || {};
  			proto.support = {
  				nativeDash: 'setLineDash' in ctx || 'mozDash' in ctx,
  				nativeBlendModes: BlendMode.nativeModes
  			};
  			CanvasProvider.release(ctx);
  		}
  		if (!this.agent) {
  			var user = self.navigator.userAgent.toLowerCase(),
  				os = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(user)||[])[0],
  				platform = os === 'darwin' ? 'mac' : os,
  				agent = proto.agent = proto.browser = { platform: platform };
  			if (platform)
  				agent[platform] = true;
  			user.replace(
  				/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,
  				function(match, n, v1, v2, rv) {
  					if (!agent.chrome) {
  						var v = n === 'opera' ? v2 :
  								/^(node|trident)$/.test(n) ? rv : v1;
  						agent.version = v;
  						agent.versionNumber = parseFloat(v);
  						n = n === 'trident' ? 'msie' : n;
  						agent.name = n;
  						agent[n] = true;
  					}
  				}
  			);
  			if (agent.chrome)
  				delete agent.webkit;
  			if (agent.atom)
  				delete agent.chrome;
  		}
  	},

  	version: "0.12.0",

  	getView: function() {
  		var project = this.project;
  		return project && project._view;
  	},

  	getPaper: function() {
  		return this;
  	},

  	execute: function(code, options) {
  			var exports = paper.PaperScript.execute(code, this, options);
  			View.updateFocus();
  			return exports;
  	},

  	install: function(scope) {
  		var that = this;
  		Base.each(['project', 'view', 'tool'], function(key) {
  			Base.define(scope, key, {
  				configurable: true,
  				get: function() {
  					return that[key];
  				}
  			});
  		});
  		for (var key in this)
  			if (!/^_/.test(key) && this[key])
  				scope[key] = this[key];
  	},

  	setup: function(element) {
  		paper = this;
  		this.project = new Project(element);
  		return this;
  	},

  	createCanvas: function(width, height) {
  		return CanvasProvider.getCanvas(width, height);
  	},

  	activate: function() {
  		paper = this;
  	},

  	clear: function() {
  		var projects = this.projects,
  			tools = this.tools;
  		for (var i = projects.length - 1; i >= 0; i--)
  			projects[i].remove();
  		for (var i = tools.length - 1; i >= 0; i--)
  			tools[i].remove();
  	},

  	remove: function() {
  		this.clear();
  		delete PaperScope._scopes[this._id];
  	},

  	statics: new function() {
  		function handleAttribute(name) {
  			name += 'Attribute';
  			return function(el, attr) {
  				return el[name](attr) || el[name]('data-paper-' + attr);
  			};
  		}

  		return {
  			_scopes: {},
  			_id: 0,

  			get: function(id) {
  				return this._scopes[id] || null;
  			},

  			getAttribute: handleAttribute('get'),
  			hasAttribute: handleAttribute('has')
  		};
  	}
  });

  var PaperScopeItem = Base.extend(Emitter, {

  	initialize: function(activate) {
  		this._scope = paper;
  		this._index = this._scope[this._list].push(this) - 1;
  		if (activate || !this._scope[this._reference])
  			this.activate();
  	},

  	activate: function() {
  		if (!this._scope)
  			return false;
  		var prev = this._scope[this._reference];
  		if (prev && prev !== this)
  			prev.emit('deactivate');
  		this._scope[this._reference] = this;
  		this.emit('activate', prev);
  		return true;
  	},

  	isActive: function() {
  		return this._scope[this._reference] === this;
  	},

  	remove: function() {
  		if (this._index == null)
  			return false;
  		Base.splice(this._scope[this._list], null, this._index, 1);
  		if (this._scope[this._reference] == this)
  			this._scope[this._reference] = null;
  		this._scope = null;
  		return true;
  	},

  	getView: function() {
  		return this._scope.getView();
  	}
  });

  var Formatter = Base.extend({
  	initialize: function(precision) {
  		this.precision = Base.pick(precision, 5);
  		this.multiplier = Math.pow(10, this.precision);
  	},

  	number: function(val) {
  		return this.precision < 16
  				? Math.round(val * this.multiplier) / this.multiplier : val;
  	},

  	pair: function(val1, val2, separator) {
  		return this.number(val1) + (separator || ',') + this.number(val2);
  	},

  	point: function(val, separator) {
  		return this.number(val.x) + (separator || ',') + this.number(val.y);
  	},

  	size: function(val, separator) {
  		return this.number(val.width) + (separator || ',')
  				+ this.number(val.height);
  	},

  	rectangle: function(val, separator) {
  		return this.point(val, separator) + (separator || ',')
  				+ this.size(val, separator);
  	}
  });

  Formatter.instance = new Formatter();

  var Numerical = new function() {

  	var abscissas = [
  		[  0.5773502691896257645091488],
  		[0,0.7745966692414833770358531],
  		[  0.3399810435848562648026658,0.8611363115940525752239465],
  		[0,0.5384693101056830910363144,0.9061798459386639927976269],
  		[  0.2386191860831969086305017,0.6612093864662645136613996,0.9324695142031520278123016],
  		[0,0.4058451513773971669066064,0.7415311855993944398638648,0.9491079123427585245261897],
  		[  0.1834346424956498049394761,0.5255324099163289858177390,0.7966664774136267395915539,0.9602898564975362316835609],
  		[0,0.3242534234038089290385380,0.6133714327005903973087020,0.8360311073266357942994298,0.9681602395076260898355762],
  		[  0.1488743389816312108848260,0.4333953941292471907992659,0.6794095682990244062343274,0.8650633666889845107320967,0.9739065285171717200779640],
  		[0,0.2695431559523449723315320,0.5190961292068118159257257,0.7301520055740493240934163,0.8870625997680952990751578,0.9782286581460569928039380],
  		[  0.1252334085114689154724414,0.3678314989981801937526915,0.5873179542866174472967024,0.7699026741943046870368938,0.9041172563704748566784659,0.9815606342467192506905491],
  		[0,0.2304583159551347940655281,0.4484927510364468528779129,0.6423493394403402206439846,0.8015780907333099127942065,0.9175983992229779652065478,0.9841830547185881494728294],
  		[  0.1080549487073436620662447,0.3191123689278897604356718,0.5152486363581540919652907,0.6872929048116854701480198,0.8272013150697649931897947,0.9284348836635735173363911,0.9862838086968123388415973],
  		[0,0.2011940939974345223006283,0.3941513470775633698972074,0.5709721726085388475372267,0.7244177313601700474161861,0.8482065834104272162006483,0.9372733924007059043077589,0.9879925180204854284895657],
  		[  0.0950125098376374401853193,0.2816035507792589132304605,0.4580167776572273863424194,0.6178762444026437484466718,0.7554044083550030338951012,0.8656312023878317438804679,0.9445750230732325760779884,0.9894009349916499325961542]
  	];

  	var weights = [
  		[1],
  		[0.8888888888888888888888889,0.5555555555555555555555556],
  		[0.6521451548625461426269361,0.3478548451374538573730639],
  		[0.5688888888888888888888889,0.4786286704993664680412915,0.2369268850561890875142640],
  		[0.4679139345726910473898703,0.3607615730481386075698335,0.1713244923791703450402961],
  		[0.4179591836734693877551020,0.3818300505051189449503698,0.2797053914892766679014678,0.1294849661688696932706114],
  		[0.3626837833783619829651504,0.3137066458778872873379622,0.2223810344533744705443560,0.1012285362903762591525314],
  		[0.3302393550012597631645251,0.3123470770400028400686304,0.2606106964029354623187429,0.1806481606948574040584720,0.0812743883615744119718922],
  		[0.2955242247147528701738930,0.2692667193099963550912269,0.2190863625159820439955349,0.1494513491505805931457763,0.0666713443086881375935688],
  		[0.2729250867779006307144835,0.2628045445102466621806889,0.2331937645919904799185237,0.1862902109277342514260976,0.1255803694649046246346943,0.0556685671161736664827537],
  		[0.2491470458134027850005624,0.2334925365383548087608499,0.2031674267230659217490645,0.1600783285433462263346525,0.1069393259953184309602547,0.0471753363865118271946160],
  		[0.2325515532308739101945895,0.2262831802628972384120902,0.2078160475368885023125232,0.1781459807619457382800467,0.1388735102197872384636018,0.0921214998377284479144218,0.0404840047653158795200216],
  		[0.2152638534631577901958764,0.2051984637212956039659241,0.1855383974779378137417166,0.1572031671581935345696019,0.1215185706879031846894148,0.0801580871597602098056333,0.0351194603317518630318329],
  		[0.2025782419255612728806202,0.1984314853271115764561183,0.1861610000155622110268006,0.1662692058169939335532009,0.1395706779261543144478048,0.1071592204671719350118695,0.0703660474881081247092674,0.0307532419961172683546284],
  		[0.1894506104550684962853967,0.1826034150449235888667637,0.1691565193950025381893121,0.1495959888165767320815017,0.1246289712555338720524763,0.0951585116824927848099251,0.0622535239386478928628438,0.0271524594117540948517806]
  	];

  	var abs = Math.abs,
  		sqrt = Math.sqrt,
  		pow = Math.pow,
  		log2 = Math.log2 || function(x) {
  			return Math.log(x) * Math.LOG2E;
  		},
  		EPSILON = 1e-12,
  		MACHINE_EPSILON = 1.12e-16;

  	function clamp(value, min, max) {
  		return value < min ? min : value > max ? max : value;
  	}

  	function getDiscriminant(a, b, c) {
  		function split(v) {
  			var x = v * 134217729,
  				y = v - x,
  				hi = y + x,
  				lo = v - hi;
  			return [hi, lo];
  		}

  		var D = b * b - a * c,
  			E = b * b + a * c;
  		if (abs(D) * 3 < E) {
  			var ad = split(a),
  				bd = split(b),
  				cd = split(c),
  				p = b * b,
  				dp = (bd[0] * bd[0] - p + 2 * bd[0] * bd[1]) + bd[1] * bd[1],
  				q = a * c,
  				dq = (ad[0] * cd[0] - q + ad[0] * cd[1] + ad[1] * cd[0])
  						+ ad[1] * cd[1];
  			D = (p - q) + (dp - dq);
  		}
  		return D;
  	}

  	function getNormalizationFactor() {
  		var norm = Math.max.apply(Math, arguments);
  		return norm && (norm < 1e-8 || norm > 1e8)
  				? pow(2, -Math.round(log2(norm)))
  				: 0;
  	}

  	return {
  		EPSILON: EPSILON,
  		MACHINE_EPSILON: MACHINE_EPSILON,
  		CURVETIME_EPSILON: 1e-8,
  		GEOMETRIC_EPSILON: 1e-7,
  		TRIGONOMETRIC_EPSILON: 1e-8,
  		KAPPA: 4 * (sqrt(2) - 1) / 3,

  		isZero: function(val) {
  			return val >= -EPSILON && val <= EPSILON;
  		},

  		clamp: clamp,

  		integrate: function(f, a, b, n) {
  			var x = abscissas[n - 2],
  				w = weights[n - 2],
  				A = (b - a) * 0.5,
  				B = A + a,
  				i = 0,
  				m = (n + 1) >> 1,
  				sum = n & 1 ? w[i++] * f(B) : 0;
  			while (i < m) {
  				var Ax = A * x[i];
  				sum += w[i++] * (f(B + Ax) + f(B - Ax));
  			}
  			return A * sum;
  		},

  		findRoot: function(f, df, x, a, b, n, tolerance) {
  			for (var i = 0; i < n; i++) {
  				var fx = f(x),
  					dx = fx / df(x),
  					nx = x - dx;
  				if (abs(dx) < tolerance) {
  					x = nx;
  					break;
  				}
  				if (fx > 0) {
  					b = x;
  					x = nx <= a ? (a + b) * 0.5 : nx;
  				} else {
  					a = x;
  					x = nx >= b ? (a + b) * 0.5 : nx;
  				}
  			}
  			return clamp(x, a, b);
  		},

  		solveQuadratic: function(a, b, c, roots, min, max) {
  			var x1, x2 = Infinity;
  			if (abs(a) < EPSILON) {
  				if (abs(b) < EPSILON)
  					return abs(c) < EPSILON ? -1 : 0;
  				x1 = -c / b;
  			} else {
  				b *= -0.5;
  				var D = getDiscriminant(a, b, c);
  				if (D && abs(D) < MACHINE_EPSILON) {
  					var f = getNormalizationFactor(abs(a), abs(b), abs(c));
  					if (f) {
  						a *= f;
  						b *= f;
  						c *= f;
  						D = getDiscriminant(a, b, c);
  					}
  				}
  				if (D >= -MACHINE_EPSILON) {
  					var Q = D < 0 ? 0 : sqrt(D),
  						R = b + (b < 0 ? -Q : Q);
  					if (R === 0) {
  						x1 = c / a;
  						x2 = -x1;
  					} else {
  						x1 = R / a;
  						x2 = c / R;
  					}
  				}
  			}
  			var count = 0,
  				boundless = min == null,
  				minB = min - EPSILON,
  				maxB = max + EPSILON;
  			if (isFinite(x1) && (boundless || x1 > minB && x1 < maxB))
  				roots[count++] = boundless ? x1 : clamp(x1, min, max);
  			if (x2 !== x1
  					&& isFinite(x2) && (boundless || x2 > minB && x2 < maxB))
  				roots[count++] = boundless ? x2 : clamp(x2, min, max);
  			return count;
  		},

  		solveCubic: function(a, b, c, d, roots, min, max) {
  			var f = getNormalizationFactor(abs(a), abs(b), abs(c), abs(d)),
  				x, b1, c2, qd, q;
  			if (f) {
  				a *= f;
  				b *= f;
  				c *= f;
  				d *= f;
  			}

  			function evaluate(x0) {
  				x = x0;
  				var tmp = a * x;
  				b1 = tmp + b;
  				c2 = b1 * x + c;
  				qd = (tmp + b1) * x + c2;
  				q = c2 * x + d;
  			}

  			if (abs(a) < EPSILON) {
  				a = b;
  				b1 = c;
  				c2 = d;
  				x = Infinity;
  			} else if (abs(d) < EPSILON) {
  				b1 = b;
  				c2 = c;
  				x = 0;
  			} else {
  				evaluate(-(b / a) / 3);
  				var t = q / a,
  					r = pow(abs(t), 1/3),
  					s = t < 0 ? -1 : 1,
  					td = -qd / a,
  					rd = td > 0 ? 1.324717957244746 * Math.max(r, sqrt(td)) : r,
  					x0 = x - s * rd;
  				if (x0 !== x) {
  					do {
  						evaluate(x0);
  						x0 = qd === 0 ? x : x - q / qd / (1 + MACHINE_EPSILON);
  					} while (s * x0 > s * x);
  					if (abs(a) * x * x > abs(d / x)) {
  						c2 = -d / x;
  						b1 = (c2 - c) / x;
  					}
  				}
  			}
  			var count = Numerical.solveQuadratic(a, b1, c2, roots, min, max),
  				boundless = min == null;
  			if (isFinite(x) && (count === 0
  					|| count > 0 && x !== roots[0] && x !== roots[1])
  					&& (boundless || x > min - EPSILON && x < max + EPSILON))
  				roots[count++] = boundless ? x : clamp(x, min, max);
  			return count;
  		}
  	};
  };

  var UID = {
  	_id: 1,
  	_pools: {},

  	get: function(name) {
  		if (name) {
  			var pool = this._pools[name];
  			if (!pool)
  				pool = this._pools[name] = { _id: 1 };
  			return pool._id++;
  		} else {
  			return this._id++;
  		}
  	}
  };

  var Point = Base.extend({
  	_class: 'Point',
  	_readIndex: true,

  	initialize: function Point(arg0, arg1) {
  		var type = typeof arg0,
  			reading = this.__read,
  			read = 0;
  		if (type === 'number') {
  			var hasY = typeof arg1 === 'number';
  			this._set(arg0, hasY ? arg1 : arg0);
  			if (reading)
  				read = hasY ? 2 : 1;
  		} else if (type === 'undefined' || arg0 === null) {
  			this._set(0, 0);
  			if (reading)
  				read = arg0 === null ? 1 : 0;
  		} else {
  			var obj = type === 'string' ? arg0.split(/[\s,]+/) || [] : arg0;
  			read = 1;
  			if (Array.isArray(obj)) {
  				this._set(+obj[0], +(obj.length > 1 ? obj[1] : obj[0]));
  			} else if ('x' in obj) {
  				this._set(obj.x || 0, obj.y || 0);
  			} else if ('width' in obj) {
  				this._set(obj.width || 0, obj.height || 0);
  			} else if ('angle' in obj) {
  				this._set(obj.length || 0, 0);
  				this.setAngle(obj.angle || 0);
  			} else {
  				this._set(0, 0);
  				read = 0;
  			}
  		}
  		if (reading)
  			this.__read = read;
  		return this;
  	},

  	set: '#initialize',

  	_set: function(x, y) {
  		this.x = x;
  		this.y = y;
  		return this;
  	},

  	equals: function(point) {
  		return this === point || point
  				&& (this.x === point.x && this.y === point.y
  					|| Array.isArray(point)
  						&& this.x === point[0] && this.y === point[1])
  				|| false;
  	},

  	clone: function() {
  		return new Point(this.x, this.y);
  	},

  	toString: function() {
  		var f = Formatter.instance;
  		return '{ x: ' + f.number(this.x) + ', y: ' + f.number(this.y) + ' }';
  	},

  	_serialize: function(options) {
  		var f = options.formatter;
  		return [f.number(this.x), f.number(this.y)];
  	},

  	getLength: function() {
  		return Math.sqrt(this.x * this.x + this.y * this.y);
  	},

  	setLength: function(length) {
  		if (this.isZero()) {
  			var angle = this._angle || 0;
  			this._set(
  				Math.cos(angle) * length,
  				Math.sin(angle) * length
  			);
  		} else {
  			var scale = length / this.getLength();
  			if (Numerical.isZero(scale))
  				this.getAngle();
  			this._set(
  				this.x * scale,
  				this.y * scale
  			);
  		}
  	},
  	getAngle: function() {
  		return this.getAngleInRadians.apply(this, arguments) * 180 / Math.PI;
  	},

  	setAngle: function(angle) {
  		this.setAngleInRadians.call(this, angle * Math.PI / 180);
  	},

  	getAngleInDegrees: '#getAngle',
  	setAngleInDegrees: '#setAngle',

  	getAngleInRadians: function() {
  		if (!arguments.length) {
  			return this.isZero()
  					? this._angle || 0
  					: this._angle = Math.atan2(this.y, this.x);
  		} else {
  			var point = Point.read(arguments),
  				div = this.getLength() * point.getLength();
  			if (Numerical.isZero(div)) {
  				return NaN;
  			} else {
  				var a = this.dot(point) / div;
  				return Math.acos(a < -1 ? -1 : a > 1 ? 1 : a);
  			}
  		}
  	},

  	setAngleInRadians: function(angle) {
  		this._angle = angle;
  		if (!this.isZero()) {
  			var length = this.getLength();
  			this._set(
  				Math.cos(angle) * length,
  				Math.sin(angle) * length
  			);
  		}
  	},

  	getQuadrant: function() {
  		return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3;
  	}
  }, {
  	beans: false,

  	getDirectedAngle: function() {
  		var point = Point.read(arguments);
  		return Math.atan2(this.cross(point), this.dot(point)) * 180 / Math.PI;
  	},

  	getDistance: function() {
  		var point = Point.read(arguments),
  			x = point.x - this.x,
  			y = point.y - this.y,
  			d = x * x + y * y,
  			squared = Base.read(arguments);
  		return squared ? d : Math.sqrt(d);
  	},

  	normalize: function(length) {
  		if (length === undefined)
  			length = 1;
  		var current = this.getLength(),
  			scale = current !== 0 ? length / current : 0,
  			point = new Point(this.x * scale, this.y * scale);
  		if (scale >= 0)
  			point._angle = this._angle;
  		return point;
  	},

  	rotate: function(angle, center) {
  		if (angle === 0)
  			return this.clone();
  		angle = angle * Math.PI / 180;
  		var point = center ? this.subtract(center) : this,
  			sin = Math.sin(angle),
  			cos = Math.cos(angle);
  		point = new Point(
  			point.x * cos - point.y * sin,
  			point.x * sin + point.y * cos
  		);
  		return center ? point.add(center) : point;
  	},

  	transform: function(matrix) {
  		return matrix ? matrix._transformPoint(this) : this;
  	},

  	add: function() {
  		var point = Point.read(arguments);
  		return new Point(this.x + point.x, this.y + point.y);
  	},

  	subtract: function() {
  		var point = Point.read(arguments);
  		return new Point(this.x - point.x, this.y - point.y);
  	},

  	multiply: function() {
  		var point = Point.read(arguments);
  		return new Point(this.x * point.x, this.y * point.y);
  	},

  	divide: function() {
  		var point = Point.read(arguments);
  		return new Point(this.x / point.x, this.y / point.y);
  	},

  	modulo: function() {
  		var point = Point.read(arguments);
  		return new Point(this.x % point.x, this.y % point.y);
  	},

  	negate: function() {
  		return new Point(-this.x, -this.y);
  	},

  	isInside: function() {
  		return Rectangle.read(arguments).contains(this);
  	},

  	isClose: function() {
  		var point = Point.read(arguments),
  			tolerance = Base.read(arguments);
  		return this.getDistance(point) <= tolerance;
  	},

  	isCollinear: function() {
  		var point = Point.read(arguments);
  		return Point.isCollinear(this.x, this.y, point.x, point.y);
  	},

  	isColinear: '#isCollinear',

  	isOrthogonal: function() {
  		var point = Point.read(arguments);
  		return Point.isOrthogonal(this.x, this.y, point.x, point.y);
  	},

  	isZero: function() {
  		var isZero = Numerical.isZero;
  		return isZero(this.x) && isZero(this.y);
  	},

  	isNaN: function() {
  		return isNaN(this.x) || isNaN(this.y);
  	},

  	isInQuadrant: function(q) {
  		return this.x * (q > 1 && q < 4 ? -1 : 1) >= 0
  			&& this.y * (q > 2 ? -1 : 1) >= 0;
  	},

  	dot: function() {
  		var point = Point.read(arguments);
  		return this.x * point.x + this.y * point.y;
  	},

  	cross: function() {
  		var point = Point.read(arguments);
  		return this.x * point.y - this.y * point.x;
  	},

  	project: function() {
  		var point = Point.read(arguments),
  			scale = point.isZero() ? 0 : this.dot(point) / point.dot(point);
  		return new Point(
  			point.x * scale,
  			point.y * scale
  		);
  	},

  	statics: {
  		min: function() {
  			var point1 = Point.read(arguments),
  				point2 = Point.read(arguments);
  			return new Point(
  				Math.min(point1.x, point2.x),
  				Math.min(point1.y, point2.y)
  			);
  		},

  		max: function() {
  			var point1 = Point.read(arguments),
  				point2 = Point.read(arguments);
  			return new Point(
  				Math.max(point1.x, point2.x),
  				Math.max(point1.y, point2.y)
  			);
  		},

  		random: function() {
  			return new Point(Math.random(), Math.random());
  		},

  		isCollinear: function(x1, y1, x2, y2) {
  			return Math.abs(x1 * y2 - y1 * x2)
  					<= Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2))
  						* 1e-8;
  		},

  		isOrthogonal: function(x1, y1, x2, y2) {
  			return Math.abs(x1 * x2 + y1 * y2)
  					<= Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2))
  						* 1e-8;
  		}
  	}
  }, Base.each(['round', 'ceil', 'floor', 'abs'], function(key) {
  	var op = Math[key];
  	this[key] = function() {
  		return new Point(op(this.x), op(this.y));
  	};
  }, {}));

  var LinkedPoint = Point.extend({
  	initialize: function Point(x, y, owner, setter) {
  		this._x = x;
  		this._y = y;
  		this._owner = owner;
  		this._setter = setter;
  	},

  	_set: function(x, y, _dontNotify) {
  		this._x = x;
  		this._y = y;
  		if (!_dontNotify)
  			this._owner[this._setter](this);
  		return this;
  	},

  	getX: function() {
  		return this._x;
  	},

  	setX: function(x) {
  		this._x = x;
  		this._owner[this._setter](this);
  	},

  	getY: function() {
  		return this._y;
  	},

  	setY: function(y) {
  		this._y = y;
  		this._owner[this._setter](this);
  	},

  	isSelected: function() {
  		return !!(this._owner._selection & this._getSelection());
  	},

  	setSelected: function(selected) {
  		this._owner._changeSelection(this._getSelection(), selected);
  	},

  	_getSelection: function() {
  		return this._setter === 'setPosition' ? 4 : 0;
  	}
  });

  var Size = Base.extend({
  	_class: 'Size',
  	_readIndex: true,

  	initialize: function Size(arg0, arg1) {
  		var type = typeof arg0,
  			reading = this.__read,
  			read = 0;
  		if (type === 'number') {
  			var hasHeight = typeof arg1 === 'number';
  			this._set(arg0, hasHeight ? arg1 : arg0);
  			if (reading)
  				read = hasHeight ? 2 : 1;
  		} else if (type === 'undefined' || arg0 === null) {
  			this._set(0, 0);
  			if (reading)
  				read = arg0 === null ? 1 : 0;
  		} else {
  			var obj = type === 'string' ? arg0.split(/[\s,]+/) || [] : arg0;
  			read = 1;
  			if (Array.isArray(obj)) {
  				this._set(+obj[0], +(obj.length > 1 ? obj[1] : obj[0]));
  			} else if ('width' in obj) {
  				this._set(obj.width || 0, obj.height || 0);
  			} else if ('x' in obj) {
  				this._set(obj.x || 0, obj.y || 0);
  			} else {
  				this._set(0, 0);
  				read = 0;
  			}
  		}
  		if (reading)
  			this.__read = read;
  		return this;
  	},

  	set: '#initialize',

  	_set: function(width, height) {
  		this.width = width;
  		this.height = height;
  		return this;
  	},

  	equals: function(size) {
  		return size === this || size && (this.width === size.width
  				&& this.height === size.height
  				|| Array.isArray(size) && this.width === size[0]
  					&& this.height === size[1]) || false;
  	},

  	clone: function() {
  		return new Size(this.width, this.height);
  	},

  	toString: function() {
  		var f = Formatter.instance;
  		return '{ width: ' + f.number(this.width)
  				+ ', height: ' + f.number(this.height) + ' }';
  	},

  	_serialize: function(options) {
  		var f = options.formatter;
  		return [f.number(this.width),
  				f.number(this.height)];
  	},

  	add: function() {
  		var size = Size.read(arguments);
  		return new Size(this.width + size.width, this.height + size.height);
  	},

  	subtract: function() {
  		var size = Size.read(arguments);
  		return new Size(this.width - size.width, this.height - size.height);
  	},

  	multiply: function() {
  		var size = Size.read(arguments);
  		return new Size(this.width * size.width, this.height * size.height);
  	},

  	divide: function() {
  		var size = Size.read(arguments);
  		return new Size(this.width / size.width, this.height / size.height);
  	},

  	modulo: function() {
  		var size = Size.read(arguments);
  		return new Size(this.width % size.width, this.height % size.height);
  	},

  	negate: function() {
  		return new Size(-this.width, -this.height);
  	},

  	isZero: function() {
  		var isZero = Numerical.isZero;
  		return isZero(this.width) && isZero(this.height);
  	},

  	isNaN: function() {
  		return isNaN(this.width) || isNaN(this.height);
  	},

  	statics: {
  		min: function(size1, size2) {
  			return new Size(
  				Math.min(size1.width, size2.width),
  				Math.min(size1.height, size2.height));
  		},

  		max: function(size1, size2) {
  			return new Size(
  				Math.max(size1.width, size2.width),
  				Math.max(size1.height, size2.height));
  		},

  		random: function() {
  			return new Size(Math.random(), Math.random());
  		}
  	}
  }, Base.each(['round', 'ceil', 'floor', 'abs'], function(key) {
  	var op = Math[key];
  	this[key] = function() {
  		return new Size(op(this.width), op(this.height));
  	};
  }, {}));

  var LinkedSize = Size.extend({
  	initialize: function Size(width, height, owner, setter) {
  		this._width = width;
  		this._height = height;
  		this._owner = owner;
  		this._setter = setter;
  	},

  	_set: function(width, height, _dontNotify) {
  		this._width = width;
  		this._height = height;
  		if (!_dontNotify)
  			this._owner[this._setter](this);
  		return this;
  	},

  	getWidth: function() {
  		return this._width;
  	},

  	setWidth: function(width) {
  		this._width = width;
  		this._owner[this._setter](this);
  	},

  	getHeight: function() {
  		return this._height;
  	},

  	setHeight: function(height) {
  		this._height = height;
  		this._owner[this._setter](this);
  	}
  });

  var Rectangle = Base.extend({
  	_class: 'Rectangle',
  	_readIndex: true,
  	beans: true,

  	initialize: function Rectangle(arg0, arg1, arg2, arg3) {
  		var type = typeof arg0,
  			read;
  		if (type === 'number') {
  			this._set(arg0, arg1, arg2, arg3);
  			read = 4;
  		} else if (type === 'undefined' || arg0 === null) {
  			this._set(0, 0, 0, 0);
  			read = arg0 === null ? 1 : 0;
  		} else if (arguments.length === 1) {
  			if (Array.isArray(arg0)) {
  				this._set.apply(this, arg0);
  				read = 1;
  			} else if (arg0.x !== undefined || arg0.width !== undefined) {
  				this._set(arg0.x || 0, arg0.y || 0,
  						arg0.width || 0, arg0.height || 0);
  				read = 1;
  			} else if (arg0.from === undefined && arg0.to === undefined) {
  				this._set(0, 0, 0, 0);
  				Base.filter(this, arg0);
  				read = 1;
  			}
  		}
  		if (read === undefined) {
  			var frm = Point.readNamed(arguments, 'from'),
  				next = Base.peek(arguments),
  				x = frm.x,
  				y = frm.y,
  				width,
  				height;
  			if (next && next.x !== undefined
  					|| Base.hasNamed(arguments, 'to')) {
  				var to = Point.readNamed(arguments, 'to');
  				width = to.x - x;
  				height = to.y - y;
  				if (width < 0) {
  					x = to.x;
  					width = -width;
  				}
  				if (height < 0) {
  					y = to.y;
  					height = -height;
  				}
  			} else {
  				var size = Size.read(arguments);
  				width = size.width;
  				height = size.height;
  			}
  			this._set(x, y, width, height);
  			read = arguments.__index;
  			var filtered = arguments.__filtered;
  			if (filtered)
  				this.__filtered = filtered;
  		}
  		if (this.__read)
  			this.__read = read;
  		return this;
  	},

  	set: '#initialize',

  	_set: function(x, y, width, height) {
  		this.x = x;
  		this.y = y;
  		this.width = width;
  		this.height = height;
  		return this;
  	},

  	clone: function() {
  		return new Rectangle(this.x, this.y, this.width, this.height);
  	},

  	equals: function(rect) {
  		var rt = Base.isPlainValue(rect)
  				? Rectangle.read(arguments)
  				: rect;
  		return rt === this
  				|| rt && this.x === rt.x && this.y === rt.y
  					&& this.width === rt.width && this.height === rt.height
  				|| false;
  	},

  	toString: function() {
  		var f = Formatter.instance;
  		return '{ x: ' + f.number(this.x)
  				+ ', y: ' + f.number(this.y)
  				+ ', width: ' + f.number(this.width)
  				+ ', height: ' + f.number(this.height)
  				+ ' }';
  	},

  	_serialize: function(options) {
  		var f = options.formatter;
  		return [f.number(this.x),
  				f.number(this.y),
  				f.number(this.width),
  				f.number(this.height)];
  	},

  	getPoint: function(_dontLink) {
  		var ctor = _dontLink ? Point : LinkedPoint;
  		return new ctor(this.x, this.y, this, 'setPoint');
  	},

  	setPoint: function() {
  		var point = Point.read(arguments);
  		this.x = point.x;
  		this.y = point.y;
  	},

  	getSize: function(_dontLink) {
  		var ctor = _dontLink ? Size : LinkedSize;
  		return new ctor(this.width, this.height, this, 'setSize');
  	},

  	_fw: 1,
  	_fh: 1,

  	setSize: function() {
  		var size = Size.read(arguments),
  			sx = this._sx,
  			sy = this._sy,
  			w = size.width,
  			h = size.height;
  		if (sx) {
  			this.x += (this.width - w) * sx;
  		}
  		if (sy) {
  			this.y += (this.height - h) * sy;
  		}
  		this.width = w;
  		this.height = h;
  		this._fw = this._fh = 1;
  	},

  	getLeft: function() {
  		return this.x;
  	},

  	setLeft: function(left) {
  		if (!this._fw) {
  			var amount = left - this.x;
  			this.width -= this._sx === 0.5 ? amount * 2 : amount;
  		}
  		this.x = left;
  		this._sx = this._fw = 0;
  	},

  	getTop: function() {
  		return this.y;
  	},

  	setTop: function(top) {
  		if (!this._fh) {
  			var amount = top - this.y;
  			this.height -= this._sy === 0.5 ? amount * 2 : amount;
  		}
  		this.y = top;
  		this._sy = this._fh = 0;
  	},

  	getRight: function() {
  		return this.x + this.width;
  	},

  	setRight: function(right) {
  		if (!this._fw) {
  			var amount = right - this.x;
  			this.width = this._sx === 0.5 ? amount * 2 : amount;
  		}
  		this.x = right - this.width;
  		this._sx = 1;
  		this._fw = 0;
  	},

  	getBottom: function() {
  		return this.y + this.height;
  	},

  	setBottom: function(bottom) {
  		if (!this._fh) {
  			var amount = bottom - this.y;
  			this.height = this._sy === 0.5 ? amount * 2 : amount;
  		}
  		this.y = bottom - this.height;
  		this._sy = 1;
  		this._fh = 0;
  	},

  	getCenterX: function() {
  		return this.x + this.width / 2;
  	},

  	setCenterX: function(x) {
  		if (this._fw || this._sx === 0.5) {
  			this.x = x - this.width / 2;
  		} else {
  			if (this._sx) {
  				this.x += (x - this.x) * 2 * this._sx;
  			}
  			this.width = (x - this.x) * 2;
  		}
  		this._sx = 0.5;
  		this._fw = 0;
  	},

  	getCenterY: function() {
  		return this.y + this.height / 2;
  	},

  	setCenterY: function(y) {
  		if (this._fh || this._sy === 0.5) {
  			this.y = y - this.height / 2;
  		} else {
  			if (this._sy) {
  				this.y += (y - this.y) * 2 * this._sy;
  			}
  			this.height = (y - this.y) * 2;
  		}
  		this._sy = 0.5;
  		this._fh = 0;
  	},

  	getCenter: function(_dontLink) {
  		var ctor = _dontLink ? Point : LinkedPoint;
  		return new ctor(this.getCenterX(), this.getCenterY(), this, 'setCenter');
  	},

  	setCenter: function() {
  		var point = Point.read(arguments);
  		this.setCenterX(point.x);
  		this.setCenterY(point.y);
  		return this;
  	},

  	getArea: function() {
  		return this.width * this.height;
  	},

  	isEmpty: function() {
  		return this.width === 0 || this.height === 0;
  	},

  	contains: function(arg) {
  		return arg && arg.width !== undefined
  				|| (Array.isArray(arg) ? arg : arguments).length === 4
  				? this._containsRectangle(Rectangle.read(arguments))
  				: this._containsPoint(Point.read(arguments));
  	},

  	_containsPoint: function(point) {
  		var x = point.x,
  			y = point.y;
  		return x >= this.x && y >= this.y
  				&& x <= this.x + this.width
  				&& y <= this.y + this.height;
  	},

  	_containsRectangle: function(rect) {
  		var x = rect.x,
  			y = rect.y;
  		return x >= this.x && y >= this.y
  				&& x + rect.width <= this.x + this.width
  				&& y + rect.height <= this.y + this.height;
  	},

  	intersects: function() {
  		var rect = Rectangle.read(arguments),
  			epsilon = Base.read(arguments) || 0;
  		return rect.x + rect.width > this.x - epsilon
  				&& rect.y + rect.height > this.y - epsilon
  				&& rect.x < this.x + this.width + epsilon
  				&& rect.y < this.y + this.height + epsilon;
  	},

  	intersect: function() {
  		var rect = Rectangle.read(arguments),
  			x1 = Math.max(this.x, rect.x),
  			y1 = Math.max(this.y, rect.y),
  			x2 = Math.min(this.x + this.width, rect.x + rect.width),
  			y2 = Math.min(this.y + this.height, rect.y + rect.height);
  		return new Rectangle(x1, y1, x2 - x1, y2 - y1);
  	},

  	unite: function() {
  		var rect = Rectangle.read(arguments),
  			x1 = Math.min(this.x, rect.x),
  			y1 = Math.min(this.y, rect.y),
  			x2 = Math.max(this.x + this.width, rect.x + rect.width),
  			y2 = Math.max(this.y + this.height, rect.y + rect.height);
  		return new Rectangle(x1, y1, x2 - x1, y2 - y1);
  	},

  	include: function() {
  		var point = Point.read(arguments);
  		var x1 = Math.min(this.x, point.x),
  			y1 = Math.min(this.y, point.y),
  			x2 = Math.max(this.x + this.width, point.x),
  			y2 = Math.max(this.y + this.height, point.y);
  		return new Rectangle(x1, y1, x2 - x1, y2 - y1);
  	},

  	expand: function() {
  		var amount = Size.read(arguments),
  			hor = amount.width,
  			ver = amount.height;
  		return new Rectangle(this.x - hor / 2, this.y - ver / 2,
  				this.width + hor, this.height + ver);
  	},

  	scale: function(hor, ver) {
  		return this.expand(this.width * hor - this.width,
  				this.height * (ver === undefined ? hor : ver) - this.height);
  	}
  }, Base.each([
  		['Top', 'Left'], ['Top', 'Right'],
  		['Bottom', 'Left'], ['Bottom', 'Right'],
  		['Left', 'Center'], ['Top', 'Center'],
  		['Right', 'Center'], ['Bottom', 'Center']
  	],
  	function(parts, index) {
  		var part = parts.join(''),
  			xFirst = /^[RL]/.test(part);
  		if (index >= 4)
  			parts[1] += xFirst ? 'Y' : 'X';
  		var x = parts[xFirst ? 0 : 1],
  			y = parts[xFirst ? 1 : 0],
  			getX = 'get' + x,
  			getY = 'get' + y,
  			setX = 'set' + x,
  			setY = 'set' + y,
  			get = 'get' + part,
  			set = 'set' + part;
  		this[get] = function(_dontLink) {
  			var ctor = _dontLink ? Point : LinkedPoint;
  			return new ctor(this[getX](), this[getY](), this, set);
  		};
  		this[set] = function() {
  			var point = Point.read(arguments);
  			this[setX](point.x);
  			this[setY](point.y);
  		};
  	}, {
  		beans: true
  	}
  ));

  var LinkedRectangle = Rectangle.extend({
  	initialize: function Rectangle(x, y, width, height, owner, setter) {
  		this._set(x, y, width, height, true);
  		this._owner = owner;
  		this._setter = setter;
  	},

  	_set: function(x, y, width, height, _dontNotify) {
  		this._x = x;
  		this._y = y;
  		this._width = width;
  		this._height = height;
  		if (!_dontNotify)
  			this._owner[this._setter](this);
  		return this;
  	}
  },
  new function() {
  	var proto = Rectangle.prototype;

  	return Base.each(['x', 'y', 'width', 'height'], function(key) {
  		var part = Base.capitalize(key),
  			internal = '_' + key;
  		this['get' + part] = function() {
  			return this[internal];
  		};

  		this['set' + part] = function(value) {
  			this[internal] = value;
  			if (!this._dontNotify)
  				this._owner[this._setter](this);
  		};
  	}, Base.each(['Point', 'Size', 'Center',
  			'Left', 'Top', 'Right', 'Bottom', 'CenterX', 'CenterY',
  			'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight',
  			'LeftCenter', 'TopCenter', 'RightCenter', 'BottomCenter'],
  		function(key) {
  			var name = 'set' + key;
  			this[name] = function() {
  				this._dontNotify = true;
  				proto[name].apply(this, arguments);
  				this._dontNotify = false;
  				this._owner[this._setter](this);
  			};
  		}, {
  			isSelected: function() {
  				return !!(this._owner._selection & 2);
  			},

  			setSelected: function(selected) {
  				var owner = this._owner;
  				if (owner._changeSelection) {
  					owner._changeSelection(2, selected);
  				}
  			}
  		})
  	);
  });

  var Matrix = Base.extend({
  	_class: 'Matrix',

  	initialize: function Matrix(arg, _dontNotify) {
  		var count = arguments.length,
  			ok = true;
  		if (count >= 6) {
  			this._set.apply(this, arguments);
  		} else if (count === 1 || count === 2) {
  			if (arg instanceof Matrix) {
  				this._set(arg._a, arg._b, arg._c, arg._d, arg._tx, arg._ty,
  						_dontNotify);
  			} else if (Array.isArray(arg)) {
  				this._set.apply(this,
  						_dontNotify ? arg.concat([_dontNotify]) : arg);
  			} else {
  				ok = false;
  			}
  		} else if (!count) {
  			this.reset();
  		} else {
  			ok = false;
  		}
  		if (!ok) {
  			throw new Error('Unsupported matrix parameters');
  		}
  		return this;
  	},

  	set: '#initialize',

  	_set: function(a, b, c, d, tx, ty, _dontNotify) {
  		this._a = a;
  		this._b = b;
  		this._c = c;
  		this._d = d;
  		this._tx = tx;
  		this._ty = ty;
  		if (!_dontNotify)
  			this._changed();
  		return this;
  	},

  	_serialize: function(options, dictionary) {
  		return Base.serialize(this.getValues(), options, true, dictionary);
  	},

  	_changed: function() {
  		var owner = this._owner;
  		if (owner) {
  			if (owner._applyMatrix) {
  				owner.transform(null, true);
  			} else {
  				owner._changed(25);
  			}
  		}
  	},

  	clone: function() {
  		return new Matrix(this._a, this._b, this._c, this._d,
  				this._tx, this._ty);
  	},

  	equals: function(mx) {
  		return mx === this || mx && this._a === mx._a && this._b === mx._b
  				&& this._c === mx._c && this._d === mx._d
  				&& this._tx === mx._tx && this._ty === mx._ty;
  	},

  	toString: function() {
  		var f = Formatter.instance;
  		return '[[' + [f.number(this._a), f.number(this._c),
  					f.number(this._tx)].join(', ') + '], ['
  				+ [f.number(this._b), f.number(this._d),
  					f.number(this._ty)].join(', ') + ']]';
  	},

  	reset: function(_dontNotify) {
  		this._a = this._d = 1;
  		this._b = this._c = this._tx = this._ty = 0;
  		if (!_dontNotify)
  			this._changed();
  		return this;
  	},

  	apply: function(recursively, _setApplyMatrix) {
  		var owner = this._owner;
  		if (owner) {
  			owner.transform(null, true, Base.pick(recursively, true),
  					_setApplyMatrix);
  			return this.isIdentity();
  		}
  		return false;
  	},

  	translate: function() {
  		var point = Point.read(arguments),
  			x = point.x,
  			y = point.y;
  		this._tx += x * this._a + y * this._c;
  		this._ty += x * this._b + y * this._d;
  		this._changed();
  		return this;
  	},

  	scale: function() {
  		var scale = Point.read(arguments),
  			center = Point.read(arguments, 0, { readNull: true });
  		if (center)
  			this.translate(center);
  		this._a *= scale.x;
  		this._b *= scale.x;
  		this._c *= scale.y;
  		this._d *= scale.y;
  		if (center)
  			this.translate(center.negate());
  		this._changed();
  		return this;
  	},

  	rotate: function(angle ) {
  		angle *= Math.PI / 180;
  		var center = Point.read(arguments, 1),
  			x = center.x,
  			y = center.y,
  			cos = Math.cos(angle),
  			sin = Math.sin(angle),
  			tx = x - x * cos + y * sin,
  			ty = y - x * sin - y * cos,
  			a = this._a,
  			b = this._b,
  			c = this._c,
  			d = this._d;
  		this._a = cos * a + sin * c;
  		this._b = cos * b + sin * d;
  		this._c = -sin * a + cos * c;
  		this._d = -sin * b + cos * d;
  		this._tx += tx * a + ty * c;
  		this._ty += tx * b + ty * d;
  		this._changed();
  		return this;
  	},

  	shear: function() {
  		var shear = Point.read(arguments),
  			center = Point.read(arguments, 0, { readNull: true });
  		if (center)
  			this.translate(center);
  		var a = this._a,
  			b = this._b;
  		this._a += shear.y * this._c;
  		this._b += shear.y * this._d;
  		this._c += shear.x * a;
  		this._d += shear.x * b;
  		if (center)
  			this.translate(center.negate());
  		this._changed();
  		return this;
  	},

  	skew: function() {
  		var skew = Point.read(arguments),
  			center = Point.read(arguments, 0, { readNull: true }),
  			toRadians = Math.PI / 180,
  			shear = new Point(Math.tan(skew.x * toRadians),
  				Math.tan(skew.y * toRadians));
  		return this.shear(shear, center);
  	},

  	append: function(mx, _dontNotify) {
  		if (mx) {
  			var a1 = this._a,
  				b1 = this._b,
  				c1 = this._c,
  				d1 = this._d,
  				a2 = mx._a,
  				b2 = mx._c,
  				c2 = mx._b,
  				d2 = mx._d,
  				tx2 = mx._tx,
  				ty2 = mx._ty;
  			this._a = a2 * a1 + c2 * c1;
  			this._c = b2 * a1 + d2 * c1;
  			this._b = a2 * b1 + c2 * d1;
  			this._d = b2 * b1 + d2 * d1;
  			this._tx += tx2 * a1 + ty2 * c1;
  			this._ty += tx2 * b1 + ty2 * d1;
  			if (!_dontNotify)
  				this._changed();
  		}
  		return this;
  	},

  	prepend: function(mx, _dontNotify) {
  		if (mx) {
  			var a1 = this._a,
  				b1 = this._b,
  				c1 = this._c,
  				d1 = this._d,
  				tx1 = this._tx,
  				ty1 = this._ty,
  				a2 = mx._a,
  				b2 = mx._c,
  				c2 = mx._b,
  				d2 = mx._d,
  				tx2 = mx._tx,
  				ty2 = mx._ty;
  			this._a = a2 * a1 + b2 * b1;
  			this._c = a2 * c1 + b2 * d1;
  			this._b = c2 * a1 + d2 * b1;
  			this._d = c2 * c1 + d2 * d1;
  			this._tx = a2 * tx1 + b2 * ty1 + tx2;
  			this._ty = c2 * tx1 + d2 * ty1 + ty2;
  			if (!_dontNotify)
  				this._changed();
  		}
  		return this;
  	},

  	appended: function(mx) {
  		return this.clone().append(mx);
  	},

  	prepended: function(mx) {
  		return this.clone().prepend(mx);
  	},

  	invert: function() {
  		var a = this._a,
  			b = this._b,
  			c = this._c,
  			d = this._d,
  			tx = this._tx,
  			ty = this._ty,
  			det = a * d - b * c,
  			res = null;
  		if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
  			this._a = d / det;
  			this._b = -b / det;
  			this._c = -c / det;
  			this._d = a / det;
  			this._tx = (c * ty - d * tx) / det;
  			this._ty = (b * tx - a * ty) / det;
  			res = this;
  		}
  		return res;
  	},

  	inverted: function() {
  		return this.clone().invert();
  	},

  	concatenate: '#append',
  	preConcatenate: '#prepend',
  	chain: '#appended',

  	_shiftless: function() {
  		return new Matrix(this._a, this._b, this._c, this._d, 0, 0);
  	},

  	_orNullIfIdentity: function() {
  		return this.isIdentity() ? null : this;
  	},

  	isIdentity: function() {
  		return this._a === 1 && this._b === 0 && this._c === 0 && this._d === 1
  				&& this._tx === 0 && this._ty === 0;
  	},

  	isInvertible: function() {
  		var det = this._a * this._d - this._c * this._b;
  		return det && !isNaN(det) && isFinite(this._tx) && isFinite(this._ty);
  	},

  	isSingular: function() {
  		return !this.isInvertible();
  	},

  	transform: function( src, dst, count) {
  		return arguments.length < 3
  			? this._transformPoint(Point.read(arguments))
  			: this._transformCoordinates(src, dst, count);
  	},

  	_transformPoint: function(point, dest, _dontNotify) {
  		var x = point.x,
  			y = point.y;
  		if (!dest)
  			dest = new Point();
  		return dest._set(
  				x * this._a + y * this._c + this._tx,
  				x * this._b + y * this._d + this._ty,
  				_dontNotify);
  	},

  	_transformCoordinates: function(src, dst, count) {
  		for (var i = 0, max = 2 * count; i < max; i += 2) {
  			var x = src[i],
  				y = src[i + 1];
  			dst[i] = x * this._a + y * this._c + this._tx;
  			dst[i + 1] = x * this._b + y * this._d + this._ty;
  		}
  		return dst;
  	},

  	_transformCorners: function(rect) {
  		var x1 = rect.x,
  			y1 = rect.y,
  			x2 = x1 + rect.width,
  			y2 = y1 + rect.height,
  			coords = [ x1, y1, x2, y1, x2, y2, x1, y2 ];
  		return this._transformCoordinates(coords, coords, 4);
  	},

  	_transformBounds: function(bounds, dest, _dontNotify) {
  		var coords = this._transformCorners(bounds),
  			min = coords.slice(0, 2),
  			max = min.slice();
  		for (var i = 2; i < 8; i++) {
  			var val = coords[i],
  				j = i & 1;
  			if (val < min[j]) {
  				min[j] = val;
  			} else if (val > max[j]) {
  				max[j] = val;
  			}
  		}
  		if (!dest)
  			dest = new Rectangle();
  		return dest._set(min[0], min[1], max[0] - min[0], max[1] - min[1],
  				_dontNotify);
  	},

  	inverseTransform: function() {
  		return this._inverseTransform(Point.read(arguments));
  	},

  	_inverseTransform: function(point, dest, _dontNotify) {
  		var a = this._a,
  			b = this._b,
  			c = this._c,
  			d = this._d,
  			tx = this._tx,
  			ty = this._ty,
  			det = a * d - b * c,
  			res = null;
  		if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
  			var x = point.x - this._tx,
  				y = point.y - this._ty;
  			if (!dest)
  				dest = new Point();
  			res = dest._set(
  					(x * d - y * c) / det,
  					(y * a - x * b) / det,
  					_dontNotify);
  		}
  		return res;
  	},

  	decompose: function() {
  		var a = this._a,
  			b = this._b,
  			c = this._c,
  			d = this._d,
  			det = a * d - b * c,
  			sqrt = Math.sqrt,
  			atan2 = Math.atan2,
  			degrees = 180 / Math.PI,
  			rotate,
  			scale,
  			skew;
  		if (a !== 0 || b !== 0) {
  			var r = sqrt(a * a + b * b);
  			rotate = Math.acos(a / r) * (b > 0 ? 1 : -1);
  			scale = [r, det / r];
  			skew = [atan2(a * c + b * d, r * r), 0];
  		} else if (c !== 0 || d !== 0) {
  			var s = sqrt(c * c + d * d);
  			rotate = Math.asin(c / s)  * (d > 0 ? 1 : -1);
  			scale = [det / s, s];
  			skew = [0, atan2(a * c + b * d, s * s)];
  		} else {
  			rotate = 0;
  			skew = scale = [0, 0];
  		}
  		return {
  			translation: this.getTranslation(),
  			rotation: rotate * degrees,
  			scaling: new Point(scale),
  			skewing: new Point(skew[0] * degrees, skew[1] * degrees)
  		};
  	},

  	getValues: function() {
  		return [ this._a, this._b, this._c, this._d, this._tx, this._ty ];
  	},

  	getTranslation: function() {
  		return new Point(this._tx, this._ty);
  	},

  	getScaling: function() {
  		return this.decompose().scaling;
  	},

  	getRotation: function() {
  		return this.decompose().rotation;
  	},

  	applyToContext: function(ctx) {
  		if (!this.isIdentity()) {
  			ctx.transform(this._a, this._b, this._c, this._d,
  					this._tx, this._ty);
  		}
  	}
  }, Base.each(['a', 'b', 'c', 'd', 'tx', 'ty'], function(key) {
  	var part = Base.capitalize(key),
  		prop = '_' + key;
  	this['get' + part] = function() {
  		return this[prop];
  	};
  	this['set' + part] = function(value) {
  		this[prop] = value;
  		this._changed();
  	};
  }, {}));

  var Line = Base.extend({
  	_class: 'Line',

  	initialize: function Line(arg0, arg1, arg2, arg3, arg4) {
  		var asVector = false;
  		if (arguments.length >= 4) {
  			this._px = arg0;
  			this._py = arg1;
  			this._vx = arg2;
  			this._vy = arg3;
  			asVector = arg4;
  		} else {
  			this._px = arg0.x;
  			this._py = arg0.y;
  			this._vx = arg1.x;
  			this._vy = arg1.y;
  			asVector = arg2;
  		}
  		if (!asVector) {
  			this._vx -= this._px;
  			this._vy -= this._py;
  		}
  	},

  	getPoint: function() {
  		return new Point(this._px, this._py);
  	},

  	getVector: function() {
  		return new Point(this._vx, this._vy);
  	},

  	getLength: function() {
  		return this.getVector().getLength();
  	},

  	intersect: function(line, isInfinite) {
  		return Line.intersect(
  				this._px, this._py, this._vx, this._vy,
  				line._px, line._py, line._vx, line._vy,
  				true, isInfinite);
  	},

  	getSide: function(point, isInfinite) {
  		return Line.getSide(
  				this._px, this._py, this._vx, this._vy,
  				point.x, point.y, true, isInfinite);
  	},

  	getDistance: function(point) {
  		return Math.abs(this.getSignedDistance(point));
  	},

  	getSignedDistance: function(point) {
  		return Line.getSignedDistance(this._px, this._py, this._vx, this._vy,
  				point.x, point.y, true);
  	},

  	isCollinear: function(line) {
  		return Point.isCollinear(this._vx, this._vy, line._vx, line._vy);
  	},

  	isOrthogonal: function(line) {
  		return Point.isOrthogonal(this._vx, this._vy, line._vx, line._vy);
  	},

  	statics: {
  		intersect: function(p1x, p1y, v1x, v1y, p2x, p2y, v2x, v2y, asVector,
  				isInfinite) {
  			if (!asVector) {
  				v1x -= p1x;
  				v1y -= p1y;
  				v2x -= p2x;
  				v2y -= p2y;
  			}
  			var cross = v1x * v2y - v1y * v2x;
  			if (!Numerical.isZero(cross)) {
  				var dx = p1x - p2x,
  					dy = p1y - p2y,
  					u1 = (v2x * dy - v2y * dx) / cross,
  					u2 = (v1x * dy - v1y * dx) / cross,
  					epsilon = 1e-12,
  					uMin = -epsilon,
  					uMax = 1 + epsilon;
  				if (isInfinite
  						|| uMin < u1 && u1 < uMax && uMin < u2 && u2 < uMax) {
  					if (!isInfinite) {
  						u1 = u1 <= 0 ? 0 : u1 >= 1 ? 1 : u1;
  					}
  					return new Point(
  							p1x + u1 * v1x,
  							p1y + u1 * v1y);
  				}
  			}
  		},

  		getSide: function(px, py, vx, vy, x, y, asVector, isInfinite) {
  			if (!asVector) {
  				vx -= px;
  				vy -= py;
  			}
  			var v2x = x - px,
  				v2y = y - py,
  				ccw = v2x * vy - v2y * vx;
  			if (!isInfinite && Numerical.isZero(ccw)) {
  				ccw = (v2x * vx + v2x * vx) / (vx * vx + vy * vy);
  				if (ccw >= 0 && ccw <= 1)
  					ccw = 0;
  			}
  			return ccw < 0 ? -1 : ccw > 0 ? 1 : 0;
  		},

  		getSignedDistance: function(px, py, vx, vy, x, y, asVector) {
  			if (!asVector) {
  				vx -= px;
  				vy -= py;
  			}
  			return vx === 0 ? vy > 0 ? x - px : px - x
  				 : vy === 0 ? vx < 0 ? y - py : py - y
  				 : ((x-px) * vy - (y-py) * vx) / Math.sqrt(vx * vx + vy * vy);
  		},

  		getDistance: function(px, py, vx, vy, x, y, asVector) {
  			return Math.abs(
  					Line.getSignedDistance(px, py, vx, vy, x, y, asVector));
  		}
  	}
  });

  var Project = PaperScopeItem.extend({
  	_class: 'Project',
  	_list: 'projects',
  	_reference: 'project',
  	_compactSerialize: true,

  	initialize: function Project(element) {
  		PaperScopeItem.call(this, true);
  		this._children = [];
  		this._namedChildren = {};
  		this._activeLayer = null;
  		this._currentStyle = new Style(null, null, this);
  		this._view = View.create(this,
  				element || CanvasProvider.getCanvas(1, 1));
  		this._selectionItems = {};
  		this._selectionCount = 0;
  		this._updateVersion = 0;
  	},

  	_serialize: function(options, dictionary) {
  		return Base.serialize(this._children, options, true, dictionary);
  	},

  	_changed: function(flags, item) {
  		if (flags & 1) {
  			var view = this._view;
  			if (view) {
  				view._needsUpdate = true;
  				if (!view._requested && view._autoUpdate)
  					view.requestUpdate();
  			}
  		}
  		var changes = this._changes;
  		if (changes && item) {
  			var changesById = this._changesById,
  				id = item._id,
  				entry = changesById[id];
  			if (entry) {
  				entry.flags |= flags;
  			} else {
  				changes.push(changesById[id] = { item: item, flags: flags });
  			}
  		}
  	},

  	clear: function() {
  		var children = this._children;
  		for (var i = children.length - 1; i >= 0; i--)
  			children[i].remove();
  	},

  	isEmpty: function() {
  		return !this._children.length;
  	},

  	remove: function remove() {
  		if (!remove.base.call(this))
  			return false;
  		if (this._view)
  			this._view.remove();
  		return true;
  	},

  	getView: function() {
  		return this._view;
  	},

  	getCurrentStyle: function() {
  		return this._currentStyle;
  	},

  	setCurrentStyle: function(style) {
  		this._currentStyle.set(style);
  	},

  	getIndex: function() {
  		return this._index;
  	},

  	getOptions: function() {
  		return this._scope.settings;
  	},

  	getLayers: function() {
  		return this._children;
  	},

  	getActiveLayer: function() {
  		return this._activeLayer || new Layer({ project: this, insert: true });
  	},

  	getSymbolDefinitions: function() {
  		var definitions = [],
  			ids = {};
  		this.getItems({
  			class: SymbolItem,
  			match: function(item) {
  				var definition = item._definition,
  					id = definition._id;
  				if (!ids[id]) {
  					ids[id] = true;
  					definitions.push(definition);
  				}
  				return false;
  			}
  		});
  		return definitions;
  	},

  	getSymbols: 'getSymbolDefinitions',

  	getSelectedItems: function() {
  		var selectionItems = this._selectionItems,
  			items = [];
  		for (var id in selectionItems) {
  			var item = selectionItems[id],
  				selection = item._selection;
  			if ((selection & 1) && item.isInserted()) {
  				items.push(item);
  			} else if (!selection) {
  				this._updateSelection(item);
  			}
  		}
  		return items;
  	},

  	_updateSelection: function(item) {
  		var id = item._id,
  			selectionItems = this._selectionItems;
  		if (item._selection) {
  			if (selectionItems[id] !== item) {
  				this._selectionCount++;
  				selectionItems[id] = item;
  			}
  		} else if (selectionItems[id] === item) {
  			this._selectionCount--;
  			delete selectionItems[id];
  		}
  	},

  	selectAll: function() {
  		var children = this._children;
  		for (var i = 0, l = children.length; i < l; i++)
  			children[i].setFullySelected(true);
  	},

  	deselectAll: function() {
  		var selectionItems = this._selectionItems;
  		for (var i in selectionItems)
  			selectionItems[i].setFullySelected(false);
  	},

  	addLayer: function(layer) {
  		return this.insertLayer(undefined, layer);
  	},

  	insertLayer: function(index, layer) {
  		if (layer instanceof Layer) {
  			layer._remove(false, true);
  			Base.splice(this._children, [layer], index, 0);
  			layer._setProject(this, true);
  			var name = layer._name;
  			if (name)
  				layer.setName(name);
  			if (this._changes)
  				layer._changed(5);
  			if (!this._activeLayer)
  				this._activeLayer = layer;
  		} else {
  			layer = null;
  		}
  		return layer;
  	},

  	_insertItem: function(index, item, _created) {
  		item = this.insertLayer(index, item)
  				|| (this._activeLayer || this._insertItem(undefined,
  						new Layer(Item.NO_INSERT), true))
  						.insertChild(index, item);
  		if (_created && item.activate)
  			item.activate();
  		return item;
  	},

  	getItems: function(options) {
  		return Item._getItems(this, options);
  	},

  	getItem: function(options) {
  		return Item._getItems(this, options, null, null, true)[0] || null;
  	},

  	importJSON: function(json) {
  		this.activate();
  		var layer = this._activeLayer;
  		return Base.importJSON(json, layer && layer.isEmpty() && layer);
  	},

  	removeOn: function(type) {
  		var sets = this._removeSets;
  		if (sets) {
  			if (type === 'mouseup')
  				sets.mousedrag = null;
  			var set = sets[type];
  			if (set) {
  				for (var id in set) {
  					var item = set[id];
  					for (var key in sets) {
  						var other = sets[key];
  						if (other && other != set)
  							delete other[item._id];
  					}
  					item.remove();
  				}
  				sets[type] = null;
  			}
  		}
  	},

  	draw: function(ctx, matrix, pixelRatio) {
  		this._updateVersion++;
  		ctx.save();
  		matrix.applyToContext(ctx);
  		var children = this._children,
  			param = new Base({
  				offset: new Point(0, 0),
  				pixelRatio: pixelRatio,
  				viewMatrix: matrix.isIdentity() ? null : matrix,
  				matrices: [new Matrix()],
  				updateMatrix: true
  			});
  		for (var i = 0, l = children.length; i < l; i++) {
  			children[i].draw(ctx, param);
  		}
  		ctx.restore();

  		if (this._selectionCount > 0) {
  			ctx.save();
  			ctx.strokeWidth = 1;
  			var items = this._selectionItems,
  				size = this._scope.settings.handleSize,
  				version = this._updateVersion;
  			for (var id in items) {
  				items[id]._drawSelection(ctx, matrix, size, items, version);
  			}
  			ctx.restore();
  		}
  	}
  });

  var Item = Base.extend(Emitter, {
  	statics: {
  		extend: function extend(src) {
  			if (src._serializeFields)
  				src._serializeFields = Base.set({},
  					this.prototype._serializeFields, src._serializeFields);
  			return extend.base.apply(this, arguments);
  		},

  		NO_INSERT: { insert: false }
  	},

  	_class: 'Item',
  	_name: null,
  	_applyMatrix: true,
  	_canApplyMatrix: true,
  	_canScaleStroke: false,
  	_pivot: null,
  	_visible: true,
  	_blendMode: 'normal',
  	_opacity: 1,
  	_locked: false,
  	_guide: false,
  	_clipMask: false,
  	_selection: 0,
  	_selectBounds: true,
  	_selectChildren: false,
  	_serializeFields: {
  		name: null,
  		applyMatrix: null,
  		matrix: new Matrix(),
  		pivot: null,
  		visible: true,
  		blendMode: 'normal',
  		opacity: 1,
  		locked: false,
  		guide: false,
  		clipMask: false,
  		selected: false,
  		data: {}
  	},
  	_prioritize: ['applyMatrix']
  },
  new function() {
  	var handlers = ['onMouseDown', 'onMouseUp', 'onMouseDrag', 'onClick',
  			'onDoubleClick', 'onMouseMove', 'onMouseEnter', 'onMouseLeave'];
  	return Base.each(handlers,
  		function(name) {
  			this._events[name] = {
  				install: function(type) {
  					this.getView()._countItemEvent(type, 1);
  				},

  				uninstall: function(type) {
  					this.getView()._countItemEvent(type, -1);
  				}
  			};
  		}, {
  			_events: {
  				onFrame: {
  					install: function() {
  						this.getView()._animateItem(this, true);
  					},

  					uninstall: function() {
  						this.getView()._animateItem(this, false);
  					}
  				},

  				onLoad: {},
  				onError: {}
  			},
  			statics: {
  				_itemHandlers: handlers
  			}
  		}
  	);
  }, {
  	initialize: function Item() {
  	},

  	_initialize: function(props, point) {
  		var hasProps = props && Base.isPlainObject(props),
  			internal = hasProps && props.internal === true,
  			matrix = this._matrix = new Matrix(),
  			project = hasProps && props.project || paper.project,
  			settings = paper.settings;
  		this._id = internal ? null : UID.get();
  		this._parent = this._index = null;
  		this._applyMatrix = this._canApplyMatrix && settings.applyMatrix;
  		if (point)
  			matrix.translate(point);
  		matrix._owner = this;
  		this._style = new Style(project._currentStyle, this, project);
  		if (internal || hasProps && props.insert == false
  			|| !settings.insertItems && !(hasProps && props.insert === true)) {
  			this._setProject(project);
  		} else {
  			(hasProps && props.parent || project)
  					._insertItem(undefined, this, true);
  		}
  		if (hasProps && props !== Item.NO_INSERT) {
  			this.set(props, {
  				internal: true, insert: true, project: true, parent: true
  			});
  		}
  		return hasProps;
  	},

  	_serialize: function(options, dictionary) {
  		var props = {},
  			that = this;

  		function serialize(fields) {
  			for (var key in fields) {
  				var value = that[key];
  				if (!Base.equals(value, key === 'leading'
  						? fields.fontSize * 1.2 : fields[key])) {
  					props[key] = Base.serialize(value, options,
  							key !== 'data', dictionary);
  				}
  			}
  		}

  		serialize(this._serializeFields);
  		if (!(this instanceof Group))
  			serialize(this._style._defaults);
  		return [ this._class, props ];
  	},

  	_changed: function(flags) {
  		var symbol = this._symbol,
  			cacheParent = this._parent || symbol,
  			project = this._project;
  		if (flags & 8) {
  			this._bounds = this._position = this._decomposed = undefined;
  		}
  		if (flags & 16) {
  			this._globalMatrix = undefined;
  		}
  		if (cacheParent
  				&& (flags & 72)) {
  			Item._clearBoundsCache(cacheParent);
  		}
  		if (flags & 2) {
  			Item._clearBoundsCache(this);
  		}
  		if (project)
  			project._changed(flags, this);
  		if (symbol)
  			symbol._changed(flags);
  	},

  	getId: function() {
  		return this._id;
  	},

  	getName: function() {
  		return this._name;
  	},

  	setName: function(name) {

  		if (this._name)
  			this._removeNamed();
  		if (name === (+name) + '')
  			throw new Error(
  					'Names consisting only of numbers are not supported.');
  		var owner = this._getOwner();
  		if (name && owner) {
  			var children = owner._children,
  				namedChildren = owner._namedChildren;
  			(namedChildren[name] = namedChildren[name] || []).push(this);
  			if (!(name in children))
  				children[name] = this;
  		}
  		this._name = name || undefined;
  		this._changed(256);
  	},

  	getStyle: function() {
  		return this._style;
  	},

  	setStyle: function(style) {
  		this.getStyle().set(style);
  	}
  }, Base.each(['locked', 'visible', 'blendMode', 'opacity', 'guide'],
  	function(name) {
  		var part = Base.capitalize(name),
  			key = '_' + name,
  			flags = {
  				locked: 256,
  				visible: 265
  			};
  		this['get' + part] = function() {
  			return this[key];
  		};
  		this['set' + part] = function(value) {
  			if (value != this[key]) {
  				this[key] = value;
  				this._changed(flags[name] || 257);
  			}
  		};
  	},
  {}), {
  	beans: true,

  	getSelection: function() {
  		return this._selection;
  	},

  	setSelection: function(selection) {
  		if (selection !== this._selection) {
  			this._selection = selection;
  			var project = this._project;
  			if (project) {
  				project._updateSelection(this);
  				this._changed(257);
  			}
  		}
  	},

  	_changeSelection: function(flag, selected) {
  		var selection = this._selection;
  		this.setSelection(selected ? selection | flag : selection & ~flag);
  	},

  	isSelected: function() {
  		if (this._selectChildren) {
  			var children = this._children;
  			for (var i = 0, l = children.length; i < l; i++)
  				if (children[i].isSelected())
  					return true;
  		}
  		return !!(this._selection & 1);
  	},

  	setSelected: function(selected) {
  		if (this._selectChildren) {
  			var children = this._children;
  			for (var i = 0, l = children.length; i < l; i++)
  				children[i].setSelected(selected);
  		}
  		this._changeSelection(1, selected);
  	},

  	isFullySelected: function() {
  		var children = this._children,
  			selected = !!(this._selection & 1);
  		if (children && selected) {
  			for (var i = 0, l = children.length; i < l; i++)
  				if (!children[i].isFullySelected())
  					return false;
  			return true;
  		}
  		return selected;
  	},

  	setFullySelected: function(selected) {
  		var children = this._children;
  		if (children) {
  			for (var i = 0, l = children.length; i < l; i++)
  				children[i].setFullySelected(selected);
  		}
  		this._changeSelection(1, selected);
  	},

  	isClipMask: function() {
  		return this._clipMask;
  	},

  	setClipMask: function(clipMask) {
  		if (this._clipMask != (clipMask = !!clipMask)) {
  			this._clipMask = clipMask;
  			if (clipMask) {
  				this.setFillColor(null);
  				this.setStrokeColor(null);
  			}
  			this._changed(257);
  			if (this._parent)
  				this._parent._changed(2048);
  		}
  	},

  	getData: function() {
  		if (!this._data)
  			this._data = {};
  		return this._data;
  	},

  	setData: function(data) {
  		this._data = data;
  	},

  	getPosition: function(_dontLink) {
  		var ctor = _dontLink ? Point : LinkedPoint;
  		var position = this._position ||
  			(this._position = this._getPositionFromBounds());
  		return new ctor(position.x, position.y, this, 'setPosition');
  	},

  	setPosition: function() {
  		this.translate(Point.read(arguments).subtract(this.getPosition(true)));
  	},

  	_getPositionFromBounds: function(bounds) {
  		return this._pivot
  				? this._matrix._transformPoint(this._pivot)
  				: (bounds || this.getBounds()).getCenter(true);
  	},

  	getPivot: function() {
  		var pivot = this._pivot;
  		return pivot
  				? new LinkedPoint(pivot.x, pivot.y, this, 'setPivot')
  				: null;
  	},

  	setPivot: function() {
  		this._pivot = Point.read(arguments, 0, { clone: true, readNull: true });
  		this._position = undefined;
  	}
  }, Base.each({
  		getStrokeBounds: { stroke: true },
  		getHandleBounds: { handle: true },
  		getInternalBounds: { internal: true }
  	},
  	function(options, key) {
  		this[key] = function(matrix) {
  			return this.getBounds(matrix, options);
  		};
  	},
  {
  	beans: true,

  	getBounds: function(matrix, options) {
  		var hasMatrix = options || matrix instanceof Matrix,
  			opts = Base.set({}, hasMatrix ? options : matrix,
  					this._boundsOptions);
  		if (!opts.stroke || this.getStrokeScaling())
  			opts.cacheItem = this;
  		var rect = this._getCachedBounds(hasMatrix && matrix, opts).rect;
  		return !arguments.length
  				? new LinkedRectangle(rect.x, rect.y, rect.width, rect.height,
  					this, 'setBounds')
  				: rect;
  	},

  	setBounds: function() {
  		var rect = Rectangle.read(arguments),
  			bounds = this.getBounds(),
  			_matrix = this._matrix,
  			matrix = new Matrix(),
  			center = rect.getCenter();
  		matrix.translate(center);
  		if (rect.width != bounds.width || rect.height != bounds.height) {
  			if (!_matrix.isInvertible()) {
  				_matrix.set(_matrix._backup
  						|| new Matrix().translate(_matrix.getTranslation()));
  				bounds = this.getBounds();
  			}
  			matrix.scale(
  					bounds.width !== 0 ? rect.width / bounds.width : 0,
  					bounds.height !== 0 ? rect.height / bounds.height : 0);
  		}
  		center = bounds.getCenter();
  		matrix.translate(-center.x, -center.y);
  		this.transform(matrix);
  	},

  	_getBounds: function(matrix, options) {
  		var children = this._children;
  		if (!children || !children.length)
  			return new Rectangle();
  		Item._updateBoundsCache(this, options.cacheItem);
  		return Item._getBounds(children, matrix, options);
  	},

  	_getBoundsCacheKey: function(options, internal) {
  		return [
  			options.stroke ? 1 : 0,
  			options.handle ? 1 : 0,
  			internal ? 1 : 0
  		].join('');
  	},

  	_getCachedBounds: function(matrix, options, noInternal) {
  		matrix = matrix && matrix._orNullIfIdentity();
  		var internal = options.internal && !noInternal,
  			cacheItem = options.cacheItem,
  			_matrix = internal ? null : this._matrix._orNullIfIdentity(),
  			cacheKey = cacheItem && (!matrix || matrix.equals(_matrix))
  				&& this._getBoundsCacheKey(options, internal),
  			bounds = this._bounds;
  		Item._updateBoundsCache(this._parent || this._symbol, cacheItem);
  		if (cacheKey && bounds && cacheKey in bounds) {
  			var cached = bounds[cacheKey];
  			return {
  				rect: cached.rect.clone(),
  				nonscaling: cached.nonscaling
  			};
  		}
  		var res = this._getBounds(matrix || _matrix, options),
  			rect = res.rect || res,
  			style = this._style,
  			nonscaling = res.nonscaling || style.hasStroke()
  				&& !style.getStrokeScaling();
  		if (cacheKey) {
  			if (!bounds) {
  				this._bounds = bounds = {};
  			}
  			var cached = bounds[cacheKey] = {
  				rect: rect.clone(),
  				nonscaling: nonscaling,
  				internal: internal
  			};
  		}
  		return {
  			rect: rect,
  			nonscaling: nonscaling
  		};
  	},

  	_getStrokeMatrix: function(matrix, options) {
  		var parent = this.getStrokeScaling() ? null
  				: options && options.internal ? this
  					: this._parent || this._symbol && this._symbol._item,
  			mx = parent ? parent.getViewMatrix().invert() : matrix;
  		return mx && mx._shiftless();
  	},

  	statics: {
  		_updateBoundsCache: function(parent, item) {
  			if (parent && item) {
  				var id = item._id,
  					ref = parent._boundsCache = parent._boundsCache || {
  						ids: {},
  						list: []
  					};
  				if (!ref.ids[id]) {
  					ref.list.push(item);
  					ref.ids[id] = item;
  				}
  			}
  		},

  		_clearBoundsCache: function(item) {
  			var cache = item._boundsCache;
  			if (cache) {
  				item._bounds = item._position = item._boundsCache = undefined;
  				for (var i = 0, list = cache.list, l = list.length; i < l; i++){
  					var other = list[i];
  					if (other !== item) {
  						other._bounds = other._position = undefined;
  						if (other._boundsCache)
  							Item._clearBoundsCache(other);
  					}
  				}
  			}
  		},

  		_getBounds: function(items, matrix, options) {
  			var x1 = Infinity,
  				x2 = -x1,
  				y1 = x1,
  				y2 = x2,
  				nonscaling = false;
  			options = options || {};
  			for (var i = 0, l = items.length; i < l; i++) {
  				var item = items[i];
  				if (item._visible && !item.isEmpty()) {
  					var bounds = item._getCachedBounds(
  						matrix && matrix.appended(item._matrix), options, true),
  						rect = bounds.rect;
  					x1 = Math.min(rect.x, x1);
  					y1 = Math.min(rect.y, y1);
  					x2 = Math.max(rect.x + rect.width, x2);
  					y2 = Math.max(rect.y + rect.height, y2);
  					if (bounds.nonscaling)
  						nonscaling = true;
  				}
  			}
  			return {
  				rect: isFinite(x1)
  					? new Rectangle(x1, y1, x2 - x1, y2 - y1)
  					: new Rectangle(),
  				nonscaling: nonscaling
  			};
  		}
  	}

  }), {
  	beans: true,

  	_decompose: function() {
  		return this._applyMatrix
  			? null
  			: this._decomposed || (this._decomposed = this._matrix.decompose());
  	},

  	getRotation: function() {
  		var decomposed = this._decompose();
  		return decomposed ? decomposed.rotation : 0;
  	},

  	setRotation: function(rotation) {
  		var current = this.getRotation();
  		if (current != null && rotation != null) {
  			var decomposed = this._decomposed;
  			this.rotate(rotation - current);
  			if (decomposed) {
  				decomposed.rotation = rotation;
  				this._decomposed = decomposed;
  			}
  		}
  	},

  	getScaling: function() {
  		var decomposed = this._decompose(),
  			s = decomposed && decomposed.scaling;
  		return new LinkedPoint(s ? s.x : 1, s ? s.y : 1, this, 'setScaling');
  	},

  	setScaling: function() {
  		var current = this.getScaling(),
  			scaling = Point.read(arguments, 0, { clone: true, readNull: true });
  		if (current && scaling && !current.equals(scaling)) {
  			var rotation = this.getRotation(),
  				decomposed = this._decomposed,
  				matrix = new Matrix(),
  				center = this.getPosition(true);
  			matrix.translate(center);
  			if (rotation)
  				matrix.rotate(rotation);
  			matrix.scale(scaling.x / current.x, scaling.y / current.y);
  			if (rotation)
  				matrix.rotate(-rotation);
  			matrix.translate(center.negate());
  			this.transform(matrix);
  			if (decomposed) {
  				decomposed.scaling = scaling;
  				this._decomposed = decomposed;
  			}
  		}
  	},

  	getMatrix: function() {
  		return this._matrix;
  	},

  	setMatrix: function() {
  		var matrix = this._matrix;
  		matrix.initialize.apply(matrix, arguments);
  	},

  	getGlobalMatrix: function(_dontClone) {
  		var matrix = this._globalMatrix;
  		if (matrix) {
  			var parent = this._parent;
  			var parents = [];
  			while (parent) {
  				if (!parent._globalMatrix) {
  					matrix = null;
  					for (var i = 0, l = parents.length; i < l; i++) {
  						parents[i]._globalMatrix = null;
  					}
  					break;
  				}
  				parents.push(parent);
  				parent = parent._parent;
  			}
  		}
  		if (!matrix) {
  			matrix = this._globalMatrix = this._matrix.clone();
  			var parent = this._parent;
  			if (parent)
  				matrix.prepend(parent.getGlobalMatrix(true));
  		}
  		return _dontClone ? matrix : matrix.clone();
  	},

  	getViewMatrix: function() {
  		return this.getGlobalMatrix().prepend(this.getView()._matrix);
  	},

  	getApplyMatrix: function() {
  		return this._applyMatrix;
  	},

  	setApplyMatrix: function(apply) {
  		if (this._applyMatrix = this._canApplyMatrix && !!apply)
  			this.transform(null, true);
  	},

  	getTransformContent: '#getApplyMatrix',
  	setTransformContent: '#setApplyMatrix',
  }, {
  	getProject: function() {
  		return this._project;
  	},

  	_setProject: function(project, installEvents) {
  		if (this._project !== project) {
  			if (this._project)
  				this._installEvents(false);
  			this._project = project;
  			var children = this._children;
  			for (var i = 0, l = children && children.length; i < l; i++)
  				children[i]._setProject(project);
  			installEvents = true;
  		}
  		if (installEvents)
  			this._installEvents(true);
  	},

  	getView: function() {
  		return this._project._view;
  	},

  	_installEvents: function _installEvents(install) {
  		_installEvents.base.call(this, install);
  		var children = this._children;
  		for (var i = 0, l = children && children.length; i < l; i++)
  			children[i]._installEvents(install);
  	},

  	getLayer: function() {
  		var parent = this;
  		while (parent = parent._parent) {
  			if (parent instanceof Layer)
  				return parent;
  		}
  		return null;
  	},

  	getParent: function() {
  		return this._parent;
  	},

  	setParent: function(item) {
  		return item.addChild(this);
  	},

  	_getOwner: '#getParent',

  	getChildren: function() {
  		return this._children;
  	},

  	setChildren: function(items) {
  		this.removeChildren();
  		this.addChildren(items);
  	},

  	getFirstChild: function() {
  		return this._children && this._children[0] || null;
  	},

  	getLastChild: function() {
  		return this._children && this._children[this._children.length - 1]
  				|| null;
  	},

  	getNextSibling: function() {
  		var owner = this._getOwner();
  		return owner && owner._children[this._index + 1] || null;
  	},

  	getPreviousSibling: function() {
  		var owner = this._getOwner();
  		return owner && owner._children[this._index - 1] || null;
  	},

  	getIndex: function() {
  		return this._index;
  	},

  	equals: function(item) {
  		return item === this || item && this._class === item._class
  				&& this._style.equals(item._style)
  				&& this._matrix.equals(item._matrix)
  				&& this._locked === item._locked
  				&& this._visible === item._visible
  				&& this._blendMode === item._blendMode
  				&& this._opacity === item._opacity
  				&& this._clipMask === item._clipMask
  				&& this._guide === item._guide
  				&& this._equals(item)
  				|| false;
  	},

  	_equals: function(item) {
  		return Base.equals(this._children, item._children);
  	},

  	clone: function(options) {
  		var copy = new this.constructor(Item.NO_INSERT),
  			children = this._children,
  			insert = Base.pick(options ? options.insert : undefined,
  					options === undefined || options === true),
  			deep = Base.pick(options ? options.deep : undefined, true);
  		if (children)
  			copy.copyAttributes(this);
  		if (!children || deep)
  			copy.copyContent(this);
  		if (!children)
  			copy.copyAttributes(this);
  		if (insert)
  			copy.insertAbove(this);
  		var name = this._name,
  			parent = this._parent;
  		if (name && parent) {
  			var children = parent._children,
  				orig = name,
  				i = 1;
  			while (children[name])
  				name = orig + ' ' + (i++);
  			if (name !== orig)
  				copy.setName(name);
  		}
  		return copy;
  	},

  	copyContent: function(source) {
  		var children = source._children;
  		for (var i = 0, l = children && children.length; i < l; i++) {
  			this.addChild(children[i].clone(false), true);
  		}
  	},

  	copyAttributes: function(source, excludeMatrix) {
  		this.setStyle(source._style);
  		var keys = ['_locked', '_visible', '_blendMode', '_opacity',
  				'_clipMask', '_guide'];
  		for (var i = 0, l = keys.length; i < l; i++) {
  			var key = keys[i];
  			if (source.hasOwnProperty(key))
  				this[key] = source[key];
  		}
  		if (!excludeMatrix)
  			this._matrix.set(source._matrix, true);
  		this.setApplyMatrix(source._applyMatrix);
  		this.setPivot(source._pivot);
  		this.setSelection(source._selection);
  		var data = source._data,
  			name = source._name;
  		this._data = data ? Base.clone(data) : null;
  		if (name)
  			this.setName(name);
  	},

  	rasterize: function(resolution, insert) {
  		var bounds = this.getStrokeBounds(),
  			scale = (resolution || this.getView().getResolution()) / 72,
  			topLeft = bounds.getTopLeft().floor(),
  			bottomRight = bounds.getBottomRight().ceil(),
  			size = new Size(bottomRight.subtract(topLeft)),
  			raster = new Raster(Item.NO_INSERT);
  		if (!size.isZero()) {
  			var canvas = CanvasProvider.getCanvas(size.multiply(scale)),
  				ctx = canvas.getContext('2d'),
  				matrix = new Matrix().scale(scale).translate(topLeft.negate());
  			ctx.save();
  			matrix.applyToContext(ctx);
  			this.draw(ctx, new Base({ matrices: [matrix] }));
  			ctx.restore();
  			raster.setCanvas(canvas);
  		}
  		raster.transform(new Matrix().translate(topLeft.add(size.divide(2)))
  				.scale(1 / scale));
  		if (insert === undefined || insert)
  			raster.insertAbove(this);
  		return raster;
  	},

  	contains: function() {
  		return !!this._contains(
  				this._matrix._inverseTransform(Point.read(arguments)));
  	},

  	_contains: function(point) {
  		var children = this._children;
  		if (children) {
  			for (var i = children.length - 1; i >= 0; i--) {
  				if (children[i].contains(point))
  					return true;
  			}
  			return false;
  		}
  		return point.isInside(this.getInternalBounds());
  	},

  	isInside: function() {
  		return Rectangle.read(arguments).contains(this.getBounds());
  	},

  	_asPathItem: function() {
  		return new Path.Rectangle({
  			rectangle: this.getInternalBounds(),
  			matrix: this._matrix,
  			insert: false,
  		});
  	},

  	intersects: function(item, _matrix) {
  		if (!(item instanceof Item))
  			return false;
  		return this._asPathItem().getIntersections(item._asPathItem(), null,
  				_matrix, true).length > 0;
  	}
  },
  new function() {
  	function hitTest() {
  		return this._hitTest(
  				Point.read(arguments),
  				HitResult.getOptions(arguments));
  	}

  	function hitTestAll() {
  		var point = Point.read(arguments),
  			options = HitResult.getOptions(arguments),
  			all = [];
  		this._hitTest(point, Base.set({ all: all }, options));
  		return all;
  	}

  	function hitTestChildren(point, options, viewMatrix, _exclude) {
  		var children = this._children;
  		if (children) {
  			for (var i = children.length - 1; i >= 0; i--) {
  				var child = children[i];
  				var res = child !== _exclude && child._hitTest(point, options,
  						viewMatrix);
  				if (res && !options.all)
  					return res;
  			}
  		}
  		return null;
  	}

  	Project.inject({
  		hitTest: hitTest,
  		hitTestAll: hitTestAll,
  		_hitTest: hitTestChildren
  	});

  	return {
  		hitTest: hitTest,
  		hitTestAll: hitTestAll,
  		_hitTestChildren: hitTestChildren,
  	};
  }, {

  	_hitTest: function(point, options, parentViewMatrix) {
  		if (this._locked || !this._visible || this._guide && !options.guides
  				|| this.isEmpty()) {
  			return null;
  		}

  		var matrix = this._matrix,
  			viewMatrix = parentViewMatrix
  					? parentViewMatrix.appended(matrix)
  					: this.getGlobalMatrix().prepend(this.getView()._matrix),
  			tolerance = Math.max(options.tolerance, 1e-12),
  			tolerancePadding = options._tolerancePadding = new Size(
  					Path._getStrokePadding(tolerance,
  						matrix._shiftless().invert()));
  		point = matrix._inverseTransform(point);
  		if (!point || !this._children &&
  			!this.getBounds({ internal: true, stroke: true, handle: true })
  				.expand(tolerancePadding.multiply(2))._containsPoint(point)) {
  			return null;
  		}

  		var checkSelf = !(options.guides && !this._guide
  				|| options.selected && !this.isSelected()
  				|| options.type && options.type !== Base.hyphenate(this._class)
  				|| options.class && !(this instanceof options.class)),
  			match = options.match,
  			that = this,
  			bounds,
  			res;

  		function filter(hit) {
  			if (hit && match && !match(hit))
  				hit = null;
  			if (hit && options.all)
  				options.all.push(hit);
  			return hit;
  		}

  		function checkPoint(type, part) {
  			var pt = part ? bounds['get' + part]() : that.getPosition();
  			if (point.subtract(pt).divide(tolerancePadding).length <= 1) {
  				return new HitResult(type, that, {
  					name: part ? Base.hyphenate(part) : type,
  					point: pt
  				});
  			}
  		}

  		var checkPosition = options.position,
  			checkCenter = options.center,
  			checkBounds = options.bounds;
  		if (checkSelf && this._parent
  				&& (checkPosition || checkCenter || checkBounds)) {
  			if (checkCenter || checkBounds) {
  				bounds = this.getInternalBounds();
  			}
  			res = checkPosition && checkPoint('position') ||
  					checkCenter && checkPoint('center', 'Center');
  			if (!res && checkBounds) {
  				var points = [
  					'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight',
  					'LeftCenter', 'TopCenter', 'RightCenter', 'BottomCenter'
  				];
  				for (var i = 0; i < 8 && !res; i++) {
  					res = checkPoint('bounds', points[i]);
  				}
  			}
  			res = filter(res);
  		}

  		if (!res) {
  			res = this._hitTestChildren(point, options, viewMatrix)
  				|| checkSelf
  					&& filter(this._hitTestSelf(point, options, viewMatrix,
  						this.getStrokeScaling() ? null
  							: viewMatrix._shiftless().invert()))
  				|| null;
  		}
  		if (res && res.point) {
  			res.point = matrix.transform(res.point);
  		}
  		return res;
  	},

  	_hitTestSelf: function(point, options) {
  		if (options.fill && this.hasFill() && this._contains(point))
  			return new HitResult('fill', this);
  	},

  	matches: function(name, compare) {
  		function matchObject(obj1, obj2) {
  			for (var i in obj1) {
  				if (obj1.hasOwnProperty(i)) {
  					var val1 = obj1[i],
  						val2 = obj2[i];
  					if (Base.isPlainObject(val1) && Base.isPlainObject(val2)) {
  						if (!matchObject(val1, val2))
  							return false;
  					} else if (!Base.equals(val1, val2)) {
  						return false;
  					}
  				}
  			}
  			return true;
  		}
  		var type = typeof name;
  		if (type === 'object') {
  			for (var key in name) {
  				if (name.hasOwnProperty(key) && !this.matches(key, name[key]))
  					return false;
  			}
  			return true;
  		} else if (type === 'function') {
  			return name(this);
  		} else if (name === 'match') {
  			return compare(this);
  		} else {
  			var value = /^(empty|editable)$/.test(name)
  					? this['is' + Base.capitalize(name)]()
  					: name === 'type'
  						? Base.hyphenate(this._class)
  						: this[name];
  			if (name === 'class') {
  				if (typeof compare === 'function')
  					return this instanceof compare;
  				value = this._class;
  			}
  			if (typeof compare === 'function') {
  				return !!compare(value);
  			} else if (compare) {
  				if (compare.test) {
  					return compare.test(value);
  				} else if (Base.isPlainObject(compare)) {
  					return matchObject(compare, value);
  				}
  			}
  			return Base.equals(value, compare);
  		}
  	},

  	getItems: function(options) {
  		return Item._getItems(this, options, this._matrix);
  	},

  	getItem: function(options) {
  		return Item._getItems(this, options, this._matrix, null, true)[0]
  				|| null;
  	},

  	statics: {
  		_getItems: function _getItems(item, options, matrix, param, firstOnly) {
  			if (!param) {
  				var obj = typeof options === 'object' && options,
  					overlapping = obj && obj.overlapping,
  					inside = obj && obj.inside,
  					bounds = overlapping || inside,
  					rect = bounds && Rectangle.read([bounds]);
  				param = {
  					items: [],
  					recursive: obj && obj.recursive !== false,
  					inside: !!inside,
  					overlapping: !!overlapping,
  					rect: rect,
  					path: overlapping && new Path.Rectangle({
  						rectangle: rect,
  						insert: false
  					})
  				};
  				if (obj) {
  					options = Base.filter({}, options, {
  						recursive: true, inside: true, overlapping: true
  					});
  				}
  			}
  			var children = item._children,
  				items = param.items,
  				rect = param.rect;
  			matrix = rect && (matrix || new Matrix());
  			for (var i = 0, l = children && children.length; i < l; i++) {
  				var child = children[i],
  					childMatrix = matrix && matrix.appended(child._matrix),
  					add = true;
  				if (rect) {
  					var bounds = child.getBounds(childMatrix);
  					if (!rect.intersects(bounds))
  						continue;
  					if (!(rect.contains(bounds)
  							|| param.overlapping && (bounds.contains(rect)
  								|| param.path.intersects(child, childMatrix))))
  						add = false;
  				}
  				if (add && child.matches(options)) {
  					items.push(child);
  					if (firstOnly)
  						break;
  				}
  				if (param.recursive !== false) {
  					_getItems(child, options, childMatrix, param, firstOnly);
  				}
  				if (firstOnly && items.length > 0)
  					break;
  			}
  			return items;
  		}
  	}
  }, {

  	importJSON: function(json) {
  		var res = Base.importJSON(json, this);
  		return res !== this ? this.addChild(res) : res;
  	},

  	addChild: function(item) {
  		return this.insertChild(undefined, item);
  	},

  	insertChild: function(index, item) {
  		var res = item ? this.insertChildren(index, [item]) : null;
  		return res && res[0];
  	},

  	addChildren: function(items) {
  		return this.insertChildren(this._children.length, items);
  	},

  	insertChildren: function(index, items) {
  		var children = this._children;
  		if (children && items && items.length > 0) {
  			items = Base.slice(items);
  			var inserted = {};
  			for (var i = items.length - 1; i >= 0; i--) {
  				var item = items[i],
  					id = item && item._id;
  				if (!item || inserted[id]) {
  					items.splice(i, 1);
  				} else {
  					item._remove(false, true);
  					inserted[id] = true;
  				}
  			}
  			Base.splice(children, items, index, 0);
  			var project = this._project,
  				notifySelf = project._changes;
  			for (var i = 0, l = items.length; i < l; i++) {
  				var item = items[i],
  					name = item._name;
  				item._parent = this;
  				item._setProject(project, true);
  				if (name)
  					item.setName(name);
  				if (notifySelf)
  					item._changed(5);
  			}
  			this._changed(11);
  		} else {
  			items = null;
  		}
  		return items;
  	},

  	_insertItem: '#insertChild',

  	_insertAt: function(item, offset) {
  		var owner = item && item._getOwner(),
  			res = item !== this && owner ? this : null;
  		if (res) {
  			res._remove(false, true);
  			owner._insertItem(item._index + offset, res);
  		}
  		return res;
  	},

  	insertAbove: function(item) {
  		return this._insertAt(item, 1);
  	},

  	insertBelow: function(item) {
  		return this._insertAt(item, 0);
  	},

  	sendToBack: function() {
  		var owner = this._getOwner();
  		return owner ? owner._insertItem(0, this) : null;
  	},

  	bringToFront: function() {
  		var owner = this._getOwner();
  		return owner ? owner._insertItem(undefined, this) : null;
  	},

  	appendTop: '#addChild',

  	appendBottom: function(item) {
  		return this.insertChild(0, item);
  	},

  	moveAbove: '#insertAbove',

  	moveBelow: '#insertBelow',

  	addTo: function(owner) {
  		return owner._insertItem(undefined, this);
  	},

  	copyTo: function(owner) {
  		return this.clone(false).addTo(owner);
  	},

  	reduce: function(options) {
  		var children = this._children;
  		if (children && children.length === 1) {
  			var child = children[0].reduce(options);
  			if (this._parent) {
  				child.insertAbove(this);
  				this.remove();
  			} else {
  				child.remove();
  			}
  			return child;
  		}
  		return this;
  	},

  	_removeNamed: function() {
  		var owner = this._getOwner();
  		if (owner) {
  			var children = owner._children,
  				namedChildren = owner._namedChildren,
  				name = this._name,
  				namedArray = namedChildren[name],
  				index = namedArray ? namedArray.indexOf(this) : -1;
  			if (index !== -1) {
  				if (children[name] == this)
  					delete children[name];
  				namedArray.splice(index, 1);
  				if (namedArray.length) {
  					children[name] = namedArray[0];
  				} else {
  					delete namedChildren[name];
  				}
  			}
  		}
  	},

  	_remove: function(notifySelf, notifyParent) {
  		var owner = this._getOwner(),
  			project = this._project,
  			index = this._index;
  		if (this._style)
  			this._style._dispose();
  		if (owner) {
  			if (this._name)
  				this._removeNamed();
  			if (index != null) {
  				if (project._activeLayer === this)
  					project._activeLayer = this.getNextSibling()
  							|| this.getPreviousSibling();
  				Base.splice(owner._children, null, index, 1);
  			}
  			this._installEvents(false);
  			if (notifySelf && project._changes)
  				this._changed(5);
  			if (notifyParent)
  				owner._changed(11, this);
  			this._parent = null;
  			return true;
  		}
  		return false;
  	},

  	remove: function() {
  		return this._remove(true, true);
  	},

  	replaceWith: function(item) {
  		var ok = item && item.insertBelow(this);
  		if (ok)
  			this.remove();
  		return ok;
  	},

  	removeChildren: function(start, end) {
  		if (!this._children)
  			return null;
  		start = start || 0;
  		end = Base.pick(end, this._children.length);
  		var removed = Base.splice(this._children, null, start, end - start);
  		for (var i = removed.length - 1; i >= 0; i--) {
  			removed[i]._remove(true, false);
  		}
  		if (removed.length > 0)
  			this._changed(11);
  		return removed;
  	},

  	clear: '#removeChildren',

  	reverseChildren: function() {
  		if (this._children) {
  			this._children.reverse();
  			for (var i = 0, l = this._children.length; i < l; i++)
  				this._children[i]._index = i;
  			this._changed(11);
  		}
  	},

  	isEmpty: function() {
  		var children = this._children;
  		return !children || !children.length;
  	},

  	isEditable: function() {
  		var item = this;
  		while (item) {
  			if (!item._visible || item._locked)
  				return false;
  			item = item._parent;
  		}
  		return true;
  	},

  	hasFill: function() {
  		return this.getStyle().hasFill();
  	},

  	hasStroke: function() {
  		return this.getStyle().hasStroke();
  	},

  	hasShadow: function() {
  		return this.getStyle().hasShadow();
  	},

  	_getOrder: function(item) {
  		function getList(item) {
  			var list = [];
  			do {
  				list.unshift(item);
  			} while (item = item._parent);
  			return list;
  		}
  		var list1 = getList(this),
  			list2 = getList(item);
  		for (var i = 0, l = Math.min(list1.length, list2.length); i < l; i++) {
  			if (list1[i] != list2[i]) {
  				return list1[i]._index < list2[i]._index ? 1 : -1;
  			}
  		}
  		return 0;
  	},

  	hasChildren: function() {
  		return this._children && this._children.length > 0;
  	},

  	isInserted: function() {
  		return this._parent ? this._parent.isInserted() : false;
  	},

  	isAbove: function(item) {
  		return this._getOrder(item) === -1;
  	},

  	isBelow: function(item) {
  		return this._getOrder(item) === 1;
  	},

  	isParent: function(item) {
  		return this._parent === item;
  	},

  	isChild: function(item) {
  		return item && item._parent === this;
  	},

  	isDescendant: function(item) {
  		var parent = this;
  		while (parent = parent._parent) {
  			if (parent === item)
  				return true;
  		}
  		return false;
  	},

  	isAncestor: function(item) {
  		return item ? item.isDescendant(this) : false;
  	},

  	isSibling: function(item) {
  		return this._parent === item._parent;
  	},

  	isGroupedWith: function(item) {
  		var parent = this._parent;
  		while (parent) {
  			if (parent._parent
  				&& /^(Group|Layer|CompoundPath)$/.test(parent._class)
  				&& item.isDescendant(parent))
  					return true;
  			parent = parent._parent;
  		}
  		return false;
  	},

  }, Base.each(['rotate', 'scale', 'shear', 'skew'], function(key) {
  	var rotate = key === 'rotate';
  	this[key] = function() {
  		var value = (rotate ? Base : Point).read(arguments),
  			center = Point.read(arguments, 0, { readNull: true });
  		return this.transform(new Matrix()[key](value,
  				center || this.getPosition(true)));
  	};
  }, {
  	translate: function() {
  		var mx = new Matrix();
  		return this.transform(mx.translate.apply(mx, arguments));
  	},

  	transform: function(matrix, _applyMatrix, _applyRecursively,
  			_setApplyMatrix) {
  		var _matrix = this._matrix,
  			transformMatrix = matrix && !matrix.isIdentity(),
  			applyMatrix = (_applyMatrix || this._applyMatrix)
  					&& ((!_matrix.isIdentity() || transformMatrix)
  						|| _applyMatrix && _applyRecursively && this._children);
  		if (!transformMatrix && !applyMatrix)
  			return this;
  		if (transformMatrix) {
  			if (!matrix.isInvertible() && _matrix.isInvertible())
  				_matrix._backup = _matrix.getValues();
  			_matrix.prepend(matrix, true);
  			var style = this._style,
  				fillColor = style.getFillColor(true),
  				strokeColor = style.getStrokeColor(true);
  			if (fillColor)
  				fillColor.transform(matrix);
  			if (strokeColor)
  				strokeColor.transform(matrix);
  		}
  		if (applyMatrix && (applyMatrix = this._transformContent(_matrix,
  				_applyRecursively, _setApplyMatrix))) {
  			var pivot = this._pivot;
  			if (pivot)
  				_matrix._transformPoint(pivot, pivot, true);
  			_matrix.reset(true);
  			if (_setApplyMatrix && this._canApplyMatrix)
  				this._applyMatrix = true;
  		}
  		var bounds = this._bounds,
  			position = this._position;
  		if (transformMatrix || applyMatrix) {
  			this._changed(25);
  		}
  		var decomp = transformMatrix && bounds && matrix.decompose();
  		if (decomp && decomp.skewing.isZero() && decomp.rotation % 90 === 0) {
  			for (var key in bounds) {
  				var cache = bounds[key];
  				if (cache.nonscaling) {
  					delete bounds[key];
  				} else if (applyMatrix || !cache.internal) {
  					var rect = cache.rect;
  					matrix._transformBounds(rect, rect);
  				}
  			}
  			this._bounds = bounds;
  			var cached = bounds[this._getBoundsCacheKey(
  				this._boundsOptions || {})];
  			if (cached) {
  				this._position = this._getPositionFromBounds(cached.rect);
  			}
  		} else if (transformMatrix && position && this._pivot) {
  			this._position = matrix._transformPoint(position, position);
  		}
  		return this;
  	},

  	_transformContent: function(matrix, applyRecursively, setApplyMatrix) {
  		var children = this._children;
  		if (children) {
  			for (var i = 0, l = children.length; i < l; i++)
  				children[i].transform(matrix, true, applyRecursively,
  						setApplyMatrix);
  			return true;
  		}
  	},

  	globalToLocal: function() {
  		return this.getGlobalMatrix(true)._inverseTransform(
  				Point.read(arguments));
  	},

  	localToGlobal: function() {
  		return this.getGlobalMatrix(true)._transformPoint(
  				Point.read(arguments));
  	},

  	parentToLocal: function() {
  		return this._matrix._inverseTransform(Point.read(arguments));
  	},

  	localToParent: function() {
  		return this._matrix._transformPoint(Point.read(arguments));
  	},

  	fitBounds: function(rectangle, fill) {
  		rectangle = Rectangle.read(arguments);
  		var bounds = this.getBounds(),
  			itemRatio = bounds.height / bounds.width,
  			rectRatio = rectangle.height / rectangle.width,
  			scale = (fill ? itemRatio > rectRatio : itemRatio < rectRatio)
  					? rectangle.width / bounds.width
  					: rectangle.height / bounds.height,
  			newBounds = new Rectangle(new Point(),
  					new Size(bounds.width * scale, bounds.height * scale));
  		newBounds.setCenter(rectangle.getCenter());
  		this.setBounds(newBounds);
  	}
  }), {

  	_setStyles: function(ctx, param, viewMatrix) {
  		var style = this._style,
  			matrix = this._matrix;
  		if (style.hasFill()) {
  			ctx.fillStyle = style.getFillColor().toCanvasStyle(ctx, matrix);
  		}
  		if (style.hasStroke()) {
  			ctx.strokeStyle = style.getStrokeColor().toCanvasStyle(ctx, matrix);
  			ctx.lineWidth = style.getStrokeWidth();
  			var strokeJoin = style.getStrokeJoin(),
  				strokeCap = style.getStrokeCap(),
  				miterLimit = style.getMiterLimit();
  			if (strokeJoin)
  				ctx.lineJoin = strokeJoin;
  			if (strokeCap)
  				ctx.lineCap = strokeCap;
  			if (miterLimit)
  				ctx.miterLimit = miterLimit;
  			if (paper.support.nativeDash) {
  				var dashArray = style.getDashArray(),
  					dashOffset = style.getDashOffset();
  				if (dashArray && dashArray.length) {
  					if ('setLineDash' in ctx) {
  						ctx.setLineDash(dashArray);
  						ctx.lineDashOffset = dashOffset;
  					} else {
  						ctx.mozDash = dashArray;
  						ctx.mozDashOffset = dashOffset;
  					}
  				}
  			}
  		}
  		if (style.hasShadow()) {
  			var pixelRatio = param.pixelRatio || 1,
  				mx = viewMatrix._shiftless().prepend(
  					new Matrix().scale(pixelRatio, pixelRatio)),
  				blur = mx.transform(new Point(style.getShadowBlur(), 0)),
  				offset = mx.transform(this.getShadowOffset());
  			ctx.shadowColor = style.getShadowColor().toCanvasStyle(ctx);
  			ctx.shadowBlur = blur.getLength();
  			ctx.shadowOffsetX = offset.x;
  			ctx.shadowOffsetY = offset.y;
  		}
  	},

  	draw: function(ctx, param, parentStrokeMatrix) {
  		var updateVersion = this._updateVersion = this._project._updateVersion;
  		if (!this._visible || this._opacity === 0)
  			return;
  		var matrices = param.matrices,
  			viewMatrix = param.viewMatrix,
  			matrix = this._matrix,
  			globalMatrix = matrices[matrices.length - 1].appended(matrix);
  		if (!globalMatrix.isInvertible())
  			return;

  		viewMatrix = viewMatrix ? viewMatrix.appended(globalMatrix)
  				: globalMatrix;

  		matrices.push(globalMatrix);
  		if (param.updateMatrix) {
  			this._globalMatrix = globalMatrix;
  		}

  		var blendMode = this._blendMode,
  			opacity = this._opacity,
  			normalBlend = blendMode === 'normal',
  			nativeBlend = BlendMode.nativeModes[blendMode],
  			direct = normalBlend && opacity === 1
  					|| param.dontStart
  					|| param.clip
  					|| (nativeBlend || normalBlend && opacity < 1)
  						&& this._canComposite(),
  			pixelRatio = param.pixelRatio || 1,
  			mainCtx, itemOffset, prevOffset;
  		if (!direct) {
  			var bounds = this.getStrokeBounds(viewMatrix);
  			if (!bounds.width || !bounds.height) {
  				matrices.pop();
  				return;
  			}
  			prevOffset = param.offset;
  			itemOffset = param.offset = bounds.getTopLeft().floor();
  			mainCtx = ctx;
  			ctx = CanvasProvider.getContext(bounds.getSize().ceil().add(1)
  					.multiply(pixelRatio));
  			if (pixelRatio !== 1)
  				ctx.scale(pixelRatio, pixelRatio);
  		}
  		ctx.save();
  		var strokeMatrix = parentStrokeMatrix
  				? parentStrokeMatrix.appended(matrix)
  				: this._canScaleStroke && !this.getStrokeScaling(true)
  					&& viewMatrix,
  			clip = !direct && param.clipItem,
  			transform = !strokeMatrix || clip;
  		if (direct) {
  			ctx.globalAlpha = opacity;
  			if (nativeBlend)
  				ctx.globalCompositeOperation = blendMode;
  		} else if (transform) {
  			ctx.translate(-itemOffset.x, -itemOffset.y);
  		}
  		if (transform) {
  			(direct ? matrix : viewMatrix).applyToContext(ctx);
  		}
  		if (clip) {
  			param.clipItem.draw(ctx, param.extend({ clip: true }));
  		}
  		if (strokeMatrix) {
  			ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  			var offset = param.offset;
  			if (offset)
  				ctx.translate(-offset.x, -offset.y);
  		}
  		this._draw(ctx, param, viewMatrix, strokeMatrix);
  		ctx.restore();
  		matrices.pop();
  		if (param.clip && !param.dontFinish)
  			ctx.clip();
  		if (!direct) {
  			BlendMode.process(blendMode, ctx, mainCtx, opacity,
  					itemOffset.subtract(prevOffset).multiply(pixelRatio));
  			CanvasProvider.release(ctx);
  			param.offset = prevOffset;
  		}
  	},

  	_isUpdated: function(updateVersion) {
  		var parent = this._parent;
  		if (parent instanceof CompoundPath)
  			return parent._isUpdated(updateVersion);
  		var updated = this._updateVersion === updateVersion;
  		if (!updated && parent && parent._visible
  				&& parent._isUpdated(updateVersion)) {
  			this._updateVersion = updateVersion;
  			updated = true;
  		}
  		return updated;
  	},

  	_drawSelection: function(ctx, matrix, size, selectionItems, updateVersion) {
  		var selection = this._selection,
  			itemSelected = selection & 1,
  			boundsSelected = selection & 2
  					|| itemSelected && this._selectBounds,
  			positionSelected = selection & 4;
  		if (!this._drawSelected)
  			itemSelected = false;
  		if ((itemSelected || boundsSelected || positionSelected)
  				&& this._isUpdated(updateVersion)) {
  			var layer,
  				color = this.getSelectedColor(true) || (layer = this.getLayer())
  					&& layer.getSelectedColor(true),
  				mx = matrix.appended(this.getGlobalMatrix(true)),
  				half = size / 2;
  			ctx.strokeStyle = ctx.fillStyle = color
  					? color.toCanvasStyle(ctx) : '#009dec';
  			if (itemSelected)
  				this._drawSelected(ctx, mx, selectionItems);
  			if (positionSelected) {
  				var pos = this.getPosition(true),
  					parent = this._parent,
  					point = parent ? parent.localToGlobal(pos) : pos,
  					x = point.x,
  					y = point.y;
  				ctx.beginPath();
  				ctx.arc(x, y, half, 0, Math.PI * 2, true);
  				ctx.stroke();
  				var deltas = [[0, -1], [1, 0], [0, 1], [-1, 0]],
  					start = half,
  					end = size + 1;
  				for (var i = 0; i < 4; i++) {
  					var delta = deltas[i],
  						dx = delta[0],
  						dy = delta[1];
  					ctx.moveTo(x + dx * start, y + dy * start);
  					ctx.lineTo(x + dx * end, y + dy * end);
  					ctx.stroke();
  				}
  			}
  			if (boundsSelected) {
  				var coords = mx._transformCorners(this.getInternalBounds());
  				ctx.beginPath();
  				for (var i = 0; i < 8; i++) {
  					ctx[!i ? 'moveTo' : 'lineTo'](coords[i], coords[++i]);
  				}
  				ctx.closePath();
  				ctx.stroke();
  				for (var i = 0; i < 8; i++) {
  					ctx.fillRect(coords[i] - half, coords[++i] - half,
  							size, size);
  				}
  			}
  		}
  	},

  	_canComposite: function() {
  		return false;
  	}
  }, Base.each(['down', 'drag', 'up', 'move'], function(key) {
  	this['removeOn' + Base.capitalize(key)] = function() {
  		var hash = {};
  		hash[key] = true;
  		return this.removeOn(hash);
  	};
  }, {

  	removeOn: function(obj) {
  		for (var name in obj) {
  			if (obj[name]) {
  				var key = 'mouse' + name,
  					project = this._project,
  					sets = project._removeSets = project._removeSets || {};
  				sets[key] = sets[key] || {};
  				sets[key][this._id] = this;
  			}
  		}
  		return this;
  	}
  }), {
  	tween: function(from, to, options) {
  		if (!options) {
  			options = to;
  			to = from;
  			from = null;
  			if (!options) {
  				options = to;
  				to = null;
  			}
  		}
  		var easing = options && options.easing,
  			start = options && options.start,
  			duration = options != null && (
  				typeof options === 'number' ? options : options.duration
  			),
  			tween = new Tween(this, from, to, duration, easing, start);
  		function onFrame(event) {
  			tween._handleFrame(event.time * 1000);
  			if (!tween.running) {
  				this.off('frame', onFrame);
  			}
  		}
  		if (duration) {
  			this.on('frame', onFrame);
  		}
  		return tween;
  	},

  	tweenTo: function(to, options) {
  		return this.tween(null, to, options);
  	},

  	tweenFrom: function(from, options) {
  		return this.tween(from, null, options);
  	}
  });

  var Group = Item.extend({
  	_class: 'Group',
  	_selectBounds: false,
  	_selectChildren: true,
  	_serializeFields: {
  		children: []
  	},

  	initialize: function Group(arg) {
  		this._children = [];
  		this._namedChildren = {};
  		if (!this._initialize(arg))
  			this.addChildren(Array.isArray(arg) ? arg : arguments);
  	},

  	_changed: function _changed(flags) {
  		_changed.base.call(this, flags);
  		if (flags & 2050) {
  			this._clipItem = undefined;
  		}
  	},

  	_getClipItem: function() {
  		var clipItem = this._clipItem;
  		if (clipItem === undefined) {
  			clipItem = null;
  			var children = this._children;
  			for (var i = 0, l = children.length; i < l; i++) {
  				if (children[i]._clipMask) {
  					clipItem = children[i];
  					break;
  				}
  			}
  			this._clipItem = clipItem;
  		}
  		return clipItem;
  	},

  	isClipped: function() {
  		return !!this._getClipItem();
  	},

  	setClipped: function(clipped) {
  		var child = this.getFirstChild();
  		if (child)
  			child.setClipMask(clipped);
  	},

  	_getBounds: function _getBounds(matrix, options) {
  		var clipItem = this._getClipItem();
  		return clipItem
  			? clipItem._getCachedBounds(
  				matrix && matrix.appended(clipItem._matrix),
  				Base.set({}, options, { stroke: false }))
  			: _getBounds.base.call(this, matrix, options);
  	},

  	_hitTestChildren: function _hitTestChildren(point, options, viewMatrix) {
  		var clipItem = this._getClipItem();
  		return (!clipItem || clipItem.contains(point))
  				&& _hitTestChildren.base.call(this, point, options, viewMatrix,
  					clipItem);
  	},

  	_draw: function(ctx, param) {
  		var clip = param.clip,
  			clipItem = !clip && this._getClipItem();
  		param = param.extend({ clipItem: clipItem, clip: false });
  		if (clip) {
  			ctx.beginPath();
  			param.dontStart = param.dontFinish = true;
  		} else if (clipItem) {
  			clipItem.draw(ctx, param.extend({ clip: true }));
  		}
  		var children = this._children;
  		for (var i = 0, l = children.length; i < l; i++) {
  			var item = children[i];
  			if (item !== clipItem)
  				item.draw(ctx, param);
  		}
  	}
  });

  var Layer = Group.extend({
  	_class: 'Layer',

  	initialize: function Layer() {
  		Group.apply(this, arguments);
  	},

  	_getOwner: function() {
  		return this._parent || this._index != null && this._project;
  	},

  	isInserted: function isInserted() {
  		return this._parent ? isInserted.base.call(this) : this._index != null;
  	},

  	activate: function() {
  		this._project._activeLayer = this;
  	},

  	_hitTestSelf: function() {
  	}
  });

  var Shape = Item.extend({
  	_class: 'Shape',
  	_applyMatrix: false,
  	_canApplyMatrix: false,
  	_canScaleStroke: true,
  	_serializeFields: {
  		type: null,
  		size: null,
  		radius: null
  	},

  	initialize: function Shape(props, point) {
  		this._initialize(props, point);
  	},

  	_equals: function(item) {
  		return this._type === item._type
  			&& this._size.equals(item._size)
  			&& Base.equals(this._radius, item._radius);
  	},

  	copyContent: function(source) {
  		this.setType(source._type);
  		this.setSize(source._size);
  		this.setRadius(source._radius);
  	},

  	getType: function() {
  		return this._type;
  	},

  	setType: function(type) {
  		this._type = type;
  	},

  	getShape: '#getType',
  	setShape: '#setType',

  	getSize: function() {
  		var size = this._size;
  		return new LinkedSize(size.width, size.height, this, 'setSize');
  	},

  	setSize: function() {
  		var size = Size.read(arguments);
  		if (!this._size) {
  			this._size = size.clone();
  		} else if (!this._size.equals(size)) {
  			var type = this._type,
  				width = size.width,
  				height = size.height;
  			if (type === 'rectangle') {
  				this._radius.set(Size.min(this._radius, size.divide(2)));
  			} else if (type === 'circle') {
  				width = height = (width + height) / 2;
  				this._radius = width / 2;
  			} else if (type === 'ellipse') {
  				this._radius._set(width / 2, height / 2);
  			}
  			this._size._set(width, height);
  			this._changed(9);
  		}
  	},

  	getRadius: function() {
  		var rad = this._radius;
  		return this._type === 'circle'
  				? rad
  				: new LinkedSize(rad.width, rad.height, this, 'setRadius');
  	},

  	setRadius: function(radius) {
  		var type = this._type;
  		if (type === 'circle') {
  			if (radius === this._radius)
  				return;
  			var size = radius * 2;
  			this._radius = radius;
  			this._size._set(size, size);
  		} else {
  			radius = Size.read(arguments);
  			if (!this._radius) {
  				this._radius = radius.clone();
  			} else {
  				if (this._radius.equals(radius))
  					return;
  				this._radius.set(radius);
  				if (type === 'rectangle') {
  					var size = Size.max(this._size, radius.multiply(2));
  					this._size.set(size);
  				} else if (type === 'ellipse') {
  					this._size._set(radius.width * 2, radius.height * 2);
  				}
  			}
  		}
  		this._changed(9);
  	},

  	isEmpty: function() {
  		return false;
  	},

  	toPath: function(insert) {
  		var path = new Path[Base.capitalize(this._type)]({
  			center: new Point(),
  			size: this._size,
  			radius: this._radius,
  			insert: false
  		});
  		path.copyAttributes(this);
  		if (paper.settings.applyMatrix)
  			path.setApplyMatrix(true);
  		if (insert === undefined || insert)
  			path.insertAbove(this);
  		return path;
  	},

  	toShape: '#clone',

  	_asPathItem: function() {
  		return this.toPath(false);
  	},

  	_draw: function(ctx, param, viewMatrix, strokeMatrix) {
  		var style = this._style,
  			hasFill = style.hasFill(),
  			hasStroke = style.hasStroke(),
  			dontPaint = param.dontFinish || param.clip,
  			untransformed = !strokeMatrix;
  		if (hasFill || hasStroke || dontPaint) {
  			var type = this._type,
  				radius = this._radius,
  				isCircle = type === 'circle';
  			if (!param.dontStart)
  				ctx.beginPath();
  			if (untransformed && isCircle) {
  				ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
  			} else {
  				var rx = isCircle ? radius : radius.width,
  					ry = isCircle ? radius : radius.height,
  					size = this._size,
  					width = size.width,
  					height = size.height;
  				if (untransformed && type === 'rectangle' && rx === 0 && ry === 0) {
  					ctx.rect(-width / 2, -height / 2, width, height);
  				} else {
  					var x = width / 2,
  						y = height / 2,
  						kappa = 1 - 0.5522847498307936,
  						cx = rx * kappa,
  						cy = ry * kappa,
  						c = [
  							-x, -y + ry,
  							-x, -y + cy,
  							-x + cx, -y,
  							-x + rx, -y,
  							x - rx, -y,
  							x - cx, -y,
  							x, -y + cy,
  							x, -y + ry,
  							x, y - ry,
  							x, y - cy,
  							x - cx, y,
  							x - rx, y,
  							-x + rx, y,
  							-x + cx, y,
  							-x, y - cy,
  							-x, y - ry
  						];
  					if (strokeMatrix)
  						strokeMatrix.transform(c, c, 32);
  					ctx.moveTo(c[0], c[1]);
  					ctx.bezierCurveTo(c[2], c[3], c[4], c[5], c[6], c[7]);
  					if (x !== rx)
  						ctx.lineTo(c[8], c[9]);
  					ctx.bezierCurveTo(c[10], c[11], c[12], c[13], c[14], c[15]);
  					if (y !== ry)
  						ctx.lineTo(c[16], c[17]);
  					ctx.bezierCurveTo(c[18], c[19], c[20], c[21], c[22], c[23]);
  					if (x !== rx)
  						ctx.lineTo(c[24], c[25]);
  					ctx.bezierCurveTo(c[26], c[27], c[28], c[29], c[30], c[31]);
  				}
  			}
  			ctx.closePath();
  		}
  		if (!dontPaint && (hasFill || hasStroke)) {
  			this._setStyles(ctx, param, viewMatrix);
  			if (hasFill) {
  				ctx.fill(style.getFillRule());
  				ctx.shadowColor = 'rgba(0,0,0,0)';
  			}
  			if (hasStroke)
  				ctx.stroke();
  		}
  	},

  	_canComposite: function() {
  		return !(this.hasFill() && this.hasStroke());
  	},

  	_getBounds: function(matrix, options) {
  		var rect = new Rectangle(this._size).setCenter(0, 0),
  			style = this._style,
  			strokeWidth = options.stroke && style.hasStroke()
  					&& style.getStrokeWidth();
  		if (matrix)
  			rect = matrix._transformBounds(rect);
  		return strokeWidth
  				? rect.expand(Path._getStrokePadding(strokeWidth,
  					this._getStrokeMatrix(matrix, options)))
  				: rect;
  	}
  },
  new function() {
  	function getCornerCenter(that, point, expand) {
  		var radius = that._radius;
  		if (!radius.isZero()) {
  			var halfSize = that._size.divide(2);
  			for (var q = 1; q <= 4; q++) {
  				var dir = new Point(q > 1 && q < 4 ? -1 : 1, q > 2 ? -1 : 1),
  					corner = dir.multiply(halfSize),
  					center = corner.subtract(dir.multiply(radius)),
  					rect = new Rectangle(
  							expand ? corner.add(dir.multiply(expand)) : corner,
  							center);
  				if (rect.contains(point))
  					return { point: center, quadrant: q };
  			}
  		}
  	}

  	function isOnEllipseStroke(point, radius, padding, quadrant) {
  		var vector = point.divide(radius);
  		return (!quadrant || vector.isInQuadrant(quadrant)) &&
  				vector.subtract(vector.normalize()).multiply(radius)
  					.divide(padding).length <= 1;
  	}

  	return {
  		_contains: function _contains(point) {
  			if (this._type === 'rectangle') {
  				var center = getCornerCenter(this, point);
  				return center
  						? point.subtract(center.point).divide(this._radius)
  							.getLength() <= 1
  						: _contains.base.call(this, point);
  			} else {
  				return point.divide(this.size).getLength() <= 0.5;
  			}
  		},

  		_hitTestSelf: function _hitTestSelf(point, options, viewMatrix,
  				strokeMatrix) {
  			var hit = false,
  				style = this._style,
  				hitStroke = options.stroke && style.hasStroke(),
  				hitFill = options.fill && style.hasFill();
  			if (hitStroke || hitFill) {
  				var type = this._type,
  					radius = this._radius,
  					strokeRadius = hitStroke ? style.getStrokeWidth() / 2 : 0,
  					strokePadding = options._tolerancePadding.add(
  						Path._getStrokePadding(strokeRadius,
  							!style.getStrokeScaling() && strokeMatrix));
  				if (type === 'rectangle') {
  					var padding = strokePadding.multiply(2),
  						center = getCornerCenter(this, point, padding);
  					if (center) {
  						hit = isOnEllipseStroke(point.subtract(center.point),
  								radius, strokePadding, center.quadrant);
  					} else {
  						var rect = new Rectangle(this._size).setCenter(0, 0),
  							outer = rect.expand(padding),
  							inner = rect.expand(padding.negate());
  						hit = outer._containsPoint(point)
  								&& !inner._containsPoint(point);
  					}
  				} else {
  					hit = isOnEllipseStroke(point, radius, strokePadding);
  				}
  			}
  			return hit ? new HitResult(hitStroke ? 'stroke' : 'fill', this)
  					: _hitTestSelf.base.apply(this, arguments);
  		}
  	};
  }, {

  statics: new function() {
  	function createShape(type, point, size, radius, args) {
  		var item = new Shape(Base.getNamed(args), point);
  		item._type = type;
  		item._size = size;
  		item._radius = radius;
  		return item;
  	}

  	return {
  		Circle: function() {
  			var center = Point.readNamed(arguments, 'center'),
  				radius = Base.readNamed(arguments, 'radius');
  			return createShape('circle', center, new Size(radius * 2), radius,
  					arguments);
  		},

  		Rectangle: function() {
  			var rect = Rectangle.readNamed(arguments, 'rectangle'),
  				radius = Size.min(Size.readNamed(arguments, 'radius'),
  						rect.getSize(true).divide(2));
  			return createShape('rectangle', rect.getCenter(true),
  					rect.getSize(true), radius, arguments);
  		},

  		Ellipse: function() {
  			var ellipse = Shape._readEllipse(arguments),
  				radius = ellipse.radius;
  			return createShape('ellipse', ellipse.center, radius.multiply(2),
  					radius, arguments);
  		},

  		_readEllipse: function(args) {
  			var center,
  				radius;
  			if (Base.hasNamed(args, 'radius')) {
  				center = Point.readNamed(args, 'center');
  				radius = Size.readNamed(args, 'radius');
  			} else {
  				var rect = Rectangle.readNamed(args, 'rectangle');
  				center = rect.getCenter(true);
  				radius = rect.getSize(true).divide(2);
  			}
  			return { center: center, radius: radius };
  		}
  	};
  }});

  var Raster = Item.extend({
  	_class: 'Raster',
  	_applyMatrix: false,
  	_canApplyMatrix: false,
  	_boundsOptions: { stroke: false, handle: false },
  	_serializeFields: {
  		crossOrigin: null,
  		source: null
  	},
  	_prioritize: ['crossOrigin'],
  	_smoothing: true,

  	initialize: function Raster(object, position) {
  		if (!this._initialize(object,
  				position !== undefined && Point.read(arguments, 1))) {
  			var image = typeof object === 'string'
  					? document.getElementById(object) : object;
  			if (image) {
  				this.setImage(image);
  			} else {
  				this.setSource(object);
  			}
  		}
  		if (!this._size) {
  			this._size = new Size();
  			this._loaded = false;
  		}
  	},

  	_equals: function(item) {
  		return this.getSource() === item.getSource();
  	},

  	copyContent: function(source) {
  		var image = source._image,
  			canvas = source._canvas;
  		if (image) {
  			this._setImage(image);
  		} else if (canvas) {
  			var copyCanvas = CanvasProvider.getCanvas(source._size);
  			copyCanvas.getContext('2d').drawImage(canvas, 0, 0);
  			this._setImage(copyCanvas);
  		}
  		this._crossOrigin = source._crossOrigin;
  	},

  	getSize: function() {
  		var size = this._size;
  		return new LinkedSize(size ? size.width : 0, size ? size.height : 0,
  				this, 'setSize');
  	},

  	setSize: function() {
  		var size = Size.read(arguments);
  		if (!size.equals(this._size)) {
  			if (size.width > 0 && size.height > 0) {
  				var element = this.getElement();
  				this._setImage(CanvasProvider.getCanvas(size));
  				if (element)
  					this.getContext(true).drawImage(element, 0, 0,
  							size.width, size.height);
  			} else {
  				if (this._canvas)
  					CanvasProvider.release(this._canvas);
  				this._size = size.clone();
  			}
  		}
  	},

  	getWidth: function() {
  		return this._size ? this._size.width : 0;
  	},

  	setWidth: function(width) {
  		this.setSize(width, this.getHeight());
  	},

  	getHeight: function() {
  		return this._size ? this._size.height : 0;
  	},

  	setHeight: function(height) {
  		this.setSize(this.getWidth(), height);
  	},

  	getLoaded: function() {
  		return this._loaded;
  	},

  	isEmpty: function() {
  		var size = this._size;
  		return !size || size.width === 0 && size.height === 0;
  	},

  	getResolution: function() {
  		var matrix = this._matrix,
  			orig = new Point(0, 0).transform(matrix),
  			u = new Point(1, 0).transform(matrix).subtract(orig),
  			v = new Point(0, 1).transform(matrix).subtract(orig);
  		return new Size(
  			72 / u.getLength(),
  			72 / v.getLength()
  		);
  	},

  	getPpi: '#getResolution',

  	getImage: function() {
  		return this._image;
  	},

  	setImage: function(image) {
  		var that = this;

  		function emit(event) {
  			var view = that.getView(),
  				type = event && event.type || 'load';
  			if (view && that.responds(type)) {
  				paper = view._scope;
  				that.emit(type, new Event(event));
  			}
  		}

  		this._setImage(image);
  		if (this._loaded) {
  			setTimeout(emit, 0);
  		} else if (image) {
  			DomEvent.add(image, {
  				load: function(event) {
  					that._setImage(image);
  					emit(event);
  				},
  				error: emit
  			});
  		}
  	},

  	_setImage: function(image) {
  		if (this._canvas)
  			CanvasProvider.release(this._canvas);
  		if (image && image.getContext) {
  			this._image = null;
  			this._canvas = image;
  			this._loaded = true;
  		} else {
  			this._image = image;
  			this._canvas = null;
  			this._loaded = !!(image && image.src && image.complete);
  		}
  		this._size = new Size(
  				image ? image.naturalWidth || image.width : 0,
  				image ? image.naturalHeight || image.height : 0);
  		this._context = null;
  		this._changed(1033);
  	},

  	getCanvas: function() {
  		if (!this._canvas) {
  			var ctx = CanvasProvider.getContext(this._size);
  			try {
  				if (this._image)
  					ctx.drawImage(this._image, 0, 0);
  				this._canvas = ctx.canvas;
  			} catch (e) {
  				CanvasProvider.release(ctx);
  			}
  		}
  		return this._canvas;
  	},

  	setCanvas: '#setImage',

  	getContext: function(modify) {
  		if (!this._context)
  			this._context = this.getCanvas().getContext('2d');
  		if (modify) {
  			this._image = null;
  			this._changed(1025);
  		}
  		return this._context;
  	},

  	setContext: function(context) {
  		this._context = context;
  	},

  	getSource: function() {
  		var image = this._image;
  		return image && image.src || this.toDataURL();
  	},

  	setSource: function(src) {
  		var image = new self.Image(),
  			crossOrigin = this._crossOrigin;
  		if (crossOrigin)
  			image.crossOrigin = crossOrigin;
  		image.src = src;
  		this.setImage(image);
  	},

  	getCrossOrigin: function() {
  		var image = this._image;
  		return image && image.crossOrigin || this._crossOrigin || '';
  	},

  	setCrossOrigin: function(crossOrigin) {
  		this._crossOrigin = crossOrigin;
  		var image = this._image;
  		if (image)
  			image.crossOrigin = crossOrigin;
  	},

  	getSmoothing: function() {
  		return this._smoothing;
  	},

  	setSmoothing: function(smoothing) {
  		this._smoothing = smoothing;
  		this._changed(257);
  	},

  	getElement: function() {
  		return this._canvas || this._loaded && this._image;
  	}
  }, {
  	beans: false,

  	getSubCanvas: function() {
  		var rect = Rectangle.read(arguments),
  			ctx = CanvasProvider.getContext(rect.getSize());
  		ctx.drawImage(this.getCanvas(), rect.x, rect.y,
  				rect.width, rect.height, 0, 0, rect.width, rect.height);
  		return ctx.canvas;
  	},

  	getSubRaster: function() {
  		var rect = Rectangle.read(arguments),
  			raster = new Raster(Item.NO_INSERT);
  		raster._setImage(this.getSubCanvas(rect));
  		raster.translate(rect.getCenter().subtract(this.getSize().divide(2)));
  		raster._matrix.prepend(this._matrix);
  		raster.insertAbove(this);
  		return raster;
  	},

  	toDataURL: function() {
  		var image = this._image,
  			src = image && image.src;
  		if (/^data:/.test(src))
  			return src;
  		var canvas = this.getCanvas();
  		return canvas ? canvas.toDataURL.apply(canvas, arguments) : null;
  	},

  	drawImage: function(image ) {
  		var point = Point.read(arguments, 1);
  		this.getContext(true).drawImage(image, point.x, point.y);
  	},

  	getAverageColor: function(object) {
  		var bounds, path;
  		if (!object) {
  			bounds = this.getBounds();
  		} else if (object instanceof PathItem) {
  			path = object;
  			bounds = object.getBounds();
  		} else if (typeof object === 'object') {
  			if ('width' in object) {
  				bounds = new Rectangle(object);
  			} else if ('x' in object) {
  				bounds = new Rectangle(object.x - 0.5, object.y - 0.5, 1, 1);
  			}
  		}
  		if (!bounds)
  			return null;
  		var sampleSize = 32,
  			width = Math.min(bounds.width, sampleSize),
  			height = Math.min(bounds.height, sampleSize);
  		var ctx = Raster._sampleContext;
  		if (!ctx) {
  			ctx = Raster._sampleContext = CanvasProvider.getContext(
  					new Size(sampleSize));
  		} else {
  			ctx.clearRect(0, 0, sampleSize + 1, sampleSize + 1);
  		}
  		ctx.save();
  		var matrix = new Matrix()
  				.scale(width / bounds.width, height / bounds.height)
  				.translate(-bounds.x, -bounds.y);
  		matrix.applyToContext(ctx);
  		if (path)
  			path.draw(ctx, new Base({ clip: true, matrices: [matrix] }));
  		this._matrix.applyToContext(ctx);
  		var element = this.getElement(),
  			size = this._size;
  		if (element)
  			ctx.drawImage(element, -size.width / 2, -size.height / 2);
  		ctx.restore();
  		var pixels = ctx.getImageData(0.5, 0.5, Math.ceil(width),
  				Math.ceil(height)).data,
  			channels = [0, 0, 0],
  			total = 0;
  		for (var i = 0, l = pixels.length; i < l; i += 4) {
  			var alpha = pixels[i + 3];
  			total += alpha;
  			alpha /= 255;
  			channels[0] += pixels[i] * alpha;
  			channels[1] += pixels[i + 1] * alpha;
  			channels[2] += pixels[i + 2] * alpha;
  		}
  		for (var i = 0; i < 3; i++)
  			channels[i] /= total;
  		return total ? Color.read(channels) : null;
  	},

  	getPixel: function() {
  		var point = Point.read(arguments);
  		var data = this.getContext().getImageData(point.x, point.y, 1, 1).data;
  		return new Color('rgb', [data[0] / 255, data[1] / 255, data[2] / 255],
  				data[3] / 255);
  	},

  	setPixel: function() {
  		var point = Point.read(arguments),
  			color = Color.read(arguments),
  			components = color._convert('rgb'),
  			alpha = color._alpha,
  			ctx = this.getContext(true),
  			imageData = ctx.createImageData(1, 1),
  			data = imageData.data;
  		data[0] = components[0] * 255;
  		data[1] = components[1] * 255;
  		data[2] = components[2] * 255;
  		data[3] = alpha != null ? alpha * 255 : 255;
  		ctx.putImageData(imageData, point.x, point.y);
  	},

  	createImageData: function() {
  		var size = Size.read(arguments);
  		return this.getContext().createImageData(size.width, size.height);
  	},

  	getImageData: function() {
  		var rect = Rectangle.read(arguments);
  		if (rect.isEmpty())
  			rect = new Rectangle(this._size);
  		return this.getContext().getImageData(rect.x, rect.y,
  				rect.width, rect.height);
  	},

  	setImageData: function(data ) {
  		var point = Point.read(arguments, 1);
  		this.getContext(true).putImageData(data, point.x, point.y);
  	},

  	_getBounds: function(matrix, options) {
  		var rect = new Rectangle(this._size).setCenter(0, 0);
  		return matrix ? matrix._transformBounds(rect) : rect;
  	},

  	_hitTestSelf: function(point) {
  		if (this._contains(point)) {
  			var that = this;
  			return new HitResult('pixel', that, {
  				offset: point.add(that._size.divide(2)).round(),
  				color: {
  					get: function() {
  						return that.getPixel(this.offset);
  					}
  				}
  			});
  		}
  	},

  	_draw: function(ctx, param, viewMatrix) {
  		var element = this.getElement();
  		if (element && element.width > 0 && element.height > 0) {
  			ctx.globalAlpha = this._opacity;

  			this._setStyles(ctx, param, viewMatrix);

  			DomElement.setPrefixed(
  				ctx, 'imageSmoothingEnabled', this._smoothing
  			);

  			ctx.drawImage(element,
  					-this._size.width / 2, -this._size.height / 2);
  		}
  	},

  	_canComposite: function() {
  		return true;
  	}
  });

  var SymbolItem = Item.extend({
  	_class: 'SymbolItem',
  	_applyMatrix: false,
  	_canApplyMatrix: false,
  	_boundsOptions: { stroke: true },
  	_serializeFields: {
  		symbol: null
  	},

  	initialize: function SymbolItem(arg0, arg1) {
  		if (!this._initialize(arg0,
  				arg1 !== undefined && Point.read(arguments, 1)))
  			this.setDefinition(arg0 instanceof SymbolDefinition ?
  					arg0 : new SymbolDefinition(arg0));
  	},

  	_equals: function(item) {
  		return this._definition === item._definition;
  	},

  	copyContent: function(source) {
  		this.setDefinition(source._definition);
  	},

  	getDefinition: function() {
  		return this._definition;
  	},

  	setDefinition: function(definition) {
  		this._definition = definition;
  		this._changed(9);
  	},

  	getSymbol: '#getDefinition',
  	setSymbol: '#setDefinition',

  	isEmpty: function() {
  		return this._definition._item.isEmpty();
  	},

  	_getBounds: function(matrix, options) {
  		var item = this._definition._item;
  		return item._getCachedBounds(item._matrix.prepended(matrix), options);
  	},

  	_hitTestSelf: function(point, options, viewMatrix) {
  		var res = this._definition._item._hitTest(point, options, viewMatrix);
  		if (res)
  			res.item = this;
  		return res;
  	},

  	_draw: function(ctx, param) {
  		this._definition._item.draw(ctx, param);
  	}

  });

  var SymbolDefinition = Base.extend({
  	_class: 'SymbolDefinition',

  	initialize: function SymbolDefinition(item, dontCenter) {
  		this._id = UID.get();
  		this.project = paper.project;
  		if (item)
  			this.setItem(item, dontCenter);
  	},

  	_serialize: function(options, dictionary) {
  		return dictionary.add(this, function() {
  			return Base.serialize([this._class, this._item],
  					options, false, dictionary);
  		});
  	},

  	_changed: function(flags) {
  		if (flags & 8)
  			Item._clearBoundsCache(this);
  		if (flags & 1)
  			this.project._changed(flags);
  	},

  	getItem: function() {
  		return this._item;
  	},

  	setItem: function(item, _dontCenter) {
  		if (item._symbol)
  			item = item.clone();
  		if (this._item)
  			this._item._symbol = null;
  		this._item = item;
  		item.remove();
  		item.setSelected(false);
  		if (!_dontCenter)
  			item.setPosition(new Point());
  		item._symbol = this;
  		this._changed(9);
  	},

  	getDefinition: '#getItem',
  	setDefinition: '#setItem',

  	place: function(position) {
  		return new SymbolItem(this, position);
  	},

  	clone: function() {
  		return new SymbolDefinition(this._item.clone(false));
  	},

  	equals: function(symbol) {
  		return symbol === this
  				|| symbol && this._item.equals(symbol._item)
  				|| false;
  	}
  });

  var HitResult = Base.extend({
  	_class: 'HitResult',

  	initialize: function HitResult(type, item, values) {
  		this.type = type;
  		this.item = item;
  		if (values)
  			this.inject(values);
  	},

  	statics: {
  		getOptions: function(args) {
  			var options = args && Base.read(args);
  			return Base.set({
  				type: null,
  				tolerance: paper.settings.hitTolerance,
  				fill: !options,
  				stroke: !options,
  				segments: !options,
  				handles: false,
  				ends: false,
  				position: false,
  				center: false,
  				bounds: false,
  				guides: false,
  				selected: false
  			}, options);
  		}
  	}
  });

  var Segment = Base.extend({
  	_class: 'Segment',
  	beans: true,
  	_selection: 0,

  	initialize: function Segment(arg0, arg1, arg2, arg3, arg4, arg5) {
  		var count = arguments.length,
  			point, handleIn, handleOut, selection;
  		if (count > 0) {
  			if (arg0 == null || typeof arg0 === 'object') {
  				if (count === 1 && arg0 && 'point' in arg0) {
  					point = arg0.point;
  					handleIn = arg0.handleIn;
  					handleOut = arg0.handleOut;
  					selection = arg0.selection;
  				} else {
  					point = arg0;
  					handleIn = arg1;
  					handleOut = arg2;
  					selection = arg3;
  				}
  			} else {
  				point = [ arg0, arg1 ];
  				handleIn = arg2 !== undefined ? [ arg2, arg3 ] : null;
  				handleOut = arg4 !== undefined ? [ arg4, arg5 ] : null;
  			}
  		}
  		new SegmentPoint(point, this, '_point');
  		new SegmentPoint(handleIn, this, '_handleIn');
  		new SegmentPoint(handleOut, this, '_handleOut');
  		if (selection)
  			this.setSelection(selection);
  	},

  	_serialize: function(options, dictionary) {
  		var point = this._point,
  			selection = this._selection,
  			obj = selection || this.hasHandles()
  					? [point, this._handleIn, this._handleOut]
  					: point;
  		if (selection)
  			obj.push(selection);
  		return Base.serialize(obj, options, true, dictionary);
  	},

  	_changed: function(point) {
  		var path = this._path;
  		if (!path)
  			return;
  		var curves = path._curves,
  			index = this._index,
  			curve;
  		if (curves) {
  			if ((!point || point === this._point || point === this._handleIn)
  					&& (curve = index > 0 ? curves[index - 1] : path._closed
  						? curves[curves.length - 1] : null))
  				curve._changed();
  			if ((!point || point === this._point || point === this._handleOut)
  					&& (curve = curves[index]))
  				curve._changed();
  		}
  		path._changed(41);
  	},

  	getPoint: function() {
  		return this._point;
  	},

  	setPoint: function() {
  		this._point.set(Point.read(arguments));
  	},

  	getHandleIn: function() {
  		return this._handleIn;
  	},

  	setHandleIn: function() {
  		this._handleIn.set(Point.read(arguments));
  	},

  	getHandleOut: function() {
  		return this._handleOut;
  	},

  	setHandleOut: function() {
  		this._handleOut.set(Point.read(arguments));
  	},

  	hasHandles: function() {
  		return !this._handleIn.isZero() || !this._handleOut.isZero();
  	},

  	isSmooth: function() {
  		var handleIn = this._handleIn,
  			handleOut = this._handleOut;
  		return !handleIn.isZero() && !handleOut.isZero()
  				&& handleIn.isCollinear(handleOut);
  	},

  	clearHandles: function() {
  		this._handleIn._set(0, 0);
  		this._handleOut._set(0, 0);
  	},

  	getSelection: function() {
  		return this._selection;
  	},

  	setSelection: function(selection) {
  		var oldSelection = this._selection,
  			path = this._path;
  		this._selection = selection = selection || 0;
  		if (path && selection !== oldSelection) {
  			path._updateSelection(this, oldSelection, selection);
  			path._changed(257);
  		}
  	},

  	_changeSelection: function(flag, selected) {
  		var selection = this._selection;
  		this.setSelection(selected ? selection | flag : selection & ~flag);
  	},

  	isSelected: function() {
  		return !!(this._selection & 7);
  	},

  	setSelected: function(selected) {
  		this._changeSelection(7, selected);
  	},

  	getIndex: function() {
  		return this._index !== undefined ? this._index : null;
  	},

  	getPath: function() {
  		return this._path || null;
  	},

  	getCurve: function() {
  		var path = this._path,
  			index = this._index;
  		if (path) {
  			if (index > 0 && !path._closed
  					&& index === path._segments.length - 1)
  				index--;
  			return path.getCurves()[index] || null;
  		}
  		return null;
  	},

  	getLocation: function() {
  		var curve = this.getCurve();
  		return curve
  				? new CurveLocation(curve, this === curve._segment1 ? 0 : 1)
  				: null;
  	},

  	getNext: function() {
  		var segments = this._path && this._path._segments;
  		return segments && (segments[this._index + 1]
  				|| this._path._closed && segments[0]) || null;
  	},

  	smooth: function(options, _first, _last) {
  		var opts = options || {},
  			type = opts.type,
  			factor = opts.factor,
  			prev = this.getPrevious(),
  			next = this.getNext(),
  			p0 = (prev || this)._point,
  			p1 = this._point,
  			p2 = (next || this)._point,
  			d1 = p0.getDistance(p1),
  			d2 = p1.getDistance(p2);
  		if (!type || type === 'catmull-rom') {
  			var a = factor === undefined ? 0.5 : factor,
  				d1_a = Math.pow(d1, a),
  				d1_2a = d1_a * d1_a,
  				d2_a = Math.pow(d2, a),
  				d2_2a = d2_a * d2_a;
  			if (!_first && prev) {
  				var A = 2 * d2_2a + 3 * d2_a * d1_a + d1_2a,
  					N = 3 * d2_a * (d2_a + d1_a);
  				this.setHandleIn(N !== 0
  					? new Point(
  						(d2_2a * p0._x + A * p1._x - d1_2a * p2._x) / N - p1._x,
  						(d2_2a * p0._y + A * p1._y - d1_2a * p2._y) / N - p1._y)
  					: new Point());
  			}
  			if (!_last && next) {
  				var A = 2 * d1_2a + 3 * d1_a * d2_a + d2_2a,
  					N = 3 * d1_a * (d1_a + d2_a);
  				this.setHandleOut(N !== 0
  					? new Point(
  						(d1_2a * p2._x + A * p1._x - d2_2a * p0._x) / N - p1._x,
  						(d1_2a * p2._y + A * p1._y - d2_2a * p0._y) / N - p1._y)
  					: new Point());
  			}
  		} else if (type === 'geometric') {
  			if (prev && next) {
  				var vector = p0.subtract(p2),
  					t = factor === undefined ? 0.4 : factor,
  					k = t * d1 / (d1 + d2);
  				if (!_first)
  					this.setHandleIn(vector.multiply(k));
  				if (!_last)
  					this.setHandleOut(vector.multiply(k - t));
  			}
  		} else {
  			throw new Error('Smoothing method \'' + type + '\' not supported.');
  		}
  	},

  	getPrevious: function() {
  		var segments = this._path && this._path._segments;
  		return segments && (segments[this._index - 1]
  				|| this._path._closed && segments[segments.length - 1]) || null;
  	},

  	isFirst: function() {
  		return !this._index;
  	},

  	isLast: function() {
  		var path = this._path;
  		return path && this._index === path._segments.length - 1 || false;
  	},

  	reverse: function() {
  		var handleIn = this._handleIn,
  			handleOut = this._handleOut,
  			tmp = handleIn.clone();
  		handleIn.set(handleOut);
  		handleOut.set(tmp);
  	},

  	reversed: function() {
  		return new Segment(this._point, this._handleOut, this._handleIn);
  	},

  	remove: function() {
  		return this._path ? !!this._path.removeSegment(this._index) : false;
  	},

  	clone: function() {
  		return new Segment(this._point, this._handleIn, this._handleOut);
  	},

  	equals: function(segment) {
  		return segment === this || segment && this._class === segment._class
  				&& this._point.equals(segment._point)
  				&& this._handleIn.equals(segment._handleIn)
  				&& this._handleOut.equals(segment._handleOut)
  				|| false;
  	},

  	toString: function() {
  		var parts = [ 'point: ' + this._point ];
  		if (!this._handleIn.isZero())
  			parts.push('handleIn: ' + this._handleIn);
  		if (!this._handleOut.isZero())
  			parts.push('handleOut: ' + this._handleOut);
  		return '{ ' + parts.join(', ') + ' }';
  	},

  	transform: function(matrix) {
  		this._transformCoordinates(matrix, new Array(6), true);
  		this._changed();
  	},

  	interpolate: function(from, to, factor) {
  		var u = 1 - factor,
  			v = factor,
  			point1 = from._point,
  			point2 = to._point,
  			handleIn1 = from._handleIn,
  			handleIn2 = to._handleIn,
  			handleOut2 = to._handleOut,
  			handleOut1 = from._handleOut;
  		this._point._set(
  				u * point1._x + v * point2._x,
  				u * point1._y + v * point2._y, true);
  		this._handleIn._set(
  				u * handleIn1._x + v * handleIn2._x,
  				u * handleIn1._y + v * handleIn2._y, true);
  		this._handleOut._set(
  				u * handleOut1._x + v * handleOut2._x,
  				u * handleOut1._y + v * handleOut2._y, true);
  		this._changed();
  	},

  	_transformCoordinates: function(matrix, coords, change) {
  		var point = this._point,
  			handleIn = !change || !this._handleIn.isZero()
  					? this._handleIn : null,
  			handleOut = !change || !this._handleOut.isZero()
  					? this._handleOut : null,
  			x = point._x,
  			y = point._y,
  			i = 2;
  		coords[0] = x;
  		coords[1] = y;
  		if (handleIn) {
  			coords[i++] = handleIn._x + x;
  			coords[i++] = handleIn._y + y;
  		}
  		if (handleOut) {
  			coords[i++] = handleOut._x + x;
  			coords[i++] = handleOut._y + y;
  		}
  		if (matrix) {
  			matrix._transformCoordinates(coords, coords, i / 2);
  			x = coords[0];
  			y = coords[1];
  			if (change) {
  				point._x = x;
  				point._y = y;
  				i = 2;
  				if (handleIn) {
  					handleIn._x = coords[i++] - x;
  					handleIn._y = coords[i++] - y;
  				}
  				if (handleOut) {
  					handleOut._x = coords[i++] - x;
  					handleOut._y = coords[i++] - y;
  				}
  			} else {
  				if (!handleIn) {
  					coords[i++] = x;
  					coords[i++] = y;
  				}
  				if (!handleOut) {
  					coords[i++] = x;
  					coords[i++] = y;
  				}
  			}
  		}
  		return coords;
  	}
  });

  var SegmentPoint = Point.extend({
  	initialize: function SegmentPoint(point, owner, key) {
  		var x, y,
  			selected;
  		if (!point) {
  			x = y = 0;
  		} else if ((x = point[0]) !== undefined) {
  			y = point[1];
  		} else {
  			var pt = point;
  			if ((x = pt.x) === undefined) {
  				pt = Point.read(arguments);
  				x = pt.x;
  			}
  			y = pt.y;
  			selected = pt.selected;
  		}
  		this._x = x;
  		this._y = y;
  		this._owner = owner;
  		owner[key] = this;
  		if (selected)
  			this.setSelected(true);
  	},

  	_set: function(x, y) {
  		this._x = x;
  		this._y = y;
  		this._owner._changed(this);
  		return this;
  	},

  	getX: function() {
  		return this._x;
  	},

  	setX: function(x) {
  		this._x = x;
  		this._owner._changed(this);
  	},

  	getY: function() {
  		return this._y;
  	},

  	setY: function(y) {
  		this._y = y;
  		this._owner._changed(this);
  	},

  	isZero: function() {
  		var isZero = Numerical.isZero;
  		return isZero(this._x) && isZero(this._y);
  	},

  	isSelected: function() {
  		return !!(this._owner._selection & this._getSelection());
  	},

  	setSelected: function(selected) {
  		this._owner._changeSelection(this._getSelection(), selected);
  	},

  	_getSelection: function() {
  		var owner = this._owner;
  		return this === owner._point ? 1
  			: this === owner._handleIn ? 2
  			: this === owner._handleOut ? 4
  			: 0;
  	}
  });

  var Curve = Base.extend({
  	_class: 'Curve',
  	beans: true,

  	initialize: function Curve(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  		var count = arguments.length,
  			seg1, seg2,
  			point1, point2,
  			handle1, handle2;
  		if (count === 3) {
  			this._path = arg0;
  			seg1 = arg1;
  			seg2 = arg2;
  		} else if (!count) {
  			seg1 = new Segment();
  			seg2 = new Segment();
  		} else if (count === 1) {
  			if ('segment1' in arg0) {
  				seg1 = new Segment(arg0.segment1);
  				seg2 = new Segment(arg0.segment2);
  			} else if ('point1' in arg0) {
  				point1 = arg0.point1;
  				handle1 = arg0.handle1;
  				handle2 = arg0.handle2;
  				point2 = arg0.point2;
  			} else if (Array.isArray(arg0)) {
  				point1 = [arg0[0], arg0[1]];
  				point2 = [arg0[6], arg0[7]];
  				handle1 = [arg0[2] - arg0[0], arg0[3] - arg0[1]];
  				handle2 = [arg0[4] - arg0[6], arg0[5] - arg0[7]];
  			}
  		} else if (count === 2) {
  			seg1 = new Segment(arg0);
  			seg2 = new Segment(arg1);
  		} else if (count === 4) {
  			point1 = arg0;
  			handle1 = arg1;
  			handle2 = arg2;
  			point2 = arg3;
  		} else if (count === 8) {
  			point1 = [arg0, arg1];
  			point2 = [arg6, arg7];
  			handle1 = [arg2 - arg0, arg3 - arg1];
  			handle2 = [arg4 - arg6, arg5 - arg7];
  		}
  		this._segment1 = seg1 || new Segment(point1, null, handle1);
  		this._segment2 = seg2 || new Segment(point2, handle2, null);
  	},

  	_serialize: function(options, dictionary) {
  		return Base.serialize(this.hasHandles()
  				? [this.getPoint1(), this.getHandle1(), this.getHandle2(),
  					this.getPoint2()]
  				: [this.getPoint1(), this.getPoint2()],
  				options, true, dictionary);
  	},

  	_changed: function() {
  		this._length = this._bounds = undefined;
  	},

  	clone: function() {
  		return new Curve(this._segment1, this._segment2);
  	},

  	toString: function() {
  		var parts = [ 'point1: ' + this._segment1._point ];
  		if (!this._segment1._handleOut.isZero())
  			parts.push('handle1: ' + this._segment1._handleOut);
  		if (!this._segment2._handleIn.isZero())
  			parts.push('handle2: ' + this._segment2._handleIn);
  		parts.push('point2: ' + this._segment2._point);
  		return '{ ' + parts.join(', ') + ' }';
  	},

  	classify: function() {
  		return Curve.classify(this.getValues());
  	},

  	remove: function() {
  		var removed = false;
  		if (this._path) {
  			var segment2 = this._segment2,
  				handleOut = segment2._handleOut;
  			removed = segment2.remove();
  			if (removed)
  				this._segment1._handleOut.set(handleOut);
  		}
  		return removed;
  	},

  	getPoint1: function() {
  		return this._segment1._point;
  	},

  	setPoint1: function() {
  		this._segment1._point.set(Point.read(arguments));
  	},

  	getPoint2: function() {
  		return this._segment2._point;
  	},

  	setPoint2: function() {
  		this._segment2._point.set(Point.read(arguments));
  	},

  	getHandle1: function() {
  		return this._segment1._handleOut;
  	},

  	setHandle1: function() {
  		this._segment1._handleOut.set(Point.read(arguments));
  	},

  	getHandle2: function() {
  		return this._segment2._handleIn;
  	},

  	setHandle2: function() {
  		this._segment2._handleIn.set(Point.read(arguments));
  	},

  	getSegment1: function() {
  		return this._segment1;
  	},

  	getSegment2: function() {
  		return this._segment2;
  	},

  	getPath: function() {
  		return this._path;
  	},

  	getIndex: function() {
  		return this._segment1._index;
  	},

  	getNext: function() {
  		var curves = this._path && this._path._curves;
  		return curves && (curves[this._segment1._index + 1]
  				|| this._path._closed && curves[0]) || null;
  	},

  	getPrevious: function() {
  		var curves = this._path && this._path._curves;
  		return curves && (curves[this._segment1._index - 1]
  				|| this._path._closed && curves[curves.length - 1]) || null;
  	},

  	isFirst: function() {
  		return !this._segment1._index;
  	},

  	isLast: function() {
  		var path = this._path;
  		return path && this._segment1._index === path._curves.length - 1
  				|| false;
  	},

  	isSelected: function() {
  		return this.getPoint1().isSelected()
  				&& this.getHandle1().isSelected()
  				&& this.getHandle2().isSelected()
  				&& this.getPoint2().isSelected();
  	},

  	setSelected: function(selected) {
  		this.getPoint1().setSelected(selected);
  		this.getHandle1().setSelected(selected);
  		this.getHandle2().setSelected(selected);
  		this.getPoint2().setSelected(selected);
  	},

  	getValues: function(matrix) {
  		return Curve.getValues(this._segment1, this._segment2, matrix);
  	},

  	getPoints: function() {
  		var coords = this.getValues(),
  			points = [];
  		for (var i = 0; i < 8; i += 2)
  			points.push(new Point(coords[i], coords[i + 1]));
  		return points;
  	}
  }, {
  	getLength: function() {
  		if (this._length == null)
  			this._length = Curve.getLength(this.getValues(), 0, 1);
  		return this._length;
  	},

  	getArea: function() {
  		return Curve.getArea(this.getValues());
  	},

  	getLine: function() {
  		return new Line(this._segment1._point, this._segment2._point);
  	},

  	getPart: function(from, to) {
  		return new Curve(Curve.getPart(this.getValues(), from, to));
  	},

  	getPartLength: function(from, to) {
  		return Curve.getLength(this.getValues(), from, to);
  	},

  	divideAt: function(location) {
  		return this.divideAtTime(location && location.curve === this
  				? location.time : this.getTimeAt(location));
  	},

  	divideAtTime: function(time, _setHandles) {
  		var tMin = 1e-8,
  			tMax = 1 - tMin,
  			res = null;
  		if (time >= tMin && time <= tMax) {
  			var parts = Curve.subdivide(this.getValues(), time),
  				left = parts[0],
  				right = parts[1],
  				setHandles = _setHandles || this.hasHandles(),
  				seg1 = this._segment1,
  				seg2 = this._segment2,
  				path = this._path;
  			if (setHandles) {
  				seg1._handleOut._set(left[2] - left[0], left[3] - left[1]);
  				seg2._handleIn._set(right[4] - right[6],right[5] - right[7]);
  			}
  			var x = left[6], y = left[7],
  				segment = new Segment(new Point(x, y),
  						setHandles && new Point(left[4] - x, left[5] - y),
  						setHandles && new Point(right[2] - x, right[3] - y));
  			if (path) {
  				path.insert(seg1._index + 1, segment);
  				res = this.getNext();
  			} else {
  				this._segment2 = segment;
  				this._changed();
  				res = new Curve(segment, seg2);
  			}
  		}
  		return res;
  	},

  	splitAt: function(location) {
  		var path = this._path;
  		return path ? path.splitAt(location) : null;
  	},

  	splitAtTime: function(time) {
  		return this.splitAt(this.getLocationAtTime(time));
  	},

  	divide: function(offset, isTime) {
  		return this.divideAtTime(offset === undefined ? 0.5 : isTime ? offset
  				: this.getTimeAt(offset));
  	},

  	split: function(offset, isTime) {
  		return this.splitAtTime(offset === undefined ? 0.5 : isTime ? offset
  				: this.getTimeAt(offset));
  	},

  	reversed: function() {
  		return new Curve(this._segment2.reversed(), this._segment1.reversed());
  	},

  	clearHandles: function() {
  		this._segment1._handleOut._set(0, 0);
  		this._segment2._handleIn._set(0, 0);
  	},

  statics: {
  	getValues: function(segment1, segment2, matrix, straight) {
  		var p1 = segment1._point,
  			h1 = segment1._handleOut,
  			h2 = segment2._handleIn,
  			p2 = segment2._point,
  			x1 = p1.x, y1 = p1.y,
  			x2 = p2.x, y2 = p2.y,
  			values = straight
  				? [ x1, y1, x1, y1, x2, y2, x2, y2 ]
  				: [
  					x1, y1,
  					x1 + h1._x, y1 + h1._y,
  					x2 + h2._x, y2 + h2._y,
  					x2, y2
  				];
  		if (matrix)
  			matrix._transformCoordinates(values, values, 4);
  		return values;
  	},

  	subdivide: function(v, t) {
  		var x0 = v[0], y0 = v[1],
  			x1 = v[2], y1 = v[3],
  			x2 = v[4], y2 = v[5],
  			x3 = v[6], y3 = v[7];
  		if (t === undefined)
  			t = 0.5;
  		var u = 1 - t,
  			x4 = u * x0 + t * x1, y4 = u * y0 + t * y1,
  			x5 = u * x1 + t * x2, y5 = u * y1 + t * y2,
  			x6 = u * x2 + t * x3, y6 = u * y2 + t * y3,
  			x7 = u * x4 + t * x5, y7 = u * y4 + t * y5,
  			x8 = u * x5 + t * x6, y8 = u * y5 + t * y6,
  			x9 = u * x7 + t * x8, y9 = u * y7 + t * y8;
  		return [
  			[x0, y0, x4, y4, x7, y7, x9, y9],
  			[x9, y9, x8, y8, x6, y6, x3, y3]
  		];
  	},

  	getMonoCurves: function(v, dir) {
  		var curves = [],
  			io = dir ? 0 : 1,
  			o0 = v[io + 0],
  			o1 = v[io + 2],
  			o2 = v[io + 4],
  			o3 = v[io + 6];
  		if ((o0 >= o1) === (o1 >= o2) && (o1 >= o2) === (o2 >= o3)
  				|| Curve.isStraight(v)) {
  			curves.push(v);
  		} else {
  			var a = 3 * (o1 - o2) - o0 + o3,
  				b = 2 * (o0 + o2) - 4 * o1,
  				c = o1 - o0,
  				tMin = 1e-8,
  				tMax = 1 - tMin,
  				roots = [],
  				n = Numerical.solveQuadratic(a, b, c, roots, tMin, tMax);
  			if (!n) {
  				curves.push(v);
  			} else {
  				roots.sort();
  				var t = roots[0],
  					parts = Curve.subdivide(v, t);
  				curves.push(parts[0]);
  				if (n > 1) {
  					t = (roots[1] - t) / (1 - t);
  					parts = Curve.subdivide(parts[1], t);
  					curves.push(parts[0]);
  				}
  				curves.push(parts[1]);
  			}
  		}
  		return curves;
  	},

  	solveCubic: function (v, coord, val, roots, min, max) {
  		var v0 = v[coord],
  			v1 = v[coord + 2],
  			v2 = v[coord + 4],
  			v3 = v[coord + 6],
  			res = 0;
  		if (  !(v0 < val && v3 < val && v1 < val && v2 < val ||
  				v0 > val && v3 > val && v1 > val && v2 > val)) {
  			var c = 3 * (v1 - v0),
  				b = 3 * (v2 - v1) - c,
  				a = v3 - v0 - c - b;
  			res = Numerical.solveCubic(a, b, c, v0 - val, roots, min, max);
  		}
  		return res;
  	},

  	getTimeOf: function(v, point) {
  		var p0 = new Point(v[0], v[1]),
  			p3 = new Point(v[6], v[7]),
  			epsilon = 1e-12,
  			geomEpsilon = 1e-7,
  			t = point.isClose(p0, epsilon) ? 0
  			  : point.isClose(p3, epsilon) ? 1
  			  : null;
  		if (t === null) {
  			var coords = [point.x, point.y],
  				roots = [];
  			for (var c = 0; c < 2; c++) {
  				var count = Curve.solveCubic(v, c, coords[c], roots, 0, 1);
  				for (var i = 0; i < count; i++) {
  					var u = roots[i];
  					if (point.isClose(Curve.getPoint(v, u), geomEpsilon))
  						return u;
  				}
  			}
  		}
  		return point.isClose(p0, geomEpsilon) ? 0
  			 : point.isClose(p3, geomEpsilon) ? 1
  			 : null;
  	},

  	getNearestTime: function(v, point) {
  		if (Curve.isStraight(v)) {
  			var x0 = v[0], y0 = v[1],
  				x3 = v[6], y3 = v[7],
  				vx = x3 - x0, vy = y3 - y0,
  				det = vx * vx + vy * vy;
  			if (det === 0)
  				return 0;
  			var u = ((point.x - x0) * vx + (point.y - y0) * vy) / det;
  			return u < 1e-12 ? 0
  				 : u > 0.999999999999 ? 1
  				 : Curve.getTimeOf(v,
  					new Point(x0 + u * vx, y0 + u * vy));
  		}

  		var count = 100,
  			minDist = Infinity,
  			minT = 0;

  		function refine(t) {
  			if (t >= 0 && t <= 1) {
  				var dist = point.getDistance(Curve.getPoint(v, t), true);
  				if (dist < minDist) {
  					minDist = dist;
  					minT = t;
  					return true;
  				}
  			}
  		}

  		for (var i = 0; i <= count; i++)
  			refine(i / count);

  		var step = 1 / (count * 2);
  		while (step > 1e-8) {
  			if (!refine(minT - step) && !refine(minT + step))
  				step /= 2;
  		}
  		return minT;
  	},

  	getPart: function(v, from, to) {
  		var flip = from > to;
  		if (flip) {
  			var tmp = from;
  			from = to;
  			to = tmp;
  		}
  		if (from > 0)
  			v = Curve.subdivide(v, from)[1];
  		if (to < 1)
  			v = Curve.subdivide(v, (to - from) / (1 - from))[0];
  		return flip
  				? [v[6], v[7], v[4], v[5], v[2], v[3], v[0], v[1]]
  				: v;
  	},

  	isFlatEnough: function(v, flatness) {
  		var x0 = v[0], y0 = v[1],
  			x1 = v[2], y1 = v[3],
  			x2 = v[4], y2 = v[5],
  			x3 = v[6], y3 = v[7],
  			ux = 3 * x1 - 2 * x0 - x3,
  			uy = 3 * y1 - 2 * y0 - y3,
  			vx = 3 * x2 - 2 * x3 - x0,
  			vy = 3 * y2 - 2 * y3 - y0;
  		return Math.max(ux * ux, vx * vx) + Math.max(uy * uy, vy * vy)
  				<= 16 * flatness * flatness;
  	},

  	getArea: function(v) {
  		var x0 = v[0], y0 = v[1],
  			x1 = v[2], y1 = v[3],
  			x2 = v[4], y2 = v[5],
  			x3 = v[6], y3 = v[7];
  		return 3 * ((y3 - y0) * (x1 + x2) - (x3 - x0) * (y1 + y2)
  				+ y1 * (x0 - x2) - x1 * (y0 - y2)
  				+ y3 * (x2 + x0 / 3) - x3 * (y2 + y0 / 3)) / 20;
  	},

  	getBounds: function(v) {
  		var min = v.slice(0, 2),
  			max = min.slice(),
  			roots = [0, 0];
  		for (var i = 0; i < 2; i++)
  			Curve._addBounds(v[i], v[i + 2], v[i + 4], v[i + 6],
  					i, 0, min, max, roots);
  		return new Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);
  	},

  	_addBounds: function(v0, v1, v2, v3, coord, padding, min, max, roots) {
  		function add(value, padding) {
  			var left = value - padding,
  				right = value + padding;
  			if (left < min[coord])
  				min[coord] = left;
  			if (right > max[coord])
  				max[coord] = right;
  		}

  		padding /= 2;
  		var minPad = min[coord] - padding,
  			maxPad = max[coord] + padding;
  		if (    v0 < minPad || v1 < minPad || v2 < minPad || v3 < minPad ||
  				v0 > maxPad || v1 > maxPad || v2 > maxPad || v3 > maxPad) {
  			if (v1 < v0 != v1 < v3 && v2 < v0 != v2 < v3) {
  				add(v0, padding);
  				add(v3, padding);
  			} else {
  				var a = 3 * (v1 - v2) - v0 + v3,
  					b = 2 * (v0 + v2) - 4 * v1,
  					c = v1 - v0,
  					count = Numerical.solveQuadratic(a, b, c, roots),
  					tMin = 1e-8,
  					tMax = 1 - tMin;
  				add(v3, 0);
  				for (var i = 0; i < count; i++) {
  					var t = roots[i],
  						u = 1 - t;
  					if (tMin <= t && t <= tMax)
  						add(u * u * u * v0
  							+ 3 * u * u * t * v1
  							+ 3 * u * t * t * v2
  							+ t * t * t * v3,
  							padding);
  				}
  			}
  		}
  	}
  }}, Base.each(
  	['getBounds', 'getStrokeBounds', 'getHandleBounds'],
  	function(name) {
  		this[name] = function() {
  			if (!this._bounds)
  				this._bounds = {};
  			var bounds = this._bounds[name];
  			if (!bounds) {
  				bounds = this._bounds[name] = Path[name](
  						[this._segment1, this._segment2], false, this._path);
  			}
  			return bounds.clone();
  		};
  	},
  {

  }), Base.each({
  	isStraight: function(p1, h1, h2, p2) {
  		if (h1.isZero() && h2.isZero()) {
  			return true;
  		} else {
  			var v = p2.subtract(p1);
  			if (v.isZero()) {
  				return false;
  			} else if (v.isCollinear(h1) && v.isCollinear(h2)) {
  				var l = new Line(p1, p2),
  					epsilon = 1e-7;
  				if (l.getDistance(p1.add(h1)) < epsilon &&
  					l.getDistance(p2.add(h2)) < epsilon) {
  					var div = v.dot(v),
  						s1 = v.dot(h1) / div,
  						s2 = v.dot(h2) / div;
  					return s1 >= 0 && s1 <= 1 && s2 <= 0 && s2 >= -1;
  				}
  			}
  		}
  		return false;
  	},

  	isLinear: function(p1, h1, h2, p2) {
  		var third = p2.subtract(p1).divide(3);
  		return h1.equals(third) && h2.negate().equals(third);
  	}
  }, function(test, name) {
  	this[name] = function(epsilon) {
  		var seg1 = this._segment1,
  			seg2 = this._segment2;
  		return test(seg1._point, seg1._handleOut, seg2._handleIn, seg2._point,
  				epsilon);
  	};

  	this.statics[name] = function(v, epsilon) {
  		var x0 = v[0], y0 = v[1],
  			x3 = v[6], y3 = v[7];
  		return test(
  				new Point(x0, y0),
  				new Point(v[2] - x0, v[3] - y0),
  				new Point(v[4] - x3, v[5] - y3),
  				new Point(x3, y3), epsilon);
  	};
  }, {
  	statics: {},

  	hasHandles: function() {
  		return !this._segment1._handleOut.isZero()
  				|| !this._segment2._handleIn.isZero();
  	},

  	hasLength: function(epsilon) {
  		return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles())
  				&& this.getLength() > (epsilon || 0);
  	},

  	isCollinear: function(curve) {
  		return curve && this.isStraight() && curve.isStraight()
  				&& this.getLine().isCollinear(curve.getLine());
  	},

  	isHorizontal: function() {
  		return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).y)
  				< 1e-8;
  	},

  	isVertical: function() {
  		return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).x)
  				< 1e-8;
  	}
  }), {
  	beans: false,

  	getLocationAt: function(offset, _isTime) {
  		return this.getLocationAtTime(
  				_isTime ? offset : this.getTimeAt(offset));
  	},

  	getLocationAtTime: function(t) {
  		return t != null && t >= 0 && t <= 1
  				? new CurveLocation(this, t)
  				: null;
  	},

  	getTimeAt: function(offset, start) {
  		return Curve.getTimeAt(this.getValues(), offset, start);
  	},

  	getParameterAt: '#getTimeAt',

  	getTimesWithTangent: function () {
  		var tangent = Point.read(arguments);
  		return tangent.isZero()
  				? []
  				: Curve.getTimesWithTangent(this.getValues(), tangent);
  	},

  	getOffsetAtTime: function(t) {
  		return this.getPartLength(0, t);
  	},

  	getLocationOf: function() {
  		return this.getLocationAtTime(this.getTimeOf(Point.read(arguments)));
  	},

  	getOffsetOf: function() {
  		var loc = this.getLocationOf.apply(this, arguments);
  		return loc ? loc.getOffset() : null;
  	},

  	getTimeOf: function() {
  		return Curve.getTimeOf(this.getValues(), Point.read(arguments));
  	},

  	getParameterOf: '#getTimeOf',

  	getNearestLocation: function() {
  		var point = Point.read(arguments),
  			values = this.getValues(),
  			t = Curve.getNearestTime(values, point),
  			pt = Curve.getPoint(values, t);
  		return new CurveLocation(this, t, pt, null, point.getDistance(pt));
  	},

  	getNearestPoint: function() {
  		var loc = this.getNearestLocation.apply(this, arguments);
  		return loc ? loc.getPoint() : loc;
  	}

  },
  new function() {
  	var methods = ['getPoint', 'getTangent', 'getNormal', 'getWeightedTangent',
  		'getWeightedNormal', 'getCurvature'];
  	return Base.each(methods,
  		function(name) {
  			this[name + 'At'] = function(location, _isTime) {
  				var values = this.getValues();
  				return Curve[name](values, _isTime ? location
  						: Curve.getTimeAt(values, location));
  			};

  			this[name + 'AtTime'] = function(time) {
  				return Curve[name](this.getValues(), time);
  			};
  		}, {
  			statics: {
  				_evaluateMethods: methods
  			}
  		}
  	);
  },
  new function() {

  	function getLengthIntegrand(v) {
  		var x0 = v[0], y0 = v[1],
  			x1 = v[2], y1 = v[3],
  			x2 = v[4], y2 = v[5],
  			x3 = v[6], y3 = v[7],

  			ax = 9 * (x1 - x2) + 3 * (x3 - x0),
  			bx = 6 * (x0 + x2) - 12 * x1,
  			cx = 3 * (x1 - x0),

  			ay = 9 * (y1 - y2) + 3 * (y3 - y0),
  			by = 6 * (y0 + y2) - 12 * y1,
  			cy = 3 * (y1 - y0);

  		return function(t) {
  			var dx = (ax * t + bx) * t + cx,
  				dy = (ay * t + by) * t + cy;
  			return Math.sqrt(dx * dx + dy * dy);
  		};
  	}

  	function getIterations(a, b) {
  		return Math.max(2, Math.min(16, Math.ceil(Math.abs(b - a) * 32)));
  	}

  	function evaluate(v, t, type, normalized) {
  		if (t == null || t < 0 || t > 1)
  			return null;
  		var x0 = v[0], y0 = v[1],
  			x1 = v[2], y1 = v[3],
  			x2 = v[4], y2 = v[5],
  			x3 = v[6], y3 = v[7],
  			isZero = Numerical.isZero;
  		if (isZero(x1 - x0) && isZero(y1 - y0)) {
  			x1 = x0;
  			y1 = y0;
  		}
  		if (isZero(x2 - x3) && isZero(y2 - y3)) {
  			x2 = x3;
  			y2 = y3;
  		}
  		var cx = 3 * (x1 - x0),
  			bx = 3 * (x2 - x1) - cx,
  			ax = x3 - x0 - cx - bx,
  			cy = 3 * (y1 - y0),
  			by = 3 * (y2 - y1) - cy,
  			ay = y3 - y0 - cy - by,
  			x, y;
  		if (type === 0) {
  			x = t === 0 ? x0 : t === 1 ? x3
  					: ((ax * t + bx) * t + cx) * t + x0;
  			y = t === 0 ? y0 : t === 1 ? y3
  					: ((ay * t + by) * t + cy) * t + y0;
  		} else {
  			var tMin = 1e-8,
  				tMax = 1 - tMin;
  			if (t < tMin) {
  				x = cx;
  				y = cy;
  			} else if (t > tMax) {
  				x = 3 * (x3 - x2);
  				y = 3 * (y3 - y2);
  			} else {
  				x = (3 * ax * t + 2 * bx) * t + cx;
  				y = (3 * ay * t + 2 * by) * t + cy;
  			}
  			if (normalized) {
  				if (x === 0 && y === 0 && (t < tMin || t > tMax)) {
  					x = x2 - x1;
  					y = y2 - y1;
  				}
  				var len = Math.sqrt(x * x + y * y);
  				if (len) {
  					x /= len;
  					y /= len;
  				}
  			}
  			if (type === 3) {
  				var x2 = 6 * ax * t + 2 * bx,
  					y2 = 6 * ay * t + 2 * by,
  					d = Math.pow(x * x + y * y, 3 / 2);
  				x = d !== 0 ? (x * y2 - y * x2) / d : 0;
  				y = 0;
  			}
  		}
  		return type === 2 ? new Point(y, -x) : new Point(x, y);
  	}

  	return { statics: {

  		classify: function(v) {

  			var x0 = v[0], y0 = v[1],
  				x1 = v[2], y1 = v[3],
  				x2 = v[4], y2 = v[5],
  				x3 = v[6], y3 = v[7],
  				a1 = x0 * (y3 - y2) + y0 * (x2 - x3) + x3 * y2 - y3 * x2,
  				a2 = x1 * (y0 - y3) + y1 * (x3 - x0) + x0 * y3 - y0 * x3,
  				a3 = x2 * (y1 - y0) + y2 * (x0 - x1) + x1 * y0 - y1 * x0,
  				d3 = 3 * a3,
  				d2 = d3 - a2,
  				d1 = d2 - a2 + a1,
  				l = Math.sqrt(d1 * d1 + d2 * d2 + d3 * d3),
  				s = l !== 0 ? 1 / l : 0,
  				isZero = Numerical.isZero,
  				serpentine = 'serpentine';
  			d1 *= s;
  			d2 *= s;
  			d3 *= s;

  			function type(type, t1, t2) {
  				var hasRoots = t1 !== undefined,
  					t1Ok = hasRoots && t1 > 0 && t1 < 1,
  					t2Ok = hasRoots && t2 > 0 && t2 < 1;
  				if (hasRoots && (!(t1Ok || t2Ok)
  						|| type === 'loop' && !(t1Ok && t2Ok))) {
  					type = 'arch';
  					t1Ok = t2Ok = false;
  				}
  				return {
  					type: type,
  					roots: t1Ok || t2Ok
  							? t1Ok && t2Ok
  								? t1 < t2 ? [t1, t2] : [t2, t1]
  								: [t1Ok ? t1 : t2]
  							: null
  				};
  			}

  			if (isZero(d1)) {
  				return isZero(d2)
  						? type(isZero(d3) ? 'line' : 'quadratic')
  						: type(serpentine, d3 / (3 * d2));
  			}
  			var d = 3 * d2 * d2 - 4 * d1 * d3;
  			if (isZero(d)) {
  				return type('cusp', d2 / (2 * d1));
  			}
  			var f1 = d > 0 ? Math.sqrt(d / 3) : Math.sqrt(-d),
  				f2 = 2 * d1;
  			return type(d > 0 ? serpentine : 'loop',
  					(d2 + f1) / f2,
  					(d2 - f1) / f2);
  		},

  		getLength: function(v, a, b, ds) {
  			if (a === undefined)
  				a = 0;
  			if (b === undefined)
  				b = 1;
  			if (Curve.isStraight(v)) {
  				var c = v;
  				if (b < 1) {
  					c = Curve.subdivide(c, b)[0];
  					a /= b;
  				}
  				if (a > 0) {
  					c = Curve.subdivide(c, a)[1];
  				}
  				var dx = c[6] - c[0],
  					dy = c[7] - c[1];
  				return Math.sqrt(dx * dx + dy * dy);
  			}
  			return Numerical.integrate(ds || getLengthIntegrand(v), a, b,
  					getIterations(a, b));
  		},

  		getTimeAt: function(v, offset, start) {
  			if (start === undefined)
  				start = offset < 0 ? 1 : 0;
  			if (offset === 0)
  				return start;
  			var abs = Math.abs,
  				epsilon = 1e-12,
  				forward = offset > 0,
  				a = forward ? start : 0,
  				b = forward ? 1 : start,
  				ds = getLengthIntegrand(v),
  				rangeLength = Curve.getLength(v, a, b, ds),
  				diff = abs(offset) - rangeLength;
  			if (abs(diff) < epsilon) {
  				return forward ? b : a;
  			} else if (diff > epsilon) {
  				return null;
  			}
  			var guess = offset / rangeLength,
  				length = 0;
  			function f(t) {
  				length += Numerical.integrate(ds, start, t,
  						getIterations(start, t));
  				start = t;
  				return length - offset;
  			}
  			return Numerical.findRoot(f, ds, start + guess, a, b, 32,
  					1e-12);
  		},

  		getPoint: function(v, t) {
  			return evaluate(v, t, 0, false);
  		},

  		getTangent: function(v, t) {
  			return evaluate(v, t, 1, true);
  		},

  		getWeightedTangent: function(v, t) {
  			return evaluate(v, t, 1, false);
  		},

  		getNormal: function(v, t) {
  			return evaluate(v, t, 2, true);
  		},

  		getWeightedNormal: function(v, t) {
  			return evaluate(v, t, 2, false);
  		},

  		getCurvature: function(v, t) {
  			return evaluate(v, t, 3, false).x;
  		},

  		getPeaks: function(v) {
  			var x0 = v[0], y0 = v[1],
  				x1 = v[2], y1 = v[3],
  				x2 = v[4], y2 = v[5],
  				x3 = v[6], y3 = v[7],
  				ax =     -x0 + 3 * x1 - 3 * x2 + x3,
  				bx =  3 * x0 - 6 * x1 + 3 * x2,
  				cx = -3 * x0 + 3 * x1,
  				ay =     -y0 + 3 * y1 - 3 * y2 + y3,
  				by =  3 * y0 - 6 * y1 + 3 * y2,
  				cy = -3 * y0 + 3 * y1,
  				tMin = 1e-8,
  				tMax = 1 - tMin,
  				roots = [];
  			Numerical.solveCubic(
  					9 * (ax * ax + ay * ay),
  					9 * (ax * bx + by * ay),
  					2 * (bx * bx + by * by) + 3 * (cx * ax + cy * ay),
  					(cx * bx + by * cy),
  					roots, tMin, tMax);
  			return roots.sort();
  		}
  	}};
  },
  new function() {

  	function addLocation(locations, include, c1, t1, c2, t2, overlap) {
  		var excludeStart = !overlap && c1.getPrevious() === c2,
  			excludeEnd = !overlap && c1 !== c2 && c1.getNext() === c2,
  			tMin = 1e-8,
  			tMax = 1 - tMin;
  		if (t1 !== null && t1 >= (excludeStart ? tMin : 0) &&
  			t1 <= (excludeEnd ? tMax : 1)) {
  			if (t2 !== null && t2 >= (excludeEnd ? tMin : 0) &&
  				t2 <= (excludeStart ? tMax : 1)) {
  				var loc1 = new CurveLocation(c1, t1, null, overlap),
  					loc2 = new CurveLocation(c2, t2, null, overlap);
  				loc1._intersection = loc2;
  				loc2._intersection = loc1;
  				if (!include || include(loc1)) {
  					CurveLocation.insert(locations, loc1, true);
  				}
  			}
  		}
  	}

  	function addCurveIntersections(v1, v2, c1, c2, locations, include, flip,
  			recursion, calls, tMin, tMax, uMin, uMax) {
  		if (++calls >= 4096 || ++recursion >= 40)
  			return calls;
  		var fatLineEpsilon = 1e-9,
  			q0x = v2[0], q0y = v2[1], q3x = v2[6], q3y = v2[7],
  			getSignedDistance = Line.getSignedDistance,
  			d1 = getSignedDistance(q0x, q0y, q3x, q3y, v2[2], v2[3]),
  			d2 = getSignedDistance(q0x, q0y, q3x, q3y, v2[4], v2[5]),
  			factor = d1 * d2 > 0 ? 3 / 4 : 4 / 9,
  			dMin = factor * Math.min(0, d1, d2),
  			dMax = factor * Math.max(0, d1, d2),
  			dp0 = getSignedDistance(q0x, q0y, q3x, q3y, v1[0], v1[1]),
  			dp1 = getSignedDistance(q0x, q0y, q3x, q3y, v1[2], v1[3]),
  			dp2 = getSignedDistance(q0x, q0y, q3x, q3y, v1[4], v1[5]),
  			dp3 = getSignedDistance(q0x, q0y, q3x, q3y, v1[6], v1[7]),
  			hull = getConvexHull(dp0, dp1, dp2, dp3),
  			top = hull[0],
  			bottom = hull[1],
  			tMinClip,
  			tMaxClip;
  		if (d1 === 0 && d2 === 0
  				&& dp0 === 0 && dp1 === 0 && dp2 === 0 && dp3 === 0
  			|| (tMinClip = clipConvexHull(top, bottom, dMin, dMax)) == null
  			|| (tMaxClip = clipConvexHull(top.reverse(), bottom.reverse(),
  				dMin, dMax)) == null)
  			return calls;
  		var tMinNew = tMin + (tMax - tMin) * tMinClip,
  			tMaxNew = tMin + (tMax - tMin) * tMaxClip;
  		if (Math.max(uMax - uMin, tMaxNew - tMinNew) < fatLineEpsilon) {
  			var t = (tMinNew + tMaxNew) / 2,
  				u = (uMin + uMax) / 2;
  			addLocation(locations, include,
  					flip ? c2 : c1, flip ? u : t,
  					flip ? c1 : c2, flip ? t : u);
  		} else {
  			v1 = Curve.getPart(v1, tMinClip, tMaxClip);
  			if (tMaxClip - tMinClip > 0.8) {
  				if (tMaxNew - tMinNew > uMax - uMin) {
  					var parts = Curve.subdivide(v1, 0.5),
  						t = (tMinNew + tMaxNew) / 2;
  					calls = addCurveIntersections(
  							v2, parts[0], c2, c1, locations, include, !flip,
  							recursion, calls, uMin, uMax, tMinNew, t);
  					calls = addCurveIntersections(
  							v2, parts[1], c2, c1, locations, include, !flip,
  							recursion, calls, uMin, uMax, t, tMaxNew);
  				} else {
  					var parts = Curve.subdivide(v2, 0.5),
  						u = (uMin + uMax) / 2;
  					calls = addCurveIntersections(
  							parts[0], v1, c2, c1, locations, include, !flip,
  							recursion, calls, uMin, u, tMinNew, tMaxNew);
  					calls = addCurveIntersections(
  							parts[1], v1, c2, c1, locations, include, !flip,
  							recursion, calls, u, uMax, tMinNew, tMaxNew);
  				}
  			} else {
  				if (uMax - uMin >= fatLineEpsilon) {
  					calls = addCurveIntersections(
  							v2, v1, c2, c1, locations, include, !flip,
  							recursion, calls, uMin, uMax, tMinNew, tMaxNew);
  				} else {
  					calls = addCurveIntersections(
  							v1, v2, c1, c2, locations, include, flip,
  							recursion, calls, tMinNew, tMaxNew, uMin, uMax);
  				}
  			}
  		}
  		return calls;
  	}

  	function getConvexHull(dq0, dq1, dq2, dq3) {
  		var p0 = [ 0, dq0 ],
  			p1 = [ 1 / 3, dq1 ],
  			p2 = [ 2 / 3, dq2 ],
  			p3 = [ 1, dq3 ],
  			dist1 = dq1 - (2 * dq0 + dq3) / 3,
  			dist2 = dq2 - (dq0 + 2 * dq3) / 3,
  			hull;
  		if (dist1 * dist2 < 0) {
  			hull = [[p0, p1, p3], [p0, p2, p3]];
  		} else {
  			var distRatio = dist1 / dist2;
  			hull = [
  				distRatio >= 2 ? [p0, p1, p3]
  				: distRatio <= 0.5 ? [p0, p2, p3]
  				: [p0, p1, p2, p3],
  				[p0, p3]
  			];
  		}
  		return (dist1 || dist2) < 0 ? hull.reverse() : hull;
  	}

  	function clipConvexHull(hullTop, hullBottom, dMin, dMax) {
  		if (hullTop[0][1] < dMin) {
  			return clipConvexHullPart(hullTop, true, dMin);
  		} else if (hullBottom[0][1] > dMax) {
  			return clipConvexHullPart(hullBottom, false, dMax);
  		} else {
  			return hullTop[0][0];
  		}
  	}

  	function clipConvexHullPart(part, top, threshold) {
  		var px = part[0][0],
  			py = part[0][1];
  		for (var i = 1, l = part.length; i < l; i++) {
  			var qx = part[i][0],
  				qy = part[i][1];
  			if (top ? qy >= threshold : qy <= threshold) {
  				return qy === threshold ? qx
  						: px + (threshold - py) * (qx - px) / (qy - py);
  			}
  			px = qx;
  			py = qy;
  		}
  		return null;
  	}

  	function getCurveLineIntersections(v, px, py, vx, vy) {
  		var isZero = Numerical.isZero;
  		if (isZero(vx) && isZero(vy)) {
  			var t = Curve.getTimeOf(v, new Point(px, py));
  			return t === null ? [] : [t];
  		}
  		var angle = Math.atan2(-vy, vx),
  			sin = Math.sin(angle),
  			cos = Math.cos(angle),
  			rv = [],
  			roots = [];
  		for (var i = 0; i < 8; i += 2) {
  			var x = v[i] - px,
  				y = v[i + 1] - py;
  			rv.push(
  				x * cos - y * sin,
  				x * sin + y * cos);
  		}
  		Curve.solveCubic(rv, 1, 0, roots, 0, 1);
  		return roots;
  	}

  	function addCurveLineIntersections(v1, v2, c1, c2, locations, include,
  			flip) {
  		var x1 = v2[0], y1 = v2[1],
  			x2 = v2[6], y2 = v2[7],
  			roots = getCurveLineIntersections(v1, x1, y1, x2 - x1, y2 - y1);
  		for (var i = 0, l = roots.length; i < l; i++) {
  			var t1 = roots[i],
  				p1 = Curve.getPoint(v1, t1),
  				t2 = Curve.getTimeOf(v2, p1);
  			if (t2 !== null) {
  				addLocation(locations, include,
  						flip ? c2 : c1, flip ? t2 : t1,
  						flip ? c1 : c2, flip ? t1 : t2);
  			}
  		}
  	}

  	function addLineIntersection(v1, v2, c1, c2, locations, include) {
  		var pt = Line.intersect(
  				v1[0], v1[1], v1[6], v1[7],
  				v2[0], v2[1], v2[6], v2[7]);
  		if (pt) {
  			addLocation(locations, include,
  					c1, Curve.getTimeOf(v1, pt),
  					c2, Curve.getTimeOf(v2, pt));
  		}
  	}

  	function getCurveIntersections(v1, v2, c1, c2, locations, include) {
  		var epsilon = 1e-12,
  			min = Math.min,
  			max = Math.max;

  		if (max(v1[0], v1[2], v1[4], v1[6]) + epsilon >
  			min(v2[0], v2[2], v2[4], v2[6]) &&
  			min(v1[0], v1[2], v1[4], v1[6]) - epsilon <
  			max(v2[0], v2[2], v2[4], v2[6]) &&
  			max(v1[1], v1[3], v1[5], v1[7]) + epsilon >
  			min(v2[1], v2[3], v2[5], v2[7]) &&
  			min(v1[1], v1[3], v1[5], v1[7]) - epsilon <
  			max(v2[1], v2[3], v2[5], v2[7])) {
  			var overlaps = getOverlaps(v1, v2);
  			if (overlaps) {
  				for (var i = 0; i < 2; i++) {
  					var overlap = overlaps[i];
  					addLocation(locations, include,
  							c1, overlap[0],
  							c2, overlap[1], true);
  				}
  			} else {
  				var straight1 = Curve.isStraight(v1),
  					straight2 = Curve.isStraight(v2),
  					straight = straight1 && straight2,
  					flip = straight1 && !straight2,
  					before = locations.length;
  				(straight
  					? addLineIntersection
  					: straight1 || straight2
  						? addCurveLineIntersections
  						: addCurveIntersections)(
  							flip ? v2 : v1, flip ? v1 : v2,
  							flip ? c2 : c1, flip ? c1 : c2,
  							locations, include, flip,
  							0, 0, 0, 1, 0, 1);
  				if (!straight || locations.length === before) {
  					for (var i = 0; i < 4; i++) {
  						var t1 = i >> 1,
  							t2 = i & 1,
  							i1 = t1 * 6,
  							i2 = t2 * 6,
  							p1 = new Point(v1[i1], v1[i1 + 1]),
  							p2 = new Point(v2[i2], v2[i2 + 1]);
  						if (p1.isClose(p2, epsilon)) {
  							addLocation(locations, include,
  									c1, t1,
  									c2, t2);
  						}
  					}
  				}
  			}
  		}
  		return locations;
  	}

  	function getLoopIntersection(v1, c1, locations, include) {
  		var info = Curve.classify(v1);
  		if (info.type === 'loop') {
  			var roots = info.roots;
  			addLocation(locations, include,
  					c1, roots[0],
  					c1, roots[1]);
  		}
  	  return locations;
  	}

  	function getIntersections(curves1, curves2, include, matrix1, matrix2,
  			_returnFirst) {
  		var self = !curves2;
  		if (self)
  			curves2 = curves1;
  		var length1 = curves1.length,
  			length2 = curves2.length,
  			values2 = [],
  			arrays = [],
  			locations,
  			current;
  		for (var i = 0; i < length2; i++)
  			values2[i] = curves2[i].getValues(matrix2);
  		for (var i = 0; i < length1; i++) {
  			var curve1 = curves1[i],
  				values1 = self ? values2[i] : curve1.getValues(matrix1),
  				path1 = curve1.getPath();
  			if (path1 !== current) {
  				current = path1;
  				locations = [];
  				arrays.push(locations);
  			}
  			if (self) {
  				getLoopIntersection(values1, curve1, locations, include);
  			}
  			for (var j = self ? i + 1 : 0; j < length2; j++) {
  				if (_returnFirst && locations.length)
  					return locations;
  				getCurveIntersections(values1, values2[j], curve1, curves2[j],
  						locations, include);
  			}
  		}
  		locations = [];
  		for (var i = 0, l = arrays.length; i < l; i++) {
  			Base.push(locations, arrays[i]);
  		}
  		return locations;
  	}

  	function getOverlaps(v1, v2) {

  		function getSquaredLineLength(v) {
  			var x = v[6] - v[0],
  				y = v[7] - v[1];
  			return x * x + y * y;
  		}

  		var abs = Math.abs,
  			getDistance = Line.getDistance,
  			timeEpsilon = 1e-8,
  			geomEpsilon = 1e-7,
  			straight1 = Curve.isStraight(v1),
  			straight2 = Curve.isStraight(v2),
  			straightBoth = straight1 && straight2,
  			flip = getSquaredLineLength(v1) < getSquaredLineLength(v2),
  			l1 = flip ? v2 : v1,
  			l2 = flip ? v1 : v2,
  			px = l1[0], py = l1[1],
  			vx = l1[6] - px, vy = l1[7] - py;
  		if (getDistance(px, py, vx, vy, l2[0], l2[1], true) < geomEpsilon &&
  			getDistance(px, py, vx, vy, l2[6], l2[7], true) < geomEpsilon) {
  			if (!straightBoth &&
  				getDistance(px, py, vx, vy, l1[2], l1[3], true) < geomEpsilon &&
  				getDistance(px, py, vx, vy, l1[4], l1[5], true) < geomEpsilon &&
  				getDistance(px, py, vx, vy, l2[2], l2[3], true) < geomEpsilon &&
  				getDistance(px, py, vx, vy, l2[4], l2[5], true) < geomEpsilon) {
  				straight1 = straight2 = straightBoth = true;
  			}
  		} else if (straightBoth) {
  			return null;
  		}
  		if (straight1 ^ straight2) {
  			return null;
  		}

  		var v = [v1, v2],
  			pairs = [];
  		for (var i = 0; i < 4 && pairs.length < 2; i++) {
  			var i1 = i & 1,
  				i2 = i1 ^ 1,
  				t1 = i >> 1,
  				t2 = Curve.getTimeOf(v[i1], new Point(
  					v[i2][t1 ? 6 : 0],
  					v[i2][t1 ? 7 : 1]));
  			if (t2 != null) {
  				var pair = i1 ? [t1, t2] : [t2, t1];
  				if (!pairs.length ||
  					abs(pair[0] - pairs[0][0]) > timeEpsilon &&
  					abs(pair[1] - pairs[0][1]) > timeEpsilon) {
  					pairs.push(pair);
  				}
  			}
  			if (i > 2 && !pairs.length)
  				break;
  		}
  		if (pairs.length !== 2) {
  			pairs = null;
  		} else if (!straightBoth) {
  			var o1 = Curve.getPart(v1, pairs[0][0], pairs[1][0]),
  				o2 = Curve.getPart(v2, pairs[0][1], pairs[1][1]);
  			if (abs(o2[2] - o1[2]) > geomEpsilon ||
  				abs(o2[3] - o1[3]) > geomEpsilon ||
  				abs(o2[4] - o1[4]) > geomEpsilon ||
  				abs(o2[5] - o1[5]) > geomEpsilon)
  				pairs = null;
  		}
  		return pairs;
  	}

  	function getTimesWithTangent(v, tangent) {
  		var x0 = v[0], y0 = v[1],
  			x1 = v[2], y1 = v[3],
  			x2 = v[4], y2 = v[5],
  			x3 = v[6], y3 = v[7],
  			normalized = tangent.normalize(),
  			tx = normalized.x,
  			ty = normalized.y,
  			ax = 3 * x3 - 9 * x2 + 9 * x1 - 3 * x0,
  			ay = 3 * y3 - 9 * y2 + 9 * y1 - 3 * y0,
  			bx = 6 * x2 - 12 * x1 + 6 * x0,
  			by = 6 * y2 - 12 * y1 + 6 * y0,
  			cx = 3 * x1 - 3 * x0,
  			cy = 3 * y1 - 3 * y0,
  			den = 2 * ax * ty - 2 * ay * tx,
  			times = [];
  		if (Math.abs(den) < Numerical.CURVETIME_EPSILON) {
  			var num = ax * cy - ay * cx,
  				den = ax * by - ay * bx;
  			if (den != 0) {
  				var t = -num / den;
  				if (t >= 0 && t <= 1) times.push(t);
  			}
  		} else {
  			var delta = (bx * bx - 4 * ax * cx) * ty * ty +
  				(-2 * bx * by + 4 * ay * cx + 4 * ax * cy) * tx * ty +
  				(by * by - 4 * ay * cy) * tx * tx,
  				k = bx * ty - by * tx;
  			if (delta >= 0 && den != 0) {
  				var d = Math.sqrt(delta),
  					t0 = -(k + d) / den,
  					t1 = (-k + d) / den;
  				if (t0 >= 0 && t0 <= 1) times.push(t0);
  				if (t1 >= 0 && t1 <= 1) times.push(t1);
  			}
  		}
  		return times;
  	}

  	return {
  		getIntersections: function(curve) {
  			var v1 = this.getValues(),
  				v2 = curve && curve !== this && curve.getValues();
  			return v2 ? getCurveIntersections(v1, v2, this, curve, [])
  					  : getLoopIntersection(v1, this, []);
  		},

  		statics: {
  			getOverlaps: getOverlaps,
  			getIntersections: getIntersections,
  			getCurveLineIntersections: getCurveLineIntersections,
  			getTimesWithTangent: getTimesWithTangent
  		}
  	};
  });

  var CurveLocation = Base.extend({
  	_class: 'CurveLocation',

  	initialize: function CurveLocation(curve, time, point, _overlap, _distance) {
  		if (time >= 0.99999999) {
  			var next = curve.getNext();
  			if (next) {
  				time = 0;
  				curve = next;
  			}
  		}
  		this._setCurve(curve);
  		this._time = time;
  		this._point = point || curve.getPointAtTime(time);
  		this._overlap = _overlap;
  		this._distance = _distance;
  		this._intersection = this._next = this._previous = null;
  	},

  	_setCurve: function(curve) {
  		var path = curve._path;
  		this._path = path;
  		this._version = path ? path._version : 0;
  		this._curve = curve;
  		this._segment = null;
  		this._segment1 = curve._segment1;
  		this._segment2 = curve._segment2;
  	},

  	_setSegment: function(segment) {
  		this._setCurve(segment.getCurve());
  		this._segment = segment;
  		this._time = segment === this._segment1 ? 0 : 1;
  		this._point = segment._point.clone();
  	},

  	getSegment: function() {
  		var segment = this._segment;
  		if (!segment) {
  			var curve = this.getCurve(),
  				time = this.getTime();
  			if (time === 0) {
  				segment = curve._segment1;
  			} else if (time === 1) {
  				segment = curve._segment2;
  			} else if (time != null) {
  				segment = curve.getPartLength(0, time)
  					< curve.getPartLength(time, 1)
  						? curve._segment1
  						: curve._segment2;
  			}
  			this._segment = segment;
  		}
  		return segment;
  	},

  	getCurve: function() {
  		var path = this._path,
  			that = this;
  		if (path && path._version !== this._version) {
  			this._time = this._offset = this._curveOffset = this._curve = null;
  		}

  		function trySegment(segment) {
  			var curve = segment && segment.getCurve();
  			if (curve && (that._time = curve.getTimeOf(that._point)) != null) {
  				that._setCurve(curve);
  				return curve;
  			}
  		}

  		return this._curve
  			|| trySegment(this._segment)
  			|| trySegment(this._segment1)
  			|| trySegment(this._segment2.getPrevious());
  	},

  	getPath: function() {
  		var curve = this.getCurve();
  		return curve && curve._path;
  	},

  	getIndex: function() {
  		var curve = this.getCurve();
  		return curve && curve.getIndex();
  	},

  	getTime: function() {
  		var curve = this.getCurve(),
  			time = this._time;
  		return curve && time == null
  			? this._time = curve.getTimeOf(this._point)
  			: time;
  	},

  	getParameter: '#getTime',

  	getPoint: function() {
  		return this._point;
  	},

  	getOffset: function() {
  		var offset = this._offset;
  		if (offset == null) {
  			offset = 0;
  			var path = this.getPath(),
  				index = this.getIndex();
  			if (path && index != null) {
  				var curves = path.getCurves();
  				for (var i = 0; i < index; i++)
  					offset += curves[i].getLength();
  			}
  			this._offset = offset += this.getCurveOffset();
  		}
  		return offset;
  	},

  	getCurveOffset: function() {
  		var offset = this._curveOffset;
  		if (offset == null) {
  			var curve = this.getCurve(),
  				time = this.getTime();
  			this._curveOffset = offset = time != null && curve
  					&& curve.getPartLength(0, time);
  		}
  		return offset;
  	},

  	getIntersection: function() {
  		return this._intersection;
  	},

  	getDistance: function() {
  		return this._distance;
  	},

  	divide: function() {
  		var curve = this.getCurve(),
  			res = curve && curve.divideAtTime(this.getTime());
  		if (res) {
  			this._setSegment(res._segment1);
  		}
  		return res;
  	},

  	split: function() {
  		var curve = this.getCurve(),
  			path = curve._path,
  			res = curve && curve.splitAtTime(this.getTime());
  		if (res) {
  			this._setSegment(path.getLastSegment());
  		}
  		return  res;
  	},

  	equals: function(loc, _ignoreOther) {
  		var res = this === loc;
  		if (!res && loc instanceof CurveLocation) {
  			var c1 = this.getCurve(),
  				c2 = loc.getCurve(),
  				p1 = c1._path,
  				p2 = c2._path;
  			if (p1 === p2) {
  				var abs = Math.abs,
  					epsilon = 1e-7,
  					diff = abs(this.getOffset() - loc.getOffset()),
  					i1 = !_ignoreOther && this._intersection,
  					i2 = !_ignoreOther && loc._intersection;
  				res = (diff < epsilon
  						|| p1 && abs(p1.getLength() - diff) < epsilon)
  					&& (!i1 && !i2 || i1 && i2 && i1.equals(i2, true));
  			}
  		}
  		return res;
  	},

  	toString: function() {
  		var parts = [],
  			point = this.getPoint(),
  			f = Formatter.instance;
  		if (point)
  			parts.push('point: ' + point);
  		var index = this.getIndex();
  		if (index != null)
  			parts.push('index: ' + index);
  		var time = this.getTime();
  		if (time != null)
  			parts.push('time: ' + f.number(time));
  		if (this._distance != null)
  			parts.push('distance: ' + f.number(this._distance));
  		return '{ ' + parts.join(', ') + ' }';
  	},

  	isTouching: function() {
  		var inter = this._intersection;
  		if (inter && this.getTangent().isCollinear(inter.getTangent())) {
  			var curve1 = this.getCurve(),
  				curve2 = inter.getCurve();
  			return !(curve1.isStraight() && curve2.isStraight()
  					&& curve1.getLine().intersect(curve2.getLine()));
  		}
  		return false;
  	},

  	isCrossing: function() {
  		var inter = this._intersection;
  		if (!inter)
  			return false;
  		var t1 = this.getTime(),
  			t2 = inter.getTime(),
  			tMin = 1e-8,
  			tMax = 1 - tMin,
  			t1Inside = t1 >= tMin && t1 <= tMax,
  			t2Inside = t2 >= tMin && t2 <= tMax;
  		if (t1Inside && t2Inside)
  			return !this.isTouching();
  		var c2 = this.getCurve(),
  			c1 = t1 < tMin ? c2.getPrevious() : c2,
  			c4 = inter.getCurve(),
  			c3 = t2 < tMin ? c4.getPrevious() : c4;
  		if (t1 > tMax)
  			c2 = c2.getNext();
  		if (t2 > tMax)
  			c4 = c4.getNext();
  		if (!c1 || !c2 || !c3 || !c4)
  			return false;

  		var offsets = [];

  		function addOffsets(curve, end) {
  			var v = curve.getValues(),
  				roots = Curve.classify(v).roots || Curve.getPeaks(v),
  				count = roots.length,
  				t = end && count > 1 ? roots[count - 1]
  						: count > 0 ? roots[0]
  						: 0.5;
  			offsets.push(Curve.getLength(v, end ? t : 0, end ? 1 : t) / 2);
  		}

  		function isInRange(angle, min, max) {
  			return min < max
  					? angle > min && angle < max
  					: angle > min || angle < max;
  		}

  		if (!t1Inside) {
  			addOffsets(c1, true);
  			addOffsets(c2, false);
  		}
  		if (!t2Inside) {
  			addOffsets(c3, true);
  			addOffsets(c4, false);
  		}
  		var pt = this.getPoint(),
  			offset = Math.min.apply(Math, offsets),
  			v2 = t1Inside ? c2.getTangentAtTime(t1)
  					: c2.getPointAt(offset).subtract(pt),
  			v1 = t1Inside ? v2.negate()
  					: c1.getPointAt(-offset).subtract(pt),
  			v4 = t2Inside ? c4.getTangentAtTime(t2)
  					: c4.getPointAt(offset).subtract(pt),
  			v3 = t2Inside ? v4.negate()
  					: c3.getPointAt(-offset).subtract(pt),
  			a1 = v1.getAngle(),
  			a2 = v2.getAngle(),
  			a3 = v3.getAngle(),
  			a4 = v4.getAngle();
  		return !!(t1Inside
  				? (isInRange(a1, a3, a4) ^ isInRange(a2, a3, a4)) &&
  				  (isInRange(a1, a4, a3) ^ isInRange(a2, a4, a3))
  				: (isInRange(a3, a1, a2) ^ isInRange(a4, a1, a2)) &&
  				  (isInRange(a3, a2, a1) ^ isInRange(a4, a2, a1)));
  	},

  	hasOverlap: function() {
  		return !!this._overlap;
  	}
  }, Base.each(Curve._evaluateMethods, function(name) {
  	var get = name + 'At';
  	this[name] = function() {
  		var curve = this.getCurve(),
  			time = this.getTime();
  		return time != null && curve && curve[get](time, true);
  	};
  }, {
  	preserve: true
  }),
  new function() {

  	function insert(locations, loc, merge) {
  		var length = locations.length,
  			l = 0,
  			r = length - 1;

  		function search(index, dir) {
  			for (var i = index + dir; i >= -1 && i <= length; i += dir) {
  				var loc2 = locations[((i % length) + length) % length];
  				if (!loc.getPoint().isClose(loc2.getPoint(),
  						1e-7))
  					break;
  				if (loc.equals(loc2))
  					return loc2;
  			}
  			return null;
  		}

  		while (l <= r) {
  			var m = (l + r) >>> 1,
  				loc2 = locations[m],
  				found;
  			if (merge && (found = loc.equals(loc2) ? loc2
  					: (search(m, -1) || search(m, 1)))) {
  				if (loc._overlap) {
  					found._overlap = found._intersection._overlap = true;
  				}
  				return found;
  			}
  		var path1 = loc.getPath(),
  			path2 = loc2.getPath(),
  			diff = path1 !== path2
  				? path1._id - path2._id
  				: (loc.getIndex() + loc.getTime())
  				- (loc2.getIndex() + loc2.getTime());
  			if (diff < 0) {
  				r = m - 1;
  			} else {
  				l = m + 1;
  			}
  		}
  		locations.splice(l, 0, loc);
  		return loc;
  	}

  	return { statics: {
  		insert: insert,

  		expand: function(locations) {
  			var expanded = locations.slice();
  			for (var i = locations.length - 1; i >= 0; i--) {
  				insert(expanded, locations[i]._intersection, false);
  			}
  			return expanded;
  		}
  	}};
  });

  var PathItem = Item.extend({
  	_class: 'PathItem',
  	_selectBounds: false,
  	_canScaleStroke: true,
  	beans: true,

  	initialize: function PathItem() {
  	},

  	statics: {
  		create: function(arg) {
  			var data,
  				segments,
  				compound;
  			if (Base.isPlainObject(arg)) {
  				segments = arg.segments;
  				data = arg.pathData;
  			} else if (Array.isArray(arg)) {
  				segments = arg;
  			} else if (typeof arg === 'string') {
  				data = arg;
  			}
  			if (segments) {
  				var first = segments[0];
  				compound = first && Array.isArray(first[0]);
  			} else if (data) {
  				compound = (data.match(/m/gi) || []).length > 1
  						|| /z\s*\S+/i.test(data);
  			}
  			var ctor = compound ? CompoundPath : Path;
  			return new ctor(arg);
  		}
  	},

  	_asPathItem: function() {
  		return this;
  	},

  	isClockwise: function() {
  		return this.getArea() >= 0;
  	},

  	setClockwise: function(clockwise) {
  		if (this.isClockwise() != (clockwise = !!clockwise))
  			this.reverse();
  	},

  	setPathData: function(data) {

  		var parts = data && data.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/ig),
  			coords,
  			relative = false,
  			previous,
  			control,
  			current = new Point(),
  			start = new Point();

  		function getCoord(index, coord) {
  			var val = +coords[index];
  			if (relative)
  				val += current[coord];
  			return val;
  		}

  		function getPoint(index) {
  			return new Point(
  				getCoord(index, 'x'),
  				getCoord(index + 1, 'y')
  			);
  		}

  		this.clear();

  		for (var i = 0, l = parts && parts.length; i < l; i++) {
  			var part = parts[i],
  				command = part[0],
  				lower = command.toLowerCase();
  			coords = part.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
  			var length = coords && coords.length;
  			relative = command === lower;
  			if (previous === 'z' && !/[mz]/.test(lower))
  				this.moveTo(current);
  			switch (lower) {
  			case 'm':
  			case 'l':
  				var move = lower === 'm';
  				for (var j = 0; j < length; j += 2) {
  					this[move ? 'moveTo' : 'lineTo'](current = getPoint(j));
  					if (move) {
  						start = current;
  						move = false;
  					}
  				}
  				control = current;
  				break;
  			case 'h':
  			case 'v':
  				var coord = lower === 'h' ? 'x' : 'y';
  				current = current.clone();
  				for (var j = 0; j < length; j++) {
  					current[coord] = getCoord(j, coord);
  					this.lineTo(current);
  				}
  				control = current;
  				break;
  			case 'c':
  				for (var j = 0; j < length; j += 6) {
  					this.cubicCurveTo(
  							getPoint(j),
  							control = getPoint(j + 2),
  							current = getPoint(j + 4));
  				}
  				break;
  			case 's':
  				for (var j = 0; j < length; j += 4) {
  					this.cubicCurveTo(
  							/[cs]/.test(previous)
  									? current.multiply(2).subtract(control)
  									: current,
  							control = getPoint(j),
  							current = getPoint(j + 2));
  					previous = lower;
  				}
  				break;
  			case 'q':
  				for (var j = 0; j < length; j += 4) {
  					this.quadraticCurveTo(
  							control = getPoint(j),
  							current = getPoint(j + 2));
  				}
  				break;
  			case 't':
  				for (var j = 0; j < length; j += 2) {
  					this.quadraticCurveTo(
  							control = (/[qt]/.test(previous)
  									? current.multiply(2).subtract(control)
  									: current),
  							current = getPoint(j));
  					previous = lower;
  				}
  				break;
  			case 'a':
  				for (var j = 0; j < length; j += 7) {
  					this.arcTo(current = getPoint(j + 5),
  							new Size(+coords[j], +coords[j + 1]),
  							+coords[j + 2], +coords[j + 4], +coords[j + 3]);
  				}
  				break;
  			case 'z':
  				this.closePath(1e-12);
  				current = start;
  				break;
  			}
  			previous = lower;
  		}
  	},

  	_canComposite: function() {
  		return !(this.hasFill() && this.hasStroke());
  	},

  	_contains: function(point) {
  		var winding = point.isInside(
  				this.getBounds({ internal: true, handle: true }))
  					? this._getWinding(point)
  					: {};
  		return winding.onPath || !!(this.getFillRule() === 'evenodd'
  				? winding.windingL & 1 || winding.windingR & 1
  				: winding.winding);
  	},

  	getIntersections: function(path, include, _matrix, _returnFirst) {
  		var self = this === path || !path,
  			matrix1 = this._matrix._orNullIfIdentity(),
  			matrix2 = self ? matrix1
  				: (_matrix || path._matrix)._orNullIfIdentity();
  		return self || this.getBounds(matrix1).intersects(
  				path.getBounds(matrix2), 1e-12)
  				? Curve.getIntersections(
  						this.getCurves(), !self && path.getCurves(), include,
  						matrix1, matrix2, _returnFirst)
  				: [];
  	},

  	getCrossings: function(path) {
  		return this.getIntersections(path, function(inter) {
  			return inter.hasOverlap() || inter.isCrossing();
  		});
  	},

  	getNearestLocation: function() {
  		var point = Point.read(arguments),
  			curves = this.getCurves(),
  			minDist = Infinity,
  			minLoc = null;
  		for (var i = 0, l = curves.length; i < l; i++) {
  			var loc = curves[i].getNearestLocation(point);
  			if (loc._distance < minDist) {
  				minDist = loc._distance;
  				minLoc = loc;
  			}
  		}
  		return minLoc;
  	},

  	getNearestPoint: function() {
  		var loc = this.getNearestLocation.apply(this, arguments);
  		return loc ? loc.getPoint() : loc;
  	},

  	interpolate: function(from, to, factor) {
  		var isPath = !this._children,
  			name = isPath ? '_segments' : '_children',
  			itemsFrom = from[name],
  			itemsTo = to[name],
  			items = this[name];
  		if (!itemsFrom || !itemsTo || itemsFrom.length !== itemsTo.length) {
  			throw new Error('Invalid operands in interpolate() call: ' +
  					from + ', ' + to);
  		}
  		var current = items.length,
  			length = itemsTo.length;
  		if (current < length) {
  			var ctor = isPath ? Segment : Path;
  			for (var i = current; i < length; i++) {
  				this.add(new ctor());
  			}
  		} else if (current > length) {
  			this[isPath ? 'removeSegments' : 'removeChildren'](length, current);
  		}
  		for (var i = 0; i < length; i++) {
  			items[i].interpolate(itemsFrom[i], itemsTo[i], factor);
  		}
  		if (isPath) {
  			this.setClosed(from._closed);
  			this._changed(9);
  		}
  	},

  	compare: function(path) {
  		var ok = false;
  		if (path) {
  			var paths1 = this._children || [this],
  				paths2 = path._children ? path._children.slice() : [path],
  				length1 = paths1.length,
  				length2 = paths2.length,
  				matched = [],
  				count = 0;
  			ok = true;
  			for (var i1 = length1 - 1; i1 >= 0 && ok; i1--) {
  				var path1 = paths1[i1];
  				ok = false;
  				for (var i2 = length2 - 1; i2 >= 0 && !ok; i2--) {
  					if (path1.compare(paths2[i2])) {
  						if (!matched[i2]) {
  							matched[i2] = true;
  							count++;
  						}
  						ok = true;
  					}
  				}
  			}
  			ok = ok && count === length2;
  		}
  		return ok;
  	},

  });

  var Path = PathItem.extend({
  	_class: 'Path',
  	_serializeFields: {
  		segments: [],
  		closed: false
  	},

  	initialize: function Path(arg) {
  		this._closed = false;
  		this._segments = [];
  		this._version = 0;
  		var segments = Array.isArray(arg)
  			? typeof arg[0] === 'object'
  				? arg
  				: arguments
  			: arg && (arg.size === undefined && (arg.x !== undefined
  					|| arg.point !== undefined))
  				? arguments
  				: null;
  		if (segments && segments.length > 0) {
  			this.setSegments(segments);
  		} else {
  			this._curves = undefined;
  			this._segmentSelection = 0;
  			if (!segments && typeof arg === 'string') {
  				this.setPathData(arg);
  				arg = null;
  			}
  		}
  		this._initialize(!segments && arg);
  	},

  	_equals: function(item) {
  		return this._closed === item._closed
  				&& Base.equals(this._segments, item._segments);
  	},

  	copyContent: function(source) {
  		this.setSegments(source._segments);
  		this._closed = source._closed;
  	},

  	_changed: function _changed(flags) {
  		_changed.base.call(this, flags);
  		if (flags & 8) {
  			this._length = this._area = undefined;
  			if (flags & 32) {
  				this._version++;
  			} else if (this._curves) {
  			   for (var i = 0, l = this._curves.length; i < l; i++)
  					this._curves[i]._changed();
  			}
  		} else if (flags & 64) {
  			this._bounds = undefined;
  		}
  	},

  	getStyle: function() {
  		var parent = this._parent;
  		return (parent instanceof CompoundPath ? parent : this)._style;
  	},

  	getSegments: function() {
  		return this._segments;
  	},

  	setSegments: function(segments) {
  		var fullySelected = this.isFullySelected(),
  			length = segments && segments.length;
  		this._segments.length = 0;
  		this._segmentSelection = 0;
  		this._curves = undefined;
  		if (length) {
  			var last = segments[length - 1];
  			if (typeof last === 'boolean') {
  				this.setClosed(last);
  				length--;
  			}
  			this._add(Segment.readList(segments, 0, {}, length));
  		}
  		if (fullySelected)
  			this.setFullySelected(true);
  	},

  	getFirstSegment: function() {
  		return this._segments[0];
  	},

  	getLastSegment: function() {
  		return this._segments[this._segments.length - 1];
  	},

  	getCurves: function() {
  		var curves = this._curves,
  			segments = this._segments;
  		if (!curves) {
  			var length = this._countCurves();
  			curves = this._curves = new Array(length);
  			for (var i = 0; i < length; i++)
  				curves[i] = new Curve(this, segments[i],
  					segments[i + 1] || segments[0]);
  		}
  		return curves;
  	},

  	getFirstCurve: function() {
  		return this.getCurves()[0];
  	},

  	getLastCurve: function() {
  		var curves = this.getCurves();
  		return curves[curves.length - 1];
  	},

  	isClosed: function() {
  		return this._closed;
  	},

  	setClosed: function(closed) {
  		if (this._closed != (closed = !!closed)) {
  			this._closed = closed;
  			if (this._curves) {
  				var length = this._curves.length = this._countCurves();
  				if (closed)
  					this._curves[length - 1] = new Curve(this,
  						this._segments[length - 1], this._segments[0]);
  			}
  			this._changed(41);
  		}
  	}
  }, {
  	beans: true,

  	getPathData: function(_matrix, _precision) {
  		var segments = this._segments,
  			length = segments.length,
  			f = new Formatter(_precision),
  			coords = new Array(6),
  			first = true,
  			curX, curY,
  			prevX, prevY,
  			inX, inY,
  			outX, outY,
  			parts = [];

  		function addSegment(segment, skipLine) {
  			segment._transformCoordinates(_matrix, coords);
  			curX = coords[0];
  			curY = coords[1];
  			if (first) {
  				parts.push('M' + f.pair(curX, curY));
  				first = false;
  			} else {
  				inX = coords[2];
  				inY = coords[3];
  				if (inX === curX && inY === curY
  						&& outX === prevX && outY === prevY) {
  					if (!skipLine) {
  						var dx = curX - prevX,
  							dy = curY - prevY;
  						parts.push(
  							  dx === 0 ? 'v' + f.number(dy)
  							: dy === 0 ? 'h' + f.number(dx)
  							: 'l' + f.pair(dx, dy));
  					}
  				} else {
  					parts.push('c' + f.pair(outX - prevX, outY - prevY)
  							 + ' ' + f.pair( inX - prevX,  inY - prevY)
  							 + ' ' + f.pair(curX - prevX, curY - prevY));
  				}
  			}
  			prevX = curX;
  			prevY = curY;
  			outX = coords[4];
  			outY = coords[5];
  		}

  		if (!length)
  			return '';

  		for (var i = 0; i < length; i++)
  			addSegment(segments[i]);
  		if (this._closed && length > 0) {
  			addSegment(segments[0], true);
  			parts.push('z');
  		}
  		return parts.join('');
  	},

  	isEmpty: function() {
  		return !this._segments.length;
  	},

  	_transformContent: function(matrix) {
  		var segments = this._segments,
  			coords = new Array(6);
  		for (var i = 0, l = segments.length; i < l; i++)
  			segments[i]._transformCoordinates(matrix, coords, true);
  		return true;
  	},

  	_add: function(segs, index) {
  		var segments = this._segments,
  			curves = this._curves,
  			amount = segs.length,
  			append = index == null,
  			index = append ? segments.length : index;
  		for (var i = 0; i < amount; i++) {
  			var segment = segs[i];
  			if (segment._path)
  				segment = segs[i] = segment.clone();
  			segment._path = this;
  			segment._index = index + i;
  			if (segment._selection)
  				this._updateSelection(segment, 0, segment._selection);
  		}
  		if (append) {
  			Base.push(segments, segs);
  		} else {
  			segments.splice.apply(segments, [index, 0].concat(segs));
  			for (var i = index + amount, l = segments.length; i < l; i++)
  				segments[i]._index = i;
  		}
  		if (curves) {
  			var total = this._countCurves(),
  				start = index > 0 && index + amount - 1 === total ? index - 1
  					: index,
  				insert = start,
  				end = Math.min(start + amount, total);
  			if (segs._curves) {
  				curves.splice.apply(curves, [start, 0].concat(segs._curves));
  				insert += segs._curves.length;
  			}
  			for (var i = insert; i < end; i++)
  				curves.splice(i, 0, new Curve(this, null, null));
  			this._adjustCurves(start, end);
  		}
  		this._changed(41);
  		return segs;
  	},

  	_adjustCurves: function(start, end) {
  		var segments = this._segments,
  			curves = this._curves,
  			curve;
  		for (var i = start; i < end; i++) {
  			curve = curves[i];
  			curve._path = this;
  			curve._segment1 = segments[i];
  			curve._segment2 = segments[i + 1] || segments[0];
  			curve._changed();
  		}
  		if (curve = curves[this._closed && !start ? segments.length - 1
  				: start - 1]) {
  			curve._segment2 = segments[start] || segments[0];
  			curve._changed();
  		}
  		if (curve = curves[end]) {
  			curve._segment1 = segments[end];
  			curve._changed();
  		}
  	},

  	_countCurves: function() {
  		var length = this._segments.length;
  		return !this._closed && length > 0 ? length - 1 : length;
  	},

  	add: function(segment1 ) {
  		return arguments.length > 1 && typeof segment1 !== 'number'
  			? this._add(Segment.readList(arguments))
  			: this._add([ Segment.read(arguments) ])[0];
  	},

  	insert: function(index, segment1 ) {
  		return arguments.length > 2 && typeof segment1 !== 'number'
  			? this._add(Segment.readList(arguments, 1), index)
  			: this._add([ Segment.read(arguments, 1) ], index)[0];
  	},

  	addSegment: function() {
  		return this._add([ Segment.read(arguments) ])[0];
  	},

  	insertSegment: function(index ) {
  		return this._add([ Segment.read(arguments, 1) ], index)[0];
  	},

  	addSegments: function(segments) {
  		return this._add(Segment.readList(segments));
  	},

  	insertSegments: function(index, segments) {
  		return this._add(Segment.readList(segments), index);
  	},

  	removeSegment: function(index) {
  		return this.removeSegments(index, index + 1)[0] || null;
  	},

  	removeSegments: function(start, end, _includeCurves) {
  		start = start || 0;
  		end = Base.pick(end, this._segments.length);
  		var segments = this._segments,
  			curves = this._curves,
  			count = segments.length,
  			removed = segments.splice(start, end - start),
  			amount = removed.length;
  		if (!amount)
  			return removed;
  		for (var i = 0; i < amount; i++) {
  			var segment = removed[i];
  			if (segment._selection)
  				this._updateSelection(segment, segment._selection, 0);
  			segment._index = segment._path = null;
  		}
  		for (var i = start, l = segments.length; i < l; i++)
  			segments[i]._index = i;
  		if (curves) {
  			var index = start > 0 && end === count + (this._closed ? 1 : 0)
  					? start - 1
  					: start,
  				curves = curves.splice(index, amount);
  			for (var i = curves.length - 1; i >= 0; i--)
  				curves[i]._path = null;
  			if (_includeCurves)
  				removed._curves = curves.slice(1);
  			this._adjustCurves(index, index);
  		}
  		this._changed(41);
  		return removed;
  	},

  	clear: '#removeSegments',

  	hasHandles: function() {
  		var segments = this._segments;
  		for (var i = 0, l = segments.length; i < l; i++) {
  			if (segments[i].hasHandles())
  				return true;
  		}
  		return false;
  	},

  	clearHandles: function() {
  		var segments = this._segments;
  		for (var i = 0, l = segments.length; i < l; i++)
  			segments[i].clearHandles();
  	},

  	getLength: function() {
  		if (this._length == null) {
  			var curves = this.getCurves(),
  				length = 0;
  			for (var i = 0, l = curves.length; i < l; i++)
  				length += curves[i].getLength();
  			this._length = length;
  		}
  		return this._length;
  	},

  	getArea: function() {
  		var area = this._area;
  		if (area == null) {
  			var segments = this._segments,
  				closed = this._closed;
  			area = 0;
  			for (var i = 0, l = segments.length; i < l; i++) {
  				var last = i + 1 === l;
  				area += Curve.getArea(Curve.getValues(
  						segments[i], segments[last ? 0 : i + 1],
  						null, last && !closed));
  			}
  			this._area = area;
  		}
  		return area;
  	},

  	isFullySelected: function() {
  		var length = this._segments.length;
  		return this.isSelected() && length > 0 && this._segmentSelection
  				=== length * 7;
  	},

  	setFullySelected: function(selected) {
  		if (selected)
  			this._selectSegments(true);
  		this.setSelected(selected);
  	},

  	setSelection: function setSelection(selection) {
  		if (!(selection & 1))
  			this._selectSegments(false);
  		setSelection.base.call(this, selection);
  	},

  	_selectSegments: function(selected) {
  		var segments = this._segments,
  			length = segments.length,
  			selection = selected ? 7 : 0;
  		this._segmentSelection = selection * length;
  		for (var i = 0; i < length; i++)
  			segments[i]._selection = selection;
  	},

  	_updateSelection: function(segment, oldSelection, newSelection) {
  		segment._selection = newSelection;
  		var selection = this._segmentSelection += newSelection - oldSelection;
  		if (selection > 0)
  			this.setSelected(true);
  	},

  	divideAt: function(location) {
  		var loc = this.getLocationAt(location),
  			curve;
  		return loc && (curve = loc.getCurve().divideAt(loc.getCurveOffset()))
  				? curve._segment1
  				: null;
  	},

  	splitAt: function(location) {
  		var loc = this.getLocationAt(location),
  			index = loc && loc.index,
  			time = loc && loc.time,
  			tMin = 1e-8,
  			tMax = 1 - tMin;
  		if (time > tMax) {
  			index++;
  			time = 0;
  		}
  		var curves = this.getCurves();
  		if (index >= 0 && index < curves.length) {
  			if (time >= tMin) {
  				curves[index++].divideAtTime(time);
  			}
  			var segs = this.removeSegments(index, this._segments.length, true),
  				path;
  			if (this._closed) {
  				this.setClosed(false);
  				path = this;
  			} else {
  				path = new Path(Item.NO_INSERT);
  				path.insertAbove(this);
  				path.copyAttributes(this);
  			}
  			path._add(segs, 0);
  			this.addSegment(segs[0]);
  			return path;
  		}
  		return null;
  	},

  	split: function(index, time) {
  		var curve,
  			location = time === undefined ? index
  				: (curve = this.getCurves()[index])
  					&& curve.getLocationAtTime(time);
  		return location != null ? this.splitAt(location) : null;
  	},

  	join: function(path, tolerance) {
  		var epsilon = tolerance || 0;
  		if (path && path !== this) {
  			var segments = path._segments,
  				last1 = this.getLastSegment(),
  				last2 = path.getLastSegment();
  			if (!last2)
  				return this;
  			if (last1 && last1._point.isClose(last2._point, epsilon))
  				path.reverse();
  			var first2 = path.getFirstSegment();
  			if (last1 && last1._point.isClose(first2._point, epsilon)) {
  				last1.setHandleOut(first2._handleOut);
  				this._add(segments.slice(1));
  			} else {
  				var first1 = this.getFirstSegment();
  				if (first1 && first1._point.isClose(first2._point, epsilon))
  					path.reverse();
  				last2 = path.getLastSegment();
  				if (first1 && first1._point.isClose(last2._point, epsilon)) {
  					first1.setHandleIn(last2._handleIn);
  					this._add(segments.slice(0, segments.length - 1), 0);
  				} else {
  					this._add(segments.slice());
  				}
  			}
  			if (path._closed)
  				this._add([segments[0]]);
  			path.remove();
  		}
  		var first = this.getFirstSegment(),
  			last = this.getLastSegment();
  		if (first !== last && first._point.isClose(last._point, epsilon)) {
  			first.setHandleIn(last._handleIn);
  			last.remove();
  			this.setClosed(true);
  		}
  		return this;
  	},

  	reduce: function(options) {
  		var curves = this.getCurves(),
  			simplify = options && options.simplify,
  			tolerance = simplify ? 1e-7 : 0;
  		for (var i = curves.length - 1; i >= 0; i--) {
  			var curve = curves[i];
  			if (!curve.hasHandles() && (!curve.hasLength(tolerance)
  					|| simplify && curve.isCollinear(curve.getNext())))
  				curve.remove();
  		}
  		return this;
  	},

  	reverse: function() {
  		this._segments.reverse();
  		for (var i = 0, l = this._segments.length; i < l; i++) {
  			var segment = this._segments[i];
  			var handleIn = segment._handleIn;
  			segment._handleIn = segment._handleOut;
  			segment._handleOut = handleIn;
  			segment._index = i;
  		}
  		this._curves = null;
  		this._changed(9);
  	},

  	flatten: function(flatness) {
  		var flattener = new PathFlattener(this, flatness || 0.25, 256, true),
  			parts = flattener.parts,
  			length = parts.length,
  			segments = [];
  		for (var i = 0; i < length; i++) {
  			segments.push(new Segment(parts[i].curve.slice(0, 2)));
  		}
  		if (!this._closed && length > 0) {
  			segments.push(new Segment(parts[length - 1].curve.slice(6)));
  		}
  		this.setSegments(segments);
  	},

  	simplify: function(tolerance) {
  		var segments = new PathFitter(this).fit(tolerance || 2.5);
  		if (segments)
  			this.setSegments(segments);
  		return !!segments;
  	},

  	smooth: function(options) {
  		var that = this,
  			opts = options || {},
  			type = opts.type || 'asymmetric',
  			segments = this._segments,
  			length = segments.length,
  			closed = this._closed;

  		function getIndex(value, _default) {
  			var index = value && value.index;
  			if (index != null) {
  				var path = value.path;
  				if (path && path !== that)
  					throw new Error(value._class + ' ' + index + ' of ' + path
  							+ ' is not part of ' + that);
  				if (_default && value instanceof Curve)
  					index++;
  			} else {
  				index = typeof value === 'number' ? value : _default;
  			}
  			return Math.min(index < 0 && closed
  					? index % length
  					: index < 0 ? index + length : index, length - 1);
  		}

  		var loop = closed && opts.from === undefined && opts.to === undefined,
  			from = getIndex(opts.from, 0),
  			to = getIndex(opts.to, length - 1);

  		if (from > to) {
  			if (closed) {
  				from -= length;
  			} else {
  				var tmp = from;
  				from = to;
  				to = tmp;
  			}
  		}
  		if (/^(?:asymmetric|continuous)$/.test(type)) {
  			var asymmetric = type === 'asymmetric',
  				min = Math.min,
  				amount = to - from + 1,
  				n = amount - 1,
  				padding = loop ? min(amount, 4) : 1,
  				paddingLeft = padding,
  				paddingRight = padding,
  				knots = [];
  			if (!closed) {
  				paddingLeft = min(1, from);
  				paddingRight = min(1, length - to - 1);
  			}
  			n += paddingLeft + paddingRight;
  			if (n <= 1)
  				return;
  			for (var i = 0, j = from - paddingLeft; i <= n; i++, j++) {
  				knots[i] = segments[(j < 0 ? j + length : j) % length]._point;
  			}

  			var x = knots[0]._x + 2 * knots[1]._x,
  				y = knots[0]._y + 2 * knots[1]._y,
  				f = 2,
  				n_1 = n - 1,
  				rx = [x],
  				ry = [y],
  				rf = [f],
  				px = [],
  				py = [];
  			for (var i = 1; i < n; i++) {
  				var internal = i < n_1,
  					a = internal ? 1 : asymmetric ? 1 : 2,
  					b = internal ? 4 : asymmetric ? 2 : 7,
  					u = internal ? 4 : asymmetric ? 3 : 8,
  					v = internal ? 2 : asymmetric ? 0 : 1,
  					m = a / f;
  				f = rf[i] = b - m;
  				x = rx[i] = u * knots[i]._x + v * knots[i + 1]._x - m * x;
  				y = ry[i] = u * knots[i]._y + v * knots[i + 1]._y - m * y;
  			}

  			px[n_1] = rx[n_1] / rf[n_1];
  			py[n_1] = ry[n_1] / rf[n_1];
  			for (var i = n - 2; i >= 0; i--) {
  				px[i] = (rx[i] - px[i + 1]) / rf[i];
  				py[i] = (ry[i] - py[i + 1]) / rf[i];
  			}
  			px[n] = (3 * knots[n]._x - px[n_1]) / 2;
  			py[n] = (3 * knots[n]._y - py[n_1]) / 2;

  			for (var i = paddingLeft, max = n - paddingRight, j = from;
  					i <= max; i++, j++) {
  				var segment = segments[j < 0 ? j + length : j],
  					pt = segment._point,
  					hx = px[i] - pt._x,
  					hy = py[i] - pt._y;
  				if (loop || i < max)
  					segment.setHandleOut(hx, hy);
  				if (loop || i > paddingLeft)
  					segment.setHandleIn(-hx, -hy);
  			}
  		} else {
  			for (var i = from; i <= to; i++) {
  				segments[i < 0 ? i + length : i].smooth(opts,
  						!loop && i === from, !loop && i === to);
  			}
  		}
  	},

  	toShape: function(insert) {
  		if (!this._closed)
  			return null;

  		var segments = this._segments,
  			type,
  			size,
  			radius,
  			topCenter;

  		function isCollinear(i, j) {
  			var seg1 = segments[i],
  				seg2 = seg1.getNext(),
  				seg3 = segments[j],
  				seg4 = seg3.getNext();
  			return seg1._handleOut.isZero() && seg2._handleIn.isZero()
  					&& seg3._handleOut.isZero() && seg4._handleIn.isZero()
  					&& seg2._point.subtract(seg1._point).isCollinear(
  						seg4._point.subtract(seg3._point));
  		}

  		function isOrthogonal(i) {
  			var seg2 = segments[i],
  				seg1 = seg2.getPrevious(),
  				seg3 = seg2.getNext();
  			return seg1._handleOut.isZero() && seg2._handleIn.isZero()
  					&& seg2._handleOut.isZero() && seg3._handleIn.isZero()
  					&& seg2._point.subtract(seg1._point).isOrthogonal(
  						seg3._point.subtract(seg2._point));
  		}

  		function isArc(i) {
  			var seg1 = segments[i],
  				seg2 = seg1.getNext(),
  				handle1 = seg1._handleOut,
  				handle2 = seg2._handleIn,
  				kappa = 0.5522847498307936;
  			if (handle1.isOrthogonal(handle2)) {
  				var pt1 = seg1._point,
  					pt2 = seg2._point,
  					corner = new Line(pt1, handle1, true).intersect(
  							new Line(pt2, handle2, true), true);
  				return corner && Numerical.isZero(handle1.getLength() /
  						corner.subtract(pt1).getLength() - kappa)
  					&& Numerical.isZero(handle2.getLength() /
  						corner.subtract(pt2).getLength() - kappa);
  			}
  			return false;
  		}

  		function getDistance(i, j) {
  			return segments[i]._point.getDistance(segments[j]._point);
  		}

  		if (!this.hasHandles() && segments.length === 4
  				&& isCollinear(0, 2) && isCollinear(1, 3) && isOrthogonal(1)) {
  			type = Shape.Rectangle;
  			size = new Size(getDistance(0, 3), getDistance(0, 1));
  			topCenter = segments[1]._point.add(segments[2]._point).divide(2);
  		} else if (segments.length === 8 && isArc(0) && isArc(2) && isArc(4)
  				&& isArc(6) && isCollinear(1, 5) && isCollinear(3, 7)) {
  			type = Shape.Rectangle;
  			size = new Size(getDistance(1, 6), getDistance(0, 3));
  			radius = size.subtract(new Size(getDistance(0, 7),
  					getDistance(1, 2))).divide(2);
  			topCenter = segments[3]._point.add(segments[4]._point).divide(2);
  		} else if (segments.length === 4
  				&& isArc(0) && isArc(1) && isArc(2) && isArc(3)) {
  			if (Numerical.isZero(getDistance(0, 2) - getDistance(1, 3))) {
  				type = Shape.Circle;
  				radius = getDistance(0, 2) / 2;
  			} else {
  				type = Shape.Ellipse;
  				radius = new Size(getDistance(2, 0) / 2, getDistance(3, 1) / 2);
  			}
  			topCenter = segments[1]._point;
  		}

  		if (type) {
  			var center = this.getPosition(true),
  				shape = new type({
  					center: center,
  					size: size,
  					radius: radius,
  					insert: false
  				});
  			shape.copyAttributes(this, true);
  			shape._matrix.prepend(this._matrix);
  			shape.rotate(topCenter.subtract(center).getAngle() + 90);
  			if (insert === undefined || insert)
  				shape.insertAbove(this);
  			return shape;
  		}
  		return null;
  	},

  	toPath: '#clone',

  	compare: function compare(path) {
  		if (!path || path instanceof CompoundPath)
  			return compare.base.call(this, path);
  		var curves1 = this.getCurves(),
  			curves2 = path.getCurves(),
  			length1 = curves1.length,
  			length2 = curves2.length;
  		if (!length1 || !length2) {
  			return length1 == length2;
  		}
  		var v1 = curves1[0].getValues(),
  			values2 = [],
  			pos1 = 0, pos2,
  			end1 = 0, end2;
  		for (var i = 0; i < length2; i++) {
  			var v2 = curves2[i].getValues();
  			values2.push(v2);
  			var overlaps = Curve.getOverlaps(v1, v2);
  			if (overlaps) {
  				pos2 = !i && overlaps[0][0] > 0 ? length2 - 1 : i;
  				end2 = overlaps[0][1];
  				break;
  			}
  		}
  		var abs = Math.abs,
  			epsilon = 1e-8,
  			v2 = values2[pos2],
  			start2;
  		while (v1 && v2) {
  			var overlaps = Curve.getOverlaps(v1, v2);
  			if (overlaps) {
  				var t1 = overlaps[0][0];
  				if (abs(t1 - end1) < epsilon) {
  					end1 = overlaps[1][0];
  					if (end1 === 1) {
  						v1 = ++pos1 < length1 ? curves1[pos1].getValues() : null;
  						end1 = 0;
  					}
  					var t2 = overlaps[0][1];
  					if (abs(t2 - end2) < epsilon) {
  						if (!start2)
  							start2 = [pos2, t2];
  						end2 = overlaps[1][1];
  						if (end2 === 1) {
  							if (++pos2 >= length2)
  								pos2 = 0;
  							v2 = values2[pos2] || curves2[pos2].getValues();
  							end2 = 0;
  						}
  						if (!v1) {
  							return start2[0] === pos2 && start2[1] === end2;
  						}
  						continue;
  					}
  				}
  			}
  			break;
  		}
  		return false;
  	},

  	_hitTestSelf: function(point, options, viewMatrix, strokeMatrix) {
  		var that = this,
  			style = this.getStyle(),
  			segments = this._segments,
  			numSegments = segments.length,
  			closed = this._closed,
  			tolerancePadding = options._tolerancePadding,
  			strokePadding = tolerancePadding,
  			join, cap, miterLimit,
  			area, loc, res,
  			hitStroke = options.stroke && style.hasStroke(),
  			hitFill = options.fill && style.hasFill(),
  			hitCurves = options.curves,
  			strokeRadius = hitStroke
  					? style.getStrokeWidth() / 2
  					: hitFill && options.tolerance > 0 || hitCurves
  						? 0 : null;
  		if (strokeRadius !== null) {
  			if (strokeRadius > 0) {
  				join = style.getStrokeJoin();
  				cap = style.getStrokeCap();
  				miterLimit = style.getMiterLimit();
  				strokePadding = strokePadding.add(
  					Path._getStrokePadding(strokeRadius, strokeMatrix));
  			} else {
  				join = cap = 'round';
  			}
  		}

  		function isCloseEnough(pt, padding) {
  			return point.subtract(pt).divide(padding).length <= 1;
  		}

  		function checkSegmentPoint(seg, pt, name) {
  			if (!options.selected || pt.isSelected()) {
  				var anchor = seg._point;
  				if (pt !== anchor)
  					pt = pt.add(anchor);
  				if (isCloseEnough(pt, strokePadding)) {
  					return new HitResult(name, that, {
  						segment: seg,
  						point: pt
  					});
  				}
  			}
  		}

  		function checkSegmentPoints(seg, ends) {
  			return (ends || options.segments)
  				&& checkSegmentPoint(seg, seg._point, 'segment')
  				|| (!ends && options.handles) && (
  					checkSegmentPoint(seg, seg._handleIn, 'handle-in') ||
  					checkSegmentPoint(seg, seg._handleOut, 'handle-out'));
  		}

  		function addToArea(point) {
  			area.add(point);
  		}

  		function checkSegmentStroke(segment) {
  			var isJoin = closed || segment._index > 0
  					&& segment._index < numSegments - 1;
  			if ((isJoin ? join : cap) === 'round') {
  				return isCloseEnough(segment._point, strokePadding);
  			} else {
  				area = new Path({ internal: true, closed: true });
  				if (isJoin) {
  					if (!segment.isSmooth()) {
  						Path._addBevelJoin(segment, join, strokeRadius,
  							   miterLimit, null, strokeMatrix, addToArea, true);
  					}
  				} else if (cap === 'square') {
  					Path._addSquareCap(segment, cap, strokeRadius, null,
  							strokeMatrix, addToArea, true);
  				}
  				if (!area.isEmpty()) {
  					var loc;
  					return area.contains(point)
  						|| (loc = area.getNearestLocation(point))
  							&& isCloseEnough(loc.getPoint(), tolerancePadding);
  				}
  			}
  		}

  		if (options.ends && !options.segments && !closed) {
  			if (res = checkSegmentPoints(segments[0], true)
  					|| checkSegmentPoints(segments[numSegments - 1], true))
  				return res;
  		} else if (options.segments || options.handles) {
  			for (var i = 0; i < numSegments; i++)
  				if (res = checkSegmentPoints(segments[i]))
  					return res;
  		}
  		if (strokeRadius !== null) {
  			loc = this.getNearestLocation(point);
  			if (loc) {
  				var time = loc.getTime();
  				if (time === 0 || time === 1 && numSegments > 1) {
  					if (!checkSegmentStroke(loc.getSegment()))
  						loc = null;
  				} else if (!isCloseEnough(loc.getPoint(), strokePadding)) {
  					loc = null;
  				}
  			}
  			if (!loc && join === 'miter' && numSegments > 1) {
  				for (var i = 0; i < numSegments; i++) {
  					var segment = segments[i];
  					if (point.getDistance(segment._point)
  							<= miterLimit * strokeRadius
  							&& checkSegmentStroke(segment)) {
  						loc = segment.getLocation();
  						break;
  					}
  				}
  			}
  		}
  		return !loc && hitFill && this._contains(point)
  				|| loc && !hitStroke && !hitCurves
  					? new HitResult('fill', this)
  					: loc
  						? new HitResult(hitStroke ? 'stroke' : 'curve', this, {
  							location: loc,
  							point: loc.getPoint()
  						})
  						: null;
  	}

  }, Base.each(Curve._evaluateMethods,
  	function(name) {
  		this[name + 'At'] = function(offset) {
  			var loc = this.getLocationAt(offset);
  			return loc && loc[name]();
  		};
  	},
  {
  	beans: false,

  	getLocationOf: function() {
  		var point = Point.read(arguments),
  			curves = this.getCurves();
  		for (var i = 0, l = curves.length; i < l; i++) {
  			var loc = curves[i].getLocationOf(point);
  			if (loc)
  				return loc;
  		}
  		return null;
  	},

  	getOffsetOf: function() {
  		var loc = this.getLocationOf.apply(this, arguments);
  		return loc ? loc.getOffset() : null;
  	},

  	getLocationAt: function(offset) {
  		if (typeof offset === 'number') {
  			var curves = this.getCurves(),
  				length = 0;
  			for (var i = 0, l = curves.length; i < l; i++) {
  				var start = length,
  					curve = curves[i];
  				length += curve.getLength();
  				if (length > offset) {
  					return curve.getLocationAt(offset - start);
  				}
  			}
  			if (curves.length > 0 && offset <= this.getLength()) {
  				return new CurveLocation(curves[curves.length - 1], 1);
  			}
  		} else if (offset && offset.getPath && offset.getPath() === this) {
  			return offset;
  		}
  		return null;
  	},

  	getOffsetsWithTangent: function() {
  		var tangent = Point.read(arguments);
  		if (tangent.isZero()) {
  			return [];
  		}

  		var offsets = [];
  		var curveStart = 0;
  		var curves = this.getCurves();
  		for (var i = 0, l = curves.length; i < l; i++) {
  			var curve = curves[i];
  			var curveTimes = curve.getTimesWithTangent(tangent);
  			for (var j = 0, m = curveTimes.length; j < m; j++) {
  				var offset = curveStart + curve.getOffsetAtTime(curveTimes[j]);
  				if (offsets.indexOf(offset) < 0) {
  					offsets.push(offset);
  				}
  			}
  			curveStart += curve.length;
  		}
  		return offsets;
  	}
  }),
  new function() {

  	function drawHandles(ctx, segments, matrix, size) {
  		var half = size / 2,
  			coords = new Array(6),
  			pX, pY;

  		function drawHandle(index) {
  			var hX = coords[index],
  				hY = coords[index + 1];
  			if (pX != hX || pY != hY) {
  				ctx.beginPath();
  				ctx.moveTo(pX, pY);
  				ctx.lineTo(hX, hY);
  				ctx.stroke();
  				ctx.beginPath();
  				ctx.arc(hX, hY, half, 0, Math.PI * 2, true);
  				ctx.fill();
  			}
  		}

  		for (var i = 0, l = segments.length; i < l; i++) {
  			var segment = segments[i],
  				selection = segment._selection;
  			segment._transformCoordinates(matrix, coords);
  			pX = coords[0];
  			pY = coords[1];
  			if (selection & 2)
  				drawHandle(2);
  			if (selection & 4)
  				drawHandle(4);
  			ctx.fillRect(pX - half, pY - half, size, size);
  			if (!(selection & 1)) {
  				var fillStyle = ctx.fillStyle;
  				ctx.fillStyle = '#ffffff';
  				ctx.fillRect(pX - half + 1, pY - half + 1, size - 2, size - 2);
  				ctx.fillStyle = fillStyle;
  			}
  		}
  	}

  	function drawSegments(ctx, path, matrix) {
  		var segments = path._segments,
  			length = segments.length,
  			coords = new Array(6),
  			first = true,
  			curX, curY,
  			prevX, prevY,
  			inX, inY,
  			outX, outY;

  		function drawSegment(segment) {
  			if (matrix) {
  				segment._transformCoordinates(matrix, coords);
  				curX = coords[0];
  				curY = coords[1];
  			} else {
  				var point = segment._point;
  				curX = point._x;
  				curY = point._y;
  			}
  			if (first) {
  				ctx.moveTo(curX, curY);
  				first = false;
  			} else {
  				if (matrix) {
  					inX = coords[2];
  					inY = coords[3];
  				} else {
  					var handle = segment._handleIn;
  					inX = curX + handle._x;
  					inY = curY + handle._y;
  				}
  				if (inX === curX && inY === curY
  						&& outX === prevX && outY === prevY) {
  					ctx.lineTo(curX, curY);
  				} else {
  					ctx.bezierCurveTo(outX, outY, inX, inY, curX, curY);
  				}
  			}
  			prevX = curX;
  			prevY = curY;
  			if (matrix) {
  				outX = coords[4];
  				outY = coords[5];
  			} else {
  				var handle = segment._handleOut;
  				outX = prevX + handle._x;
  				outY = prevY + handle._y;
  			}
  		}

  		for (var i = 0; i < length; i++)
  			drawSegment(segments[i]);
  		if (path._closed && length > 0)
  			drawSegment(segments[0]);
  	}

  	return {
  		_draw: function(ctx, param, viewMatrix, strokeMatrix) {
  			var dontStart = param.dontStart,
  				dontPaint = param.dontFinish || param.clip,
  				style = this.getStyle(),
  				hasFill = style.hasFill(),
  				hasStroke = style.hasStroke(),
  				dashArray = style.getDashArray(),
  				dashLength = !paper.support.nativeDash && hasStroke
  						&& dashArray && dashArray.length;

  			if (!dontStart)
  				ctx.beginPath();

  			if (hasFill || hasStroke && !dashLength || dontPaint) {
  				drawSegments(ctx, this, strokeMatrix);
  				if (this._closed)
  					ctx.closePath();
  			}

  			function getOffset(i) {
  				return dashArray[((i % dashLength) + dashLength) % dashLength];
  			}

  			if (!dontPaint && (hasFill || hasStroke)) {
  				this._setStyles(ctx, param, viewMatrix);
  				if (hasFill) {
  					ctx.fill(style.getFillRule());
  					ctx.shadowColor = 'rgba(0,0,0,0)';
  				}
  				if (hasStroke) {
  					if (dashLength) {
  						if (!dontStart)
  							ctx.beginPath();
  						var flattener = new PathFlattener(this, 0.25, 32, false,
  								strokeMatrix),
  							length = flattener.length,
  							from = -style.getDashOffset(), to,
  							i = 0;
  						from = from % length;
  						while (from > 0) {
  							from -= getOffset(i--) + getOffset(i--);
  						}
  						while (from < length) {
  							to = from + getOffset(i++);
  							if (from > 0 || to > 0)
  								flattener.drawPart(ctx,
  										Math.max(from, 0), Math.max(to, 0));
  							from = to + getOffset(i++);
  						}
  					}
  					ctx.stroke();
  				}
  			}
  		},

  		_drawSelected: function(ctx, matrix) {
  			ctx.beginPath();
  			drawSegments(ctx, this, matrix);
  			ctx.stroke();
  			drawHandles(ctx, this._segments, matrix, paper.settings.handleSize);
  		}
  	};
  },
  new function() {
  	function getCurrentSegment(that) {
  		var segments = that._segments;
  		if (!segments.length)
  			throw new Error('Use a moveTo() command first');
  		return segments[segments.length - 1];
  	}

  	return {
  		moveTo: function() {
  			var segments = this._segments;
  			if (segments.length === 1)
  				this.removeSegment(0);
  			if (!segments.length)
  				this._add([ new Segment(Point.read(arguments)) ]);
  		},

  		moveBy: function() {
  			throw new Error('moveBy() is unsupported on Path items.');
  		},

  		lineTo: function() {
  			this._add([ new Segment(Point.read(arguments)) ]);
  		},

  		cubicCurveTo: function() {
  			var handle1 = Point.read(arguments),
  				handle2 = Point.read(arguments),
  				to = Point.read(arguments),
  				current = getCurrentSegment(this);
  			current.setHandleOut(handle1.subtract(current._point));
  			this._add([ new Segment(to, handle2.subtract(to)) ]);
  		},

  		quadraticCurveTo: function() {
  			var handle = Point.read(arguments),
  				to = Point.read(arguments),
  				current = getCurrentSegment(this)._point;
  			this.cubicCurveTo(
  				handle.add(current.subtract(handle).multiply(1 / 3)),
  				handle.add(to.subtract(handle).multiply(1 / 3)),
  				to
  			);
  		},

  		curveTo: function() {
  			var through = Point.read(arguments),
  				to = Point.read(arguments),
  				t = Base.pick(Base.read(arguments), 0.5),
  				t1 = 1 - t,
  				current = getCurrentSegment(this)._point,
  				handle = through.subtract(current.multiply(t1 * t1))
  					.subtract(to.multiply(t * t)).divide(2 * t * t1);
  			if (handle.isNaN())
  				throw new Error(
  					'Cannot put a curve through points with parameter = ' + t);
  			this.quadraticCurveTo(handle, to);
  		},

  		arcTo: function() {
  			var abs = Math.abs,
  				sqrt = Math.sqrt,
  				current = getCurrentSegment(this),
  				from = current._point,
  				to = Point.read(arguments),
  				through,
  				peek = Base.peek(arguments),
  				clockwise = Base.pick(peek, true),
  				center, extent, vector, matrix;
  			if (typeof clockwise === 'boolean') {
  				var middle = from.add(to).divide(2),
  				through = middle.add(middle.subtract(from).rotate(
  						clockwise ? -90 : 90));
  			} else if (Base.remain(arguments) <= 2) {
  				through = to;
  				to = Point.read(arguments);
  			} else {
  				var radius = Size.read(arguments),
  					isZero = Numerical.isZero;
  				if (isZero(radius.width) || isZero(radius.height))
  					return this.lineTo(to);
  				var rotation = Base.read(arguments),
  					clockwise = !!Base.read(arguments),
  					large = !!Base.read(arguments),
  					middle = from.add(to).divide(2),
  					pt = from.subtract(middle).rotate(-rotation),
  					x = pt.x,
  					y = pt.y,
  					rx = abs(radius.width),
  					ry = abs(radius.height),
  					rxSq = rx * rx,
  					rySq = ry * ry,
  					xSq = x * x,
  					ySq = y * y;
  				var factor = sqrt(xSq / rxSq + ySq / rySq);
  				if (factor > 1) {
  					rx *= factor;
  					ry *= factor;
  					rxSq = rx * rx;
  					rySq = ry * ry;
  				}
  				factor = (rxSq * rySq - rxSq * ySq - rySq * xSq) /
  						(rxSq * ySq + rySq * xSq);
  				if (abs(factor) < 1e-12)
  					factor = 0;
  				if (factor < 0)
  					throw new Error(
  							'Cannot create an arc with the given arguments');
  				center = new Point(rx * y / ry, -ry * x / rx)
  						.multiply((large === clockwise ? -1 : 1) * sqrt(factor))
  						.rotate(rotation).add(middle);
  				matrix = new Matrix().translate(center).rotate(rotation)
  						.scale(rx, ry);
  				vector = matrix._inverseTransform(from);
  				extent = vector.getDirectedAngle(matrix._inverseTransform(to));
  				if (!clockwise && extent > 0)
  					extent -= 360;
  				else if (clockwise && extent < 0)
  					extent += 360;
  			}
  			if (through) {
  				var l1 = new Line(from.add(through).divide(2),
  							through.subtract(from).rotate(90), true),
  					l2 = new Line(through.add(to).divide(2),
  							to.subtract(through).rotate(90), true),
  					line = new Line(from, to),
  					throughSide = line.getSide(through);
  				center = l1.intersect(l2, true);
  				if (!center) {
  					if (!throughSide)
  						return this.lineTo(to);
  					throw new Error(
  							'Cannot create an arc with the given arguments');
  				}
  				vector = from.subtract(center);
  				extent = vector.getDirectedAngle(to.subtract(center));
  				var centerSide = line.getSide(center, true);
  				if (centerSide === 0) {
  					extent = throughSide * abs(extent);
  				} else if (throughSide === centerSide) {
  					extent += extent < 0 ? 360 : -360;
  				}
  			}
  			var epsilon = 1e-7,
  				ext = abs(extent),
  				count = ext >= 360 ? 4 : Math.ceil((ext - epsilon) / 90),
  				inc = extent / count,
  				half = inc * Math.PI / 360,
  				z = 4 / 3 * Math.sin(half) / (1 + Math.cos(half)),
  				segments = [];
  			for (var i = 0; i <= count; i++) {
  				var pt = to,
  					out = null;
  				if (i < count) {
  					out = vector.rotate(90).multiply(z);
  					if (matrix) {
  						pt = matrix._transformPoint(vector);
  						out = matrix._transformPoint(vector.add(out))
  								.subtract(pt);
  					} else {
  						pt = center.add(vector);
  					}
  				}
  				if (!i) {
  					current.setHandleOut(out);
  				} else {
  					var _in = vector.rotate(-90).multiply(z);
  					if (matrix) {
  						_in = matrix._transformPoint(vector.add(_in))
  								.subtract(pt);
  					}
  					segments.push(new Segment(pt, _in, out));
  				}
  				vector = vector.rotate(inc);
  			}
  			this._add(segments);
  		},

  		lineBy: function() {
  			var to = Point.read(arguments),
  				current = getCurrentSegment(this)._point;
  			this.lineTo(current.add(to));
  		},

  		curveBy: function() {
  			var through = Point.read(arguments),
  				to = Point.read(arguments),
  				parameter = Base.read(arguments),
  				current = getCurrentSegment(this)._point;
  			this.curveTo(current.add(through), current.add(to), parameter);
  		},

  		cubicCurveBy: function() {
  			var handle1 = Point.read(arguments),
  				handle2 = Point.read(arguments),
  				to = Point.read(arguments),
  				current = getCurrentSegment(this)._point;
  			this.cubicCurveTo(current.add(handle1), current.add(handle2),
  					current.add(to));
  		},

  		quadraticCurveBy: function() {
  			var handle = Point.read(arguments),
  				to = Point.read(arguments),
  				current = getCurrentSegment(this)._point;
  			this.quadraticCurveTo(current.add(handle), current.add(to));
  		},

  		arcBy: function() {
  			var current = getCurrentSegment(this)._point,
  				point = current.add(Point.read(arguments)),
  				clockwise = Base.pick(Base.peek(arguments), true);
  			if (typeof clockwise === 'boolean') {
  				this.arcTo(point, clockwise);
  			} else {
  				this.arcTo(point, current.add(Point.read(arguments)));
  			}
  		},

  		closePath: function(tolerance) {
  			this.setClosed(true);
  			this.join(this, tolerance);
  		}
  	};
  }, {

  	_getBounds: function(matrix, options) {
  		var method = options.handle
  				? 'getHandleBounds'
  				: options.stroke
  				? 'getStrokeBounds'
  				: 'getBounds';
  		return Path[method](this._segments, this._closed, this, matrix, options);
  	},

  statics: {
  	getBounds: function(segments, closed, path, matrix, options, strokePadding) {
  		var first = segments[0];
  		if (!first)
  			return new Rectangle();
  		var coords = new Array(6),
  			prevCoords = first._transformCoordinates(matrix, new Array(6)),
  			min = prevCoords.slice(0, 2),
  			max = min.slice(),
  			roots = new Array(2);

  		function processSegment(segment) {
  			segment._transformCoordinates(matrix, coords);
  			for (var i = 0; i < 2; i++) {
  				Curve._addBounds(
  					prevCoords[i],
  					prevCoords[i + 4],
  					coords[i + 2],
  					coords[i],
  					i, strokePadding ? strokePadding[i] : 0, min, max, roots);
  			}
  			var tmp = prevCoords;
  			prevCoords = coords;
  			coords = tmp;
  		}

  		for (var i = 1, l = segments.length; i < l; i++)
  			processSegment(segments[i]);
  		if (closed)
  			processSegment(first);
  		return new Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);
  	},

  	getStrokeBounds: function(segments, closed, path, matrix, options) {
  		var style = path.getStyle(),
  			stroke = style.hasStroke(),
  			strokeWidth = style.getStrokeWidth(),
  			strokeMatrix = stroke && path._getStrokeMatrix(matrix, options),
  			strokePadding = stroke && Path._getStrokePadding(strokeWidth,
  				strokeMatrix),
  			bounds = Path.getBounds(segments, closed, path, matrix, options,
  				strokePadding);
  		if (!stroke)
  			return bounds;
  		var strokeRadius = strokeWidth / 2,
  			join = style.getStrokeJoin(),
  			cap = style.getStrokeCap(),
  			miterLimit = style.getMiterLimit(),
  			joinBounds = new Rectangle(new Size(strokePadding));

  		function addPoint(point) {
  			bounds = bounds.include(point);
  		}

  		function addRound(segment) {
  			bounds = bounds.unite(
  					joinBounds.setCenter(segment._point.transform(matrix)));
  		}

  		function addJoin(segment, join) {
  			if (join === 'round' || segment.isSmooth()) {
  				addRound(segment);
  			} else {
  				Path._addBevelJoin(segment, join, strokeRadius, miterLimit,
  						matrix, strokeMatrix, addPoint);
  			}
  		}

  		function addCap(segment, cap) {
  			if (cap === 'round') {
  				addRound(segment);
  			} else {
  				Path._addSquareCap(segment, cap, strokeRadius, matrix,
  						strokeMatrix, addPoint);
  			}
  		}

  		var length = segments.length - (closed ? 0 : 1);
  		for (var i = 1; i < length; i++)
  			addJoin(segments[i], join);
  		if (closed) {
  			addJoin(segments[0], join);
  		} else if (length > 0) {
  			addCap(segments[0], cap);
  			addCap(segments[segments.length - 1], cap);
  		}
  		return bounds;
  	},

  	_getStrokePadding: function(radius, matrix) {
  		if (!matrix)
  			return [radius, radius];
  		var hor = new Point(radius, 0).transform(matrix),
  			ver = new Point(0, radius).transform(matrix),
  			phi = hor.getAngleInRadians(),
  			a = hor.getLength(),
  			b = ver.getLength();
  		var sin = Math.sin(phi),
  			cos = Math.cos(phi),
  			tan = Math.tan(phi),
  			tx = Math.atan2(b * tan, a),
  			ty = Math.atan2(b, tan * a);
  		return [Math.abs(a * Math.cos(tx) * cos + b * Math.sin(tx) * sin),
  				Math.abs(b * Math.sin(ty) * cos + a * Math.cos(ty) * sin)];
  	},

  	_addBevelJoin: function(segment, join, radius, miterLimit, matrix,
  			strokeMatrix, addPoint, isArea) {
  		var curve2 = segment.getCurve(),
  			curve1 = curve2.getPrevious(),
  			point = curve2.getPoint1().transform(matrix),
  			normal1 = curve1.getNormalAtTime(1).multiply(radius)
  				.transform(strokeMatrix),
  			normal2 = curve2.getNormalAtTime(0).multiply(radius)
  				.transform(strokeMatrix);
  		if (normal1.getDirectedAngle(normal2) < 0) {
  			normal1 = normal1.negate();
  			normal2 = normal2.negate();
  		}
  		if (isArea)
  			addPoint(point);
  		addPoint(point.add(normal1));
  		if (join === 'miter') {
  			var corner = new Line(point.add(normal1),
  					new Point(-normal1.y, normal1.x), true
  				).intersect(new Line(point.add(normal2),
  					new Point(-normal2.y, normal2.x), true
  				), true);
  			if (corner && point.getDistance(corner) <= miterLimit * radius) {
  				addPoint(corner);
  			}
  		}
  		addPoint(point.add(normal2));
  	},

  	_addSquareCap: function(segment, cap, radius, matrix, strokeMatrix,
  			addPoint, isArea) {
  		var point = segment._point.transform(matrix),
  			loc = segment.getLocation(),
  			normal = loc.getNormal()
  					.multiply(loc.getTime() === 0 ? radius : -radius)
  					.transform(strokeMatrix);
  		if (cap === 'square') {
  			if (isArea) {
  				addPoint(point.subtract(normal));
  				addPoint(point.add(normal));
  			}
  			point = point.add(normal.rotate(-90));
  		}
  		addPoint(point.add(normal));
  		addPoint(point.subtract(normal));
  	},

  	getHandleBounds: function(segments, closed, path, matrix, options) {
  		var style = path.getStyle(),
  			stroke = options.stroke && style.hasStroke(),
  			strokePadding,
  			joinPadding;
  		if (stroke) {
  			var strokeMatrix = path._getStrokeMatrix(matrix, options),
  				strokeRadius = style.getStrokeWidth() / 2,
  				joinRadius = strokeRadius;
  			if (style.getStrokeJoin() === 'miter')
  				joinRadius = strokeRadius * style.getMiterLimit();
  			if (style.getStrokeCap() === 'square')
  				joinRadius = Math.max(joinRadius, strokeRadius * Math.SQRT2);
  			strokePadding = Path._getStrokePadding(strokeRadius, strokeMatrix);
  			joinPadding = Path._getStrokePadding(joinRadius, strokeMatrix);
  		}
  		var coords = new Array(6),
  			x1 = Infinity,
  			x2 = -x1,
  			y1 = x1,
  			y2 = x2;
  		for (var i = 0, l = segments.length; i < l; i++) {
  			var segment = segments[i];
  			segment._transformCoordinates(matrix, coords);
  			for (var j = 0; j < 6; j += 2) {
  				var padding = !j ? joinPadding : strokePadding,
  					paddingX = padding ? padding[0] : 0,
  					paddingY = padding ? padding[1] : 0,
  					x = coords[j],
  					y = coords[j + 1],
  					xn = x - paddingX,
  					xx = x + paddingX,
  					yn = y - paddingY,
  					yx = y + paddingY;
  				if (xn < x1) x1 = xn;
  				if (xx > x2) x2 = xx;
  				if (yn < y1) y1 = yn;
  				if (yx > y2) y2 = yx;
  			}
  		}
  		return new Rectangle(x1, y1, x2 - x1, y2 - y1);
  	}
  }});

  Path.inject({ statics: new function() {

  	var kappa = 0.5522847498307936,
  		ellipseSegments = [
  			new Segment([-1, 0], [0, kappa ], [0, -kappa]),
  			new Segment([0, -1], [-kappa, 0], [kappa, 0 ]),
  			new Segment([1, 0], [0, -kappa], [0, kappa ]),
  			new Segment([0, 1], [kappa, 0 ], [-kappa, 0])
  		];

  	function createPath(segments, closed, args) {
  		var props = Base.getNamed(args),
  			path = new Path(props && props.insert == false && Item.NO_INSERT);
  		path._add(segments);
  		path._closed = closed;
  		return path.set(props, { insert: true });
  	}

  	function createEllipse(center, radius, args) {
  		var segments = new Array(4);
  		for (var i = 0; i < 4; i++) {
  			var segment = ellipseSegments[i];
  			segments[i] = new Segment(
  				segment._point.multiply(radius).add(center),
  				segment._handleIn.multiply(radius),
  				segment._handleOut.multiply(radius)
  			);
  		}
  		return createPath(segments, true, args);
  	}

  	return {
  		Line: function() {
  			return createPath([
  				new Segment(Point.readNamed(arguments, 'from')),
  				new Segment(Point.readNamed(arguments, 'to'))
  			], false, arguments);
  		},

  		Circle: function() {
  			var center = Point.readNamed(arguments, 'center'),
  				radius = Base.readNamed(arguments, 'radius');
  			return createEllipse(center, new Size(radius), arguments);
  		},

  		Rectangle: function() {
  			var rect = Rectangle.readNamed(arguments, 'rectangle'),
  				radius = Size.readNamed(arguments, 'radius', 0,
  						{ readNull: true }),
  				bl = rect.getBottomLeft(true),
  				tl = rect.getTopLeft(true),
  				tr = rect.getTopRight(true),
  				br = rect.getBottomRight(true),
  				segments;
  			if (!radius || radius.isZero()) {
  				segments = [
  					new Segment(bl),
  					new Segment(tl),
  					new Segment(tr),
  					new Segment(br)
  				];
  			} else {
  				radius = Size.min(radius, rect.getSize(true).divide(2));
  				var rx = radius.width,
  					ry = radius.height,
  					hx = rx * kappa,
  					hy = ry * kappa;
  				segments = [
  					new Segment(bl.add(rx, 0), null, [-hx, 0]),
  					new Segment(bl.subtract(0, ry), [0, hy]),
  					new Segment(tl.add(0, ry), null, [0, -hy]),
  					new Segment(tl.add(rx, 0), [-hx, 0], null),
  					new Segment(tr.subtract(rx, 0), null, [hx, 0]),
  					new Segment(tr.add(0, ry), [0, -hy], null),
  					new Segment(br.subtract(0, ry), null, [0, hy]),
  					new Segment(br.subtract(rx, 0), [hx, 0])
  				];
  			}
  			return createPath(segments, true, arguments);
  		},

  		RoundRectangle: '#Rectangle',

  		Ellipse: function() {
  			var ellipse = Shape._readEllipse(arguments);
  			return createEllipse(ellipse.center, ellipse.radius, arguments);
  		},

  		Oval: '#Ellipse',

  		Arc: function() {
  			var from = Point.readNamed(arguments, 'from'),
  				through = Point.readNamed(arguments, 'through'),
  				to = Point.readNamed(arguments, 'to'),
  				props = Base.getNamed(arguments),
  				path = new Path(props && props.insert == false
  						&& Item.NO_INSERT);
  			path.moveTo(from);
  			path.arcTo(through, to);
  			return path.set(props);
  		},

  		RegularPolygon: function() {
  			var center = Point.readNamed(arguments, 'center'),
  				sides = Base.readNamed(arguments, 'sides'),
  				radius = Base.readNamed(arguments, 'radius'),
  				step = 360 / sides,
  				three = sides % 3 === 0,
  				vector = new Point(0, three ? -radius : radius),
  				offset = three ? -1 : 0.5,
  				segments = new Array(sides);
  			for (var i = 0; i < sides; i++)
  				segments[i] = new Segment(center.add(
  					vector.rotate((i + offset) * step)));
  			return createPath(segments, true, arguments);
  		},

  		Star: function() {
  			var center = Point.readNamed(arguments, 'center'),
  				points = Base.readNamed(arguments, 'points') * 2,
  				radius1 = Base.readNamed(arguments, 'radius1'),
  				radius2 = Base.readNamed(arguments, 'radius2'),
  				step = 360 / points,
  				vector = new Point(0, -1),
  				segments = new Array(points);
  			for (var i = 0; i < points; i++)
  				segments[i] = new Segment(center.add(vector.rotate(step * i)
  						.multiply(i % 2 ? radius2 : radius1)));
  			return createPath(segments, true, arguments);
  		}
  	};
  }});

  var CompoundPath = PathItem.extend({
  	_class: 'CompoundPath',
  	_serializeFields: {
  		children: []
  	},
  	beans: true,

  	initialize: function CompoundPath(arg) {
  		this._children = [];
  		this._namedChildren = {};
  		if (!this._initialize(arg)) {
  			if (typeof arg === 'string') {
  				this.setPathData(arg);
  			} else {
  				this.addChildren(Array.isArray(arg) ? arg : arguments);
  			}
  		}
  	},

  	insertChildren: function insertChildren(index, items) {
  		var list = items,
  			first = list[0];
  		if (first && typeof first[0] === 'number')
  			list = [list];
  		for (var i = items.length - 1; i >= 0; i--) {
  			var item = list[i];
  			if (list === items && !(item instanceof Path))
  				list = Base.slice(list);
  			if (Array.isArray(item)) {
  				list[i] = new Path({ segments: item, insert: false });
  			} else if (item instanceof CompoundPath) {
  				list.splice.apply(list, [i, 1].concat(item.removeChildren()));
  				item.remove();
  			}
  		}
  		return insertChildren.base.call(this, index, list);
  	},

  	reduce: function reduce(options) {
  		var children = this._children;
  		for (var i = children.length - 1; i >= 0; i--) {
  			var path = children[i].reduce(options);
  			if (path.isEmpty())
  				path.remove();
  		}
  		if (!children.length) {
  			var path = new Path(Item.NO_INSERT);
  			path.copyAttributes(this);
  			path.insertAbove(this);
  			this.remove();
  			return path;
  		}
  		return reduce.base.call(this);
  	},

  	isClosed: function() {
  		var children = this._children;
  		for (var i = 0, l = children.length; i < l; i++) {
  			if (!children[i]._closed)
  				return false;
  		}
  		return true;
  	},

  	setClosed: function(closed) {
  		var children = this._children;
  		for (var i = 0, l = children.length; i < l; i++) {
  			children[i].setClosed(closed);
  		}
  	},

  	getFirstSegment: function() {
  		var first = this.getFirstChild();
  		return first && first.getFirstSegment();
  	},

  	getLastSegment: function() {
  		var last = this.getLastChild();
  		return last && last.getLastSegment();
  	},

  	getCurves: function() {
  		var children = this._children,
  			curves = [];
  		for (var i = 0, l = children.length; i < l; i++) {
  			Base.push(curves, children[i].getCurves());
  		}
  		return curves;
  	},

  	getFirstCurve: function() {
  		var first = this.getFirstChild();
  		return first && first.getFirstCurve();
  	},

  	getLastCurve: function() {
  		var last = this.getLastChild();
  		return last && last.getLastCurve();
  	},

  	getArea: function() {
  		var children = this._children,
  			area = 0;
  		for (var i = 0, l = children.length; i < l; i++)
  			area += children[i].getArea();
  		return area;
  	},

  	getLength: function() {
  		var children = this._children,
  			length = 0;
  		for (var i = 0, l = children.length; i < l; i++)
  			length += children[i].getLength();
  		return length;
  	},

  	getPathData: function(_matrix, _precision) {
  		var children = this._children,
  			paths = [];
  		for (var i = 0, l = children.length; i < l; i++) {
  			var child = children[i],
  				mx = child._matrix;
  			paths.push(child.getPathData(_matrix && !mx.isIdentity()
  					? _matrix.appended(mx) : _matrix, _precision));
  		}
  		return paths.join('');
  	},

  	_hitTestChildren: function _hitTestChildren(point, options, viewMatrix) {
  		return _hitTestChildren.base.call(this, point,
  				options.class === Path || options.type === 'path' ? options
  					: Base.set({}, options, { fill: false }),
  				viewMatrix);
  	},

  	_draw: function(ctx, param, viewMatrix, strokeMatrix) {
  		var children = this._children;
  		if (!children.length)
  			return;

  		param = param.extend({ dontStart: true, dontFinish: true });
  		ctx.beginPath();
  		for (var i = 0, l = children.length; i < l; i++)
  			children[i].draw(ctx, param, strokeMatrix);

  		if (!param.clip) {
  			this._setStyles(ctx, param, viewMatrix);
  			var style = this._style;
  			if (style.hasFill()) {
  				ctx.fill(style.getFillRule());
  				ctx.shadowColor = 'rgba(0,0,0,0)';
  			}
  			if (style.hasStroke())
  				ctx.stroke();
  		}
  	},

  	_drawSelected: function(ctx, matrix, selectionItems) {
  		var children = this._children;
  		for (var i = 0, l = children.length; i < l; i++) {
  			var child = children[i],
  				mx = child._matrix;
  			if (!selectionItems[child._id]) {
  				child._drawSelected(ctx, mx.isIdentity() ? matrix
  						: matrix.appended(mx));
  			}
  		}
  	}
  },
  new function() {
  	function getCurrentPath(that, check) {
  		var children = that._children;
  		if (check && !children.length)
  			throw new Error('Use a moveTo() command first');
  		return children[children.length - 1];
  	}

  	return Base.each(['lineTo', 'cubicCurveTo', 'quadraticCurveTo', 'curveTo',
  			'arcTo', 'lineBy', 'cubicCurveBy', 'quadraticCurveBy', 'curveBy',
  			'arcBy'],
  		function(key) {
  			this[key] = function() {
  				var path = getCurrentPath(this, true);
  				path[key].apply(path, arguments);
  			};
  		}, {
  			moveTo: function() {
  				var current = getCurrentPath(this),
  					path = current && current.isEmpty() ? current
  							: new Path(Item.NO_INSERT);
  				if (path !== current)
  					this.addChild(path);
  				path.moveTo.apply(path, arguments);
  			},

  			moveBy: function() {
  				var current = getCurrentPath(this, true),
  					last = current && current.getLastSegment(),
  					point = Point.read(arguments);
  				this.moveTo(last ? point.add(last._point) : point);
  			},

  			closePath: function(tolerance) {
  				getCurrentPath(this, true).closePath(tolerance);
  			}
  		}
  	);
  }, Base.each(['reverse', 'flatten', 'simplify', 'smooth'], function(key) {
  	this[key] = function(param) {
  		var children = this._children,
  			res;
  		for (var i = 0, l = children.length; i < l; i++) {
  			res = children[i][key](param) || res;
  		}
  		return res;
  	};
  }, {}));

  PathItem.inject(new function() {
  	var min = Math.min,
  		max = Math.max,
  		abs = Math.abs,
  		operators = {
  			unite:     { '1': true, '2': true },
  			intersect: { '2': true },
  			subtract:  { '1': true },
  			exclude:   { '1': true, '-1': true }
  		};

  	function preparePath(path, resolve) {
  		var res = path.clone(false).reduce({ simplify: true })
  				.transform(null, true, true);
  		return resolve
  				? res.resolveCrossings().reorient(
  					res.getFillRule() === 'nonzero', true)
  				: res;
  	}

  	function createResult(paths, simplify, path1, path2, options) {
  		var result = new CompoundPath(Item.NO_INSERT);
  		result.addChildren(paths, true);
  		result = result.reduce({ simplify: simplify });
  		if (!(options && options.insert == false)) {
  			result.insertAbove(path2 && path1.isSibling(path2)
  					&& path1.getIndex() < path2.getIndex() ? path2 : path1);
  		}
  		result.copyAttributes(path1, true);
  		return result;
  	}

  	function traceBoolean(path1, path2, operation, options) {
  		if (options && (options.trace == false || options.stroke) &&
  				/^(subtract|intersect)$/.test(operation))
  			return splitBoolean(path1, path2, operation);
  		var _path1 = preparePath(path1, true),
  			_path2 = path2 && path1 !== path2 && preparePath(path2, true),
  			operator = operators[operation];
  		operator[operation] = true;
  		if (_path2 && (operator.subtract || operator.exclude)
  				^ (_path2.isClockwise() ^ _path1.isClockwise()))
  			_path2.reverse();
  		var crossings = divideLocations(
  				CurveLocation.expand(_path1.getCrossings(_path2))),
  			paths1 = _path1._children || [_path1],
  			paths2 = _path2 && (_path2._children || [_path2]),
  			segments = [],
  			curves = [],
  			paths;

  		function collect(paths) {
  			for (var i = 0, l = paths.length; i < l; i++) {
  				var path = paths[i];
  				Base.push(segments, path._segments);
  				Base.push(curves, path.getCurves());
  				path._overlapsOnly = true;
  			}
  		}

  		if (crossings.length) {
  			collect(paths1);
  			if (paths2)
  				collect(paths2);
  			for (var i = 0, l = crossings.length; i < l; i++) {
  				propagateWinding(crossings[i]._segment, _path1, _path2, curves,
  						operator);
  			}
  			for (var i = 0, l = segments.length; i < l; i++) {
  				var segment = segments[i],
  					inter = segment._intersection;
  				if (!segment._winding) {
  					propagateWinding(segment, _path1, _path2, curves, operator);
  				}
  				if (!(inter && inter._overlap))
  					segment._path._overlapsOnly = false;
  			}
  			paths = tracePaths(segments, operator);
  		} else {
  			paths = reorientPaths(
  					paths2 ? paths1.concat(paths2) : paths1.slice(),
  					function(w) {
  						return !!operator[w];
  					});
  		}

  		return createResult(paths, true, path1, path2, options);
  	}

  	function splitBoolean(path1, path2, operation) {
  		var _path1 = preparePath(path1),
  			_path2 = preparePath(path2),
  			crossings = _path1.getCrossings(_path2),
  			subtract = operation === 'subtract',
  			divide = operation === 'divide',
  			added = {},
  			paths = [];

  		function addPath(path) {
  			if (!added[path._id] && (divide ||
  					_path2.contains(path.getPointAt(path.getLength() / 2))
  						^ subtract)) {
  				paths.unshift(path);
  				return added[path._id] = true;
  			}
  		}

  		for (var i = crossings.length - 1; i >= 0; i--) {
  			var path = crossings[i].split();
  			if (path) {
  				if (addPath(path))
  					path.getFirstSegment().setHandleIn(0, 0);
  				_path1.getLastSegment().setHandleOut(0, 0);
  			}
  		}
  		addPath(_path1);
  		return createResult(paths, false, path1, path2);
  	}

  	function linkIntersections(from, to) {
  		var prev = from;
  		while (prev) {
  			if (prev === to)
  				return;
  			prev = prev._previous;
  		}
  		while (from._next && from._next !== to)
  			from = from._next;
  		if (!from._next) {
  			while (to._previous)
  				to = to._previous;
  			from._next = to;
  			to._previous = from;
  		}
  	}

  	function clearCurveHandles(curves) {
  		for (var i = curves.length - 1; i >= 0; i--)
  			curves[i].clearHandles();
  	}

  	function reorientPaths(paths, isInside, clockwise) {
  		var length = paths && paths.length;
  		if (length) {
  			var lookup = Base.each(paths, function (path, i) {
  					this[path._id] = {
  						container: null,
  						winding: path.isClockwise() ? 1 : -1,
  						index: i
  					};
  				}, {}),
  				sorted = paths.slice().sort(function (a, b) {
  					return abs(b.getArea()) - abs(a.getArea());
  				}),
  				first = sorted[0];
  			if (clockwise == null)
  				clockwise = first.isClockwise();
  			for (var i = 0; i < length; i++) {
  				var path1 = sorted[i],
  					entry1 = lookup[path1._id],
  					point = path1.getInteriorPoint(),
  					containerWinding = 0;
  				for (var j = i - 1; j >= 0; j--) {
  					var path2 = sorted[j];
  					if (path2.contains(point)) {
  						var entry2 = lookup[path2._id];
  						containerWinding = entry2.winding;
  						entry1.winding += containerWinding;
  						entry1.container = entry2.exclude ? entry2.container
  								: path2;
  						break;
  					}
  				}
  				if (isInside(entry1.winding) === isInside(containerWinding)) {
  					entry1.exclude = true;
  					paths[entry1.index] = null;
  				} else {
  					var container = entry1.container;
  					path1.setClockwise(container ? !container.isClockwise()
  							: clockwise);
  				}
  			}
  		}
  		return paths;
  	}

  	function divideLocations(locations, include, clearLater) {
  		var results = include && [],
  			tMin = 1e-8,
  			tMax = 1 - tMin,
  			clearHandles = false,
  			clearCurves = clearLater || [],
  			clearLookup = clearLater && {},
  			renormalizeLocs,
  			prevCurve,
  			prevTime;

  		function getId(curve) {
  			return curve._path._id + '.' + curve._segment1._index;
  		}

  		for (var i = (clearLater && clearLater.length) - 1; i >= 0; i--) {
  			var curve = clearLater[i];
  			if (curve._path)
  				clearLookup[getId(curve)] = true;
  		}

  		for (var i = locations.length - 1; i >= 0; i--) {
  			var loc = locations[i],
  				time = loc._time,
  				origTime = time,
  				exclude = include && !include(loc),
  				curve = loc._curve,
  				segment;
  			if (curve) {
  				if (curve !== prevCurve) {
  					clearHandles = !curve.hasHandles()
  							|| clearLookup && clearLookup[getId(curve)];
  					renormalizeLocs = [];
  					prevTime = null;
  					prevCurve = curve;
  				} else if (prevTime >= tMin) {
  					time /= prevTime;
  				}
  			}
  			if (exclude) {
  				if (renormalizeLocs)
  					renormalizeLocs.push(loc);
  				continue;
  			} else if (include) {
  				results.unshift(loc);
  			}
  			prevTime = origTime;
  			if (time < tMin) {
  				segment = curve._segment1;
  			} else if (time > tMax) {
  				segment = curve._segment2;
  			} else {
  				var newCurve = curve.divideAtTime(time, true);
  				if (clearHandles)
  					clearCurves.push(curve, newCurve);
  				segment = newCurve._segment1;
  				for (var j = renormalizeLocs.length - 1; j >= 0; j--) {
  					var l = renormalizeLocs[j];
  					l._time = (l._time - time) / (1 - time);
  				}
  			}
  			loc._setSegment(segment);
  			var inter = segment._intersection,
  				dest = loc._intersection;
  			if (inter) {
  				linkIntersections(inter, dest);
  				var other = inter;
  				while (other) {
  					linkIntersections(other._intersection, inter);
  					other = other._next;
  				}
  			} else {
  				segment._intersection = dest;
  			}
  		}
  		if (!clearLater)
  			clearCurveHandles(clearCurves);
  		return results || locations;
  	}

  	function getWinding(point, curves, dir, closed, dontFlip) {
  		var ia = dir ? 1 : 0,
  			io = ia ^ 1,
  			pv = [point.x, point.y],
  			pa = pv[ia],
  			po = pv[io],
  			windingEpsilon = 1e-9,
  			qualityEpsilon = 1e-6,
  			paL = pa - windingEpsilon,
  			paR = pa + windingEpsilon,
  			windingL = 0,
  			windingR = 0,
  			pathWindingL = 0,
  			pathWindingR = 0,
  			onPath = false,
  			onAnyPath = false,
  			quality = 1,
  			roots = [],
  			vPrev,
  			vClose;

  		function addWinding(v) {
  			var o0 = v[io + 0],
  				o3 = v[io + 6];
  			if (po < min(o0, o3) || po > max(o0, o3)) {
  				return;
  			}
  			var a0 = v[ia + 0],
  				a1 = v[ia + 2],
  				a2 = v[ia + 4],
  				a3 = v[ia + 6];
  			if (o0 === o3) {
  				if (a0 < paR && a3 > paL || a3 < paR && a0 > paL) {
  					onPath = true;
  				}
  				return;
  			}
  			var t =   po === o0 ? 0
  					: po === o3 ? 1
  					: paL > max(a0, a1, a2, a3) || paR < min(a0, a1, a2, a3)
  					? 1
  					: Curve.solveCubic(v, io, po, roots, 0, 1) > 0
  						? roots[0]
  						: 1,
  				a =   t === 0 ? a0
  					: t === 1 ? a3
  					: Curve.getPoint(v, t)[dir ? 'y' : 'x'],
  				winding = o0 > o3 ? 1 : -1,
  				windingPrev = vPrev[io] > vPrev[io + 6] ? 1 : -1,
  				a3Prev = vPrev[ia + 6];
  			if (po !== o0) {
  				if (a < paL) {
  					pathWindingL += winding;
  				} else if (a > paR) {
  					pathWindingR += winding;
  				} else {
  					onPath = true;
  				}
  				if (a > pa - qualityEpsilon && a < pa + qualityEpsilon)
  					quality /= 2;
  			} else {
  				if (winding !== windingPrev) {
  					if (a0 < paL) {
  						pathWindingL += winding;
  					} else if (a0 > paR) {
  						pathWindingR += winding;
  					}
  				} else if (a0 != a3Prev) {
  					if (a3Prev < paR && a > paR) {
  						pathWindingR += winding;
  						onPath = true;
  					} else if (a3Prev > paL && a < paL) {
  						pathWindingL += winding;
  						onPath = true;
  					}
  				}
  				quality = 0;
  			}
  			vPrev = v;
  			return !dontFlip && a > paL && a < paR
  					&& Curve.getTangent(v, t)[dir ? 'x' : 'y'] === 0
  					&& getWinding(point, curves, !dir, closed, true);
  		}

  		function handleCurve(v) {
  			var o0 = v[io + 0],
  				o1 = v[io + 2],
  				o2 = v[io + 4],
  				o3 = v[io + 6];
  			if (po <= max(o0, o1, o2, o3) && po >= min(o0, o1, o2, o3)) {
  				var a0 = v[ia + 0],
  					a1 = v[ia + 2],
  					a2 = v[ia + 4],
  					a3 = v[ia + 6],
  					monoCurves = paL > max(a0, a1, a2, a3) ||
  								 paR < min(a0, a1, a2, a3)
  							? [v] : Curve.getMonoCurves(v, dir),
  					res;
  				for (var i = 0, l = monoCurves.length; i < l; i++) {
  					if (res = addWinding(monoCurves[i]))
  						return res;
  				}
  			}
  		}

  		for (var i = 0, l = curves.length; i < l; i++) {
  			var curve = curves[i],
  				path = curve._path,
  				v = curve.getValues(),
  				res;
  			if (!i || curves[i - 1]._path !== path) {
  				vPrev = null;
  				if (!path._closed) {
  					vClose = Curve.getValues(
  							path.getLastCurve().getSegment2(),
  							curve.getSegment1(),
  							null, !closed);
  					if (vClose[io] !== vClose[io + 6]) {
  						vPrev = vClose;
  					}
  				}

  				if (!vPrev) {
  					vPrev = v;
  					var prev = path.getLastCurve();
  					while (prev && prev !== curve) {
  						var v2 = prev.getValues();
  						if (v2[io] !== v2[io + 6]) {
  							vPrev = v2;
  							break;
  						}
  						prev = prev.getPrevious();
  					}
  				}
  			}

  			if (res = handleCurve(v))
  				return res;

  			if (i + 1 === l || curves[i + 1]._path !== path) {
  				if (vClose && (res = handleCurve(vClose)))
  					return res;
  				if (onPath && !pathWindingL && !pathWindingR) {
  					pathWindingL = pathWindingR = path.isClockwise(closed) ^ dir
  							? 1 : -1;
  				}
  				windingL += pathWindingL;
  				windingR += pathWindingR;
  				pathWindingL = pathWindingR = 0;
  				if (onPath) {
  					onAnyPath = true;
  					onPath = false;
  				}
  				vClose = null;
  			}
  		}
  		windingL = abs(windingL);
  		windingR = abs(windingR);
  		return {
  			winding: max(windingL, windingR),
  			windingL: windingL,
  			windingR: windingR,
  			quality: quality,
  			onPath: onAnyPath
  		};
  	}

  	function propagateWinding(segment, path1, path2, curves, operator) {
  		var chain = [],
  			start = segment,
  			totalLength = 0,
  			winding;
  		do {
  			var curve = segment.getCurve(),
  				length = curve.getLength();
  			chain.push({ segment: segment, curve: curve, length: length });
  			totalLength += length;
  			segment = segment.getNext();
  		} while (segment && !segment._intersection && segment !== start);
  		var offsets = [0.5, 0.25, 0.75],
  			winding = { winding: 0, quality: -1 },
  			tMin = 1e-8,
  			tMax = 1 - tMin;
  		for (var i = 0; i < offsets.length && winding.quality < 0.5; i++) {
  			var length = totalLength * offsets[i];
  			for (var j = 0, l = chain.length; j < l; j++) {
  				var entry = chain[j],
  					curveLength = entry.length;
  				if (length <= curveLength) {
  					var curve = entry.curve,
  						path = curve._path,
  						parent = path._parent,
  						operand = parent instanceof CompoundPath ? parent : path,
  						t = Numerical.clamp(curve.getTimeAt(length), tMin, tMax),
  						pt = curve.getPointAtTime(t),
  						dir = abs(curve.getTangentAtTime(t).y) < Math.SQRT1_2;
  					var wind = null;
  					if (operator.subtract && path2) {
  						var pathWinding = operand === path1
  										  ? path2._getWinding(pt, dir, true)
  										  : path1._getWinding(pt, dir, true);
  						if (operand === path1 && pathWinding.winding ||
  							operand === path2 && !pathWinding.winding) {
  							if (pathWinding.quality < 1) {
  								continue;
  							} else {
  								wind = { winding: 0, quality: 1 };
  							}
  						}
  					}
  					wind = wind || getWinding(pt, curves, dir, true);
  					if (wind.quality > winding.quality)
  						winding = wind;
  					break;
  				}
  				length -= curveLength;
  			}
  		}
  		for (var j = chain.length - 1; j >= 0; j--) {
  			chain[j].segment._winding = winding;
  		}
  	}

  	function tracePaths(segments, operator) {
  		var paths = [],
  			starts;

  		function isValid(seg) {
  			var winding;
  			return !!(seg && !seg._visited && (!operator
  					|| operator[(winding = seg._winding || {}).winding]
  						&& !(operator.unite && winding.winding === 2
  							&& winding.windingL && winding.windingR)));
  		}

  		function isStart(seg) {
  			if (seg) {
  				for (var i = 0, l = starts.length; i < l; i++) {
  					if (seg === starts[i])
  						return true;
  				}
  			}
  			return false;
  		}

  		function visitPath(path) {
  			var segments = path._segments;
  			for (var i = 0, l = segments.length; i < l; i++) {
  				segments[i]._visited = true;
  			}
  		}

  		function getCrossingSegments(segment, collectStarts) {
  			var inter = segment._intersection,
  				start = inter,
  				crossings = [];
  			if (collectStarts)
  				starts = [segment];

  			function collect(inter, end) {
  				while (inter && inter !== end) {
  					var other = inter._segment,
  						path = other && other._path;
  					if (path) {
  						var next = other.getNext() || path.getFirstSegment(),
  							nextInter = next._intersection;
  						if (other !== segment && (isStart(other)
  							|| isStart(next)
  							|| next && (isValid(other) && (isValid(next)
  								|| nextInter && isValid(nextInter._segment))))
  						) {
  							crossings.push(other);
  						}
  						if (collectStarts)
  							starts.push(other);
  					}
  					inter = inter._next;
  				}
  			}

  			if (inter) {
  				collect(inter);
  				while (inter && inter._prev)
  					inter = inter._prev;
  				collect(inter, start);
  			}
  			return crossings;
  		}

  		segments.sort(function(seg1, seg2) {
  			var inter1 = seg1._intersection,
  				inter2 = seg2._intersection,
  				over1 = !!(inter1 && inter1._overlap),
  				over2 = !!(inter2 && inter2._overlap),
  				path1 = seg1._path,
  				path2 = seg2._path;
  			return over1 ^ over2
  					? over1 ? 1 : -1
  					: !inter1 ^ !inter2
  						? inter1 ? 1 : -1
  						: path1 !== path2
  							? path1._id - path2._id
  							: seg1._index - seg2._index;
  		});

  		for (var i = 0, l = segments.length; i < l; i++) {
  			var seg = segments[i],
  				valid = isValid(seg),
  				path = null,
  				finished = false,
  				closed = true,
  				branches = [],
  				branch,
  				visited,
  				handleIn;
  			if (valid && seg._path._overlapsOnly) {
  				var path1 = seg._path,
  					path2 = seg._intersection._segment._path;
  				if (path1.compare(path2)) {
  					if (path1.getArea())
  						paths.push(path1.clone(false));
  					visitPath(path1);
  					visitPath(path2);
  					valid = false;
  				}
  			}
  			while (valid) {
  				var first = !path,
  					crossings = getCrossingSegments(seg, first),
  					other = crossings.shift(),
  					finished = !first && (isStart(seg) || isStart(other)),
  					cross = !finished && other;
  				if (first) {
  					path = new Path(Item.NO_INSERT);
  					branch = null;
  				}
  				if (finished) {
  					if (seg.isFirst() || seg.isLast())
  						closed = seg._path._closed;
  					seg._visited = true;
  					break;
  				}
  				if (cross && branch) {
  					branches.push(branch);
  					branch = null;
  				}
  				if (!branch) {
  					if (cross)
  						crossings.push(seg);
  					branch = {
  						start: path._segments.length,
  						crossings: crossings,
  						visited: visited = [],
  						handleIn: handleIn
  					};
  				}
  				if (cross)
  					seg = other;
  				if (!isValid(seg)) {
  					path.removeSegments(branch.start);
  					for (var j = 0, k = visited.length; j < k; j++) {
  						visited[j]._visited = false;
  					}
  					visited.length = 0;
  					do {
  						seg = branch && branch.crossings.shift();
  						if (!seg || !seg._path) {
  							seg = null;
  							branch = branches.pop();
  							if (branch) {
  								visited = branch.visited;
  								handleIn = branch.handleIn;
  							}
  						}
  					} while (branch && !isValid(seg));
  					if (!seg)
  						break;
  				}
  				var next = seg.getNext();
  				path.add(new Segment(seg._point, handleIn,
  						next && seg._handleOut));
  				seg._visited = true;
  				visited.push(seg);
  				seg = next || seg._path.getFirstSegment();
  				handleIn = next && next._handleIn;
  			}
  			if (finished) {
  				if (closed) {
  					path.getFirstSegment().setHandleIn(handleIn);
  					path.setClosed(closed);
  				}
  				if (path.getArea() !== 0) {
  					paths.push(path);
  				}
  			}
  		}
  		return paths;
  	}

  	return {
  		_getWinding: function(point, dir, closed) {
  			return getWinding(point, this.getCurves(), dir, closed);
  		},

  		unite: function(path, options) {
  			return traceBoolean(this, path, 'unite', options);
  		},

  		intersect: function(path, options) {
  			return traceBoolean(this, path, 'intersect', options);
  		},

  		subtract: function(path, options) {
  			return traceBoolean(this, path, 'subtract', options);
  		},

  		exclude: function(path, options) {
  			return traceBoolean(this, path, 'exclude', options);
  		},

  		divide: function(path, options) {
  			return options && (options.trace == false || options.stroke)
  					? splitBoolean(this, path, 'divide')
  					: createResult([
  						this.subtract(path, options),
  						this.intersect(path, options)
  					], true, this, path, options);
  		},

  		resolveCrossings: function() {
  			var children = this._children,
  				paths = children || [this];

  			function hasOverlap(seg, path) {
  				var inter = seg && seg._intersection;
  				return inter && inter._overlap && inter._path === path;
  			}

  			var hasOverlaps = false,
  				hasCrossings = false,
  				intersections = this.getIntersections(null, function(inter) {
  					return inter.hasOverlap() && (hasOverlaps = true) ||
  							inter.isCrossing() && (hasCrossings = true);
  				}),
  				clearCurves = hasOverlaps && hasCrossings && [];
  			intersections = CurveLocation.expand(intersections);
  			if (hasOverlaps) {
  				var overlaps = divideLocations(intersections, function(inter) {
  					return inter.hasOverlap();
  				}, clearCurves);
  				for (var i = overlaps.length - 1; i >= 0; i--) {
  					var overlap = overlaps[i],
  						path = overlap._path,
  						seg = overlap._segment,
  						prev = seg.getPrevious(),
  						next = seg.getNext();
  					if (hasOverlap(prev, path) && hasOverlap(next, path)) {
  						seg.remove();
  						prev._handleOut._set(0, 0);
  						next._handleIn._set(0, 0);
  						if (prev !== seg && !prev.getCurve().hasLength()) {
  							next._handleIn.set(prev._handleIn);
  							prev.remove();
  						}
  					}
  				}
  			}
  			if (hasCrossings) {
  				divideLocations(intersections, hasOverlaps && function(inter) {
  					var curve1 = inter.getCurve(),
  						seg1 = inter.getSegment(),
  						other = inter._intersection,
  						curve2 = other._curve,
  						seg2 = other._segment;
  					if (curve1 && curve2 && curve1._path && curve2._path)
  						return true;
  					if (seg1)
  						seg1._intersection = null;
  					if (seg2)
  						seg2._intersection = null;
  				}, clearCurves);
  				if (clearCurves)
  					clearCurveHandles(clearCurves);
  				paths = tracePaths(Base.each(paths, function(path) {
  					Base.push(this, path._segments);
  				}, []));
  			}
  			var length = paths.length,
  				item;
  			if (length > 1 && children) {
  				if (paths !== children)
  					this.setChildren(paths);
  				item = this;
  			} else if (length === 1 && !children) {
  				if (paths[0] !== this)
  					this.setSegments(paths[0].removeSegments());
  				item = this;
  			}
  			if (!item) {
  				item = new CompoundPath(Item.NO_INSERT);
  				item.addChildren(paths);
  				item = item.reduce();
  				item.copyAttributes(this);
  				this.replaceWith(item);
  			}
  			return item;
  		},

  		reorient: function(nonZero, clockwise) {
  			var children = this._children;
  			if (children && children.length) {
  				this.setChildren(reorientPaths(this.removeChildren(),
  						function(w) {
  							return !!(nonZero ? w : w & 1);
  						},
  						clockwise));
  			} else if (clockwise !== undefined) {
  				this.setClockwise(clockwise);
  			}
  			return this;
  		},

  		getInteriorPoint: function() {
  			var bounds = this.getBounds(),
  				point = bounds.getCenter(true);
  			if (!this.contains(point)) {
  				var curves = this.getCurves(),
  					y = point.y,
  					intercepts = [],
  					roots = [];
  				for (var i = 0, l = curves.length; i < l; i++) {
  					var v = curves[i].getValues(),
  						o0 = v[1],
  						o1 = v[3],
  						o2 = v[5],
  						o3 = v[7];
  					if (y >= min(o0, o1, o2, o3) && y <= max(o0, o1, o2, o3)) {
  						var monoCurves = Curve.getMonoCurves(v);
  						for (var j = 0, m = monoCurves.length; j < m; j++) {
  							var mv = monoCurves[j],
  								mo0 = mv[1],
  								mo3 = mv[7];
  							if ((mo0 !== mo3) &&
  								(y >= mo0 && y <= mo3 || y >= mo3 && y <= mo0)){
  								var x = y === mo0 ? mv[0]
  									: y === mo3 ? mv[6]
  									: Curve.solveCubic(mv, 1, y, roots, 0, 1)
  										=== 1
  										? Curve.getPoint(mv, roots[0]).x
  										: (mv[0] + mv[6]) / 2;
  								intercepts.push(x);
  							}
  						}
  					}
  				}
  				if (intercepts.length > 1) {
  					intercepts.sort(function(a, b) { return a - b; });
  					point.x = (intercepts[0] + intercepts[1]) / 2;
  				}
  			}
  			return point;
  		}
  	};
  });

  var PathFlattener = Base.extend({
  	_class: 'PathFlattener',

  	initialize: function(path, flatness, maxRecursion, ignoreStraight, matrix) {
  		var curves = [],
  			parts = [],
  			length = 0,
  			minSpan = 1 / (maxRecursion || 32),
  			segments = path._segments,
  			segment1 = segments[0],
  			segment2;

  		function addCurve(segment1, segment2) {
  			var curve = Curve.getValues(segment1, segment2, matrix);
  			curves.push(curve);
  			computeParts(curve, segment1._index, 0, 1);
  		}

  		function computeParts(curve, index, t1, t2) {
  			if ((t2 - t1) > minSpan
  					&& !(ignoreStraight && Curve.isStraight(curve))
  					&& !Curve.isFlatEnough(curve, flatness || 0.25)) {
  				var halves = Curve.subdivide(curve, 0.5),
  					tMid = (t1 + t2) / 2;
  				computeParts(halves[0], index, t1, tMid);
  				computeParts(halves[1], index, tMid, t2);
  			} else {
  				var dx = curve[6] - curve[0],
  					dy = curve[7] - curve[1],
  					dist = Math.sqrt(dx * dx + dy * dy);
  				if (dist > 0) {
  					length += dist;
  					parts.push({
  						offset: length,
  						curve: curve,
  						index: index,
  						time: t2,
  					});
  				}
  			}
  		}

  		for (var i = 1, l = segments.length; i < l; i++) {
  			segment2 = segments[i];
  			addCurve(segment1, segment2);
  			segment1 = segment2;
  		}
  		if (path._closed)
  			addCurve(segment2 || segment1, segments[0]);
  		this.curves = curves;
  		this.parts = parts;
  		this.length = length;
  		this.index = 0;
  	},

  	_get: function(offset) {
  		var parts = this.parts,
  			length = parts.length,
  			i, j = this.index;
  		for (;;) {
  			i = j;
  			if (!j || parts[--j].offset < offset)
  				break;
  		}
  		for (; i < length; i++) {
  			var part = parts[i];
  			if (part.offset >= offset) {
  				this.index = i;
  				var prev = parts[i - 1],
  					prevTime = prev && prev.index === part.index ? prev.time : 0,
  					prevOffset = prev ? prev.offset : 0;
  				return {
  					index: part.index,
  					time: prevTime + (part.time - prevTime)
  						* (offset - prevOffset) / (part.offset - prevOffset)
  				};
  			}
  		}
  		return {
  			index: parts[length - 1].index,
  			time: 1
  		};
  	},

  	drawPart: function(ctx, from, to) {
  		var start = this._get(from),
  			end = this._get(to);
  		for (var i = start.index, l = end.index; i <= l; i++) {
  			var curve = Curve.getPart(this.curves[i],
  					i === start.index ? start.time : 0,
  					i === end.index ? end.time : 1);
  			if (i === start.index)
  				ctx.moveTo(curve[0], curve[1]);
  			ctx.bezierCurveTo.apply(ctx, curve.slice(2));
  		}
  	}
  }, Base.each(Curve._evaluateMethods,
  	function(name) {
  		this[name + 'At'] = function(offset) {
  			var param = this._get(offset);
  			return Curve[name](this.curves[param.index], param.time);
  		};
  	}, {})
  );

  var PathFitter = Base.extend({
  	initialize: function(path) {
  		var points = this.points = [],
  			segments = path._segments,
  			closed = path._closed;
  		for (var i = 0, prev, l = segments.length; i < l; i++) {
  			var point = segments[i].point;
  			if (!prev || !prev.equals(point)) {
  				points.push(prev = point.clone());
  			}
  		}
  		if (closed) {
  			points.unshift(points[points.length - 1]);
  			points.push(points[1]);
  		}
  		this.closed = closed;
  	},

  	fit: function(error) {
  		var points = this.points,
  			length = points.length,
  			segments = null;
  		if (length > 0) {
  			segments = [new Segment(points[0])];
  			if (length > 1) {
  				this.fitCubic(segments, error, 0, length - 1,
  						points[1].subtract(points[0]),
  						points[length - 2].subtract(points[length - 1]));
  				if (this.closed) {
  					segments.shift();
  					segments.pop();
  				}
  			}
  		}
  		return segments;
  	},

  	fitCubic: function(segments, error, first, last, tan1, tan2) {
  		var points = this.points;
  		if (last - first === 1) {
  			var pt1 = points[first],
  				pt2 = points[last],
  				dist = pt1.getDistance(pt2) / 3;
  			this.addCurve(segments, [pt1, pt1.add(tan1.normalize(dist)),
  					pt2.add(tan2.normalize(dist)), pt2]);
  			return;
  		}
  		var uPrime = this.chordLengthParameterize(first, last),
  			maxError = Math.max(error, error * error),
  			split,
  			parametersInOrder = true;
  		for (var i = 0; i <= 4; i++) {
  			var curve = this.generateBezier(first, last, uPrime, tan1, tan2);
  			var max = this.findMaxError(first, last, curve, uPrime);
  			if (max.error < error && parametersInOrder) {
  				this.addCurve(segments, curve);
  				return;
  			}
  			split = max.index;
  			if (max.error >= maxError)
  				break;
  			parametersInOrder = this.reparameterize(first, last, uPrime, curve);
  			maxError = max.error;
  		}
  		var tanCenter = points[split - 1].subtract(points[split + 1]);
  		this.fitCubic(segments, error, first, split, tan1, tanCenter);
  		this.fitCubic(segments, error, split, last, tanCenter.negate(), tan2);
  	},

  	addCurve: function(segments, curve) {
  		var prev = segments[segments.length - 1];
  		prev.setHandleOut(curve[1].subtract(curve[0]));
  		segments.push(new Segment(curve[3], curve[2].subtract(curve[3])));
  	},

  	generateBezier: function(first, last, uPrime, tan1, tan2) {
  		var epsilon = 1e-12,
  			abs = Math.abs,
  			points = this.points,
  			pt1 = points[first],
  			pt2 = points[last],
  			C = [[0, 0], [0, 0]],
  			X = [0, 0];

  		for (var i = 0, l = last - first + 1; i < l; i++) {
  			var u = uPrime[i],
  				t = 1 - u,
  				b = 3 * u * t,
  				b0 = t * t * t,
  				b1 = b * t,
  				b2 = b * u,
  				b3 = u * u * u,
  				a1 = tan1.normalize(b1),
  				a2 = tan2.normalize(b2),
  				tmp = points[first + i]
  					.subtract(pt1.multiply(b0 + b1))
  					.subtract(pt2.multiply(b2 + b3));
  			C[0][0] += a1.dot(a1);
  			C[0][1] += a1.dot(a2);
  			C[1][0] = C[0][1];
  			C[1][1] += a2.dot(a2);
  			X[0] += a1.dot(tmp);
  			X[1] += a2.dot(tmp);
  		}

  		var detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1],
  			alpha1,
  			alpha2;
  		if (abs(detC0C1) > epsilon) {
  			var detC0X = C[0][0] * X[1]    - C[1][0] * X[0],
  				detXC1 = X[0]    * C[1][1] - X[1]    * C[0][1];
  			alpha1 = detXC1 / detC0C1;
  			alpha2 = detC0X / detC0C1;
  		} else {
  			var c0 = C[0][0] + C[0][1],
  				c1 = C[1][0] + C[1][1];
  			alpha1 = alpha2 = abs(c0) > epsilon ? X[0] / c0
  							: abs(c1) > epsilon ? X[1] / c1
  							: 0;
  		}

  		var segLength = pt2.getDistance(pt1),
  			eps = epsilon * segLength,
  			handle1,
  			handle2;
  		if (alpha1 < eps || alpha2 < eps) {
  			alpha1 = alpha2 = segLength / 3;
  		} else {
  			var line = pt2.subtract(pt1);
  			handle1 = tan1.normalize(alpha1);
  			handle2 = tan2.normalize(alpha2);
  			if (handle1.dot(line) - handle2.dot(line) > segLength * segLength) {
  				alpha1 = alpha2 = segLength / 3;
  				handle1 = handle2 = null;
  			}
  		}

  		return [pt1,
  				pt1.add(handle1 || tan1.normalize(alpha1)),
  				pt2.add(handle2 || tan2.normalize(alpha2)),
  				pt2];
  	},

  	reparameterize: function(first, last, u, curve) {
  		for (var i = first; i <= last; i++) {
  			u[i - first] = this.findRoot(curve, this.points[i], u[i - first]);
  		}
  		for (var i = 1, l = u.length; i < l; i++) {
  			if (u[i] <= u[i - 1])
  				return false;
  		}
  		return true;
  	},

  	findRoot: function(curve, point, u) {
  		var curve1 = [],
  			curve2 = [];
  		for (var i = 0; i <= 2; i++) {
  			curve1[i] = curve[i + 1].subtract(curve[i]).multiply(3);
  		}
  		for (var i = 0; i <= 1; i++) {
  			curve2[i] = curve1[i + 1].subtract(curve1[i]).multiply(2);
  		}
  		var pt = this.evaluate(3, curve, u),
  			pt1 = this.evaluate(2, curve1, u),
  			pt2 = this.evaluate(1, curve2, u),
  			diff = pt.subtract(point),
  			df = pt1.dot(pt1) + diff.dot(pt2);
  		return Numerical.isZero(df) ? u : u - diff.dot(pt1) / df;
  	},

  	evaluate: function(degree, curve, t) {
  		var tmp = curve.slice();
  		for (var i = 1; i <= degree; i++) {
  			for (var j = 0; j <= degree - i; j++) {
  				tmp[j] = tmp[j].multiply(1 - t).add(tmp[j + 1].multiply(t));
  			}
  		}
  		return tmp[0];
  	},

  	chordLengthParameterize: function(first, last) {
  		var u = [0];
  		for (var i = first + 1; i <= last; i++) {
  			u[i - first] = u[i - first - 1]
  					+ this.points[i].getDistance(this.points[i - 1]);
  		}
  		for (var i = 1, m = last - first; i <= m; i++) {
  			u[i] /= u[m];
  		}
  		return u;
  	},

  	findMaxError: function(first, last, curve, u) {
  		var index = Math.floor((last - first + 1) / 2),
  			maxDist = 0;
  		for (var i = first + 1; i < last; i++) {
  			var P = this.evaluate(3, curve, u[i - first]);
  			var v = P.subtract(this.points[i]);
  			var dist = v.x * v.x + v.y * v.y;
  			if (dist >= maxDist) {
  				maxDist = dist;
  				index = i;
  			}
  		}
  		return {
  			error: maxDist,
  			index: index
  		};
  	}
  });

  var TextItem = Item.extend({
  	_class: 'TextItem',
  	_applyMatrix: false,
  	_canApplyMatrix: false,
  	_serializeFields: {
  		content: null
  	},
  	_boundsOptions: { stroke: false, handle: false },

  	initialize: function TextItem(arg) {
  		this._content = '';
  		this._lines = [];
  		var hasProps = arg && Base.isPlainObject(arg)
  				&& arg.x === undefined && arg.y === undefined;
  		this._initialize(hasProps && arg, !hasProps && Point.read(arguments));
  	},

  	_equals: function(item) {
  		return this._content === item._content;
  	},

  	copyContent: function(source) {
  		this.setContent(source._content);
  	},

  	getContent: function() {
  		return this._content;
  	},

  	setContent: function(content) {
  		this._content = '' + content;
  		this._lines = this._content.split(/\r\n|\n|\r/mg);
  		this._changed(521);
  	},

  	isEmpty: function() {
  		return !this._content;
  	},

  	getCharacterStyle: '#getStyle',
  	setCharacterStyle: '#setStyle',

  	getParagraphStyle: '#getStyle',
  	setParagraphStyle: '#setStyle'
  });

  var PointText = TextItem.extend({
  	_class: 'PointText',

  	initialize: function PointText() {
  		TextItem.apply(this, arguments);
  	},

  	getPoint: function() {
  		var point = this._matrix.getTranslation();
  		return new LinkedPoint(point.x, point.y, this, 'setPoint');
  	},

  	setPoint: function() {
  		var point = Point.read(arguments);
  		this.translate(point.subtract(this._matrix.getTranslation()));
  	},

  	_draw: function(ctx, param, viewMatrix) {
  		if (!this._content)
  			return;
  		this._setStyles(ctx, param, viewMatrix);
  		var lines = this._lines,
  			style = this._style,
  			hasFill = style.hasFill(),
  			hasStroke = style.hasStroke(),
  			leading = style.getLeading(),
  			shadowColor = ctx.shadowColor;
  		ctx.font = style.getFontStyle();
  		ctx.textAlign = style.getJustification();
  		for (var i = 0, l = lines.length; i < l; i++) {
  			ctx.shadowColor = shadowColor;
  			var line = lines[i];
  			if (hasFill) {
  				ctx.fillText(line, 0, 0);
  				ctx.shadowColor = 'rgba(0,0,0,0)';
  			}
  			if (hasStroke)
  				ctx.strokeText(line, 0, 0);
  			ctx.translate(0, leading);
  		}
  	},

  	_getBounds: function(matrix, options) {
  		var style = this._style,
  			lines = this._lines,
  			numLines = lines.length,
  			justification = style.getJustification(),
  			leading = style.getLeading(),
  			width = this.getView().getTextWidth(style.getFontStyle(), lines),
  			x = 0;
  		if (justification !== 'left')
  			x -= width / (justification === 'center' ? 2: 1);
  		var rect = new Rectangle(x,
  					numLines ? - 0.75 * leading : 0,
  					width, numLines * leading);
  		return matrix ? matrix._transformBounds(rect, rect) : rect;
  	}
  });

  var Color = Base.extend(new function() {
  	var types = {
  		gray: ['gray'],
  		rgb: ['red', 'green', 'blue'],
  		hsb: ['hue', 'saturation', 'brightness'],
  		hsl: ['hue', 'saturation', 'lightness'],
  		gradient: ['gradient', 'origin', 'destination', 'highlight']
  	};

  	var componentParsers = {},
  		namedColors = {
  			transparent: [0, 0, 0, 0]
  		},
  		colorCtx;

  	function fromCSS(string) {
  		var match = string.match(
  				/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i
  			) || string.match(
  				/^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i
  			),
  			type = 'rgb',
  			components;
  		if (match) {
  			var amount = match[4] ? 4 : 3;
  			components = new Array(amount);
  			for (var i = 0; i < amount; i++) {
  				var value = match[i + 1];
  				components[i] = parseInt(value.length == 1
  						? value + value : value, 16) / 255;
  			}
  		} else if (match = string.match(/^(rgb|hsl)a?\((.*)\)$/)) {
  			type = match[1];
  			components = match[2].split(/[,\s]+/g);
  			var isHSL = type === 'hsl';
  			for (var i = 0, l = Math.min(components.length, 4); i < l; i++) {
  				var component = components[i];
  				var value = parseFloat(component);
  				if (isHSL) {
  					if (i === 0) {
  						var unit = component.match(/([a-z]*)$/)[1];
  						value *= ({
  							turn: 360,
  							rad: 180 / Math.PI,
  							grad: 0.9
  						}[unit] || 1);
  					} else if (i < 3) {
  						value /= 100;
  					}
  				} else if (i < 3) {
  					value /= 255;
  				}
  				components[i] = value;
  			}
  		} else {
  			var color = namedColors[string];
  			if (!color) {
  				if (window) {
  					if (!colorCtx) {
  						colorCtx = CanvasProvider.getContext(1, 1);
  						colorCtx.globalCompositeOperation = 'copy';
  					}
  					colorCtx.fillStyle = 'rgba(0,0,0,0)';
  					colorCtx.fillStyle = string;
  					colorCtx.fillRect(0, 0, 1, 1);
  					var data = colorCtx.getImageData(0, 0, 1, 1).data;
  					color = namedColors[string] = [
  						data[0] / 255,
  						data[1] / 255,
  						data[2] / 255
  					];
  				} else {
  					color = [0, 0, 0];
  				}
  			}
  			components = color.slice();
  		}
  		return [type, components];
  	}

  	var hsbIndices = [
  		[0, 3, 1],
  		[2, 0, 1],
  		[1, 0, 3],
  		[1, 2, 0],
  		[3, 1, 0],
  		[0, 1, 2]
  	];

  	var converters = {
  		'rgb-hsb': function(r, g, b) {
  			var max = Math.max(r, g, b),
  				min = Math.min(r, g, b),
  				delta = max - min,
  				h = delta === 0 ? 0
  					:   ( max == r ? (g - b) / delta + (g < b ? 6 : 0)
  						: max == g ? (b - r) / delta + 2
  						:            (r - g) / delta + 4) * 60;
  			return [h, max === 0 ? 0 : delta / max, max];
  		},

  		'hsb-rgb': function(h, s, b) {
  			h = (((h / 60) % 6) + 6) % 6;
  			var i = Math.floor(h),
  				f = h - i,
  				i = hsbIndices[i],
  				v = [
  					b,
  					b * (1 - s),
  					b * (1 - s * f),
  					b * (1 - s * (1 - f))
  				];
  			return [v[i[0]], v[i[1]], v[i[2]]];
  		},

  		'rgb-hsl': function(r, g, b) {
  			var max = Math.max(r, g, b),
  				min = Math.min(r, g, b),
  				delta = max - min,
  				achromatic = delta === 0,
  				h = achromatic ? 0
  					:   ( max == r ? (g - b) / delta + (g < b ? 6 : 0)
  						: max == g ? (b - r) / delta + 2
  						:            (r - g) / delta + 4) * 60,
  				l = (max + min) / 2,
  				s = achromatic ? 0 : l < 0.5
  						? delta / (max + min)
  						: delta / (2 - max - min);
  			return [h, s, l];
  		},

  		'hsl-rgb': function(h, s, l) {
  			h = (((h / 360) % 1) + 1) % 1;
  			if (s === 0)
  				return [l, l, l];
  			var t3s = [ h + 1 / 3, h, h - 1 / 3 ],
  				t2 = l < 0.5 ? l * (1 + s) : l + s - l * s,
  				t1 = 2 * l - t2,
  				c = [];
  			for (var i = 0; i < 3; i++) {
  				var t3 = t3s[i];
  				if (t3 < 0) t3 += 1;
  				if (t3 > 1) t3 -= 1;
  				c[i] = 6 * t3 < 1
  					? t1 + (t2 - t1) * 6 * t3
  					: 2 * t3 < 1
  						? t2
  						: 3 * t3 < 2
  							? t1 + (t2 - t1) * ((2 / 3) - t3) * 6
  							: t1;
  			}
  			return c;
  		},

  		'rgb-gray': function(r, g, b) {
  			return [r * 0.2989 + g * 0.587 + b * 0.114];
  		},

  		'gray-rgb': function(g) {
  			return [g, g, g];
  		},

  		'gray-hsb': function(g) {
  			return [0, 0, g];
  		},

  		'gray-hsl': function(g) {
  			return [0, 0, g];
  		},

  		'gradient-rgb': function() {
  			return [];
  		},

  		'rgb-gradient': function() {
  			return [];
  		}

  	};

  	return Base.each(types, function(properties, type) {
  		componentParsers[type] = [];
  		Base.each(properties, function(name, index) {
  			var part = Base.capitalize(name),
  				hasOverlap = /^(hue|saturation)$/.test(name),
  				parser = componentParsers[type][index] = type === 'gradient'
  					? name === 'gradient'
  						? function(value) {
  							var current = this._components[0];
  							value = Gradient.read(
  								Array.isArray(value)
  									? value
  									: arguments, 0, { readNull: true }
  							);
  							if (current !== value) {
  								if (current)
  									current._removeOwner(this);
  								if (value)
  									value._addOwner(this);
  							}
  							return value;
  						}
  						: function() {
  							return Point.read(arguments, 0, {
  									readNull: name === 'highlight',
  									clone: true
  							});
  						}
  					: function(value) {
  						return value == null || isNaN(value) ? 0 : +value;
  					};
  			this['get' + part] = function() {
  				return this._type === type
  					|| hasOverlap && /^hs[bl]$/.test(this._type)
  						? this._components[index]
  						: this._convert(type)[index];
  			};

  			this['set' + part] = function(value) {
  				if (this._type !== type
  						&& !(hasOverlap && /^hs[bl]$/.test(this._type))) {
  					this._components = this._convert(type);
  					this._properties = types[type];
  					this._type = type;
  				}
  				this._components[index] = parser.call(this, value);
  				this._changed();
  			};
  		}, this);
  	}, {
  		_class: 'Color',
  		_readIndex: true,

  		initialize: function Color(arg) {
  			var args = arguments,
  				reading = this.__read,
  				read = 0,
  				type,
  				components,
  				alpha,
  				values;
  			if (Array.isArray(arg)) {
  				args = arg;
  				arg = args[0];
  			}
  			var argType = arg != null && typeof arg;
  			if (argType === 'string' && arg in types) {
  				type = arg;
  				arg = args[1];
  				if (Array.isArray(arg)) {
  					components = arg;
  					alpha = args[2];
  				} else {
  					if (reading)
  						read = 1;
  					args = Base.slice(args, 1);
  					argType = typeof arg;
  				}
  			}
  			if (!components) {
  				values = argType === 'number'
  						? args
  						: argType === 'object' && arg.length != null
  							? arg
  							: null;
  				if (values) {
  					if (!type)
  						type = values.length >= 3
  								? 'rgb'
  								: 'gray';
  					var length = types[type].length;
  					alpha = values[length];
  					if (reading) {
  						read += values === arguments
  							? length + (alpha != null ? 1 : 0)
  							: 1;
  					}
  					if (values.length > length)
  						values = Base.slice(values, 0, length);
  				} else if (argType === 'string') {
  					var converted = fromCSS(arg);
  					type = converted[0];
  					components = converted[1];
  					if (components.length === 4) {
  						alpha = components[3];
  						components.length--;
  					}
  				} else if (argType === 'object') {
  					if (arg.constructor === Color) {
  						type = arg._type;
  						components = arg._components.slice();
  						alpha = arg._alpha;
  						if (type === 'gradient') {
  							for (var i = 1, l = components.length; i < l; i++) {
  								var point = components[i];
  								if (point)
  									components[i] = point.clone();
  							}
  						}
  					} else if (arg.constructor === Gradient) {
  						type = 'gradient';
  						values = args;
  					} else {
  						type = 'hue' in arg
  							? 'lightness' in arg
  								? 'hsl'
  								: 'hsb'
  							: 'gradient' in arg || 'stops' in arg
  									|| 'radial' in arg
  								? 'gradient'
  								: 'gray' in arg
  									? 'gray'
  									: 'rgb';
  						var properties = types[type],
  							parsers = componentParsers[type];
  						this._components = components = [];
  						for (var i = 0, l = properties.length; i < l; i++) {
  							var value = arg[properties[i]];
  							if (value == null && !i && type === 'gradient'
  									&& 'stops' in arg) {
  								value = {
  									stops: arg.stops,
  									radial: arg.radial
  								};
  							}
  							value = parsers[i].call(this, value);
  							if (value != null)
  								components[i] = value;
  						}
  						alpha = arg.alpha;
  					}
  				}
  				if (reading && type)
  					read = 1;
  			}
  			this._type = type || 'rgb';
  			if (!components) {
  				this._components = components = [];
  				var parsers = componentParsers[this._type];
  				for (var i = 0, l = parsers.length; i < l; i++) {
  					var value = parsers[i].call(this, values && values[i]);
  					if (value != null)
  						components[i] = value;
  				}
  			}
  			this._components = components;
  			this._properties = types[this._type];
  			this._alpha = alpha;
  			if (reading)
  				this.__read = read;
  			return this;
  		},

  		set: '#initialize',

  		_serialize: function(options, dictionary) {
  			var components = this.getComponents();
  			return Base.serialize(
  					/^(gray|rgb)$/.test(this._type)
  						? components
  						: [this._type].concat(components),
  					options, true, dictionary);
  		},

  		_changed: function() {
  			this._canvasStyle = null;
  			if (this._owner)
  				this._owner._changed(129);
  		},

  		_convert: function(type) {
  			var converter;
  			return this._type === type
  					? this._components.slice()
  					: (converter = converters[this._type + '-' + type])
  						? converter.apply(this, this._components)
  						: converters['rgb-' + type].apply(this,
  							converters[this._type + '-rgb'].apply(this,
  								this._components));
  		},

  		convert: function(type) {
  			return new Color(type, this._convert(type), this._alpha);
  		},

  		getType: function() {
  			return this._type;
  		},

  		setType: function(type) {
  			this._components = this._convert(type);
  			this._properties = types[type];
  			this._type = type;
  		},

  		getComponents: function() {
  			var components = this._components.slice();
  			if (this._alpha != null)
  				components.push(this._alpha);
  			return components;
  		},

  		getAlpha: function() {
  			return this._alpha != null ? this._alpha : 1;
  		},

  		setAlpha: function(alpha) {
  			this._alpha = alpha == null ? null : Math.min(Math.max(alpha, 0), 1);
  			this._changed();
  		},

  		hasAlpha: function() {
  			return this._alpha != null;
  		},

  		equals: function(color) {
  			var col = Base.isPlainValue(color, true)
  					? Color.read(arguments)
  					: color;
  			return col === this || col && this._class === col._class
  					&& this._type === col._type
  					&& this.getAlpha() === col.getAlpha()
  					&& Base.equals(this._components, col._components)
  					|| false;
  		},

  		toString: function() {
  			var properties = this._properties,
  				parts = [],
  				isGradient = this._type === 'gradient',
  				f = Formatter.instance;
  			for (var i = 0, l = properties.length; i < l; i++) {
  				var value = this._components[i];
  				if (value != null)
  					parts.push(properties[i] + ': '
  							+ (isGradient ? value : f.number(value)));
  			}
  			if (this._alpha != null)
  				parts.push('alpha: ' + f.number(this._alpha));
  			return '{ ' + parts.join(', ') + ' }';
  		},

  		toCSS: function(hex) {
  			var components = this._convert('rgb'),
  				alpha = hex || this._alpha == null ? 1 : this._alpha;
  			function convert(val) {
  				return Math.round((val < 0 ? 0 : val > 1 ? 1 : val) * 255);
  			}
  			components = [
  				convert(components[0]),
  				convert(components[1]),
  				convert(components[2])
  			];
  			if (alpha < 1)
  				components.push(alpha < 0 ? 0 : alpha);
  			return hex
  					? '#' + ((1 << 24) + (components[0] << 16)
  						+ (components[1] << 8)
  						+ components[2]).toString(16).slice(1)
  					: (components.length == 4 ? 'rgba(' : 'rgb(')
  						+ components.join(',') + ')';
  		},

  		toCanvasStyle: function(ctx, matrix) {
  			if (this._canvasStyle)
  				return this._canvasStyle;
  			if (this._type !== 'gradient')
  				return this._canvasStyle = this.toCSS();
  			var components = this._components,
  				gradient = components[0],
  				stops = gradient._stops,
  				origin = components[1],
  				destination = components[2],
  				highlight = components[3],
  				inverse = matrix && matrix.inverted(),
  				canvasGradient;
  			if (inverse) {
  				origin = inverse._transformPoint(origin);
  				destination = inverse._transformPoint(destination);
  				if (highlight)
  					highlight = inverse._transformPoint(highlight);
  			}
  			if (gradient._radial) {
  				var radius = destination.getDistance(origin);
  				if (highlight) {
  					var vector = highlight.subtract(origin);
  					if (vector.getLength() > radius)
  						highlight = origin.add(vector.normalize(radius - 0.1));
  				}
  				var start = highlight || origin;
  				canvasGradient = ctx.createRadialGradient(start.x, start.y,
  						0, origin.x, origin.y, radius);
  			} else {
  				canvasGradient = ctx.createLinearGradient(origin.x, origin.y,
  						destination.x, destination.y);
  			}
  			for (var i = 0, l = stops.length; i < l; i++) {
  				var stop = stops[i],
  					offset = stop._offset;
  				canvasGradient.addColorStop(
  						offset == null ? i / (l - 1) : offset,
  						stop._color.toCanvasStyle());
  			}
  			return this._canvasStyle = canvasGradient;
  		},

  		transform: function(matrix) {
  			if (this._type === 'gradient') {
  				var components = this._components;
  				for (var i = 1, l = components.length; i < l; i++) {
  					var point = components[i];
  					matrix._transformPoint(point, point, true);
  				}
  				this._changed();
  			}
  		},

  		statics: {
  			_types: types,

  			random: function() {
  				var random = Math.random;
  				return new Color(random(), random(), random());
  			}
  		}
  	});
  },
  new function() {
  	var operators = {
  		add: function(a, b) {
  			return a + b;
  		},

  		subtract: function(a, b) {
  			return a - b;
  		},

  		multiply: function(a, b) {
  			return a * b;
  		},

  		divide: function(a, b) {
  			return a / b;
  		}
  	};

  	return Base.each(operators, function(operator, name) {
  		this[name] = function(color) {
  			color = Color.read(arguments);
  			var type = this._type,
  				components1 = this._components,
  				components2 = color._convert(type);
  			for (var i = 0, l = components1.length; i < l; i++)
  				components2[i] = operator(components1[i], components2[i]);
  			return new Color(type, components2,
  					this._alpha != null
  							? operator(this._alpha, color.getAlpha())
  							: null);
  		};
  	}, {
  	});
  });

  var Gradient = Base.extend({
  	_class: 'Gradient',

  	initialize: function Gradient(stops, radial) {
  		this._id = UID.get();
  		if (stops && Base.isPlainObject(stops)) {
  			this.set(stops);
  			stops = radial = null;
  		}
  		if (this._stops == null) {
  			this.setStops(stops || ['white', 'black']);
  		}
  		if (this._radial == null) {
  			this.setRadial(typeof radial === 'string' && radial === 'radial'
  					|| radial || false);
  		}
  	},

  	_serialize: function(options, dictionary) {
  		return dictionary.add(this, function() {
  			return Base.serialize([this._stops, this._radial],
  					options, true, dictionary);
  		});
  	},

  	_changed: function() {
  		for (var i = 0, l = this._owners && this._owners.length; i < l; i++) {
  			this._owners[i]._changed();
  		}
  	},

  	_addOwner: function(color) {
  		if (!this._owners)
  			this._owners = [];
  		this._owners.push(color);
  	},

  	_removeOwner: function(color) {
  		var index = this._owners ? this._owners.indexOf(color) : -1;
  		if (index != -1) {
  			this._owners.splice(index, 1);
  			if (!this._owners.length)
  				this._owners = undefined;
  		}
  	},

  	clone: function() {
  		var stops = [];
  		for (var i = 0, l = this._stops.length; i < l; i++) {
  			stops[i] = this._stops[i].clone();
  		}
  		return new Gradient(stops, this._radial);
  	},

  	getStops: function() {
  		return this._stops;
  	},

  	setStops: function(stops) {
  		if (stops.length < 2) {
  			throw new Error(
  					'Gradient stop list needs to contain at least two stops.');
  		}
  		var _stops = this._stops;
  		if (_stops) {
  			for (var i = 0, l = _stops.length; i < l; i++)
  				_stops[i]._owner = undefined;
  		}
  		_stops = this._stops = GradientStop.readList(stops, 0, { clone: true });
  		for (var i = 0, l = _stops.length; i < l; i++)
  			_stops[i]._owner = this;
  		this._changed();
  	},

  	getRadial: function() {
  		return this._radial;
  	},

  	setRadial: function(radial) {
  		this._radial = radial;
  		this._changed();
  	},

  	equals: function(gradient) {
  		if (gradient === this)
  			return true;
  		if (gradient && this._class === gradient._class) {
  			var stops1 = this._stops,
  				stops2 = gradient._stops,
  				length = stops1.length;
  			if (length === stops2.length) {
  				for (var i = 0; i < length; i++) {
  					if (!stops1[i].equals(stops2[i]))
  						return false;
  				}
  				return true;
  			}
  		}
  		return false;
  	}
  });

  var GradientStop = Base.extend({
  	_class: 'GradientStop',

  	initialize: function GradientStop(arg0, arg1) {
  		var color = arg0,
  			offset = arg1;
  		if (typeof arg0 === 'object' && arg1 === undefined) {
  			if (Array.isArray(arg0) && typeof arg0[0] !== 'number') {
  				color = arg0[0];
  				offset = arg0[1];
  			} else if ('color' in arg0 || 'offset' in arg0
  					|| 'rampPoint' in arg0) {
  				color = arg0.color;
  				offset = arg0.offset || arg0.rampPoint || 0;
  			}
  		}
  		this.setColor(color);
  		this.setOffset(offset);
  	},

  	clone: function() {
  		return new GradientStop(this._color.clone(), this._offset);
  	},

  	_serialize: function(options, dictionary) {
  		var color = this._color,
  			offset = this._offset;
  		return Base.serialize(offset == null ? [color] : [color, offset],
  				options, true, dictionary);
  	},

  	_changed: function() {
  		if (this._owner)
  			this._owner._changed(129);
  	},

  	getOffset: function() {
  		return this._offset;
  	},

  	setOffset: function(offset) {
  		this._offset = offset;
  		this._changed();
  	},

  	getRampPoint: '#getOffset',
  	setRampPoint: '#setOffset',

  	getColor: function() {
  		return this._color;
  	},

  	setColor: function() {
  		var color = Color.read(arguments, 0, { clone: true });
  		if (color)
  			color._owner = this;
  		this._color = color;
  		this._changed();
  	},

  	equals: function(stop) {
  		return stop === this || stop && this._class === stop._class
  				&& this._color.equals(stop._color)
  				&& this._offset == stop._offset
  				|| false;
  	}
  });

  var Style = Base.extend(new function() {
  	var itemDefaults = {
  		fillColor: null,
  		fillRule: 'nonzero',
  		strokeColor: null,
  		strokeWidth: 1,
  		strokeCap: 'butt',
  		strokeJoin: 'miter',
  		strokeScaling: true,
  		miterLimit: 10,
  		dashOffset: 0,
  		dashArray: [],
  		shadowColor: null,
  		shadowBlur: 0,
  		shadowOffset: new Point(),
  		selectedColor: null
  	},
  	groupDefaults = Base.set({}, itemDefaults, {
  		fontFamily: 'sans-serif',
  		fontWeight: 'normal',
  		fontSize: 12,
  		leading: null,
  		justification: 'left'
  	}),
  	textDefaults = Base.set({}, groupDefaults, {
  		fillColor: new Color()
  	}),
  	flags = {
  		strokeWidth: 193,
  		strokeCap: 193,
  		strokeJoin: 193,
  		strokeScaling: 201,
  		miterLimit: 193,
  		fontFamily: 9,
  		fontWeight: 9,
  		fontSize: 9,
  		font: 9,
  		leading: 9,
  		justification: 9
  	},
  	item = {
  		beans: true
  	},
  	fields = {
  		_class: 'Style',
  		beans: true,

  		initialize: function Style(style, _owner, _project) {
  			this._values = {};
  			this._owner = _owner;
  			this._project = _owner && _owner._project || _project
  					|| paper.project;
  			this._defaults = !_owner || _owner instanceof Group ? groupDefaults
  					: _owner instanceof TextItem ? textDefaults
  					: itemDefaults;
  			if (style)
  				this.set(style);
  		}
  	};

  	Base.each(groupDefaults, function(value, key) {
  		var isColor = /Color$/.test(key),
  			isPoint = key === 'shadowOffset',
  			part = Base.capitalize(key),
  			flag = flags[key],
  			set = 'set' + part,
  			get = 'get' + part;

  		fields[set] = function(value) {
  			var owner = this._owner,
  				children = owner && owner._children,
  				applyToChildren = children && children.length > 0
  					&& !(owner instanceof CompoundPath);
  			if (applyToChildren) {
  				for (var i = 0, l = children.length; i < l; i++)
  					children[i]._style[set](value);
  			}
  			if ((key === 'selectedColor' || !applyToChildren)
  					&& key in this._defaults) {
  				var old = this._values[key];
  				if (old !== value) {
  					if (isColor) {
  						if (old && old._owner !== undefined) {
  							old._owner = undefined;
  							old._canvasStyle = null;
  						}
  						if (value && value.constructor === Color) {
  							if (value._owner)
  								value = value.clone();
  							value._owner = owner;
  						}
  					}
  					this._values[key] = value;
  					if (owner)
  						owner._changed(flag || 129);
  				}
  			}
  		};

  		fields[get] = function(_dontMerge) {
  			var owner = this._owner,
  				children = owner && owner._children,
  				value;
  			if (key in this._defaults && (!children || !children.length
  					|| _dontMerge || owner instanceof CompoundPath)) {
  				var value = this._values[key];
  				if (value === undefined) {
  					value = this._defaults[key];
  					if (value && value.clone)
  						value = value.clone();
  				} else {
  					var ctor = isColor ? Color : isPoint ? Point : null;
  					if (ctor && !(value && value.constructor === ctor)) {
  						this._values[key] = value = ctor.read([value], 0,
  								{ readNull: true, clone: true });
  						if (value && isColor)
  							value._owner = owner;
  					}
  				}
  			} else if (children) {
  				for (var i = 0, l = children.length; i < l; i++) {
  					var childValue = children[i]._style[get]();
  					if (!i) {
  						value = childValue;
  					} else if (!Base.equals(value, childValue)) {
  						return undefined;
  					}
  				}
  			}
  			return value;
  		};

  		item[get] = function(_dontMerge) {
  			return this._style[get](_dontMerge);
  		};

  		item[set] = function(value) {
  			this._style[set](value);
  		};
  	});

  	Base.each({
  		Font: 'FontFamily',
  		WindingRule: 'FillRule'
  	}, function(value, key) {
  		var get = 'get' + key,
  			set = 'set' + key;
  		fields[get] = item[get] = '#get' + value;
  		fields[set] = item[set] = '#set' + value;
  	});

  	Item.inject(item);
  	return fields;
  }, {
  	set: function(style) {
  		var isStyle = style instanceof Style,
  			values = isStyle ? style._values : style;
  		if (values) {
  			for (var key in values) {
  				if (key in this._defaults) {
  					var value = values[key];
  					this[key] = value && isStyle && value.clone
  							? value.clone() : value;
  				}
  			}
  		}
  	},

  	equals: function(style) {
  		function compare(style1, style2, secondary) {
  			var values1 = style1._values,
  				values2 = style2._values,
  				defaults2 = style2._defaults;
  			for (var key in values1) {
  				var value1 = values1[key],
  					value2 = values2[key];
  				if (!(secondary && key in values2) && !Base.equals(value1,
  						value2 === undefined ? defaults2[key] : value2))
  					return false;
  			}
  			return true;
  		}

  		return style === this || style && this._class === style._class
  				&& compare(this, style)
  				&& compare(style, this, true)
  				|| false;
  	},

  	_dispose: function() {
  		var color;
  		color = this.getFillColor();
  		if (color) color._canvasStyle = null;
  		color = this.getStrokeColor();
  		if (color) color._canvasStyle = null;
  		color = this.getShadowColor();
  		if (color) color._canvasStyle = null;
  	},

  	hasFill: function() {
  		var color = this.getFillColor();
  		return !!color && color.alpha > 0;
  	},

  	hasStroke: function() {
  		var color = this.getStrokeColor();
  		return !!color && color.alpha > 0 && this.getStrokeWidth() > 0;
  	},

  	hasShadow: function() {
  		var color = this.getShadowColor();
  		return !!color && color.alpha > 0 && (this.getShadowBlur() > 0
  				|| !this.getShadowOffset().isZero());
  	},

  	getView: function() {
  		return this._project._view;
  	},

  	getFontStyle: function() {
  		var fontSize = this.getFontSize();
  		return this.getFontWeight()
  				+ ' ' + fontSize + (/[a-z]/i.test(fontSize + '') ? ' ' : 'px ')
  				+ this.getFontFamily();
  	},

  	getFont: '#getFontFamily',
  	setFont: '#setFontFamily',

  	getLeading: function getLeading() {
  		var leading = getLeading.base.call(this),
  			fontSize = this.getFontSize();
  		if (/pt|em|%|px/.test(fontSize))
  			fontSize = this.getView().getPixelSize(fontSize);
  		return leading != null ? leading : fontSize * 1.2;
  	}

  });

  var DomElement = new function() {
  	function handlePrefix(el, name, set, value) {
  		var prefixes = ['', 'webkit', 'moz', 'Moz', 'ms', 'o'],
  			suffix = name[0].toUpperCase() + name.substring(1);
  		for (var i = 0; i < 6; i++) {
  			var prefix = prefixes[i],
  				key = prefix ? prefix + suffix : name;
  			if (key in el) {
  				if (set) {
  					el[key] = value;
  				} else {
  					return el[key];
  				}
  				break;
  			}
  		}
  	}

  	return {
  		getStyles: function(el) {
  			var doc = el && el.nodeType !== 9 ? el.ownerDocument : el,
  				view = doc && doc.defaultView;
  			return view && view.getComputedStyle(el, '');
  		},

  		getBounds: function(el, viewport) {
  			var doc = el.ownerDocument,
  				body = doc.body,
  				html = doc.documentElement,
  				rect;
  			try {
  				rect = el.getBoundingClientRect();
  			} catch (e) {
  				rect = { left: 0, top: 0, width: 0, height: 0 };
  			}
  			var x = rect.left - (html.clientLeft || body.clientLeft || 0),
  				y = rect.top - (html.clientTop || body.clientTop || 0);
  			if (!viewport) {
  				var view = doc.defaultView;
  				x += view.pageXOffset || html.scrollLeft || body.scrollLeft;
  				y += view.pageYOffset || html.scrollTop || body.scrollTop;
  			}
  			return new Rectangle(x, y, rect.width, rect.height);
  		},

  		getViewportBounds: function(el) {
  			var doc = el.ownerDocument,
  				view = doc.defaultView,
  				html = doc.documentElement;
  			return new Rectangle(0, 0,
  				view.innerWidth || html.clientWidth,
  				view.innerHeight || html.clientHeight
  			);
  		},

  		getOffset: function(el, viewport) {
  			return DomElement.getBounds(el, viewport).getPoint();
  		},

  		getSize: function(el) {
  			return DomElement.getBounds(el, true).getSize();
  		},

  		isInvisible: function(el) {
  			return DomElement.getSize(el).equals(new Size(0, 0));
  		},

  		isInView: function(el) {
  			return !DomElement.isInvisible(el)
  					&& DomElement.getViewportBounds(el).intersects(
  						DomElement.getBounds(el, true));
  		},

  		isInserted: function(el) {
  			return document.body.contains(el);
  		},

  		getPrefixed: function(el, name) {
  			return el && handlePrefix(el, name);
  		},

  		setPrefixed: function(el, name, value) {
  			if (typeof name === 'object') {
  				for (var key in name)
  					handlePrefix(el, key, true, name[key]);
  			} else {
  				handlePrefix(el, name, true, value);
  			}
  		}
  	};
  };

  var DomEvent = {
  	add: function(el, events) {
  		if (el) {
  			for (var type in events) {
  				var func = events[type],
  					parts = type.split(/[\s,]+/g);
  				for (var i = 0, l = parts.length; i < l; i++) {
  					var name = parts[i];
  					var options = (
  						el === document
  						&& (name === 'touchstart' || name === 'touchmove')
  					) ? { passive: false } : false;
  					el.addEventListener(name, func, options);
  				}
  			}
  		}
  	},

  	remove: function(el, events) {
  		if (el) {
  			for (var type in events) {
  				var func = events[type],
  					parts = type.split(/[\s,]+/g);
  				for (var i = 0, l = parts.length; i < l; i++)
  					el.removeEventListener(parts[i], func, false);
  			}
  		}
  	},

  	getPoint: function(event) {
  		var pos = event.targetTouches
  				? event.targetTouches.length
  					? event.targetTouches[0]
  					: event.changedTouches[0]
  				: event;
  		return new Point(
  			pos.pageX || pos.clientX + document.documentElement.scrollLeft,
  			pos.pageY || pos.clientY + document.documentElement.scrollTop
  		);
  	},

  	getTarget: function(event) {
  		return event.target || event.srcElement;
  	},

  	getRelatedTarget: function(event) {
  		return event.relatedTarget || event.toElement;
  	},

  	getOffset: function(event, target) {
  		return DomEvent.getPoint(event).subtract(DomElement.getOffset(
  				target || DomEvent.getTarget(event)));
  	}
  };

  DomEvent.requestAnimationFrame = new function() {
  	var nativeRequest = DomElement.getPrefixed(window, 'requestAnimationFrame'),
  		requested = false,
  		callbacks = [],
  		timer;

  	function handleCallbacks() {
  		var functions = callbacks;
  		callbacks = [];
  		for (var i = 0, l = functions.length; i < l; i++)
  			functions[i]();
  		requested = nativeRequest && callbacks.length;
  		if (requested)
  			nativeRequest(handleCallbacks);
  	}

  	return function(callback) {
  		callbacks.push(callback);
  		if (nativeRequest) {
  			if (!requested) {
  				nativeRequest(handleCallbacks);
  				requested = true;
  			}
  		} else if (!timer) {
  			timer = setInterval(handleCallbacks, 1000 / 60);
  		}
  	};
  };

  var View = Base.extend(Emitter, {
  	_class: 'View',

  	initialize: function View(project, element) {

  		function getSize(name) {
  			return element[name] || parseInt(element.getAttribute(name), 10);
  		}

  		function getCanvasSize() {
  			var size = DomElement.getSize(element);
  			return size.isNaN() || size.isZero()
  					? new Size(getSize('width'), getSize('height'))
  					: size;
  		}

  		var size;
  		if (window && element) {
  			this._id = element.getAttribute('id');
  			if (this._id == null)
  				element.setAttribute('id', this._id = 'view-' + View._id++);
  			DomEvent.add(element, this._viewEvents);
  			var none = 'none';
  			DomElement.setPrefixed(element.style, {
  				userDrag: none,
  				userSelect: none,
  				touchCallout: none,
  				contentZooming: none,
  				tapHighlightColor: 'rgba(0,0,0,0)'
  			});

  			if (PaperScope.hasAttribute(element, 'resize')) {
  				var that = this;
  				DomEvent.add(window, this._windowEvents = {
  					resize: function() {
  						that.setViewSize(getCanvasSize());
  					}
  				});
  			}

  			size = getCanvasSize();

  			if (PaperScope.hasAttribute(element, 'stats')
  					&& typeof Stats !== 'undefined') {
  				this._stats = new Stats();
  				var stats = this._stats.domElement,
  					style = stats.style,
  					offset = DomElement.getOffset(element);
  				style.position = 'absolute';
  				style.left = offset.x + 'px';
  				style.top = offset.y + 'px';
  				document.body.appendChild(stats);
  			}
  		} else {
  			size = new Size(element);
  			element = null;
  		}
  		this._project = project;
  		this._scope = project._scope;
  		this._element = element;
  		if (!this._pixelRatio)
  			this._pixelRatio = window && window.devicePixelRatio || 1;
  		this._setElementSize(size.width, size.height);
  		this._viewSize = size;
  		View._views.push(this);
  		View._viewsById[this._id] = this;
  		(this._matrix = new Matrix())._owner = this;
  		if (!View._focused)
  			View._focused = this;
  		this._frameItems = {};
  		this._frameItemCount = 0;
  		this._itemEvents = { native: {}, virtual: {} };
  		this._autoUpdate = !paper.agent.node;
  		this._needsUpdate = false;
  	},

  	remove: function() {
  		if (!this._project)
  			return false;
  		if (View._focused === this)
  			View._focused = null;
  		View._views.splice(View._views.indexOf(this), 1);
  		delete View._viewsById[this._id];
  		var project = this._project;
  		if (project._view === this)
  			project._view = null;
  		DomEvent.remove(this._element, this._viewEvents);
  		DomEvent.remove(window, this._windowEvents);
  		this._element = this._project = null;
  		this.off('frame');
  		this._animate = false;
  		this._frameItems = {};
  		return true;
  	},

  	_events: Base.each(
  		Item._itemHandlers.concat(['onResize', 'onKeyDown', 'onKeyUp']),
  		function(name) {
  			this[name] = {};
  		}, {
  			onFrame: {
  				install: function() {
  					this.play();
  				},

  				uninstall: function() {
  					this.pause();
  				}
  			}
  		}
  	),

  	_animate: false,
  	_time: 0,
  	_count: 0,

  	getAutoUpdate: function() {
  		return this._autoUpdate;
  	},

  	setAutoUpdate: function(autoUpdate) {
  		this._autoUpdate = autoUpdate;
  		if (autoUpdate)
  			this.requestUpdate();
  	},

  	update: function() {
  	},

  	draw: function() {
  		this.update();
  	},

  	requestUpdate: function() {
  		if (!this._requested) {
  			var that = this;
  			DomEvent.requestAnimationFrame(function() {
  				that._requested = false;
  				if (that._animate) {
  					that.requestUpdate();
  					var element = that._element;
  					if ((!DomElement.getPrefixed(document, 'hidden')
  							|| PaperScope.getAttribute(element, 'keepalive')
  								=== 'true') && DomElement.isInView(element)) {
  						that._handleFrame();
  					}
  				}
  				if (that._autoUpdate)
  					that.update();
  			});
  			this._requested = true;
  		}
  	},

  	play: function() {
  		this._animate = true;
  		this.requestUpdate();
  	},

  	pause: function() {
  		this._animate = false;
  	},

  	_handleFrame: function() {
  		paper = this._scope;
  		var now = Date.now() / 1000,
  			delta = this._last ? now - this._last : 0;
  		this._last = now;
  		this.emit('frame', new Base({
  			delta: delta,
  			time: this._time += delta,
  			count: this._count++
  		}));
  		if (this._stats)
  			this._stats.update();
  	},

  	_animateItem: function(item, animate) {
  		var items = this._frameItems;
  		if (animate) {
  			items[item._id] = {
  				item: item,
  				time: 0,
  				count: 0
  			};
  			if (++this._frameItemCount === 1)
  				this.on('frame', this._handleFrameItems);
  		} else {
  			delete items[item._id];
  			if (--this._frameItemCount === 0) {
  				this.off('frame', this._handleFrameItems);
  			}
  		}
  	},

  	_handleFrameItems: function(event) {
  		for (var i in this._frameItems) {
  			var entry = this._frameItems[i];
  			entry.item.emit('frame', new Base(event, {
  				time: entry.time += event.delta,
  				count: entry.count++
  			}));
  		}
  	},

  	_changed: function() {
  		this._project._changed(4097);
  		this._bounds = this._decomposed = undefined;
  	},

  	getElement: function() {
  		return this._element;
  	},

  	getPixelRatio: function() {
  		return this._pixelRatio;
  	},

  	getResolution: function() {
  		return this._pixelRatio * 72;
  	},

  	getViewSize: function() {
  		var size = this._viewSize;
  		return new LinkedSize(size.width, size.height, this, 'setViewSize');
  	},

  	setViewSize: function() {
  		var size = Size.read(arguments),
  			delta = size.subtract(this._viewSize);
  		if (delta.isZero())
  			return;
  		this._setElementSize(size.width, size.height);
  		this._viewSize.set(size);
  		this._changed();
  		this.emit('resize', { size: size, delta: delta });
  		if (this._autoUpdate) {
  			this.update();
  		}
  	},

  	_setElementSize: function(width, height) {
  		var element = this._element;
  		if (element) {
  			if (element.width !== width)
  				element.width = width;
  			if (element.height !== height)
  				element.height = height;
  		}
  	},

  	getBounds: function() {
  		if (!this._bounds)
  			this._bounds = this._matrix.inverted()._transformBounds(
  					new Rectangle(new Point(), this._viewSize));
  		return this._bounds;
  	},

  	getSize: function() {
  		return this.getBounds().getSize();
  	},

  	isVisible: function() {
  		return DomElement.isInView(this._element);
  	},

  	isInserted: function() {
  		return DomElement.isInserted(this._element);
  	},

  	getPixelSize: function(size) {
  		var element = this._element,
  			pixels;
  		if (element) {
  			var parent = element.parentNode,
  				temp = document.createElement('div');
  			temp.style.fontSize = size;
  			parent.appendChild(temp);
  			pixels = parseFloat(DomElement.getStyles(temp).fontSize);
  			parent.removeChild(temp);
  		} else {
  			pixels = parseFloat(pixels);
  		}
  		return pixels;
  	},

  	getTextWidth: function(font, lines) {
  		return 0;
  	}
  }, Base.each(['rotate', 'scale', 'shear', 'skew'], function(key) {
  	var rotate = key === 'rotate';
  	this[key] = function() {
  		var value = (rotate ? Base : Point).read(arguments),
  			center = Point.read(arguments, 0, { readNull: true });
  		return this.transform(new Matrix()[key](value,
  				center || this.getCenter(true)));
  	};
  }, {
  	_decompose: function() {
  		return this._decomposed || (this._decomposed = this._matrix.decompose());
  	},

  	translate: function() {
  		var mx = new Matrix();
  		return this.transform(mx.translate.apply(mx, arguments));
  	},

  	getCenter: function() {
  		return this.getBounds().getCenter();
  	},

  	setCenter: function() {
  		var center = Point.read(arguments);
  		this.translate(this.getCenter().subtract(center));
  	},

  	getZoom: function() {
  		var scaling = this._decompose().scaling;
  		return (scaling.x + scaling.y) / 2;
  	},

  	setZoom: function(zoom) {
  		this.transform(new Matrix().scale(zoom / this.getZoom(),
  			this.getCenter()));
  	},

  	getRotation: function() {
  		return this._decompose().rotation;
  	},

  	setRotation: function(rotation) {
  		var current = this.getRotation();
  		if (current != null && rotation != null) {
  			this.rotate(rotation - current);
  		}
  	},

  	getScaling: function() {
  		var scaling = this._decompose().scaling;
  		return new LinkedPoint(scaling.x, scaling.y, this, 'setScaling');
  	},

  	setScaling: function() {
  		var current = this.getScaling(),
  			scaling = Point.read(arguments, 0, { clone: true, readNull: true });
  		if (current && scaling) {
  			this.scale(scaling.x / current.x, scaling.y / current.y);
  		}
  	},

  	getMatrix: function() {
  		return this._matrix;
  	},

  	setMatrix: function() {
  		var matrix = this._matrix;
  		matrix.initialize.apply(matrix, arguments);
  	},

  	transform: function(matrix) {
  		this._matrix.append(matrix);
  	},

  	scrollBy: function() {
  		this.translate(Point.read(arguments).negate());
  	}
  }), {

  	projectToView: function() {
  		return this._matrix._transformPoint(Point.read(arguments));
  	},

  	viewToProject: function() {
  		return this._matrix._inverseTransform(Point.read(arguments));
  	},

  	getEventPoint: function(event) {
  		return this.viewToProject(DomEvent.getOffset(event, this._element));
  	},

  }, {
  	statics: {
  		_views: [],
  		_viewsById: {},
  		_id: 0,

  		create: function(project, element) {
  			if (document && typeof element === 'string')
  				element = document.getElementById(element);
  			var ctor = window ? CanvasView : View;
  			return new ctor(project, element);
  		}
  	}
  },
  new function() {
  	if (!window)
  		return;
  	var prevFocus,
  		tempFocus,
  		dragging = false,
  		mouseDown = false;

  	function getView(event) {
  		var target = DomEvent.getTarget(event);
  		return target.getAttribute && View._viewsById[
  				target.getAttribute('id')];
  	}

  	function updateFocus() {
  		var view = View._focused;
  		if (!view || !view.isVisible()) {
  			for (var i = 0, l = View._views.length; i < l; i++) {
  				if ((view = View._views[i]).isVisible()) {
  					View._focused = tempFocus = view;
  					break;
  				}
  			}
  		}
  	}

  	function handleMouseMove(view, event, point) {
  		view._handleMouseEvent('mousemove', event, point);
  	}

  	var navigator = window.navigator,
  		mousedown, mousemove, mouseup;
  	if (navigator.pointerEnabled || navigator.msPointerEnabled) {
  		mousedown = 'pointerdown MSPointerDown';
  		mousemove = 'pointermove MSPointerMove';
  		mouseup = 'pointerup pointercancel MSPointerUp MSPointerCancel';
  	} else {
  		mousedown = 'touchstart';
  		mousemove = 'touchmove';
  		mouseup = 'touchend touchcancel';
  		if (!('ontouchstart' in window && navigator.userAgent.match(
  				/mobile|tablet|ip(ad|hone|od)|android|silk/i))) {
  			mousedown += ' mousedown';
  			mousemove += ' mousemove';
  			mouseup += ' mouseup';
  		}
  	}

  	var viewEvents = {},
  		docEvents = {
  			mouseout: function(event) {
  				var view = View._focused,
  					target = DomEvent.getRelatedTarget(event);
  				if (view && (!target || target.nodeName === 'HTML')) {
  					var offset = DomEvent.getOffset(event, view._element),
  						x = offset.x,
  						abs = Math.abs,
  						ax = abs(x),
  						max = 1 << 25,
  						diff = ax - max;
  					offset.x = abs(diff) < ax ? diff * (x < 0 ? -1 : 1) : x;
  					handleMouseMove(view, event, view.viewToProject(offset));
  				}
  			},

  			scroll: updateFocus
  		};

  	viewEvents[mousedown] = function(event) {
  		var view = View._focused = getView(event);
  		if (!dragging) {
  			dragging = true;
  			view._handleMouseEvent('mousedown', event);
  		}
  	};

  	docEvents[mousemove] = function(event) {
  		var view = View._focused;
  		if (!mouseDown) {
  			var target = getView(event);
  			if (target) {
  				if (view !== target) {
  					if (view)
  						handleMouseMove(view, event);
  					if (!prevFocus)
  						prevFocus = view;
  					view = View._focused = tempFocus = target;
  				}
  			} else if (tempFocus && tempFocus === view) {
  				if (prevFocus && !prevFocus.isInserted())
  					prevFocus = null;
  				view = View._focused = prevFocus;
  				prevFocus = null;
  				updateFocus();
  			}
  		}
  		if (view)
  			handleMouseMove(view, event);
  	};

  	docEvents[mousedown] = function() {
  		mouseDown = true;
  	};

  	docEvents[mouseup] = function(event) {
  		var view = View._focused;
  		if (view && dragging)
  			view._handleMouseEvent('mouseup', event);
  		mouseDown = dragging = false;
  	};

  	DomEvent.add(document, docEvents);

  	DomEvent.add(window, {
  		load: updateFocus
  	});

  	var called = false,
  		prevented = false,
  		fallbacks = {
  			doubleclick: 'click',
  			mousedrag: 'mousemove'
  		},
  		wasInView = false,
  		overView,
  		downPoint,
  		lastPoint,
  		downItem,
  		overItem,
  		dragItem,
  		clickItem,
  		clickTime,
  		dblClick;

  	function emitMouseEvent(obj, target, type, event, point, prevPoint,
  			stopItem) {
  		var stopped = false,
  			mouseEvent;

  		function emit(obj, type) {
  			if (obj.responds(type)) {
  				if (!mouseEvent) {
  					mouseEvent = new MouseEvent(type, event, point,
  							target || obj,
  							prevPoint ? point.subtract(prevPoint) : null);
  				}
  				if (obj.emit(type, mouseEvent)) {
  					called = true;
  					if (mouseEvent.prevented)
  						prevented = true;
  					if (mouseEvent.stopped)
  						return stopped = true;
  				}
  			} else {
  				var fallback = fallbacks[type];
  				if (fallback)
  					return emit(obj, fallback);
  			}
  		}

  		while (obj && obj !== stopItem) {
  			if (emit(obj, type))
  				break;
  			obj = obj._parent;
  		}
  		return stopped;
  	}

  	function emitMouseEvents(view, hitItem, type, event, point, prevPoint) {
  		view._project.removeOn(type);
  		prevented = called = false;
  		return (dragItem && emitMouseEvent(dragItem, null, type, event,
  					point, prevPoint)
  			|| hitItem && hitItem !== dragItem
  				&& !hitItem.isDescendant(dragItem)
  				&& emitMouseEvent(hitItem, null, type === 'mousedrag' ?
  					'mousemove' : type, event, point, prevPoint, dragItem)
  			|| emitMouseEvent(view, dragItem || hitItem || view, type, event,
  					point, prevPoint));
  	}

  	var itemEventsMap = {
  		mousedown: {
  			mousedown: 1,
  			mousedrag: 1,
  			click: 1,
  			doubleclick: 1
  		},
  		mouseup: {
  			mouseup: 1,
  			mousedrag: 1,
  			click: 1,
  			doubleclick: 1
  		},
  		mousemove: {
  			mousedrag: 1,
  			mousemove: 1,
  			mouseenter: 1,
  			mouseleave: 1
  		}
  	};

  	return {
  		_viewEvents: viewEvents,

  		_handleMouseEvent: function(type, event, point) {
  			var itemEvents = this._itemEvents,
  				hitItems = itemEvents.native[type],
  				nativeMove = type === 'mousemove',
  				tool = this._scope.tool,
  				view = this;

  			function responds(type) {
  				return itemEvents.virtual[type] || view.responds(type)
  						|| tool && tool.responds(type);
  			}

  			if (nativeMove && dragging && responds('mousedrag'))
  				type = 'mousedrag';
  			if (!point)
  				point = this.getEventPoint(event);

  			var inView = this.getBounds().contains(point),
  				hit = hitItems && inView && view._project.hitTest(point, {
  					tolerance: 0,
  					fill: true,
  					stroke: true
  				}),
  				hitItem = hit && hit.item || null,
  				handle = false,
  				mouse = {};
  			mouse[type.substr(5)] = true;

  			if (hitItems && hitItem !== overItem) {
  				if (overItem) {
  					emitMouseEvent(overItem, null, 'mouseleave', event, point);
  				}
  				if (hitItem) {
  					emitMouseEvent(hitItem, null, 'mouseenter', event, point);
  				}
  				overItem = hitItem;
  			}
  			if (wasInView ^ inView) {
  				emitMouseEvent(this, null, inView ? 'mouseenter' : 'mouseleave',
  						event, point);
  				overView = inView ? this : null;
  				handle = true;
  			}
  			if ((inView || mouse.drag) && !point.equals(lastPoint)) {
  				emitMouseEvents(this, hitItem, nativeMove ? type : 'mousemove',
  						event, point, lastPoint);
  				handle = true;
  			}
  			wasInView = inView;
  			if (mouse.down && inView || mouse.up && downPoint) {
  				emitMouseEvents(this, hitItem, type, event, point, downPoint);
  				if (mouse.down) {
  					dblClick = hitItem === clickItem
  						&& (Date.now() - clickTime < 300);
  					downItem = clickItem = hitItem;
  					if (!prevented && hitItem) {
  						var item = hitItem;
  						while (item && !item.responds('mousedrag'))
  							item = item._parent;
  						if (item)
  							dragItem = hitItem;
  					}
  					downPoint = point;
  				} else if (mouse.up) {
  					if (!prevented && hitItem === downItem) {
  						clickTime = Date.now();
  						emitMouseEvents(this, hitItem, dblClick ? 'doubleclick'
  								: 'click', event, point, downPoint);
  						dblClick = false;
  					}
  					downItem = dragItem = null;
  				}
  				wasInView = false;
  				handle = true;
  			}
  			lastPoint = point;
  			if (handle && tool) {
  				called = tool._handleMouseEvent(type, event, point, mouse)
  					|| called;
  			}

  			if (
  				event.cancelable !== false
  				&& (called && !mouse.move || mouse.down && responds('mouseup'))
  			) {
  				event.preventDefault();
  			}
  		},

  		_handleKeyEvent: function(type, event, key, character) {
  			var scope = this._scope,
  				tool = scope.tool,
  				keyEvent;

  			function emit(obj) {
  				if (obj.responds(type)) {
  					paper = scope;
  					obj.emit(type, keyEvent = keyEvent
  							|| new KeyEvent(type, event, key, character));
  				}
  			}

  			if (this.isVisible()) {
  				emit(this);
  				if (tool && tool.responds(type))
  					emit(tool);
  			}
  		},

  		_countItemEvent: function(type, sign) {
  			var itemEvents = this._itemEvents,
  				native = itemEvents.native,
  				virtual = itemEvents.virtual;
  			for (var key in itemEventsMap) {
  				native[key] = (native[key] || 0)
  						+ (itemEventsMap[key][type] || 0) * sign;
  			}
  			virtual[type] = (virtual[type] || 0) + sign;
  		},

  		statics: {
  			updateFocus: updateFocus,

  			_resetState: function() {
  				dragging = mouseDown = called = wasInView = false;
  				prevFocus = tempFocus = overView = downPoint = lastPoint =
  					downItem = overItem = dragItem = clickItem = clickTime =
  					dblClick = null;
  			}
  		}
  	};
  });

  var CanvasView = View.extend({
  	_class: 'CanvasView',

  	initialize: function CanvasView(project, canvas) {
  		if (!(canvas instanceof window.HTMLCanvasElement)) {
  			var size = Size.read(arguments, 1);
  			if (size.isZero())
  				throw new Error(
  						'Cannot create CanvasView with the provided argument: '
  						+ Base.slice(arguments, 1));
  			canvas = CanvasProvider.getCanvas(size);
  		}
  		var ctx = this._context = canvas.getContext('2d');
  		ctx.save();
  		this._pixelRatio = 1;
  		if (!/^off|false$/.test(PaperScope.getAttribute(canvas, 'hidpi'))) {
  			var deviceRatio = window.devicePixelRatio || 1,
  				backingStoreRatio = DomElement.getPrefixed(ctx,
  						'backingStorePixelRatio') || 1;
  			this._pixelRatio = deviceRatio / backingStoreRatio;
  		}
  		View.call(this, project, canvas);
  		this._needsUpdate = true;
  	},

  	remove: function remove() {
  		this._context.restore();
  		return remove.base.call(this);
  	},

  	_setElementSize: function _setElementSize(width, height) {
  		var pixelRatio = this._pixelRatio;
  		_setElementSize.base.call(this, width * pixelRatio, height * pixelRatio);
  		if (pixelRatio !== 1) {
  			var element = this._element,
  				ctx = this._context;
  			if (!PaperScope.hasAttribute(element, 'resize')) {
  				var style = element.style;
  				style.width = width + 'px';
  				style.height = height + 'px';
  			}
  			ctx.restore();
  			ctx.save();
  			ctx.scale(pixelRatio, pixelRatio);
  		}
  	},

  	getPixelSize: function getPixelSize(size) {
  		var agent = paper.agent,
  			pixels;
  		if (agent && agent.firefox) {
  			pixels = getPixelSize.base.call(this, size);
  		} else {
  			var ctx = this._context,
  				prevFont = ctx.font;
  			ctx.font = size + ' serif';
  			pixels = parseFloat(ctx.font);
  			ctx.font = prevFont;
  		}
  		return pixels;
  	},

  	getTextWidth: function(font, lines) {
  		var ctx = this._context,
  			prevFont = ctx.font,
  			width = 0;
  		ctx.font = font;
  		for (var i = 0, l = lines.length; i < l; i++)
  			width = Math.max(width, ctx.measureText(lines[i]).width);
  		ctx.font = prevFont;
  		return width;
  	},

  	update: function() {
  		if (!this._needsUpdate)
  			return false;
  		var project = this._project,
  			ctx = this._context,
  			size = this._viewSize;
  		ctx.clearRect(0, 0, size.width + 1, size.height + 1);
  		if (project)
  			project.draw(ctx, this._matrix, this._pixelRatio);
  		this._needsUpdate = false;
  		return true;
  	}
  });

  var Event = Base.extend({
  	_class: 'Event',

  	initialize: function Event(event) {
  		this.event = event;
  		this.type = event && event.type;
  	},

  	prevented: false,
  	stopped: false,

  	preventDefault: function() {
  		this.prevented = true;
  		this.event.preventDefault();
  	},

  	stopPropagation: function() {
  		this.stopped = true;
  		this.event.stopPropagation();
  	},

  	stop: function() {
  		this.stopPropagation();
  		this.preventDefault();
  	},

  	getTimeStamp: function() {
  		return this.event.timeStamp;
  	},

  	getModifiers: function() {
  		return Key.modifiers;
  	}
  });

  var KeyEvent = Event.extend({
  	_class: 'KeyEvent',

  	initialize: function KeyEvent(type, event, key, character) {
  		this.type = type;
  		this.event = event;
  		this.key = key;
  		this.character = character;
  	},

  	toString: function() {
  		return "{ type: '" + this.type
  				+ "', key: '" + this.key
  				+ "', character: '" + this.character
  				+ "', modifiers: " + this.getModifiers()
  				+ " }";
  	}
  });

  var Key = new function() {
  	var keyLookup = {
  			'\t': 'tab',
  			' ': 'space',
  			'\b': 'backspace',
  			'\x7f': 'delete',
  			'Spacebar': 'space',
  			'Del': 'delete',
  			'Win': 'meta',
  			'Esc': 'escape'
  		},

  		charLookup = {
  			'tab': '\t',
  			'space': ' ',
  			'enter': '\r'
  		},

  		keyMap = {},
  		charMap = {},
  		metaFixMap,
  		downKey,

  		modifiers = new Base({
  			shift: false,
  			control: false,
  			alt: false,
  			meta: false,
  			capsLock: false,
  			space: false
  		}).inject({
  			option: {
  				get: function() {
  					return this.alt;
  				}
  			},

  			command: {
  				get: function() {
  					var agent = paper && paper.agent;
  					return agent && agent.mac ? this.meta : this.control;
  				}
  			}
  		});

  	function getKey(event) {
  		var key = event.key || event.keyIdentifier;
  		key = /^U\+/.test(key)
  				? String.fromCharCode(parseInt(key.substr(2), 16))
  				: /^Arrow[A-Z]/.test(key) ? key.substr(5)
  				: key === 'Unidentified'  || key === undefined
  					? String.fromCharCode(event.keyCode)
  					: key;
  		return keyLookup[key] ||
  				(key.length > 1 ? Base.hyphenate(key) : key.toLowerCase());
  	}

  	function handleKey(down, key, character, event) {
  		var view = View._focused,
  			name;
  		keyMap[key] = down;
  		if (down) {
  			charMap[key] = character;
  		} else {
  			delete charMap[key];
  		}
  		if (key.length > 1 && (name = Base.camelize(key)) in modifiers) {
  			modifiers[name] = down;
  			var agent = paper && paper.agent;
  			if (name === 'meta' && agent && agent.mac) {
  				if (down) {
  					metaFixMap = {};
  				} else {
  					for (var k in metaFixMap) {
  						if (k in charMap)
  							handleKey(false, k, metaFixMap[k], event);
  					}
  					metaFixMap = null;
  				}
  			}
  		} else if (down && metaFixMap) {
  			metaFixMap[key] = character;
  		}
  		if (view) {
  			view._handleKeyEvent(down ? 'keydown' : 'keyup', event, key,
  					character);
  		}
  	}

  	DomEvent.add(document, {
  		keydown: function(event) {
  			var key = getKey(event),
  				agent = paper && paper.agent;
  			if (key.length > 1 || agent && (agent.chrome && (event.altKey
  						|| agent.mac && event.metaKey
  						|| !agent.mac && event.ctrlKey))) {
  				handleKey(true, key,
  						charLookup[key] || (key.length > 1 ? '' : key), event);
  			} else {
  				downKey = key;
  			}
  		},

  		keypress: function(event) {
  			if (downKey) {
  				var key = getKey(event),
  					code = event.charCode,
  					character = code >= 32 ? String.fromCharCode(code)
  						: key.length > 1 ? '' : key;
  				if (key !== downKey) {
  					key = character.toLowerCase();
  				}
  				handleKey(true, key, character, event);
  				downKey = null;
  			}
  		},

  		keyup: function(event) {
  			var key = getKey(event);
  			if (key in charMap)
  				handleKey(false, key, charMap[key], event);
  		}
  	});

  	DomEvent.add(window, {
  		blur: function(event) {
  			for (var key in charMap)
  				handleKey(false, key, charMap[key], event);
  		}
  	});

  	return {
  		modifiers: modifiers,

  		isDown: function(key) {
  			return !!keyMap[key];
  		}
  	};
  };

  var MouseEvent = Event.extend({
  	_class: 'MouseEvent',

  	initialize: function MouseEvent(type, event, point, target, delta) {
  		this.type = type;
  		this.event = event;
  		this.point = point;
  		this.target = target;
  		this.delta = delta;
  	},

  	toString: function() {
  		return "{ type: '" + this.type
  				+ "', point: " + this.point
  				+ ', target: ' + this.target
  				+ (this.delta ? ', delta: ' + this.delta : '')
  				+ ', modifiers: ' + this.getModifiers()
  				+ ' }';
  	}
  });

  var ToolEvent = Event.extend({
  	_class: 'ToolEvent',
  	_item: null,

  	initialize: function ToolEvent(tool, type, event) {
  		this.tool = tool;
  		this.type = type;
  		this.event = event;
  	},

  	_choosePoint: function(point, toolPoint) {
  		return point ? point : toolPoint ? toolPoint.clone() : null;
  	},

  	getPoint: function() {
  		return this._choosePoint(this._point, this.tool._point);
  	},

  	setPoint: function(point) {
  		this._point = point;
  	},

  	getLastPoint: function() {
  		return this._choosePoint(this._lastPoint, this.tool._lastPoint);
  	},

  	setLastPoint: function(lastPoint) {
  		this._lastPoint = lastPoint;
  	},

  	getDownPoint: function() {
  		return this._choosePoint(this._downPoint, this.tool._downPoint);
  	},

  	setDownPoint: function(downPoint) {
  		this._downPoint = downPoint;
  	},

  	getMiddlePoint: function() {
  		if (!this._middlePoint && this.tool._lastPoint) {
  			return this.tool._point.add(this.tool._lastPoint).divide(2);
  		}
  		return this._middlePoint;
  	},

  	setMiddlePoint: function(middlePoint) {
  		this._middlePoint = middlePoint;
  	},

  	getDelta: function() {
  		return !this._delta && this.tool._lastPoint
  				? this.tool._point.subtract(this.tool._lastPoint)
  				: this._delta;
  	},

  	setDelta: function(delta) {
  		this._delta = delta;
  	},

  	getCount: function() {
  		return this.tool[/^mouse(down|up)$/.test(this.type)
  				? '_downCount' : '_moveCount'];
  	},

  	setCount: function(count) {
  		this.tool[/^mouse(down|up)$/.test(this.type) ? 'downCount' : 'count']
  			= count;
  	},

  	getItem: function() {
  		if (!this._item) {
  			var result = this.tool._scope.project.hitTest(this.getPoint());
  			if (result) {
  				var item = result.item,
  					parent = item._parent;
  				while (/^(Group|CompoundPath)$/.test(parent._class)) {
  					item = parent;
  					parent = parent._parent;
  				}
  				this._item = item;
  			}
  		}
  		return this._item;
  	},

  	setItem: function(item) {
  		this._item = item;
  	},

  	toString: function() {
  		return '{ type: ' + this.type
  				+ ', point: ' + this.getPoint()
  				+ ', count: ' + this.getCount()
  				+ ', modifiers: ' + this.getModifiers()
  				+ ' }';
  	}
  });

  var Tool = PaperScopeItem.extend({
  	_class: 'Tool',
  	_list: 'tools',
  	_reference: 'tool',
  	_events: ['onMouseDown', 'onMouseUp', 'onMouseDrag', 'onMouseMove',
  			'onActivate', 'onDeactivate', 'onEditOptions', 'onKeyDown',
  			'onKeyUp'],

  	initialize: function Tool(props) {
  		PaperScopeItem.call(this);
  		this._moveCount = -1;
  		this._downCount = -1;
  		this.set(props);
  	},

  	getMinDistance: function() {
  		return this._minDistance;
  	},

  	setMinDistance: function(minDistance) {
  		this._minDistance = minDistance;
  		if (minDistance != null && this._maxDistance != null
  				&& minDistance > this._maxDistance) {
  			this._maxDistance = minDistance;
  		}
  	},

  	getMaxDistance: function() {
  		return this._maxDistance;
  	},

  	setMaxDistance: function(maxDistance) {
  		this._maxDistance = maxDistance;
  		if (this._minDistance != null && maxDistance != null
  				&& maxDistance < this._minDistance) {
  			this._minDistance = maxDistance;
  		}
  	},

  	getFixedDistance: function() {
  		return this._minDistance == this._maxDistance
  			? this._minDistance : null;
  	},

  	setFixedDistance: function(distance) {
  		this._minDistance = this._maxDistance = distance;
  	},

  	_handleMouseEvent: function(type, event, point, mouse) {
  		paper = this._scope;
  		if (mouse.drag && !this.responds(type))
  			type = 'mousemove';
  		var move = mouse.move || mouse.drag,
  			responds = this.responds(type),
  			minDistance = this.minDistance,
  			maxDistance = this.maxDistance,
  			called = false,
  			tool = this;
  		function update(minDistance, maxDistance) {
  			var pt = point,
  				toolPoint = move ? tool._point : (tool._downPoint || pt);
  			if (move) {
  				if (tool._moveCount >= 0 && pt.equals(toolPoint)) {
  					return false;
  				}
  				if (toolPoint && (minDistance != null || maxDistance != null)) {
  					var vector = pt.subtract(toolPoint),
  						distance = vector.getLength();
  					if (distance < (minDistance || 0))
  						return false;
  					if (maxDistance) {
  						pt = toolPoint.add(vector.normalize(
  								Math.min(distance, maxDistance)));
  					}
  				}
  				tool._moveCount++;
  			}
  			tool._point = pt;
  			tool._lastPoint = toolPoint || pt;
  			if (mouse.down) {
  				tool._moveCount = -1;
  				tool._downPoint = pt;
  				tool._downCount++;
  			}
  			return true;
  		}

  		function emit() {
  			if (responds) {
  				called = tool.emit(type, new ToolEvent(tool, type, event))
  						|| called;
  			}
  		}

  		if (mouse.down) {
  			update();
  			emit();
  		} else if (mouse.up) {
  			update(null, maxDistance);
  			emit();
  		} else if (responds) {
  			while (update(minDistance, maxDistance))
  				emit();
  		}
  		return called;
  	}

  });

  var Tween = Base.extend(Emitter, {
  	_class: 'Tween',

  	statics: {
  		easings: {
  			linear: function(t) {
  				return t;
  			},

  			easeInQuad: function(t) {
  				return t * t;
  			},

  			easeOutQuad: function(t) {
  				return t * (2 - t);
  			},

  			easeInOutQuad: function(t) {
  				return t < 0.5
  					? 2 * t * t
  					: -1 + 2 * (2 - t) * t;
  			},

  			easeInCubic: function(t) {
  				return t * t * t;
  			},

  			easeOutCubic: function(t) {
  				return --t * t * t + 1;
  			},

  			easeInOutCubic: function(t) {
  				return t < 0.5
  					? 4 * t * t * t
  					: (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  			},

  			easeInQuart: function(t) {
  				return t * t * t * t;
  			},

  			easeOutQuart: function(t) {
  				return 1 - (--t) * t * t * t;
  			},

  			easeInOutQuart: function(t) {
  				return t < 0.5
  					? 8 * t * t * t * t
  					: 1 - 8 * (--t) * t * t * t;
  			},

  			easeInQuint: function(t) {
  				return t * t * t * t * t;
  			},

  			easeOutQuint: function(t) {
  				return 1 + --t * t * t * t * t;
  			},

  			easeInOutQuint: function(t) {
  				return t < 0.5
  					? 16 * t * t * t * t * t
  					: 1 + 16 * (--t) * t * t * t * t;
  			}
  		}
  	},

  	initialize: function Tween(object, from, to, duration, easing, start) {
  		this.object = object;
  		var type = typeof easing;
  		var isFunction = type === 'function';
  		this.type = isFunction
  			? type
  			: type === 'string'
  				? easing
  				: 'linear';
  		this.easing = isFunction ? easing : Tween.easings[this.type];
  		this.duration = duration;
  		this.running = false;

  		this._then = null;
  		this._startTime = null;
  		var state = from || to;
  		this._keys = state ? Object.keys(state) : [];
  		this._parsedKeys = this._parseKeys(this._keys);
  		this._from = state && this._getState(from);
  		this._to = state && this._getState(to);
  		if (start !== false) {
  			this.start();
  		}
  	},

  	then: function(then) {
  		this._then = then;
  		return this;
  	},

  	start: function() {
  		this._startTime = null;
  		this.running = true;
  		return this;
  	},

  	stop: function() {
  		this.running = false;
  		return this;
  	},

  	update: function(progress) {
  		if (this.running) {
  			if (progress > 1) {
  				progress = 1;
  				this.running = false;
  			}

  			var factor = this.easing(progress),
  				keys = this._keys,
  				getValue = function(value) {
  					return typeof value === 'function'
  						? value(factor, progress)
  						: value;
  				};
  			for (var i = 0, l = keys && keys.length; i < l; i++) {
  				var key = keys[i],
  					from = getValue(this._from[key]),
  					to = getValue(this._to[key]),
  					value = (from && to && from.__add && to.__add)
  						? to.__subtract(from).__multiply(factor).__add(from)
  						: ((to - from) * factor) + from;
  				this._setProperty(this._parsedKeys[key], value);
  			}

  			if (!this.running && this._then) {
  				this._then(this.object);
  			}
  			if (this.responds('update')) {
  				this.emit('update', new Base({
  					progress: progress,
  					factor: factor
  				}));
  			}
  		}
  		return this;
  	},

  	_events: {
  		onUpdate: {}
  	},

  	_handleFrame: function(time) {
  		var startTime = this._startTime,
  			progress = startTime
  				? (time - startTime) / this.duration
  				: 0;
  		if (!startTime) {
  			this._startTime = time;
  		}
  		this.update(progress);
  	},

  	_getState: function(state) {
  		var keys = this._keys,
  			result = {};
  		for (var i = 0, l = keys.length; i < l; i++) {
  			var key = keys[i],
  				path = this._parsedKeys[key],
  				current = this._getProperty(path),
  				value;
  			if (state) {
  				var resolved = this._resolveValue(current, state[key]);
  				this._setProperty(path, resolved);
  				value = this._getProperty(path);
  				value = value && value.clone ? value.clone() : value;
  				this._setProperty(path, current);
  			} else {
  				value = current && current.clone ? current.clone() : current;
  			}
  			result[key] = value;
  		}
  		return result;
  	},

  	_resolveValue: function(current, value) {
  		if (value) {
  			if (Array.isArray(value) && value.length === 2) {
  				var operator = value[0];
  				return (
  					operator &&
  					operator.match &&
  					operator.match(/^[+\-*/]=/)
  				)
  					? this._calculate(current, operator[0], value[1])
  					: value;
  			} else if (typeof value === 'string') {
  				var match = value.match(/^[+\-*/]=(.*)/);
  				if (match) {
  					var parsed = JSON.parse(match[1].replace(
  						/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
  						'"$2": '
  					));
  					return this._calculate(current, value[0], parsed);
  				}
  			}
  		}
  		return value;
  	},

  	_calculate: function(left, operator, right) {
  		return paper.PaperScript.calculateBinary(left, operator, right);
  	},

  	_parseKeys: function(keys) {
  		var parsed = {};
  		for (var i = 0, l = keys.length; i < l; i++) {
  			var key = keys[i],
  				path = key
  					.replace(/\.([^.]*)/g, '/$1')
  					.replace(/\[['"]?([^'"\]]*)['"]?\]/g, '/$1');
  			parsed[key] = path.split('/');
  		}
  		return parsed;
  	},

  	_getProperty: function(path, offset) {
  		var obj = this.object;
  		for (var i = 0, l = path.length - (offset || 0); i < l && obj; i++) {
  			obj = obj[path[i]];
  		}
  		return obj;
  	},

  	_setProperty: function(path, value) {
  		var dest = this._getProperty(path, 1);
  		if (dest) {
  			dest[path[path.length - 1]] = value;
  		}
  	}
  });

  var Http = {
  	request: function(options) {
  		var xhr = new self.XMLHttpRequest();
  		xhr.open((options.method || 'get').toUpperCase(), options.url,
  				Base.pick(options.async, true));
  		if (options.mimeType)
  			xhr.overrideMimeType(options.mimeType);
  		xhr.onload = function() {
  			var status = xhr.status;
  			if (status === 0 || status === 200) {
  				if (options.onLoad) {
  					options.onLoad.call(xhr, xhr.responseText);
  				}
  			} else {
  				xhr.onerror();
  			}
  		};
  		xhr.onerror = function() {
  			var status = xhr.status,
  				message = 'Could not load "' + options.url + '" (Status: '
  						+ status + ')';
  			if (options.onError) {
  				options.onError(message, status);
  			} else {
  				throw new Error(message);
  			}
  		};
  		return xhr.send(null);
  	}
  };

  var CanvasProvider = {
  	canvases: [],

  	getCanvas: function(width, height) {
  		if (!window)
  			return null;
  		var canvas,
  			clear = true;
  		if (typeof width === 'object') {
  			height = width.height;
  			width = width.width;
  		}
  		if (this.canvases.length) {
  			canvas = this.canvases.pop();
  		} else {
  			canvas = document.createElement('canvas');
  			clear = false;
  		}
  		var ctx = canvas.getContext('2d');
  		if (!ctx) {
  			throw new Error('Canvas ' + canvas +
  					' is unable to provide a 2D context.');
  		}
  		if (canvas.width === width && canvas.height === height) {
  			if (clear)
  				ctx.clearRect(0, 0, width + 1, height + 1);
  		} else {
  			canvas.width = width;
  			canvas.height = height;
  		}
  		ctx.save();
  		return canvas;
  	},

  	getContext: function(width, height) {
  		var canvas = this.getCanvas(width, height);
  		return canvas ? canvas.getContext('2d') : null;
  	},

  	release: function(obj) {
  		var canvas = obj && obj.canvas ? obj.canvas : obj;
  		if (canvas && canvas.getContext) {
  			canvas.getContext('2d').restore();
  			this.canvases.push(canvas);
  		}
  	}
  };

  var BlendMode = new function() {
  	var min = Math.min,
  		max = Math.max,
  		abs = Math.abs,
  		sr, sg, sb, sa,
  		br, bg, bb, ba,
  		dr, dg, db;

  	function getLum(r, g, b) {
  		return 0.2989 * r + 0.587 * g + 0.114 * b;
  	}

  	function setLum(r, g, b, l) {
  		var d = l - getLum(r, g, b);
  		dr = r + d;
  		dg = g + d;
  		db = b + d;
  		var l = getLum(dr, dg, db),
  			mn = min(dr, dg, db),
  			mx = max(dr, dg, db);
  		if (mn < 0) {
  			var lmn = l - mn;
  			dr = l + (dr - l) * l / lmn;
  			dg = l + (dg - l) * l / lmn;
  			db = l + (db - l) * l / lmn;
  		}
  		if (mx > 255) {
  			var ln = 255 - l,
  				mxl = mx - l;
  			dr = l + (dr - l) * ln / mxl;
  			dg = l + (dg - l) * ln / mxl;
  			db = l + (db - l) * ln / mxl;
  		}
  	}

  	function getSat(r, g, b) {
  		return max(r, g, b) - min(r, g, b);
  	}

  	function setSat(r, g, b, s) {
  		var col = [r, g, b],
  			mx = max(r, g, b),
  			mn = min(r, g, b),
  			md;
  		mn = mn === r ? 0 : mn === g ? 1 : 2;
  		mx = mx === r ? 0 : mx === g ? 1 : 2;
  		md = min(mn, mx) === 0 ? max(mn, mx) === 1 ? 2 : 1 : 0;
  		if (col[mx] > col[mn]) {
  			col[md] = (col[md] - col[mn]) * s / (col[mx] - col[mn]);
  			col[mx] = s;
  		} else {
  			col[md] = col[mx] = 0;
  		}
  		col[mn] = 0;
  		dr = col[0];
  		dg = col[1];
  		db = col[2];
  	}

  	var modes = {
  		multiply: function() {
  			dr = br * sr / 255;
  			dg = bg * sg / 255;
  			db = bb * sb / 255;
  		},

  		screen: function() {
  			dr = br + sr - (br * sr / 255);
  			dg = bg + sg - (bg * sg / 255);
  			db = bb + sb - (bb * sb / 255);
  		},

  		overlay: function() {
  			dr = br < 128 ? 2 * br * sr / 255 : 255 - 2 * (255 - br) * (255 - sr) / 255;
  			dg = bg < 128 ? 2 * bg * sg / 255 : 255 - 2 * (255 - bg) * (255 - sg) / 255;
  			db = bb < 128 ? 2 * bb * sb / 255 : 255 - 2 * (255 - bb) * (255 - sb) / 255;
  		},

  		'soft-light': function() {
  			var t = sr * br / 255;
  			dr = t + br * (255 - (255 - br) * (255 - sr) / 255 - t) / 255;
  			t = sg * bg / 255;
  			dg = t + bg * (255 - (255 - bg) * (255 - sg) / 255 - t) / 255;
  			t = sb * bb / 255;
  			db = t + bb * (255 - (255 - bb) * (255 - sb) / 255 - t) / 255;
  		},

  		'hard-light': function() {
  			dr = sr < 128 ? 2 * sr * br / 255 : 255 - 2 * (255 - sr) * (255 - br) / 255;
  			dg = sg < 128 ? 2 * sg * bg / 255 : 255 - 2 * (255 - sg) * (255 - bg) / 255;
  			db = sb < 128 ? 2 * sb * bb / 255 : 255 - 2 * (255 - sb) * (255 - bb) / 255;
  		},

  		'color-dodge': function() {
  			dr = br === 0 ? 0 : sr === 255 ? 255 : min(255, 255 * br / (255 - sr));
  			dg = bg === 0 ? 0 : sg === 255 ? 255 : min(255, 255 * bg / (255 - sg));
  			db = bb === 0 ? 0 : sb === 255 ? 255 : min(255, 255 * bb / (255 - sb));
  		},

  		'color-burn': function() {
  			dr = br === 255 ? 255 : sr === 0 ? 0 : max(0, 255 - (255 - br) * 255 / sr);
  			dg = bg === 255 ? 255 : sg === 0 ? 0 : max(0, 255 - (255 - bg) * 255 / sg);
  			db = bb === 255 ? 255 : sb === 0 ? 0 : max(0, 255 - (255 - bb) * 255 / sb);
  		},

  		darken: function() {
  			dr = br < sr ? br : sr;
  			dg = bg < sg ? bg : sg;
  			db = bb < sb ? bb : sb;
  		},

  		lighten: function() {
  			dr = br > sr ? br : sr;
  			dg = bg > sg ? bg : sg;
  			db = bb > sb ? bb : sb;
  		},

  		difference: function() {
  			dr = br - sr;
  			if (dr < 0)
  				dr = -dr;
  			dg = bg - sg;
  			if (dg < 0)
  				dg = -dg;
  			db = bb - sb;
  			if (db < 0)
  				db = -db;
  		},

  		exclusion: function() {
  			dr = br + sr * (255 - br - br) / 255;
  			dg = bg + sg * (255 - bg - bg) / 255;
  			db = bb + sb * (255 - bb - bb) / 255;
  		},

  		hue: function() {
  			setSat(sr, sg, sb, getSat(br, bg, bb));
  			setLum(dr, dg, db, getLum(br, bg, bb));
  		},

  		saturation: function() {
  			setSat(br, bg, bb, getSat(sr, sg, sb));
  			setLum(dr, dg, db, getLum(br, bg, bb));
  		},

  		luminosity: function() {
  			setLum(br, bg, bb, getLum(sr, sg, sb));
  		},

  		color: function() {
  			setLum(sr, sg, sb, getLum(br, bg, bb));
  		},

  		add: function() {
  			dr = min(br + sr, 255);
  			dg = min(bg + sg, 255);
  			db = min(bb + sb, 255);
  		},

  		subtract: function() {
  			dr = max(br - sr, 0);
  			dg = max(bg - sg, 0);
  			db = max(bb - sb, 0);
  		},

  		average: function() {
  			dr = (br + sr) / 2;
  			dg = (bg + sg) / 2;
  			db = (bb + sb) / 2;
  		},

  		negation: function() {
  			dr = 255 - abs(255 - sr - br);
  			dg = 255 - abs(255 - sg - bg);
  			db = 255 - abs(255 - sb - bb);
  		}
  	};

  	var nativeModes = this.nativeModes = Base.each([
  		'source-over', 'source-in', 'source-out', 'source-atop',
  		'destination-over', 'destination-in', 'destination-out',
  		'destination-atop', 'lighter', 'darker', 'copy', 'xor'
  	], function(mode) {
  		this[mode] = true;
  	}, {});

  	var ctx = CanvasProvider.getContext(1, 1);
  	if (ctx) {
  		Base.each(modes, function(func, mode) {
  			var darken = mode === 'darken',
  				ok = false;
  			ctx.save();
  			try {
  				ctx.fillStyle = darken ? '#300' : '#a00';
  				ctx.fillRect(0, 0, 1, 1);
  				ctx.globalCompositeOperation = mode;
  				if (ctx.globalCompositeOperation === mode) {
  					ctx.fillStyle = darken ? '#a00' : '#300';
  					ctx.fillRect(0, 0, 1, 1);
  					ok = ctx.getImageData(0, 0, 1, 1).data[0] !== darken
  							? 170 : 51;
  				}
  			} catch (e) {}
  			ctx.restore();
  			nativeModes[mode] = ok;
  		});
  		CanvasProvider.release(ctx);
  	}

  	this.process = function(mode, srcContext, dstContext, alpha, offset) {
  		var srcCanvas = srcContext.canvas,
  			normal = mode === 'normal';
  		if (normal || nativeModes[mode]) {
  			dstContext.save();
  			dstContext.setTransform(1, 0, 0, 1, 0, 0);
  			dstContext.globalAlpha = alpha;
  			if (!normal)
  				dstContext.globalCompositeOperation = mode;
  			dstContext.drawImage(srcCanvas, offset.x, offset.y);
  			dstContext.restore();
  		} else {
  			var process = modes[mode];
  			if (!process)
  				return;
  			var dstData = dstContext.getImageData(offset.x, offset.y,
  					srcCanvas.width, srcCanvas.height),
  				dst = dstData.data,
  				src = srcContext.getImageData(0, 0,
  					srcCanvas.width, srcCanvas.height).data;
  			for (var i = 0, l = dst.length; i < l; i += 4) {
  				sr = src[i];
  				br = dst[i];
  				sg = src[i + 1];
  				bg = dst[i + 1];
  				sb = src[i + 2];
  				bb = dst[i + 2];
  				sa = src[i + 3];
  				ba = dst[i + 3];
  				process();
  				var a1 = sa * alpha / 255,
  					a2 = 1 - a1;
  				dst[i] = a1 * dr + a2 * br;
  				dst[i + 1] = a1 * dg + a2 * bg;
  				dst[i + 2] = a1 * db + a2 * bb;
  				dst[i + 3] = sa * alpha + a2 * ba;
  			}
  			dstContext.putImageData(dstData, offset.x, offset.y);
  		}
  	};
  };

  var SvgElement = new function() {
  	var svg = 'http://www.w3.org/2000/svg',
  		xmlns = 'http://www.w3.org/2000/xmlns',
  		xlink = 'http://www.w3.org/1999/xlink',
  		attributeNamespace = {
  			href: xlink,
  			xlink: xmlns,
  			xmlns: xmlns + '/',
  			'xmlns:xlink': xmlns + '/'
  		};

  	function create(tag, attributes, formatter) {
  		return set(document.createElementNS(svg, tag), attributes, formatter);
  	}

  	function get(node, name) {
  		var namespace = attributeNamespace[name],
  			value = namespace
  				? node.getAttributeNS(namespace, name)
  				: node.getAttribute(name);
  		return value === 'null' ? null : value;
  	}

  	function set(node, attributes, formatter) {
  		for (var name in attributes) {
  			var value = attributes[name],
  				namespace = attributeNamespace[name];
  			if (typeof value === 'number' && formatter)
  				value = formatter.number(value);
  			if (namespace) {
  				node.setAttributeNS(namespace, name, value);
  			} else {
  				node.setAttribute(name, value);
  			}
  		}
  		return node;
  	}

  	return {
  		svg: svg,
  		xmlns: xmlns,
  		xlink: xlink,

  		create: create,
  		get: get,
  		set: set
  	};
  };

  var SvgStyles = Base.each({
  	fillColor: ['fill', 'color'],
  	fillRule: ['fill-rule', 'string'],
  	strokeColor: ['stroke', 'color'],
  	strokeWidth: ['stroke-width', 'number'],
  	strokeCap: ['stroke-linecap', 'string'],
  	strokeJoin: ['stroke-linejoin', 'string'],
  	strokeScaling: ['vector-effect', 'lookup', {
  		true: 'none',
  		false: 'non-scaling-stroke'
  	}, function(item, value) {
  		return !value
  				&& (item instanceof PathItem
  					|| item instanceof Shape
  					|| item instanceof TextItem);
  	}],
  	miterLimit: ['stroke-miterlimit', 'number'],
  	dashArray: ['stroke-dasharray', 'array'],
  	dashOffset: ['stroke-dashoffset', 'number'],
  	fontFamily: ['font-family', 'string'],
  	fontWeight: ['font-weight', 'string'],
  	fontSize: ['font-size', 'number'],
  	justification: ['text-anchor', 'lookup', {
  		left: 'start',
  		center: 'middle',
  		right: 'end'
  	}],
  	opacity: ['opacity', 'number'],
  	blendMode: ['mix-blend-mode', 'style']
  }, function(entry, key) {
  	var part = Base.capitalize(key),
  		lookup = entry[2];
  	this[key] = {
  		type: entry[1],
  		property: key,
  		attribute: entry[0],
  		toSVG: lookup,
  		fromSVG: lookup && Base.each(lookup, function(value, name) {
  			this[value] = name;
  		}, {}),
  		exportFilter: entry[3],
  		get: 'get' + part,
  		set: 'set' + part
  	};
  }, {});

  new function() {
  	var formatter;

  	function getTransform(matrix, coordinates, center) {
  		var attrs = new Base(),
  			trans = matrix.getTranslation();
  		if (coordinates) {
  			matrix = matrix._shiftless();
  			var point = matrix._inverseTransform(trans);
  			attrs[center ? 'cx' : 'x'] = point.x;
  			attrs[center ? 'cy' : 'y'] = point.y;
  			trans = null;
  		}
  		if (!matrix.isIdentity()) {
  			var decomposed = matrix.decompose();
  			if (decomposed) {
  				var parts = [],
  					angle = decomposed.rotation,
  					scale = decomposed.scaling,
  					skew = decomposed.skewing;
  				if (trans && !trans.isZero())
  					parts.push('translate(' + formatter.point(trans) + ')');
  				if (angle)
  					parts.push('rotate(' + formatter.number(angle) + ')');
  				if (!Numerical.isZero(scale.x - 1)
  						|| !Numerical.isZero(scale.y - 1))
  					parts.push('scale(' + formatter.point(scale) +')');
  				if (skew.x)
  					parts.push('skewX(' + formatter.number(skew.x) + ')');
  				if (skew.y)
  					parts.push('skewY(' + formatter.number(skew.y) + ')');
  				attrs.transform = parts.join(' ');
  			} else {
  				attrs.transform = 'matrix(' + matrix.getValues().join(',') + ')';
  			}
  		}
  		return attrs;
  	}

  	function exportGroup(item, options) {
  		var attrs = getTransform(item._matrix),
  			children = item._children;
  		var node = SvgElement.create('g', attrs, formatter);
  		for (var i = 0, l = children.length; i < l; i++) {
  			var child = children[i];
  			var childNode = exportSVG(child, options);
  			if (childNode) {
  				if (child.isClipMask()) {
  					var clip = SvgElement.create('clipPath');
  					clip.appendChild(childNode);
  					setDefinition(child, clip, 'clip');
  					SvgElement.set(node, {
  						'clip-path': 'url(#' + clip.id + ')'
  					});
  				} else {
  					node.appendChild(childNode);
  				}
  			}
  		}
  		return node;
  	}

  	function exportRaster(item, options) {
  		var attrs = getTransform(item._matrix, true),
  			size = item.getSize(),
  			image = item.getImage();
  		attrs.x -= size.width / 2;
  		attrs.y -= size.height / 2;
  		attrs.width = size.width;
  		attrs.height = size.height;
  		attrs.href = options.embedImages == false && image && image.src
  				|| item.toDataURL();
  		return SvgElement.create('image', attrs, formatter);
  	}

  	function exportPath(item, options) {
  		var matchShapes = options.matchShapes;
  		if (matchShapes) {
  			var shape = item.toShape(false);
  			if (shape)
  				return exportShape(shape, options);
  		}
  		var segments = item._segments,
  			length = segments.length,
  			type,
  			attrs = getTransform(item._matrix);
  		if (matchShapes && length >= 2 && !item.hasHandles()) {
  			if (length > 2) {
  				type = item._closed ? 'polygon' : 'polyline';
  				var parts = [];
  				for (var i = 0; i < length; i++) {
  					parts.push(formatter.point(segments[i]._point));
  				}
  				attrs.points = parts.join(' ');
  			} else {
  				type = 'line';
  				var start = segments[0]._point,
  					end = segments[1]._point;
  				attrs.set({
  					x1: start.x,
  					y1: start.y,
  					x2: end.x,
  					y2: end.y
  				});
  			}
  		} else {
  			type = 'path';
  			attrs.d = item.getPathData(null, options.precision);
  		}
  		return SvgElement.create(type, attrs, formatter);
  	}

  	function exportShape(item) {
  		var type = item._type,
  			radius = item._radius,
  			attrs = getTransform(item._matrix, true, type !== 'rectangle');
  		if (type === 'rectangle') {
  			type = 'rect';
  			var size = item._size,
  				width = size.width,
  				height = size.height;
  			attrs.x -= width / 2;
  			attrs.y -= height / 2;
  			attrs.width = width;
  			attrs.height = height;
  			if (radius.isZero())
  				radius = null;
  		}
  		if (radius) {
  			if (type === 'circle') {
  				attrs.r = radius;
  			} else {
  				attrs.rx = radius.width;
  				attrs.ry = radius.height;
  			}
  		}
  		return SvgElement.create(type, attrs, formatter);
  	}

  	function exportCompoundPath(item, options) {
  		var attrs = getTransform(item._matrix);
  		var data = item.getPathData(null, options.precision);
  		if (data)
  			attrs.d = data;
  		return SvgElement.create('path', attrs, formatter);
  	}

  	function exportSymbolItem(item, options) {
  		var attrs = getTransform(item._matrix, true),
  			definition = item._definition,
  			node = getDefinition(definition, 'symbol'),
  			definitionItem = definition._item,
  			bounds = definitionItem.getBounds();
  		if (!node) {
  			node = SvgElement.create('symbol', {
  				viewBox: formatter.rectangle(bounds)
  			});
  			node.appendChild(exportSVG(definitionItem, options));
  			setDefinition(definition, node, 'symbol');
  		}
  		attrs.href = '#' + node.id;
  		attrs.x += bounds.x;
  		attrs.y += bounds.y;
  		attrs.width = bounds.width;
  		attrs.height = bounds.height;
  		attrs.overflow = 'visible';
  		return SvgElement.create('use', attrs, formatter);
  	}

  	function exportGradient(color) {
  		var gradientNode = getDefinition(color, 'color');
  		if (!gradientNode) {
  			var gradient = color.getGradient(),
  				radial = gradient._radial,
  				origin = color.getOrigin(),
  				destination = color.getDestination(),
  				attrs;
  			if (radial) {
  				attrs = {
  					cx: origin.x,
  					cy: origin.y,
  					r: origin.getDistance(destination)
  				};
  				var highlight = color.getHighlight();
  				if (highlight) {
  					attrs.fx = highlight.x;
  					attrs.fy = highlight.y;
  				}
  			} else {
  				attrs = {
  					x1: origin.x,
  					y1: origin.y,
  					x2: destination.x,
  					y2: destination.y
  				};
  			}
  			attrs.gradientUnits = 'userSpaceOnUse';
  			gradientNode = SvgElement.create((radial ? 'radial' : 'linear')
  					+ 'Gradient', attrs, formatter);
  			var stops = gradient._stops;
  			for (var i = 0, l = stops.length; i < l; i++) {
  				var stop = stops[i],
  					stopColor = stop._color,
  					alpha = stopColor.getAlpha(),
  					offset = stop._offset;
  				attrs = {
  					offset: offset == null ? i / (l - 1) : offset
  				};
  				if (stopColor)
  					attrs['stop-color'] = stopColor.toCSS(true);
  				if (alpha < 1)
  					attrs['stop-opacity'] = alpha;
  				gradientNode.appendChild(
  						SvgElement.create('stop', attrs, formatter));
  			}
  			setDefinition(color, gradientNode, 'color');
  		}
  		return 'url(#' + gradientNode.id + ')';
  	}

  	function exportText(item) {
  		var node = SvgElement.create('text', getTransform(item._matrix, true),
  				formatter);
  		node.textContent = item._content;
  		return node;
  	}

  	var exporters = {
  		Group: exportGroup,
  		Layer: exportGroup,
  		Raster: exportRaster,
  		Path: exportPath,
  		Shape: exportShape,
  		CompoundPath: exportCompoundPath,
  		SymbolItem: exportSymbolItem,
  		PointText: exportText
  	};

  	function applyStyle(item, node, isRoot) {
  		var attrs = {},
  			parent = !isRoot && item.getParent(),
  			style = [];

  		if (item._name != null)
  			attrs.id = item._name;

  		Base.each(SvgStyles, function(entry) {
  			var get = entry.get,
  				type = entry.type,
  				value = item[get]();
  			if (entry.exportFilter
  					? entry.exportFilter(item, value)
  					: !parent || !Base.equals(parent[get](), value)) {
  				if (type === 'color' && value != null) {
  					var alpha = value.getAlpha();
  					if (alpha < 1)
  						attrs[entry.attribute + '-opacity'] = alpha;
  				}
  				if (type === 'style') {
  					style.push(entry.attribute + ': ' + value);
  				} else {
  					attrs[entry.attribute] = value == null ? 'none'
  							: type === 'color' ? value.gradient
  								? exportGradient(value, item)
  								: value.toCSS(true)
  							: type === 'array' ? value.join(',')
  							: type === 'lookup' ? entry.toSVG[value]
  							: value;
  				}
  			}
  		});

  		if (style.length)
  			attrs.style = style.join(';');

  		if (attrs.opacity === 1)
  			delete attrs.opacity;

  		if (!item._visible)
  			attrs.visibility = 'hidden';

  		return SvgElement.set(node, attrs, formatter);
  	}

  	var definitions;
  	function getDefinition(item, type) {
  		if (!definitions)
  			definitions = { ids: {}, svgs: {} };
  		return item && definitions.svgs[type + '-'
  				+ (item._id || item.__id || (item.__id = UID.get('svg')))];
  	}

  	function setDefinition(item, node, type) {
  		if (!definitions)
  			getDefinition();
  		var typeId = definitions.ids[type] = (definitions.ids[type] || 0) + 1;
  		node.id = type + '-' + typeId;
  		definitions.svgs[type + '-' + (item._id || item.__id)] = node;
  	}

  	function exportDefinitions(node, options) {
  		var svg = node,
  			defs = null;
  		if (definitions) {
  			svg = node.nodeName.toLowerCase() === 'svg' && node;
  			for (var i in definitions.svgs) {
  				if (!defs) {
  					if (!svg) {
  						svg = SvgElement.create('svg');
  						svg.appendChild(node);
  					}
  					defs = svg.insertBefore(SvgElement.create('defs'),
  							svg.firstChild);
  				}
  				defs.appendChild(definitions.svgs[i]);
  			}
  			definitions = null;
  		}
  		return options.asString
  				? new self.XMLSerializer().serializeToString(svg)
  				: svg;
  	}

  	function exportSVG(item, options, isRoot) {
  		var exporter = exporters[item._class],
  			node = exporter && exporter(item, options);
  		if (node) {
  			var onExport = options.onExport;
  			if (onExport)
  				node = onExport(item, node, options) || node;
  			var data = JSON.stringify(item._data);
  			if (data && data !== '{}' && data !== 'null')
  				node.setAttribute('data-paper-data', data);
  		}
  		return node && applyStyle(item, node, isRoot);
  	}

  	function setOptions(options) {
  		if (!options)
  			options = {};
  		formatter = new Formatter(options.precision);
  		return options;
  	}

  	Item.inject({
  		exportSVG: function(options) {
  			options = setOptions(options);
  			return exportDefinitions(exportSVG(this, options, true), options);
  		}
  	});

  	Project.inject({
  		exportSVG: function(options) {
  			options = setOptions(options);
  			var children = this._children,
  				view = this.getView(),
  				bounds = Base.pick(options.bounds, 'view'),
  				mx = options.matrix || bounds === 'view' && view._matrix,
  				matrix = mx && Matrix.read([mx]),
  				rect = bounds === 'view'
  					? new Rectangle([0, 0], view.getViewSize())
  					: bounds === 'content'
  						? Item._getBounds(children, matrix, { stroke: true })
  							.rect
  						: Rectangle.read([bounds], 0, { readNull: true }),
  				attrs = {
  					version: '1.1',
  					xmlns: SvgElement.svg,
  					'xmlns:xlink': SvgElement.xlink,
  				};
  			if (rect) {
  				attrs.width = rect.width;
  				attrs.height = rect.height;
  				if (rect.x || rect.y)
  					attrs.viewBox = formatter.rectangle(rect);
  			}
  			var node = SvgElement.create('svg', attrs, formatter),
  				parent = node;
  			if (matrix && !matrix.isIdentity()) {
  				parent = node.appendChild(SvgElement.create('g',
  						getTransform(matrix), formatter));
  			}
  			for (var i = 0, l = children.length; i < l; i++) {
  				parent.appendChild(exportSVG(children[i], options, true));
  			}
  			return exportDefinitions(node, options);
  		}
  	});
  };

  new function() {

  	var definitions = {},
  		rootSize;

  	function getValue(node, name, isString, allowNull, allowPercent) {
  		var value = SvgElement.get(node, name),
  			res = value == null
  				? allowNull
  					? null
  					: isString ? '' : 0
  				: isString
  					? value
  					: parseFloat(value);
  		return /%\s*$/.test(value)
  			? (res / 100) * (allowPercent ? 1
  				: rootSize[/x|^width/.test(name) ? 'width' : 'height'])
  			: res;
  	}

  	function getPoint(node, x, y, allowNull, allowPercent) {
  		x = getValue(node, x || 'x', false, allowNull, allowPercent);
  		y = getValue(node, y || 'y', false, allowNull, allowPercent);
  		return allowNull && (x == null || y == null) ? null
  				: new Point(x, y);
  	}

  	function getSize(node, w, h, allowNull, allowPercent) {
  		w = getValue(node, w || 'width', false, allowNull, allowPercent);
  		h = getValue(node, h || 'height', false, allowNull, allowPercent);
  		return allowNull && (w == null || h == null) ? null
  				: new Size(w, h);
  	}

  	function convertValue(value, type, lookup) {
  		return value === 'none' ? null
  				: type === 'number' ? parseFloat(value)
  				: type === 'array' ?
  					value ? value.split(/[\s,]+/g).map(parseFloat) : []
  				: type === 'color' ? getDefinition(value) || value
  				: type === 'lookup' ? lookup[value]
  				: value;
  	}

  	function importGroup(node, type, options, isRoot) {
  		var nodes = node.childNodes,
  			isClip = type === 'clippath',
  			isDefs = type === 'defs',
  			item = new Group(),
  			project = item._project,
  			currentStyle = project._currentStyle,
  			children = [];
  		if (!isClip && !isDefs) {
  			item = applyAttributes(item, node, isRoot);
  			project._currentStyle = item._style.clone();
  		}
  		if (isRoot) {
  			var defs = node.querySelectorAll('defs');
  			for (var i = 0, l = defs.length; i < l; i++) {
  				importNode(defs[i], options, false);
  			}
  		}
  		for (var i = 0, l = nodes.length; i < l; i++) {
  			var childNode = nodes[i],
  				child;
  			if (childNode.nodeType === 1
  					&& !/^defs$/i.test(childNode.nodeName)
  					&& (child = importNode(childNode, options, false))
  					&& !(child instanceof SymbolDefinition))
  				children.push(child);
  		}
  		item.addChildren(children);
  		if (isClip)
  			item = applyAttributes(item.reduce(), node, isRoot);
  		project._currentStyle = currentStyle;
  		if (isClip || isDefs) {
  			item.remove();
  			item = null;
  		}
  		return item;
  	}

  	function importPoly(node, type) {
  		var coords = node.getAttribute('points').match(
  					/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g),
  			points = [];
  		for (var i = 0, l = coords.length; i < l; i += 2)
  			points.push(new Point(
  					parseFloat(coords[i]),
  					parseFloat(coords[i + 1])));
  		var path = new Path(points);
  		if (type === 'polygon')
  			path.closePath();
  		return path;
  	}

  	function importPath(node) {
  		return PathItem.create(node.getAttribute('d'));
  	}

  	function importGradient(node, type) {
  		var id = (getValue(node, 'href', true) || '').substring(1),
  			radial = type === 'radialgradient',
  			gradient;
  		if (id) {
  			gradient = definitions[id].getGradient();
  			if (gradient._radial ^ radial) {
  				gradient = gradient.clone();
  				gradient._radial = radial;
  			}
  		} else {
  			var nodes = node.childNodes,
  				stops = [];
  			for (var i = 0, l = nodes.length; i < l; i++) {
  				var child = nodes[i];
  				if (child.nodeType === 1)
  					stops.push(applyAttributes(new GradientStop(), child));
  			}
  			gradient = new Gradient(stops, radial);
  		}
  		var origin, destination, highlight,
  			scaleToBounds = getValue(node, 'gradientUnits', true) !==
  				'userSpaceOnUse';
  		if (radial) {
  			origin = getPoint(node, 'cx', 'cy', false, scaleToBounds);
  			destination = origin.add(
  					getValue(node, 'r', false, false, scaleToBounds), 0);
  			highlight = getPoint(node, 'fx', 'fy', true, scaleToBounds);
  		} else {
  			origin = getPoint(node, 'x1', 'y1', false, scaleToBounds);
  			destination = getPoint(node, 'x2', 'y2', false, scaleToBounds);
  		}
  		var color = applyAttributes(
  				new Color(gradient, origin, destination, highlight), node);
  		color._scaleToBounds = scaleToBounds;
  		return null;
  	}

  	var importers = {
  		'#document': function (node, type, options, isRoot) {
  			var nodes = node.childNodes;
  			for (var i = 0, l = nodes.length; i < l; i++) {
  				var child = nodes[i];
  				if (child.nodeType === 1)
  					return importNode(child, options, isRoot);
  			}
  		},
  		g: importGroup,
  		svg: importGroup,
  		clippath: importGroup,
  		polygon: importPoly,
  		polyline: importPoly,
  		path: importPath,
  		lineargradient: importGradient,
  		radialgradient: importGradient,

  		image: function (node) {
  			var raster = new Raster(getValue(node, 'href', true));
  			raster.on('load', function() {
  				var size = getSize(node);
  				this.setSize(size);
  				var center = getPoint(node).add(size.divide(2));
  				this._matrix.append(new Matrix().translate(center));
  			});
  			return raster;
  		},

  		symbol: function(node, type, options, isRoot) {
  			return new SymbolDefinition(
  					importGroup(node, type, options, isRoot), true);
  		},

  		defs: importGroup,

  		use: function(node) {
  			var id = (getValue(node, 'href', true) || '').substring(1),
  				definition = definitions[id],
  				point = getPoint(node);
  			return definition
  					? definition instanceof SymbolDefinition
  						? definition.place(point)
  						: definition.clone().translate(point)
  					: null;
  		},

  		circle: function(node) {
  			return new Shape.Circle(
  					getPoint(node, 'cx', 'cy'),
  					getValue(node, 'r'));
  		},

  		ellipse: function(node) {
  			return new Shape.Ellipse({
  				center: getPoint(node, 'cx', 'cy'),
  				radius: getSize(node, 'rx', 'ry')
  			});
  		},

  		rect: function(node) {
  			return new Shape.Rectangle(new Rectangle(
  						getPoint(node),
  						getSize(node)
  					), getSize(node, 'rx', 'ry'));
  			},

  		line: function(node) {
  			return new Path.Line(
  					getPoint(node, 'x1', 'y1'),
  					getPoint(node, 'x2', 'y2'));
  		},

  		text: function(node) {
  			var text = new PointText(getPoint(node).add(
  					getPoint(node, 'dx', 'dy')));
  			text.setContent(node.textContent.trim() || '');
  			return text;
  		}
  	};

  	function applyTransform(item, value, name, node) {
  		if (item.transform) {
  			var transforms = (node.getAttribute(name) || '').split(/\)\s*/g),
  				matrix = new Matrix();
  			for (var i = 0, l = transforms.length; i < l; i++) {
  				var transform = transforms[i];
  				if (!transform)
  					break;
  				var parts = transform.split(/\(\s*/),
  					command = parts[0],
  					v = parts[1].split(/[\s,]+/g);
  				for (var j = 0, m = v.length; j < m; j++)
  					v[j] = parseFloat(v[j]);
  				switch (command) {
  				case 'matrix':
  					matrix.append(
  							new Matrix(v[0], v[1], v[2], v[3], v[4], v[5]));
  					break;
  				case 'rotate':
  					matrix.rotate(v[0], v[1] || 0, v[2] || 0);
  					break;
  				case 'translate':
  					matrix.translate(v[0], v[1] || 0);
  					break;
  				case 'scale':
  					matrix.scale(v);
  					break;
  				case 'skewX':
  					matrix.skew(v[0], 0);
  					break;
  				case 'skewY':
  					matrix.skew(0, v[0]);
  					break;
  				}
  			}
  			item.transform(matrix);
  		}
  	}

  	function applyOpacity(item, value, name) {
  		var key = name === 'fill-opacity' ? 'getFillColor' : 'getStrokeColor',
  			color = item[key] && item[key]();
  		if (color)
  			color.setAlpha(parseFloat(value));
  	}

  	var attributes = Base.set(Base.each(SvgStyles, function(entry) {
  		this[entry.attribute] = function(item, value) {
  			if (item[entry.set]) {
  				item[entry.set](convertValue(value, entry.type, entry.fromSVG));
  				if (entry.type === 'color') {
  					var color = item[entry.get]();
  					if (color) {
  						if (color._scaleToBounds) {
  							var bounds = item.getBounds();
  							color.transform(new Matrix()
  								.translate(bounds.getPoint())
  								.scale(bounds.getSize()));
  						}
  					}
  				}
  			}
  		};
  	}, {}), {
  		id: function(item, value) {
  			definitions[value] = item;
  			if (item.setName)
  				item.setName(value);
  		},

  		'clip-path': function(item, value) {
  			var clip = getDefinition(value);
  			if (clip) {
  				clip = clip.clone();
  				clip.setClipMask(true);
  				if (item instanceof Group) {
  					item.insertChild(0, clip);
  				} else {
  					return new Group(clip, item);
  				}
  			}
  		},

  		gradientTransform: applyTransform,
  		transform: applyTransform,

  		'fill-opacity': applyOpacity,
  		'stroke-opacity': applyOpacity,

  		visibility: function(item, value) {
  			if (item.setVisible)
  				item.setVisible(value === 'visible');
  		},

  		display: function(item, value) {
  			if (item.setVisible)
  				item.setVisible(value !== null);
  		},

  		'stop-color': function(item, value) {
  			if (item.setColor)
  				item.setColor(value);
  		},

  		'stop-opacity': function(item, value) {
  			if (item._color)
  				item._color.setAlpha(parseFloat(value));
  		},

  		offset: function(item, value) {
  			if (item.setOffset) {
  				var percent = value.match(/(.*)%$/);
  				item.setOffset(percent ? percent[1] / 100 : parseFloat(value));
  			}
  		},

  		viewBox: function(item, value, name, node, styles) {
  			var rect = new Rectangle(convertValue(value, 'array')),
  				size = getSize(node, null, null, true),
  				group,
  				matrix;
  			if (item instanceof Group) {
  				var scale = size ? size.divide(rect.getSize()) : 1,
  				matrix = new Matrix().scale(scale)
  						.translate(rect.getPoint().negate());
  				group = item;
  			} else if (item instanceof SymbolDefinition) {
  				if (size)
  					rect.setSize(size);
  				group = item._item;
  			}
  			if (group)  {
  				if (getAttribute(node, 'overflow', styles) !== 'visible') {
  					var clip = new Shape.Rectangle(rect);
  					clip.setClipMask(true);
  					group.addChild(clip);
  				}
  				if (matrix)
  					group.transform(matrix);
  			}
  		}
  	});

  	function getAttribute(node, name, styles) {
  		var attr = node.attributes[name],
  			value = attr && attr.value;
  		if (!value && node.style) {
  			var style = Base.camelize(name);
  			value = node.style[style];
  			if (!value && styles.node[style] !== styles.parent[style])
  				value = styles.node[style];
  		}
  		return !value ? undefined
  				: value === 'none' ? null
  				: value;
  	}

  	function applyAttributes(item, node, isRoot) {
  		var parent = node.parentNode,
  			styles = {
  				node: DomElement.getStyles(node) || {},
  				parent: !isRoot && !/^defs$/i.test(parent.tagName)
  						&& DomElement.getStyles(parent) || {}
  			};
  		Base.each(attributes, function(apply, name) {
  			var value = getAttribute(node, name, styles);
  			item = value !== undefined
  					&& apply(item, value, name, node, styles) || item;
  		});
  		return item;
  	}

  	function getDefinition(value) {
  		var match = value && value.match(/\((?:["'#]*)([^"')]+)/),
  			name = match && match[1],
  			res = name && definitions[window
  					? name.replace(window.location.href.split('#')[0] + '#', '')
  					: name];
  		if (res && res._scaleToBounds) {
  			res = res.clone();
  			res._scaleToBounds = true;
  		}
  		return res;
  	}

  	function importNode(node, options, isRoot) {
  		var type = node.nodeName.toLowerCase(),
  			isElement = type !== '#document',
  			body = document.body,
  			container,
  			parent,
  			next;
  		if (isRoot && isElement) {
  			rootSize = paper.getView().getSize();
  			rootSize = getSize(node, null, null, true) || rootSize;
  			container = SvgElement.create('svg', {
  				style: 'stroke-width: 1px; stroke-miterlimit: 10'
  			});
  			parent = node.parentNode;
  			next = node.nextSibling;
  			container.appendChild(node);
  			body.appendChild(container);
  		}
  		var settings = paper.settings,
  			applyMatrix = settings.applyMatrix,
  			insertItems = settings.insertItems;
  		settings.applyMatrix = false;
  		settings.insertItems = false;
  		var importer = importers[type],
  			item = importer && importer(node, type, options, isRoot) || null;
  		settings.insertItems = insertItems;
  		settings.applyMatrix = applyMatrix;
  		if (item) {
  			if (isElement && !(item instanceof Group))
  				item = applyAttributes(item, node, isRoot);
  			var onImport = options.onImport,
  				data = isElement && node.getAttribute('data-paper-data');
  			if (onImport)
  				item = onImport(node, item, options) || item;
  			if (options.expandShapes && item instanceof Shape) {
  				item.remove();
  				item = item.toPath();
  			}
  			if (data)
  				item._data = JSON.parse(data);
  		}
  		if (container) {
  			body.removeChild(container);
  			if (parent) {
  				if (next) {
  					parent.insertBefore(node, next);
  				} else {
  					parent.appendChild(node);
  				}
  			}
  		}
  		if (isRoot) {
  			definitions = {};
  			if (item && Base.pick(options.applyMatrix, applyMatrix))
  				item.matrix.apply(true, true);
  		}
  		return item;
  	}

  	function importSVG(source, options, owner) {
  		if (!source)
  			return null;
  		options = typeof options === 'function' ? { onLoad: options }
  				: options || {};
  		var scope = paper,
  			item = null;

  		function onLoad(svg) {
  			try {
  				var node = typeof svg === 'object' ? svg : new self.DOMParser()
  						.parseFromString(svg, 'image/svg+xml');
  				if (!node.nodeName) {
  					node = null;
  					throw new Error('Unsupported SVG source: ' + source);
  				}
  				paper = scope;
  				item = importNode(node, options, true);
  				if (!options || options.insert !== false) {
  					owner._insertItem(undefined, item);
  				}
  				var onLoad = options.onLoad;
  				if (onLoad)
  					onLoad(item, svg);
  			} catch (e) {
  				onError(e);
  			}
  		}

  		function onError(message, status) {
  			var onError = options.onError;
  			if (onError) {
  				onError(message, status);
  			} else {
  				throw new Error(message);
  			}
  		}

  		if (typeof source === 'string' && !/^.*</.test(source)) {
  			var node = document.getElementById(source);
  			if (node) {
  				onLoad(node);
  			} else {
  				Http.request({
  					url: source,
  					async: true,
  					onLoad: onLoad,
  					onError: onError
  				});
  			}
  		} else if (typeof File !== 'undefined' && source instanceof File) {
  			var reader = new FileReader();
  			reader.onload = function() {
  				onLoad(reader.result);
  			};
  			reader.onerror = function() {
  				onError(reader.error);
  			};
  			return reader.readAsText(source);
  		} else {
  			onLoad(source);
  		}

  		return item;
  	}

  	Item.inject({
  		importSVG: function(node, options) {
  			return importSVG(node, options, this);
  		}
  	});

  	Project.inject({
  		importSVG: function(node, options) {
  			this.activate();
  			return importSVG(node, options, this);
  		}
  	});
  };

  Base.exports.PaperScript = function() {
  	var global = this,
  		acorn = global.acorn;
  	if (!acorn && typeof commonjsRequire !== 'undefined') {
  		try { acorn = require$$1; } catch(e) {}
  	}
  	if (!acorn) {
  		var exports, module;
  		acorn = exports = module = {};

  (function(root, mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports);
    if (typeof undefined == "function" && undefined.amd) return undefined(["exports"], mod);
    mod(root.acorn || (root.acorn = {}));
  })(this, function(exports) {

    exports.version = "0.5.0";

    var options, input, inputLen, sourceFile;

    exports.parse = function(inpt, opts) {
  	input = String(inpt); inputLen = input.length;
  	setOptions(opts);
  	initTokenState();
  	return parseTopLevel(options.program);
    };

    var defaultOptions = exports.defaultOptions = {
  	ecmaVersion: 5,
  	strictSemicolons: false,
  	allowTrailingCommas: true,
  	forbidReserved: false,
  	allowReturnOutsideFunction: false,
  	locations: false,
  	onComment: null,
  	ranges: false,
  	program: null,
  	sourceFile: null,
  	directSourceFile: null
    };

    function setOptions(opts) {
  	options = opts || {};
  	for (var opt in defaultOptions) if (!Object.prototype.hasOwnProperty.call(options, opt))
  	  options[opt] = defaultOptions[opt];
  	sourceFile = options.sourceFile || null;
    }

    var getLineInfo = exports.getLineInfo = function(input, offset) {
  	for (var line = 1, cur = 0;;) {
  	  lineBreak.lastIndex = cur;
  	  var match = lineBreak.exec(input);
  	  if (match && match.index < offset) {
  		++line;
  		cur = match.index + match[0].length;
  	  } else break;
  	}
  	return {line: line, column: offset - cur};
    };

    exports.tokenize = function(inpt, opts) {
  	input = String(inpt); inputLen = input.length;
  	setOptions(opts);
  	initTokenState();

  	var t = {};
  	function getToken(forceRegexp) {
  	  lastEnd = tokEnd;
  	  readToken(forceRegexp);
  	  t.start = tokStart; t.end = tokEnd;
  	  t.startLoc = tokStartLoc; t.endLoc = tokEndLoc;
  	  t.type = tokType; t.value = tokVal;
  	  return t;
  	}
  	getToken.jumpTo = function(pos, reAllowed) {
  	  tokPos = pos;
  	  if (options.locations) {
  		tokCurLine = 1;
  		tokLineStart = lineBreak.lastIndex = 0;
  		var match;
  		while ((match = lineBreak.exec(input)) && match.index < pos) {
  		  ++tokCurLine;
  		  tokLineStart = match.index + match[0].length;
  		}
  	  }
  	  tokRegexpAllowed = reAllowed;
  	  skipSpace();
  	};
  	return getToken;
    };

    var tokPos;

    var tokStart, tokEnd;

    var tokStartLoc, tokEndLoc;

    var tokType, tokVal;

    var tokRegexpAllowed;

    var tokCurLine, tokLineStart;

    var lastStart, lastEnd, lastEndLoc;

    var inFunction, labels, strict;

    function raise(pos, message) {
  	var loc = getLineInfo(input, pos);
  	message += " (" + loc.line + ":" + loc.column + ")";
  	var err = new SyntaxError(message);
  	err.pos = pos; err.loc = loc; err.raisedAt = tokPos;
  	throw err;
    }

    var empty = [];

    var _num = {type: "num"}, _regexp = {type: "regexp"}, _string = {type: "string"};
    var _name = {type: "name"}, _eof = {type: "eof"};

    var _break = {keyword: "break"}, _case = {keyword: "case", beforeExpr: true}, _catch = {keyword: "catch"};
    var _continue = {keyword: "continue"}, _debugger = {keyword: "debugger"}, _default = {keyword: "default"};
    var _do = {keyword: "do", isLoop: true}, _else = {keyword: "else", beforeExpr: true};
    var _finally = {keyword: "finally"}, _for = {keyword: "for", isLoop: true}, _function = {keyword: "function"};
    var _if = {keyword: "if"}, _return = {keyword: "return", beforeExpr: true}, _switch = {keyword: "switch"};
    var _throw = {keyword: "throw", beforeExpr: true}, _try = {keyword: "try"}, _var = {keyword: "var"};
    var _while = {keyword: "while", isLoop: true}, _with = {keyword: "with"}, _new = {keyword: "new", beforeExpr: true};
    var _this = {keyword: "this"};

    var _null = {keyword: "null", atomValue: null}, _true = {keyword: "true", atomValue: true};
    var _false = {keyword: "false", atomValue: false};

    var _in = {keyword: "in", binop: 7, beforeExpr: true};

    var keywordTypes = {"break": _break, "case": _case, "catch": _catch,
  					  "continue": _continue, "debugger": _debugger, "default": _default,
  					  "do": _do, "else": _else, "finally": _finally, "for": _for,
  					  "function": _function, "if": _if, "return": _return, "switch": _switch,
  					  "throw": _throw, "try": _try, "var": _var, "while": _while, "with": _with,
  					  "null": _null, "true": _true, "false": _false, "new": _new, "in": _in,
  					  "instanceof": {keyword: "instanceof", binop: 7, beforeExpr: true}, "this": _this,
  					  "typeof": {keyword: "typeof", prefix: true, beforeExpr: true},
  					  "void": {keyword: "void", prefix: true, beforeExpr: true},
  					  "delete": {keyword: "delete", prefix: true, beforeExpr: true}};

    var _bracketL = {type: "[", beforeExpr: true}, _bracketR = {type: "]"}, _braceL = {type: "{", beforeExpr: true};
    var _braceR = {type: "}"}, _parenL = {type: "(", beforeExpr: true}, _parenR = {type: ")"};
    var _comma = {type: ",", beforeExpr: true}, _semi = {type: ";", beforeExpr: true};
    var _colon = {type: ":", beforeExpr: true}, _dot = {type: "."}, _question = {type: "?", beforeExpr: true};

    var _slash = {binop: 10, beforeExpr: true}, _eq = {isAssign: true, beforeExpr: true};
    var _assign = {isAssign: true, beforeExpr: true};
    var _incDec = {postfix: true, prefix: true, isUpdate: true}, _prefix = {prefix: true, beforeExpr: true};
    var _logicalOR = {binop: 1, beforeExpr: true};
    var _logicalAND = {binop: 2, beforeExpr: true};
    var _bitwiseOR = {binop: 3, beforeExpr: true};
    var _bitwiseXOR = {binop: 4, beforeExpr: true};
    var _bitwiseAND = {binop: 5, beforeExpr: true};
    var _equality = {binop: 6, beforeExpr: true};
    var _relational = {binop: 7, beforeExpr: true};
    var _bitShift = {binop: 8, beforeExpr: true};
    var _plusMin = {binop: 9, prefix: true, beforeExpr: true};
    var _multiplyModulo = {binop: 10, beforeExpr: true};

    exports.tokTypes = {bracketL: _bracketL, bracketR: _bracketR, braceL: _braceL, braceR: _braceR,
  					  parenL: _parenL, parenR: _parenR, comma: _comma, semi: _semi, colon: _colon,
  					  dot: _dot, question: _question, slash: _slash, eq: _eq, name: _name, eof: _eof,
  					  num: _num, regexp: _regexp, string: _string};
    for (var kw in keywordTypes) exports.tokTypes["_" + kw] = keywordTypes[kw];

    function makePredicate(words) {
  	words = words.split(" ");
  	var f = "", cats = [];
  	out: for (var i = 0; i < words.length; ++i) {
  	  for (var j = 0; j < cats.length; ++j)
  		if (cats[j][0].length == words[i].length) {
  		  cats[j].push(words[i]);
  		  continue out;
  		}
  	  cats.push([words[i]]);
  	}
  	function compareTo(arr) {
  	  if (arr.length == 1) return f += "return str === " + JSON.stringify(arr[0]) + ";";
  	  f += "switch(str){";
  	  for (var i = 0; i < arr.length; ++i) f += "case " + JSON.stringify(arr[i]) + ":";
  	  f += "return true}return false;";
  	}

  	if (cats.length > 3) {
  	  cats.sort(function(a, b) {return b.length - a.length;});
  	  f += "switch(str.length){";
  	  for (var i = 0; i < cats.length; ++i) {
  		var cat = cats[i];
  		f += "case " + cat[0].length + ":";
  		compareTo(cat);
  	  }
  	  f += "}";

  	} else {
  	  compareTo(words);
  	}
  	return new Function("str", f);
    }

    var isReservedWord3 = makePredicate("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile");

    var isReservedWord5 = makePredicate("class enum extends super const export import");

    var isStrictReservedWord = makePredicate("implements interface let package private protected public static yield");

    var isStrictBadIdWord = makePredicate("eval arguments");

    var isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this");

    var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
    var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
    var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

    var newline = /[\n\r\u2028\u2029]/;

    var lineBreak = /\r\n|[\n\r\u2028\u2029]/g;

    var isIdentifierStart = exports.isIdentifierStart = function(code) {
  	if (code < 65) return code === 36;
  	if (code < 91) return true;
  	if (code < 97) return code === 95;
  	if (code < 123)return true;
  	return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
    };

    var isIdentifierChar = exports.isIdentifierChar = function(code) {
  	if (code < 48) return code === 36;
  	if (code < 58) return true;
  	if (code < 65) return false;
  	if (code < 91) return true;
  	if (code < 97) return code === 95;
  	if (code < 123)return true;
  	return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
    };

    function line_loc_t() {
  	this.line = tokCurLine;
  	this.column = tokPos - tokLineStart;
    }

    function initTokenState() {
  	tokCurLine = 1;
  	tokPos = tokLineStart = 0;
  	tokRegexpAllowed = true;
  	skipSpace();
    }

    function finishToken(type, val) {
  	tokEnd = tokPos;
  	if (options.locations) tokEndLoc = new line_loc_t;
  	tokType = type;
  	skipSpace();
  	tokVal = val;
  	tokRegexpAllowed = type.beforeExpr;
    }

    function skipBlockComment() {
  	var startLoc = options.onComment && options.locations && new line_loc_t;
  	var start = tokPos, end = input.indexOf("*/", tokPos += 2);
  	if (end === -1) raise(tokPos - 2, "Unterminated comment");
  	tokPos = end + 2;
  	if (options.locations) {
  	  lineBreak.lastIndex = start;
  	  var match;
  	  while ((match = lineBreak.exec(input)) && match.index < tokPos) {
  		++tokCurLine;
  		tokLineStart = match.index + match[0].length;
  	  }
  	}
  	if (options.onComment)
  	  options.onComment(true, input.slice(start + 2, end), start, tokPos,
  						startLoc, options.locations && new line_loc_t);
    }

    function skipLineComment() {
  	var start = tokPos;
  	var startLoc = options.onComment && options.locations && new line_loc_t;
  	var ch = input.charCodeAt(tokPos+=2);
  	while (tokPos < inputLen && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
  	  ++tokPos;
  	  ch = input.charCodeAt(tokPos);
  	}
  	if (options.onComment)
  	  options.onComment(false, input.slice(start + 2, tokPos), start, tokPos,
  						startLoc, options.locations && new line_loc_t);
    }

    function skipSpace() {
  	while (tokPos < inputLen) {
  	  var ch = input.charCodeAt(tokPos);
  	  if (ch === 32) {
  		++tokPos;
  	  } else if (ch === 13) {
  		++tokPos;
  		var next = input.charCodeAt(tokPos);
  		if (next === 10) {
  		  ++tokPos;
  		}
  		if (options.locations) {
  		  ++tokCurLine;
  		  tokLineStart = tokPos;
  		}
  	  } else if (ch === 10 || ch === 8232 || ch === 8233) {
  		++tokPos;
  		if (options.locations) {
  		  ++tokCurLine;
  		  tokLineStart = tokPos;
  		}
  	  } else if (ch > 8 && ch < 14) {
  		++tokPos;
  	  } else if (ch === 47) {
  		var next = input.charCodeAt(tokPos + 1);
  		if (next === 42) {
  		  skipBlockComment();
  		} else if (next === 47) {
  		  skipLineComment();
  		} else break;
  	  } else if (ch === 160) {
  		++tokPos;
  	  } else if (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
  		++tokPos;
  	  } else {
  		break;
  	  }
  	}
    }

    function readToken_dot() {
  	var next = input.charCodeAt(tokPos + 1);
  	if (next >= 48 && next <= 57) return readNumber(true);
  	++tokPos;
  	return finishToken(_dot);
    }

    function readToken_slash() {
  	var next = input.charCodeAt(tokPos + 1);
  	if (tokRegexpAllowed) {++tokPos; return readRegexp();}
  	if (next === 61) return finishOp(_assign, 2);
  	return finishOp(_slash, 1);
    }

    function readToken_mult_modulo() {
  	var next = input.charCodeAt(tokPos + 1);
  	if (next === 61) return finishOp(_assign, 2);
  	return finishOp(_multiplyModulo, 1);
    }

    function readToken_pipe_amp(code) {
  	var next = input.charCodeAt(tokPos + 1);
  	if (next === code) return finishOp(code === 124 ? _logicalOR : _logicalAND, 2);
  	if (next === 61) return finishOp(_assign, 2);
  	return finishOp(code === 124 ? _bitwiseOR : _bitwiseAND, 1);
    }

    function readToken_caret() {
  	var next = input.charCodeAt(tokPos + 1);
  	if (next === 61) return finishOp(_assign, 2);
  	return finishOp(_bitwiseXOR, 1);
    }

    function readToken_plus_min(code) {
  	var next = input.charCodeAt(tokPos + 1);
  	if (next === code) {
  	  if (next == 45 && input.charCodeAt(tokPos + 2) == 62 &&
  		  newline.test(input.slice(lastEnd, tokPos))) {
  		tokPos += 3;
  		skipLineComment();
  		skipSpace();
  		return readToken();
  	  }
  	  return finishOp(_incDec, 2);
  	}
  	if (next === 61) return finishOp(_assign, 2);
  	return finishOp(_plusMin, 1);
    }

    function readToken_lt_gt(code) {
  	var next = input.charCodeAt(tokPos + 1);
  	var size = 1;
  	if (next === code) {
  	  size = code === 62 && input.charCodeAt(tokPos + 2) === 62 ? 3 : 2;
  	  if (input.charCodeAt(tokPos + size) === 61) return finishOp(_assign, size + 1);
  	  return finishOp(_bitShift, size);
  	}
  	if (next == 33 && code == 60 && input.charCodeAt(tokPos + 2) == 45 &&
  		input.charCodeAt(tokPos + 3) == 45) {
  	  tokPos += 4;
  	  skipLineComment();
  	  skipSpace();
  	  return readToken();
  	}
  	if (next === 61)
  	  size = input.charCodeAt(tokPos + 2) === 61 ? 3 : 2;
  	return finishOp(_relational, size);
    }

    function readToken_eq_excl(code) {
  	var next = input.charCodeAt(tokPos + 1);
  	if (next === 61) return finishOp(_equality, input.charCodeAt(tokPos + 2) === 61 ? 3 : 2);
  	return finishOp(code === 61 ? _eq : _prefix, 1);
    }

    function getTokenFromCode(code) {
  	switch(code) {
  	case 46:
  	  return readToken_dot();

  	case 40: ++tokPos; return finishToken(_parenL);
  	case 41: ++tokPos; return finishToken(_parenR);
  	case 59: ++tokPos; return finishToken(_semi);
  	case 44: ++tokPos; return finishToken(_comma);
  	case 91: ++tokPos; return finishToken(_bracketL);
  	case 93: ++tokPos; return finishToken(_bracketR);
  	case 123: ++tokPos; return finishToken(_braceL);
  	case 125: ++tokPos; return finishToken(_braceR);
  	case 58: ++tokPos; return finishToken(_colon);
  	case 63: ++tokPos; return finishToken(_question);

  	case 48:
  	  var next = input.charCodeAt(tokPos + 1);
  	  if (next === 120 || next === 88) return readHexNumber();
  	case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57:
  	  return readNumber(false);

  	case 34: case 39:
  	  return readString(code);

  	case 47:
  	  return readToken_slash(code);

  	case 37: case 42:
  	  return readToken_mult_modulo();

  	case 124: case 38:
  	  return readToken_pipe_amp(code);

  	case 94:
  	  return readToken_caret();

  	case 43: case 45:
  	  return readToken_plus_min(code);

  	case 60: case 62:
  	  return readToken_lt_gt(code);

  	case 61: case 33:
  	  return readToken_eq_excl(code);

  	case 126:
  	  return finishOp(_prefix, 1);
  	}

  	return false;
    }

    function readToken(forceRegexp) {
  	if (!forceRegexp) tokStart = tokPos;
  	else tokPos = tokStart + 1;
  	if (options.locations) tokStartLoc = new line_loc_t;
  	if (forceRegexp) return readRegexp();
  	if (tokPos >= inputLen) return finishToken(_eof);

  	var code = input.charCodeAt(tokPos);
  	if (isIdentifierStart(code) || code === 92 ) return readWord();

  	var tok = getTokenFromCode(code);

  	if (tok === false) {
  	  var ch = String.fromCharCode(code);
  	  if (ch === "\\" || nonASCIIidentifierStart.test(ch)) return readWord();
  	  raise(tokPos, "Unexpected character '" + ch + "'");
  	}
  	return tok;
    }

    function finishOp(type, size) {
  	var str = input.slice(tokPos, tokPos + size);
  	tokPos += size;
  	finishToken(type, str);
    }

    function readRegexp() {
  	var content = "", escaped, inClass, start = tokPos;
  	for (;;) {
  	  if (tokPos >= inputLen) raise(start, "Unterminated regular expression");
  	  var ch = input.charAt(tokPos);
  	  if (newline.test(ch)) raise(start, "Unterminated regular expression");
  	  if (!escaped) {
  		if (ch === "[") inClass = true;
  		else if (ch === "]" && inClass) inClass = false;
  		else if (ch === "/" && !inClass) break;
  		escaped = ch === "\\";
  	  } else escaped = false;
  	  ++tokPos;
  	}
  	var content = input.slice(start, tokPos);
  	++tokPos;
  	var mods = readWord1();
  	if (mods && !/^[gmsiy]*$/.test(mods)) raise(start, "Invalid regexp flag");
  	try {
  	  var value = new RegExp(content, mods);
  	} catch (e) {
  	  if (e instanceof SyntaxError) raise(start, e.message);
  	  raise(e);
  	}
  	return finishToken(_regexp, value);
    }

    function readInt(radix, len) {
  	var start = tokPos, total = 0;
  	for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
  	  var code = input.charCodeAt(tokPos), val;
  	  if (code >= 97) val = code - 97 + 10;
  	  else if (code >= 65) val = code - 65 + 10;
  	  else if (code >= 48 && code <= 57) val = code - 48;
  	  else val = Infinity;
  	  if (val >= radix) break;
  	  ++tokPos;
  	  total = total * radix + val;
  	}
  	if (tokPos === start || len != null && tokPos - start !== len) return null;

  	return total;
    }

    function readHexNumber() {
  	tokPos += 2;
  	var val = readInt(16);
  	if (val == null) raise(tokStart + 2, "Expected hexadecimal number");
  	if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");
  	return finishToken(_num, val);
    }

    function readNumber(startsWithDot) {
  	var start = tokPos, isFloat = false, octal = input.charCodeAt(tokPos) === 48;
  	if (!startsWithDot && readInt(10) === null) raise(start, "Invalid number");
  	if (input.charCodeAt(tokPos) === 46) {
  	  ++tokPos;
  	  readInt(10);
  	  isFloat = true;
  	}
  	var next = input.charCodeAt(tokPos);
  	if (next === 69 || next === 101) {
  	  next = input.charCodeAt(++tokPos);
  	  if (next === 43 || next === 45) ++tokPos;
  	  if (readInt(10) === null) raise(start, "Invalid number");
  	  isFloat = true;
  	}
  	if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");

  	var str = input.slice(start, tokPos), val;
  	if (isFloat) val = parseFloat(str);
  	else if (!octal || str.length === 1) val = parseInt(str, 10);
  	else if (/[89]/.test(str) || strict) raise(start, "Invalid number");
  	else val = parseInt(str, 8);
  	return finishToken(_num, val);
    }

    function readString(quote) {
  	tokPos++;
  	var out = "";
  	for (;;) {
  	  if (tokPos >= inputLen) raise(tokStart, "Unterminated string constant");
  	  var ch = input.charCodeAt(tokPos);
  	  if (ch === quote) {
  		++tokPos;
  		return finishToken(_string, out);
  	  }
  	  if (ch === 92) {
  		ch = input.charCodeAt(++tokPos);
  		var octal = /^[0-7]+/.exec(input.slice(tokPos, tokPos + 3));
  		if (octal) octal = octal[0];
  		while (octal && parseInt(octal, 8) > 255) octal = octal.slice(0, -1);
  		if (octal === "0") octal = null;
  		++tokPos;
  		if (octal) {
  		  if (strict) raise(tokPos - 2, "Octal literal in strict mode");
  		  out += String.fromCharCode(parseInt(octal, 8));
  		  tokPos += octal.length - 1;
  		} else {
  		  switch (ch) {
  		  case 110: out += "\n"; break;
  		  case 114: out += "\r"; break;
  		  case 120: out += String.fromCharCode(readHexChar(2)); break;
  		  case 117: out += String.fromCharCode(readHexChar(4)); break;
  		  case 85: out += String.fromCharCode(readHexChar(8)); break;
  		  case 116: out += "\t"; break;
  		  case 98: out += "\b"; break;
  		  case 118: out += "\u000b"; break;
  		  case 102: out += "\f"; break;
  		  case 48: out += "\0"; break;
  		  case 13: if (input.charCodeAt(tokPos) === 10) ++tokPos;
  		  case 10:
  			if (options.locations) { tokLineStart = tokPos; ++tokCurLine; }
  			break;
  		  default: out += String.fromCharCode(ch); break;
  		  }
  		}
  	  } else {
  		if (ch === 13 || ch === 10 || ch === 8232 || ch === 8233) raise(tokStart, "Unterminated string constant");
  		out += String.fromCharCode(ch);
  		++tokPos;
  	  }
  	}
    }

    function readHexChar(len) {
  	var n = readInt(16, len);
  	if (n === null) raise(tokStart, "Bad character escape sequence");
  	return n;
    }

    var containsEsc;

    function readWord1() {
  	containsEsc = false;
  	var word, first = true, start = tokPos;
  	for (;;) {
  	  var ch = input.charCodeAt(tokPos);
  	  if (isIdentifierChar(ch)) {
  		if (containsEsc) word += input.charAt(tokPos);
  		++tokPos;
  	  } else if (ch === 92) {
  		if (!containsEsc) word = input.slice(start, tokPos);
  		containsEsc = true;
  		if (input.charCodeAt(++tokPos) != 117)
  		  raise(tokPos, "Expecting Unicode escape sequence \\uXXXX");
  		++tokPos;
  		var esc = readHexChar(4);
  		var escStr = String.fromCharCode(esc);
  		if (!escStr) raise(tokPos - 1, "Invalid Unicode escape");
  		if (!(first ? isIdentifierStart(esc) : isIdentifierChar(esc)))
  		  raise(tokPos - 4, "Invalid Unicode escape");
  		word += escStr;
  	  } else {
  		break;
  	  }
  	  first = false;
  	}
  	return containsEsc ? word : input.slice(start, tokPos);
    }

    function readWord() {
  	var word = readWord1();
  	var type = _name;
  	if (!containsEsc && isKeyword(word))
  	  type = keywordTypes[word];
  	return finishToken(type, word);
    }

    function next() {
  	lastStart = tokStart;
  	lastEnd = tokEnd;
  	lastEndLoc = tokEndLoc;
  	readToken();
    }

    function setStrict(strct) {
  	strict = strct;
  	tokPos = tokStart;
  	if (options.locations) {
  	  while (tokPos < tokLineStart) {
  		tokLineStart = input.lastIndexOf("\n", tokLineStart - 2) + 1;
  		--tokCurLine;
  	  }
  	}
  	skipSpace();
  	readToken();
    }

    function node_t() {
  	this.type = null;
  	this.start = tokStart;
  	this.end = null;
    }

    function node_loc_t() {
  	this.start = tokStartLoc;
  	this.end = null;
  	if (sourceFile !== null) this.source = sourceFile;
    }

    function startNode() {
  	var node = new node_t();
  	if (options.locations)
  	  node.loc = new node_loc_t();
  	if (options.directSourceFile)
  	  node.sourceFile = options.directSourceFile;
  	if (options.ranges)
  	  node.range = [tokStart, 0];
  	return node;
    }

    function startNodeFrom(other) {
  	var node = new node_t();
  	node.start = other.start;
  	if (options.locations) {
  	  node.loc = new node_loc_t();
  	  node.loc.start = other.loc.start;
  	}
  	if (options.ranges)
  	  node.range = [other.range[0], 0];

  	return node;
    }

    function finishNode(node, type) {
  	node.type = type;
  	node.end = lastEnd;
  	if (options.locations)
  	  node.loc.end = lastEndLoc;
  	if (options.ranges)
  	  node.range[1] = lastEnd;
  	return node;
    }

    function isUseStrict(stmt) {
  	return options.ecmaVersion >= 5 && stmt.type === "ExpressionStatement" &&
  	  stmt.expression.type === "Literal" && stmt.expression.value === "use strict";
    }

    function eat(type) {
  	if (tokType === type) {
  	  next();
  	  return true;
  	}
    }

    function canInsertSemicolon() {
  	return !options.strictSemicolons &&
  	  (tokType === _eof || tokType === _braceR || newline.test(input.slice(lastEnd, tokStart)));
    }

    function semicolon() {
  	if (!eat(_semi) && !canInsertSemicolon()) unexpected();
    }

    function expect(type) {
  	if (tokType === type) next();
  	else unexpected();
    }

    function unexpected() {
  	raise(tokStart, "Unexpected token");
    }

    function checkLVal(expr) {
  	if (expr.type !== "Identifier" && expr.type !== "MemberExpression")
  	  raise(expr.start, "Assigning to rvalue");
  	if (strict && expr.type === "Identifier" && isStrictBadIdWord(expr.name))
  	  raise(expr.start, "Assigning to " + expr.name + " in strict mode");
    }

    function parseTopLevel(program) {
  	lastStart = lastEnd = tokPos;
  	if (options.locations) lastEndLoc = new line_loc_t;
  	inFunction = strict = null;
  	labels = [];
  	readToken();

  	var node = program || startNode(), first = true;
  	if (!program) node.body = [];
  	while (tokType !== _eof) {
  	  var stmt = parseStatement();
  	  node.body.push(stmt);
  	  if (first && isUseStrict(stmt)) setStrict(true);
  	  first = false;
  	}
  	return finishNode(node, "Program");
    }

    var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

    function parseStatement() {
  	if (tokType === _slash || tokType === _assign && tokVal == "/=")
  	  readToken(true);

  	var starttype = tokType, node = startNode();

  	switch (starttype) {
  	case _break: case _continue:
  	  next();
  	  var isBreak = starttype === _break;
  	  if (eat(_semi) || canInsertSemicolon()) node.label = null;
  	  else if (tokType !== _name) unexpected();
  	  else {
  		node.label = parseIdent();
  		semicolon();
  	  }

  	  for (var i = 0; i < labels.length; ++i) {
  		var lab = labels[i];
  		if (node.label == null || lab.name === node.label.name) {
  		  if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
  		  if (node.label && isBreak) break;
  		}
  	  }
  	  if (i === labels.length) raise(node.start, "Unsyntactic " + starttype.keyword);
  	  return finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");

  	case _debugger:
  	  next();
  	  semicolon();
  	  return finishNode(node, "DebuggerStatement");

  	case _do:
  	  next();
  	  labels.push(loopLabel);
  	  node.body = parseStatement();
  	  labels.pop();
  	  expect(_while);
  	  node.test = parseParenExpression();
  	  semicolon();
  	  return finishNode(node, "DoWhileStatement");

  	case _for:
  	  next();
  	  labels.push(loopLabel);
  	  expect(_parenL);
  	  if (tokType === _semi) return parseFor(node, null);
  	  if (tokType === _var) {
  		var init = startNode();
  		next();
  		parseVar(init, true);
  		finishNode(init, "VariableDeclaration");
  		if (init.declarations.length === 1 && eat(_in))
  		  return parseForIn(node, init);
  		return parseFor(node, init);
  	  }
  	  var init = parseExpression(false, true);
  	  if (eat(_in)) {checkLVal(init); return parseForIn(node, init);}
  	  return parseFor(node, init);

  	case _function:
  	  next();
  	  return parseFunction(node, true);

  	case _if:
  	  next();
  	  node.test = parseParenExpression();
  	  node.consequent = parseStatement();
  	  node.alternate = eat(_else) ? parseStatement() : null;
  	  return finishNode(node, "IfStatement");

  	case _return:
  	  if (!inFunction && !options.allowReturnOutsideFunction)
  		raise(tokStart, "'return' outside of function");
  	  next();

  	  if (eat(_semi) || canInsertSemicolon()) node.argument = null;
  	  else { node.argument = parseExpression(); semicolon(); }
  	  return finishNode(node, "ReturnStatement");

  	case _switch:
  	  next();
  	  node.discriminant = parseParenExpression();
  	  node.cases = [];
  	  expect(_braceL);
  	  labels.push(switchLabel);

  	  for (var cur, sawDefault; tokType != _braceR;) {
  		if (tokType === _case || tokType === _default) {
  		  var isCase = tokType === _case;
  		  if (cur) finishNode(cur, "SwitchCase");
  		  node.cases.push(cur = startNode());
  		  cur.consequent = [];
  		  next();
  		  if (isCase) cur.test = parseExpression();
  		  else {
  			if (sawDefault) raise(lastStart, "Multiple default clauses"); sawDefault = true;
  			cur.test = null;
  		  }
  		  expect(_colon);
  		} else {
  		  if (!cur) unexpected();
  		  cur.consequent.push(parseStatement());
  		}
  	  }
  	  if (cur) finishNode(cur, "SwitchCase");
  	  next();
  	  labels.pop();
  	  return finishNode(node, "SwitchStatement");

  	case _throw:
  	  next();
  	  if (newline.test(input.slice(lastEnd, tokStart)))
  		raise(lastEnd, "Illegal newline after throw");
  	  node.argument = parseExpression();
  	  semicolon();
  	  return finishNode(node, "ThrowStatement");

  	case _try:
  	  next();
  	  node.block = parseBlock();
  	  node.handler = null;
  	  if (tokType === _catch) {
  		var clause = startNode();
  		next();
  		expect(_parenL);
  		clause.param = parseIdent();
  		if (strict && isStrictBadIdWord(clause.param.name))
  		  raise(clause.param.start, "Binding " + clause.param.name + " in strict mode");
  		expect(_parenR);
  		clause.guard = null;
  		clause.body = parseBlock();
  		node.handler = finishNode(clause, "CatchClause");
  	  }
  	  node.guardedHandlers = empty;
  	  node.finalizer = eat(_finally) ? parseBlock() : null;
  	  if (!node.handler && !node.finalizer)
  		raise(node.start, "Missing catch or finally clause");
  	  return finishNode(node, "TryStatement");

  	case _var:
  	  next();
  	  parseVar(node);
  	  semicolon();
  	  return finishNode(node, "VariableDeclaration");

  	case _while:
  	  next();
  	  node.test = parseParenExpression();
  	  labels.push(loopLabel);
  	  node.body = parseStatement();
  	  labels.pop();
  	  return finishNode(node, "WhileStatement");

  	case _with:
  	  if (strict) raise(tokStart, "'with' in strict mode");
  	  next();
  	  node.object = parseParenExpression();
  	  node.body = parseStatement();
  	  return finishNode(node, "WithStatement");

  	case _braceL:
  	  return parseBlock();

  	case _semi:
  	  next();
  	  return finishNode(node, "EmptyStatement");

  	default:
  	  var maybeName = tokVal, expr = parseExpression();
  	  if (starttype === _name && expr.type === "Identifier" && eat(_colon)) {
  		for (var i = 0; i < labels.length; ++i)
  		  if (labels[i].name === maybeName) raise(expr.start, "Label '" + maybeName + "' is already declared");
  		var kind = tokType.isLoop ? "loop" : tokType === _switch ? "switch" : null;
  		labels.push({name: maybeName, kind: kind});
  		node.body = parseStatement();
  		labels.pop();
  		node.label = expr;
  		return finishNode(node, "LabeledStatement");
  	  } else {
  		node.expression = expr;
  		semicolon();
  		return finishNode(node, "ExpressionStatement");
  	  }
  	}
    }

    function parseParenExpression() {
  	expect(_parenL);
  	var val = parseExpression();
  	expect(_parenR);
  	return val;
    }

    function parseBlock(allowStrict) {
  	var node = startNode(), first = true, strict = false, oldStrict;
  	node.body = [];
  	expect(_braceL);
  	while (!eat(_braceR)) {
  	  var stmt = parseStatement();
  	  node.body.push(stmt);
  	  if (first && allowStrict && isUseStrict(stmt)) {
  		oldStrict = strict;
  		setStrict(strict = true);
  	  }
  	  first = false;
  	}
  	if (strict && !oldStrict) setStrict(false);
  	return finishNode(node, "BlockStatement");
    }

    function parseFor(node, init) {
  	node.init = init;
  	expect(_semi);
  	node.test = tokType === _semi ? null : parseExpression();
  	expect(_semi);
  	node.update = tokType === _parenR ? null : parseExpression();
  	expect(_parenR);
  	node.body = parseStatement();
  	labels.pop();
  	return finishNode(node, "ForStatement");
    }

    function parseForIn(node, init) {
  	node.left = init;
  	node.right = parseExpression();
  	expect(_parenR);
  	node.body = parseStatement();
  	labels.pop();
  	return finishNode(node, "ForInStatement");
    }

    function parseVar(node, noIn) {
  	node.declarations = [];
  	node.kind = "var";
  	for (;;) {
  	  var decl = startNode();
  	  decl.id = parseIdent();
  	  if (strict && isStrictBadIdWord(decl.id.name))
  		raise(decl.id.start, "Binding " + decl.id.name + " in strict mode");
  	  decl.init = eat(_eq) ? parseExpression(true, noIn) : null;
  	  node.declarations.push(finishNode(decl, "VariableDeclarator"));
  	  if (!eat(_comma)) break;
  	}
  	return node;
    }

    function parseExpression(noComma, noIn) {
  	var expr = parseMaybeAssign(noIn);
  	if (!noComma && tokType === _comma) {
  	  var node = startNodeFrom(expr);
  	  node.expressions = [expr];
  	  while (eat(_comma)) node.expressions.push(parseMaybeAssign(noIn));
  	  return finishNode(node, "SequenceExpression");
  	}
  	return expr;
    }

    function parseMaybeAssign(noIn) {
  	var left = parseMaybeConditional(noIn);
  	if (tokType.isAssign) {
  	  var node = startNodeFrom(left);
  	  node.operator = tokVal;
  	  node.left = left;
  	  next();
  	  node.right = parseMaybeAssign(noIn);
  	  checkLVal(left);
  	  return finishNode(node, "AssignmentExpression");
  	}
  	return left;
    }

    function parseMaybeConditional(noIn) {
  	var expr = parseExprOps(noIn);
  	if (eat(_question)) {
  	  var node = startNodeFrom(expr);
  	  node.test = expr;
  	  node.consequent = parseExpression(true);
  	  expect(_colon);
  	  node.alternate = parseExpression(true, noIn);
  	  return finishNode(node, "ConditionalExpression");
  	}
  	return expr;
    }

    function parseExprOps(noIn) {
  	return parseExprOp(parseMaybeUnary(), -1, noIn);
    }

    function parseExprOp(left, minPrec, noIn) {
  	var prec = tokType.binop;
  	if (prec != null && (!noIn || tokType !== _in)) {
  	  if (prec > minPrec) {
  		var node = startNodeFrom(left);
  		node.left = left;
  		node.operator = tokVal;
  		var op = tokType;
  		next();
  		node.right = parseExprOp(parseMaybeUnary(), prec, noIn);
  		var exprNode = finishNode(node, (op === _logicalOR || op === _logicalAND) ? "LogicalExpression" : "BinaryExpression");
  		return parseExprOp(exprNode, minPrec, noIn);
  	  }
  	}
  	return left;
    }

    function parseMaybeUnary() {
  	if (tokType.prefix) {
  	  var node = startNode(), update = tokType.isUpdate;
  	  node.operator = tokVal;
  	  node.prefix = true;
  	  tokRegexpAllowed = true;
  	  next();
  	  node.argument = parseMaybeUnary();
  	  if (update) checkLVal(node.argument);
  	  else if (strict && node.operator === "delete" &&
  			   node.argument.type === "Identifier")
  		raise(node.start, "Deleting local variable in strict mode");
  	  return finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  	}
  	var expr = parseExprSubscripts();
  	while (tokType.postfix && !canInsertSemicolon()) {
  	  var node = startNodeFrom(expr);
  	  node.operator = tokVal;
  	  node.prefix = false;
  	  node.argument = expr;
  	  checkLVal(expr);
  	  next();
  	  expr = finishNode(node, "UpdateExpression");
  	}
  	return expr;
    }

    function parseExprSubscripts() {
  	return parseSubscripts(parseExprAtom());
    }

    function parseSubscripts(base, noCalls) {
  	if (eat(_dot)) {
  	  var node = startNodeFrom(base);
  	  node.object = base;
  	  node.property = parseIdent(true);
  	  node.computed = false;
  	  return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
  	} else if (eat(_bracketL)) {
  	  var node = startNodeFrom(base);
  	  node.object = base;
  	  node.property = parseExpression();
  	  node.computed = true;
  	  expect(_bracketR);
  	  return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
  	} else if (!noCalls && eat(_parenL)) {
  	  var node = startNodeFrom(base);
  	  node.callee = base;
  	  node.arguments = parseExprList(_parenR, false);
  	  return parseSubscripts(finishNode(node, "CallExpression"), noCalls);
  	} else return base;
    }

    function parseExprAtom() {
  	switch (tokType) {
  	case _this:
  	  var node = startNode();
  	  next();
  	  return finishNode(node, "ThisExpression");
  	case _name:
  	  return parseIdent();
  	case _num: case _string: case _regexp:
  	  var node = startNode();
  	  node.value = tokVal;
  	  node.raw = input.slice(tokStart, tokEnd);
  	  next();
  	  return finishNode(node, "Literal");

  	case _null: case _true: case _false:
  	  var node = startNode();
  	  node.value = tokType.atomValue;
  	  node.raw = tokType.keyword;
  	  next();
  	  return finishNode(node, "Literal");

  	case _parenL:
  	  var tokStartLoc1 = tokStartLoc, tokStart1 = tokStart;
  	  next();
  	  var val = parseExpression();
  	  val.start = tokStart1;
  	  val.end = tokEnd;
  	  if (options.locations) {
  		val.loc.start = tokStartLoc1;
  		val.loc.end = tokEndLoc;
  	  }
  	  if (options.ranges)
  		val.range = [tokStart1, tokEnd];
  	  expect(_parenR);
  	  return val;

  	case _bracketL:
  	  var node = startNode();
  	  next();
  	  node.elements = parseExprList(_bracketR, true, true);
  	  return finishNode(node, "ArrayExpression");

  	case _braceL:
  	  return parseObj();

  	case _function:
  	  var node = startNode();
  	  next();
  	  return parseFunction(node, false);

  	case _new:
  	  return parseNew();

  	default:
  	  unexpected();
  	}
    }

    function parseNew() {
  	var node = startNode();
  	next();
  	node.callee = parseSubscripts(parseExprAtom(), true);
  	if (eat(_parenL)) node.arguments = parseExprList(_parenR, false);
  	else node.arguments = empty;
  	return finishNode(node, "NewExpression");
    }

    function parseObj() {
  	var node = startNode(), first = true, sawGetSet = false;
  	node.properties = [];
  	next();
  	while (!eat(_braceR)) {
  	  if (!first) {
  		expect(_comma);
  		if (options.allowTrailingCommas && eat(_braceR)) break;
  	  } else first = false;

  	  var prop = {key: parsePropertyName()}, isGetSet = false, kind;
  	  if (eat(_colon)) {
  		prop.value = parseExpression(true);
  		kind = prop.kind = "init";
  	  } else if (options.ecmaVersion >= 5 && prop.key.type === "Identifier" &&
  				 (prop.key.name === "get" || prop.key.name === "set")) {
  		isGetSet = sawGetSet = true;
  		kind = prop.kind = prop.key.name;
  		prop.key = parsePropertyName();
  		if (tokType !== _parenL) unexpected();
  		prop.value = parseFunction(startNode(), false);
  	  } else unexpected();

  	  if (prop.key.type === "Identifier" && (strict || sawGetSet)) {
  		for (var i = 0; i < node.properties.length; ++i) {
  		  var other = node.properties[i];
  		  if (other.key.name === prop.key.name) {
  			var conflict = kind == other.kind || isGetSet && other.kind === "init" ||
  			  kind === "init" && (other.kind === "get" || other.kind === "set");
  			if (conflict && !strict && kind === "init" && other.kind === "init") conflict = false;
  			if (conflict) raise(prop.key.start, "Redefinition of property");
  		  }
  		}
  	  }
  	  node.properties.push(prop);
  	}
  	return finishNode(node, "ObjectExpression");
    }

    function parsePropertyName() {
  	if (tokType === _num || tokType === _string) return parseExprAtom();
  	return parseIdent(true);
    }

    function parseFunction(node, isStatement) {
  	if (tokType === _name) node.id = parseIdent();
  	else if (isStatement) unexpected();
  	else node.id = null;
  	node.params = [];
  	var first = true;
  	expect(_parenL);
  	while (!eat(_parenR)) {
  	  if (!first) expect(_comma); else first = false;
  	  node.params.push(parseIdent());
  	}

  	var oldInFunc = inFunction, oldLabels = labels;
  	inFunction = true; labels = [];
  	node.body = parseBlock(true);
  	inFunction = oldInFunc; labels = oldLabels;

  	if (strict || node.body.body.length && isUseStrict(node.body.body[0])) {
  	  for (var i = node.id ? -1 : 0; i < node.params.length; ++i) {
  		var id = i < 0 ? node.id : node.params[i];
  		if (isStrictReservedWord(id.name) || isStrictBadIdWord(id.name))
  		  raise(id.start, "Defining '" + id.name + "' in strict mode");
  		if (i >= 0) for (var j = 0; j < i; ++j) if (id.name === node.params[j].name)
  		  raise(id.start, "Argument name clash in strict mode");
  	  }
  	}

  	return finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
    }

    function parseExprList(close, allowTrailingComma, allowEmpty) {
  	var elts = [], first = true;
  	while (!eat(close)) {
  	  if (!first) {
  		expect(_comma);
  		if (allowTrailingComma && options.allowTrailingCommas && eat(close)) break;
  	  } else first = false;

  	  if (allowEmpty && tokType === _comma) elts.push(null);
  	  else elts.push(parseExpression(true));
  	}
  	return elts;
    }

    function parseIdent(liberal) {
  	var node = startNode();
  	if (liberal && options.forbidReserved == "everywhere") liberal = false;
  	if (tokType === _name) {
  	  if (!liberal &&
  		  (options.forbidReserved &&
  		   (options.ecmaVersion === 3 ? isReservedWord3 : isReservedWord5)(tokVal) ||
  		   strict && isStrictReservedWord(tokVal)) &&
  		  input.slice(tokStart, tokEnd).indexOf("\\") == -1)
  		raise(tokStart, "The keyword '" + tokVal + "' is reserved");
  	  node.name = tokVal;
  	} else if (liberal && tokType.keyword) {
  	  node.name = tokType.keyword;
  	} else {
  	  unexpected();
  	}
  	tokRegexpAllowed = false;
  	next();
  	return finishNode(node, "Identifier");
    }

  });

  		if (!acorn.version)
  			acorn = null;
  	}

  	function parse(code, options) {
  		return (global.acorn || acorn).parse(code, options);
  	}

  	var binaryOperators = {
  		'+': '__add',
  		'-': '__subtract',
  		'*': '__multiply',
  		'/': '__divide',
  		'%': '__modulo',
  		'==': '__equals',
  		'!=': '__equals'
  	};

  	var unaryOperators = {
  		'-': '__negate',
  		'+': '__self'
  	};

  	var fields = Base.each(
  		['add', 'subtract', 'multiply', 'divide', 'modulo', 'equals', 'negate'],
  		function(name) {
  			this['__' + name] = '#' + name;
  		},
  		{
  			__self: function() {
  				return this;
  			}
  		}
  	);
  	Point.inject(fields);
  	Size.inject(fields);
  	Color.inject(fields);

  	function __$__(left, operator, right) {
  		var handler = binaryOperators[operator];
  		if (left && left[handler]) {
  			var res = left[handler](right);
  			return operator === '!=' ? !res : res;
  		}
  		switch (operator) {
  		case '+': return left + right;
  		case '-': return left - right;
  		case '*': return left * right;
  		case '/': return left / right;
  		case '%': return left % right;
  		case '==': return left == right;
  		case '!=': return left != right;
  		}
  	}

  	function $__(operator, value) {
  		var handler = unaryOperators[operator];
  		if (value && value[handler])
  			return value[handler]();
  		switch (operator) {
  		case '+': return +value;
  		case '-': return -value;
  		}
  	}

  	function compile(code, options) {
  		if (!code)
  			return '';
  		options = options || {};

  		var insertions = [];

  		function getOffset(offset) {
  			for (var i = 0, l = insertions.length; i < l; i++) {
  				var insertion = insertions[i];
  				if (insertion[0] >= offset)
  					break;
  				offset += insertion[1];
  			}
  			return offset;
  		}

  		function getCode(node) {
  			return code.substring(getOffset(node.range[0]),
  					getOffset(node.range[1]));
  		}

  		function getBetween(left, right) {
  			return code.substring(getOffset(left.range[1]),
  					getOffset(right.range[0]));
  		}

  		function replaceCode(node, str) {
  			var start = getOffset(node.range[0]),
  				end = getOffset(node.range[1]),
  				insert = 0;
  			for (var i = insertions.length - 1; i >= 0; i--) {
  				if (start > insertions[i][0]) {
  					insert = i + 1;
  					break;
  				}
  			}
  			insertions.splice(insert, 0, [start, str.length - end + start]);
  			code = code.substring(0, start) + str + code.substring(end);
  		}

  		function walkAST(node, parent) {
  			if (!node)
  				return;
  			for (var key in node) {
  				if (key === 'range' || key === 'loc')
  					continue;
  				var value = node[key];
  				if (Array.isArray(value)) {
  					for (var i = 0, l = value.length; i < l; i++)
  						walkAST(value[i], node);
  				} else if (value && typeof value === 'object') {
  					walkAST(value, node);
  				}
  			}
  			switch (node.type) {
  			case 'UnaryExpression':
  				if (node.operator in unaryOperators
  						&& node.argument.type !== 'Literal') {
  					var arg = getCode(node.argument);
  					replaceCode(node, '$__("' + node.operator + '", '
  							+ arg + ')');
  				}
  				break;
  			case 'BinaryExpression':
  				if (node.operator in binaryOperators
  						&& node.left.type !== 'Literal') {
  					var left = getCode(node.left),
  						right = getCode(node.right),
  						between = getBetween(node.left, node.right),
  						operator = node.operator;
  					replaceCode(node, '__$__(' + left + ','
  							+ between.replace(new RegExp('\\' + operator),
  								'"' + operator + '"')
  							+ ', ' + right + ')');
  				}
  				break;
  			case 'UpdateExpression':
  			case 'AssignmentExpression':
  				var parentType = parent && parent.type;
  				if (!(
  						parentType === 'ForStatement'
  						|| parentType === 'BinaryExpression'
  							&& /^[=!<>]/.test(parent.operator)
  						|| parentType === 'MemberExpression' && parent.computed
  				)) {
  					if (node.type === 'UpdateExpression') {
  						var arg = getCode(node.argument),
  							exp = '__$__(' + arg + ', "' + node.operator[0]
  									+ '", 1)',
  							str = arg + ' = ' + exp;
  						if (!node.prefix
  								&& (parentType === 'AssignmentExpression'
  									|| parentType === 'VariableDeclarator')) {
  							if (getCode(parent.left || parent.id) === arg)
  								str = exp;
  							str = arg + '; ' + str;
  						}
  						replaceCode(node, str);
  					} else {
  						if (/^.=$/.test(node.operator)
  								&& node.left.type !== 'Literal') {
  							var left = getCode(node.left),
  								right = getCode(node.right),
  								exp = left + ' = __$__(' + left + ', "'
  									+ node.operator[0] + '", ' + right + ')';
  							replaceCode(node, /^\(.*\)$/.test(getCode(node))
  									? '(' + exp + ')' : exp);
  						}
  					}
  				}
  				break;
  			case 'ExportDefaultDeclaration':
  				replaceCode({
  					range: [node.start, node.declaration.start]
  				}, 'module.exports = ');
  				break;
  			case 'ExportNamedDeclaration':
  				var declaration = node.declaration;
  				var specifiers = node.specifiers;
  				if (declaration) {
  					var declarations = declaration.declarations;
  					if (declarations) {
  						declarations.forEach(function(dec) {
  							replaceCode(dec, 'module.exports.' + getCode(dec));
  						});
  						replaceCode({
  							range: [
  								node.start,
  								declaration.start + declaration.kind.length
  							]
  						}, '');
  					}
  				} else if (specifiers) {
  					var exports = specifiers.map(function(specifier) {
  						var name = getCode(specifier);
  						return 'module.exports.' + name + ' = ' + name + '; ';
  					}).join('');
  					if (exports) {
  						replaceCode(node, exports);
  					}
  				}
  				break;
  			}
  		}

  		function encodeVLQ(value) {
  			var res = '',
  				base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  			value = (Math.abs(value) << 1) + (value < 0 ? 1 : 0);
  			while (value || !res) {
  				var next = value & (32 - 1);
  				value >>= 5;
  				if (value)
  					next |= 32;
  				res += base64[next];
  			}
  			return res;
  		}

  		var url = options.url || '',
  			agent = paper.agent,
  			version = agent.versionNumber,
  			offsetCode = false,
  			sourceMaps = options.sourceMaps,
  			source = options.source || code,
  			lineBreaks = /\r\n|\n|\r/mg,
  			offset = options.offset || 0,
  			map;
  		if (sourceMaps && (agent.chrome && version >= 30
  				|| agent.webkit && version >= 537.76
  				|| agent.firefox && version >= 23
  				|| agent.node)) {
  			if (agent.node) {
  				offset -= 2;
  			} else if (window && url && !window.location.href.indexOf(url)) {
  				var html = document.getElementsByTagName('html')[0].innerHTML;
  				offset = html.substr(0, html.indexOf(code) + 1).match(
  						lineBreaks).length + 1;
  			}
  			offsetCode = offset > 0 && !(
  					agent.chrome && version >= 36 ||
  					agent.safari && version >= 600 ||
  					agent.firefox && version >= 40 ||
  					agent.node);
  			var mappings = ['AA' + encodeVLQ(offsetCode ? 0 : offset) + 'A'];
  			mappings.length = (code.match(lineBreaks) || []).length + 1
  					+ (offsetCode ? offset : 0);
  			map = {
  				version: 3,
  				file: url,
  				names:[],
  				mappings: mappings.join(';AACA'),
  				sourceRoot: '',
  				sources: [url],
  				sourcesContent: [source]
  			};
  		}
  		walkAST(parse(code, {
  			ranges: true,
  			preserveParens: true,
  			sourceType: 'module'
  		}));
  		if (map) {
  			if (offsetCode) {
  				code = new Array(offset + 1).join('\n') + code;
  			}
  			if (/^(inline|both)$/.test(sourceMaps)) {
  				code += "\n//# sourceMappingURL=data:application/json;base64,"
  						+ self.btoa(unescape(encodeURIComponent(
  							JSON.stringify(map))));
  			}
  			code += "\n//# sourceURL=" + (url || 'paperscript');
  		}
  		return {
  			url: url,
  			source: source,
  			code: code,
  			map: map
  		};
  	}

  	function execute(code, scope, options) {
  		paper = scope;
  		var view = scope.getView(),
  			tool = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/
  					.test(code) && !/\bnew\s+Tool\b/.test(code)
  						? new Tool() : null,
  			toolHandlers = tool ? tool._events : [],
  			handlers = ['onFrame', 'onResize'].concat(toolHandlers),
  			params = [],
  			args = [],
  			func,
  			compiled = typeof code === 'object' ? code : compile(code, options);
  		code = compiled.code;
  		function expose(scope, hidden) {
  			for (var key in scope) {
  				if ((hidden || !/^_/.test(key)) && new RegExp('([\\b\\s\\W]|^)'
  						+ key.replace(/\$/g, '\\$') + '\\b').test(code)) {
  					params.push(key);
  					args.push(scope[key]);
  				}
  			}
  		}
  		expose({ __$__: __$__, $__: $__, paper: scope, view: view, tool: tool },
  				true);
  		expose(scope);
  		code = 'var module = { exports: {} }; ' + code;
  		var exports = Base.each(handlers, function(key) {
  			if (new RegExp('\\s+' + key + '\\b').test(code)) {
  				params.push(key);
  				this.push('module.exports.' + key + ' = ' + key + ';');
  			}
  		}, []).join('\n');
  		if (exports) {
  			code += '\n' + exports;
  		}
  		code += '\nreturn module.exports;';
  		var agent = paper.agent;
  		if (document && (agent.chrome
  				|| agent.firefox && agent.versionNumber < 40)) {
  			var script = document.createElement('script'),
  				head = document.head || document.getElementsByTagName('head')[0];
  			if (agent.firefox)
  				code = '\n' + code;
  			script.appendChild(document.createTextNode(
  				'document.__paperscript__ = function(' + params + ') {' +
  					code +
  				'\n}'
  			));
  			head.appendChild(script);
  			func = document.__paperscript__;
  			delete document.__paperscript__;
  			head.removeChild(script);
  		} else {
  			func = Function(params, code);
  		}
  		var exports = func && func.apply(scope, args);
  		var obj = exports || {};
  		Base.each(toolHandlers, function(key) {
  			var value = obj[key];
  			if (value)
  				tool[key] = value;
  		});
  		if (view) {
  			if (obj.onResize)
  				view.setOnResize(obj.onResize);
  			view.emit('resize', {
  				size: view.size,
  				delta: new Point()
  			});
  			if (obj.onFrame)
  				view.setOnFrame(obj.onFrame);
  			view.requestUpdate();
  		}
  		return exports;
  	}

  	function loadScript(script) {
  		if (/^text\/(?:x-|)paperscript$/.test(script.type)
  				&& PaperScope.getAttribute(script, 'ignore') !== 'true') {
  			var canvasId = PaperScope.getAttribute(script, 'canvas'),
  				canvas = document.getElementById(canvasId),
  				src = script.src || script.getAttribute('data-src'),
  				async = PaperScope.hasAttribute(script, 'async'),
  				scopeAttribute = 'data-paper-scope';
  			if (!canvas)
  				throw new Error('Unable to find canvas with id "'
  						+ canvasId + '"');
  			var scope = PaperScope.get(canvas.getAttribute(scopeAttribute))
  						|| new PaperScope().setup(canvas);
  			canvas.setAttribute(scopeAttribute, scope._id);
  			if (src) {
  				Http.request({
  					url: src,
  					async: async,
  					mimeType: 'text/plain',
  					onLoad: function(code) {
  						execute(code, scope, src);
  					}
  				});
  			} else {
  				execute(script.innerHTML, scope, script.baseURI);
  			}
  			script.setAttribute('data-paper-ignore', 'true');
  			return scope;
  		}
  	}

  	function loadAll() {
  		Base.each(document && document.getElementsByTagName('script'),
  				loadScript);
  	}

  	function load(script) {
  		return script ? loadScript(script) : loadAll();
  	}

  	if (window) {
  		if (document.readyState === 'complete') {
  			setTimeout(loadAll);
  		} else {
  			DomEvent.add(window, { load: loadAll });
  		}
  	}

  	return {
  		compile: compile,
  		execute: execute,
  		load: load,
  		parse: parse,
  		calculateBinary: __$__,
  		calculateUnary: $__
  	};

  }.call(this);

  var paper = new (PaperScope.inject(Base.exports, {
  	Base: Base,
  	Numerical: Numerical,
  	Key: Key,
  	DomEvent: DomEvent,
  	DomElement: DomElement,
  	document: document,
  	window: window,
  	Symbol: SymbolDefinition,
  	PlacedSymbol: SymbolItem
  }))();

  if (paper.agent.node) {
  	require$$2(paper);
  }

  if (typeof undefined === 'function' && undefined.amd) {
  	undefined('paper', paper);
  } else if (module) {
  	module.exports = paper;
  }

  return paper;
  }.call(commonjsGlobal, typeof self === 'object' ? self : null);
  });
  var paperFull_1 = paperFull.paper;

  /**
   *
   * @param color
   * @returns {paper.Color}
   */

  function formatColor(color) {
    let grey = color.match(/gr[ea]y(\d+)/);

    if (grey) {
      color = 'grey';

      if (grey[1].length !== 0) {
        color = parseFloat(grey[1] / 100);
      }
    }

    return new paperFull.Color(color);
  }
  /**
   *
   * @param colorArray
   * @param min
   * @param max
   * @param val
   * @returns {paper.Color}
   */

  function calculateColor(colorArray, min, max, val, invert = 0) {
    val = calculateDistance(val, {
      start: 0,
      stop: 1
    }, {
      start: min,
      stop: max
    }, invert);
    let stop_dist = 1 / (colorArray.length - 1);
    let cval1 = Math.abs(Math.floor(val / stop_dist));
    let cval2 = Math.abs(Math.ceil(val / stop_dist));
    if (cval1 === cval2) return formatColor(colorArray[cval1]);
    let color1 = formatColor(colorArray[cval1]).components;
    let color2 = formatColor(colorArray[cval2]).components;
    let weight = calculateDistance(val, {
      start: 0,
      stop: 1
    }, {
      start: cval1 * stop_dist,
      stop: cval2 * stop_dist
    });
    let invWeight = 1 - weight;
    return new paperFull.Color(color2[0] * weight + color1[0] * invWeight, color2[1] * weight + color1[1] * invWeight, color2[2] * weight + color1[2] * invWeight);
  }
  /**
   *
   * @param feature
   * @param view
   * @param offset
   * @param offDir
   * @param pileupGap
   * @returns {number}
   */

  function collisionOffset(feature, view, offset, offDir, pileupGap) {
    //setup collision search
    let fBounds = feature.getHandleBounds();
    let searchMinX = offDir ? fBounds.left : view.pileupBounds.left;
    let searchMaxX = offDir ? view.pileupBounds.right : fBounds.right;
    let searchSpace = {
      minX: searchMinX,
      minY: fBounds.top,
      maxX: searchMaxX,
      maxY: fBounds.bottom
    }; //test if there is a pileup

    if (view.pileupTree.collides(searchSpace)) {
      let pileupBound = offDir ? fBounds.left : fBounds.right;
      let lastSearchedMax = offDir ? Math.floor(fBounds.left) : Math.floor(fBounds.right);
      view.pileupTree.search(searchSpace) //search for collisions
      .sort((a, b) => {
        return offDir ? a.minX - b.minX : b.maxX - a.maxX;
      }) //sort results fo lastSearchedMax works
      .some(collision => {
        //if last+gap !== the edge of next you are in an overhang and can safely place
        if (offDir) {
          if (lastSearchedMax + pileupGap < Math.floor(collision.minX)) return true;
          if (collision.maxX > pileupBound) pileupBound = collision.maxX;
          lastSearchedMax = Math.floor(collision.maxX);
        } else {
          if (Math.floor(collision.maxX) - pileupGap < lastSearchedMax) return true;
          if (collision.minX < pileupBound) pileupBound = collision.minX;
          lastSearchedMax = Math.floor(collision.minX);
        }

        return false;
      });
      let offsetValue = pileupBound + pileupGap - fBounds.left;
      return offDir ? offsetValue : offsetValue - fBounds.width;
    }

    return 0;
  }
  /**
   *
   * @param config
   * @param view
   */

  function spreadBackbones(config, view) {
    /** scale cvitView to 1 to prevent sizing to current zoom */
    let al = paperFull.projects[0].getActiveLayer();
    let z = al.zoom || 1;
    al.scale(1 / z);
    /** Calculate spacing between backbones */

    let baseGroup = al.children['cvitView'];
    let labelGroup = al.children['cvitLabels']; // let rulers = paper.projects[0].getLayers()['rulersLayer'].children['rulers'];

    let padding = parseInt(config.general.image_padding);
    let lastEdge = view.leftEdge + padding;
    let offsetPadding = parseInt(config.general.chrom_spacing);

    if (!parseInt(config.general.fixed_chrom_spacing)) {
      // chrom spacing is variable
      let groupW = 0;
      let groupV = 0;
      baseGroup.children.forEach(child => {
        if (child.visible) {
          groupW += child.getStrokeBounds().width;
          groupV++;
        }
      });
      let gpad = config.general.display_ruler === 1 ? 1 : 0;
      let calcPadding = (view.rightEdge - view.leftEdge - groupW - 2 * padding) / (groupV + gpad);
      offsetPadding = calcPadding > offsetPadding ? calcPadding : offsetPadding;
    }
    /** Move backbones */


    view.chrOrder.forEach(chr => {
      let chrGroup = baseGroup.children[chr];
      let lb = labelGroup.children[`${chr}-label`];

      if (chrGroup.visible) {
        let chrLeft = chrGroup.getStrokeBounds().left;
        chrGroup.translate(new paperFull.Point(lastEdge - chrLeft + offsetPadding, 0));
        lastEdge = chrGroup.getStrokeBounds().right;
        lb.position.x = chrGroup.children[chr].position.x;
        lb.visible = true;
      } else {
        lb.visible = false;
      }
    });
    /** scale back */

    al.scale(z);
  }
  /**
   * zoom the cvit view and the ruler to match the current requested drawing
   * @param newZoom
   * @param oldZoom
   */

  function zoomCanvas(newZoom, oldZoom) {
    let zoomScale = newZoom.zoom / oldZoom;
    let cl = paperFull.projects[0].layers['cvitLayer'];
    let rl = paperFull.projects[0].layers['rulersLayer']; //Scale drawing and rulers

    cl.scale(zoomScale, newZoom.center);
    rl.scale(1, zoomScale);
    let rulers = paperFull.project.layers['rulersLayer'].children['rulers']; //back scale ruler labels

    if (rulers.children.hasOwnProperty('leftRuler')) {
      rulers.children['leftRuler'].children['rulerLabels'].children.forEach(child => {
        child.scale(1, 1 / zoomScale);
      });
    }

    if (rulers.children.hasOwnProperty('rightRuler')) {
      rulers.children['rightRuler'].children['rulerLabels'].children.forEach(child => {
        child.scale(1, 1 / zoomScale); //child.translate(new paper.Point(1,newZoom/oldZoom));
      });
    } // move rulers if needed


    let yMin = cl.children['cvitLabels'].bounds.bottomRight.y;
    rulers.children.forEach(child => {
      let baseRuler;

      if (child.children.hasOwnProperty('rulerLeft')) {
        baseRuler = child.children['rulerLeft'];
      } else {
        baseRuler = child.children['rulerRight'];
      }

      baseRuler.bounds.topLeft.y = yMin;
      let tg = child.children['rulerTics'];
      let lg = child.children['rulerLabels'];
      tg.bounds.topLeft.y = yMin;
      lg.bounds.topLeft.y = yMin - lg.children[0].bounds.height;
    });
    /** draw and update zoomLevel */

    paperFull.projects[0].getActiveLayer().zoom = newZoom.zoom;
    paperFull.view.draw();
  }
  /**
   * Pans canvas by x,y offset;
   * @param drag
   */

  function panCanvas(drag) {
    let delta = new paperFull.Point(drag);
    paperFull.projects[0].layers['cvitLayer'].translate(delta);
    let al = paperFull.project.getActiveLayer();
    zoomCanvas({
      zoom: al.zoom
    }, al.zoom);
  }
  /**
   *
   * @param current
   * @param delta
   * @param center
   * @param newScale
   * @returns {{center: *, zoom: number}}
   */

  function calculateZoomAndPan(current, delta, center, newScale = current) {
    let zoomLevel = newScale;
    let factor = 1.05;

    if (newScale === current) {
      if (delta < 0) {
        zoomLevel = current / factor;
      }

      if (delta > 0) {
        zoomLevel = current * factor;
      }
    }

    zoomLevel = zoomLevel < 1 ? 1 : zoomLevel > 8 ? 8 : zoomLevel;
    let pl = paperFull.projects[0].getActiveLayer().children['cvitView'];
    center = pl.globalToLocal(center);
    return {
      zoom: zoomLevel,
      center: center
    };
  }
  /**
   *
   * @param point
   * @param baseScale
   * @param newScale
   * @returns {number}
   */

  function calculateDistance(point, baseScale, newScale, invert = 0) {
    let val = (baseScale.stop - baseScale.start) * (point - newScale.start) / (newScale.stop - newScale.start) + baseScale.start - baseScale.start;
    return invert ? baseScale.stop - baseScale.start - val : val;
  }
  /**
   *
   * @param value
   * @returns {boolean}
   */

  function offsetSign(value) {
    return 1 / value === 1 / Math.abs(value);
  }
  /**
   *
   * @param value
   * @param transform
   * @param base
   * @returns {*}
   */

  function transformValue(value, transform, base = Math.E) {
    switch (transform) {
      case 'exponential':
        if (value === 0) value = Number('1e-323'); //as small as you can go

        return Math.log(value) / Math.log(base);

      case 'log':
        return Math.pow(value, base);

      default:
        return value;
    }
  }

  class GroupToggle extends Component {
    constructor() {
      super();
      this.state = {
        'active': true
      };
    }

    toggleVisible() {
      let vis = !this.state.active;
      let group = this.props.groupType;
      let target = this.props.target;
      let active = paperFull.projects[0].getActiveLayer().children['cvitView'];
      let rulers = paperFull.projects[0].layers['rulersLayer'].children['rulers'];
      let view = this.props.cvitModel.view;
      view.leftEdge = rulers.children['leftRuler'] ? rulers.children['leftRuler'].getStrokeBounds().right : 0;
      view.rightEdge = rulers.children['rightRuler'] ? rulers.children['rightRuler'].getStrokeBounds().left : paperFull.view.bounds.width;

      if (group === 'chromosome') {
        active.children[target].visible = vis;
      } else {
        active.children.forEach(child => {
          if (child.children.hasOwnProperty(group)) child.children[group].visible = vis;
        });
      } // this.props.setRedraw(true);


      spreadBackbones(this.props.cvitModel.config, this.props.cvitModel.view);
      this.setState({
        active: vis
      });
    }

    render(props, state) {
      return h("div", {
        className: 'group-toggle'
      }, h("input", {
        type: 'checkbox',
        className: 'group-toggle-checkbox',
        id: `${props.target}-toggle`,
        onInput: () => this.toggleVisible(),
        checked: state.active
      }), h("label", {
        className: 'group-toggle-label',
        htmlFor: `${props.target}-toggle`
      }, h("span", {
        className: 'group-toggle-inner',
        content: state.active ? 'ON' : 'OFF'
      }), h("span", {
        className: 'group-toggle-switch'
      })));
    }

  }

  class CvitFooter extends Component {
    constructor() {
      super();
      this.state = {
        visible: false
      };
    }

    onClick() {
      this.setState({
        visible: !this.state.visible
      });
    }

    generateToggles() {
      let backbone = [];
      let groups = [];

      if (paperFull.project) {
        paperFull.projects[0].getActiveLayer().children['cvitView'].children.forEach(child => {
          let name = child.name;
          let bbItem = h("td", null, h("td", null, name), h("td", null, h(GroupToggle, {
            groupType: 'chromosome',
            target: name,
            cvitModel: this.props.cvitModel
          })));
          backbone.push(bbItem);
          child.children.forEach(bbchild => {
            let cname = bbchild.name;

            if (cname && cname !== name && !cname.match(/.*-label/g) && groups.indexOf(cname) === -1) {
              groups.push(bbchild.name);
            }
          });
        });
      }

      let bbToggles = [];

      for (let i = 0; i < backbone.length; i += 5) {
        let bb = backbone.slice(i, i + 5);
        bbToggles.push(h("tr", null, bb));
      }

      let groupToggles = groups.map(group => {
        return h("tr", null, h("td", null, h("span", null, " ", group, ": ")), h("td", null, h(GroupToggle, {
          groupType: group,
          target: group,
          cvitModel: this.props.cvitModel
        })));
      });
      return h("div", null, h("table", null, h("tr", null, h("td", {
        className: 'control-head',
        colSpan: 5
      }, h("h5", null, " Backbone "))), bbToggles, h("tr", null, h("td", {
        className: 'control-head',
        colSpan: 5
      }, h("h5", null, " Feature Groups "))), groupToggles));
    }

    render(props, state) {
      return h("footer", {
        className: 'cvit',
        id: 'cvit-footer'
      }, h("div", {
        className: 'row'
      }, h("div", {
        className: 'twelve columns',
        id: 'footer-toggle',
        onClick: () => this.onClick()
      }, h("div", {
        id: 'toggle-title'
      }, h("i", {
        className: 'material-icons'
      }, " ", state.visible ? 'keyboard_arrow_up' : 'keyboard_arrow_down'), h("span", null, "View Control"), h("i", {
        className: 'material-icons'
      }, " ", state.visible ? 'keyboard_arrow_up' : 'keyboard_arrow_down')))), h("div", {
        className: 'row collapsible',
        id: 'cvit-toggle',
        style: {
          maxHeight: state.visible ? 200 : 0
        }
      }, h("div", {
        className: 'twelve columns content',
        style: {
          maxHeight: state.visible ? 200 : 0
        }
      }, this.generateToggles())));
    }

  }

  var quickselect = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
  	module.exports = factory();
  }(commonjsGlobal, (function () {
  function quickselect(arr, k, left, right, compare) {
      quickselectStep(arr, k, left || 0, right || (arr.length - 1), compare || defaultCompare);
  }

  function quickselectStep(arr, k, left, right, compare) {

      while (right > left) {
          if (right - left > 600) {
              var n = right - left + 1;
              var m = k - left + 1;
              var z = Math.log(n);
              var s = 0.5 * Math.exp(2 * z / 3);
              var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
              var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
              var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
              quickselectStep(arr, k, newLeft, newRight, compare);
          }

          var t = arr[k];
          var i = left;
          var j = right;

          swap(arr, left, k);
          if (compare(arr[right], t) > 0) swap(arr, left, right);

          while (i < j) {
              swap(arr, i, j);
              i++;
              j--;
              while (compare(arr[i], t) < 0) i++;
              while (compare(arr[j], t) > 0) j--;
          }

          if (compare(arr[left], t) === 0) swap(arr, left, j);
          else {
              j++;
              swap(arr, j, right);
          }

          if (j <= k) left = j + 1;
          if (k <= j) right = j - 1;
      }
  }

  function swap(arr, i, j) {
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
  }

  function defaultCompare(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
  }

  return quickselect;

  })));
  });

  var rbush_1 = rbush;
  var default_1 = rbush;



  function rbush(maxEntries, format) {
      if (!(this instanceof rbush)) return new rbush(maxEntries, format);

      // max entries in a node is 9 by default; min node fill is 40% for best performance
      this._maxEntries = Math.max(4, maxEntries || 9);
      this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));

      if (format) {
          this._initFormat(format);
      }

      this.clear();
  }

  rbush.prototype = {

      all: function () {
          return this._all(this.data, []);
      },

      search: function (bbox) {

          var node = this.data,
              result = [],
              toBBox = this.toBBox;

          if (!intersects(bbox, node)) return result;

          var nodesToSearch = [],
              i, len, child, childBBox;

          while (node) {
              for (i = 0, len = node.children.length; i < len; i++) {

                  child = node.children[i];
                  childBBox = node.leaf ? toBBox(child) : child;

                  if (intersects(bbox, childBBox)) {
                      if (node.leaf) result.push(child);
                      else if (contains(bbox, childBBox)) this._all(child, result);
                      else nodesToSearch.push(child);
                  }
              }
              node = nodesToSearch.pop();
          }

          return result;
      },

      collides: function (bbox) {

          var node = this.data,
              toBBox = this.toBBox;

          if (!intersects(bbox, node)) return false;

          var nodesToSearch = [],
              i, len, child, childBBox;

          while (node) {
              for (i = 0, len = node.children.length; i < len; i++) {

                  child = node.children[i];
                  childBBox = node.leaf ? toBBox(child) : child;

                  if (intersects(bbox, childBBox)) {
                      if (node.leaf || contains(bbox, childBBox)) return true;
                      nodesToSearch.push(child);
                  }
              }
              node = nodesToSearch.pop();
          }

          return false;
      },

      load: function (data) {
          if (!(data && data.length)) return this;

          if (data.length < this._minEntries) {
              for (var i = 0, len = data.length; i < len; i++) {
                  this.insert(data[i]);
              }
              return this;
          }

          // recursively build the tree with the given data from scratch using OMT algorithm
          var node = this._build(data.slice(), 0, data.length - 1, 0);

          if (!this.data.children.length) {
              // save as is if tree is empty
              this.data = node;

          } else if (this.data.height === node.height) {
              // split root if trees have the same height
              this._splitRoot(this.data, node);

          } else {
              if (this.data.height < node.height) {
                  // swap trees if inserted one is bigger
                  var tmpNode = this.data;
                  this.data = node;
                  node = tmpNode;
              }

              // insert the small tree into the large tree at appropriate level
              this._insert(node, this.data.height - node.height - 1, true);
          }

          return this;
      },

      insert: function (item) {
          if (item) this._insert(item, this.data.height - 1);
          return this;
      },

      clear: function () {
          this.data = createNode$1([]);
          return this;
      },

      remove: function (item, equalsFn) {
          if (!item) return this;

          var node = this.data,
              bbox = this.toBBox(item),
              path = [],
              indexes = [],
              i, parent, index, goingUp;

          // depth-first iterative tree traversal
          while (node || path.length) {

              if (!node) { // go up
                  node = path.pop();
                  parent = path[path.length - 1];
                  i = indexes.pop();
                  goingUp = true;
              }

              if (node.leaf) { // check current node
                  index = findItem(item, node.children, equalsFn);

                  if (index !== -1) {
                      // item found, remove the item and condense tree upwards
                      node.children.splice(index, 1);
                      path.push(node);
                      this._condense(path);
                      return this;
                  }
              }

              if (!goingUp && !node.leaf && contains(node, bbox)) { // go down
                  path.push(node);
                  indexes.push(i);
                  i = 0;
                  parent = node;
                  node = node.children[0];

              } else if (parent) { // go right
                  i++;
                  node = parent.children[i];
                  goingUp = false;

              } else node = null; // nothing found
          }

          return this;
      },

      toBBox: function (item) { return item; },

      compareMinX: compareNodeMinX,
      compareMinY: compareNodeMinY,

      toJSON: function () { return this.data; },

      fromJSON: function (data) {
          this.data = data;
          return this;
      },

      _all: function (node, result) {
          var nodesToSearch = [];
          while (node) {
              if (node.leaf) result.push.apply(result, node.children);
              else nodesToSearch.push.apply(nodesToSearch, node.children);

              node = nodesToSearch.pop();
          }
          return result;
      },

      _build: function (items, left, right, height) {

          var N = right - left + 1,
              M = this._maxEntries,
              node;

          if (N <= M) {
              // reached leaf level; return leaf
              node = createNode$1(items.slice(left, right + 1));
              calcBBox(node, this.toBBox);
              return node;
          }

          if (!height) {
              // target height of the bulk-loaded tree
              height = Math.ceil(Math.log(N) / Math.log(M));

              // target number of root entries to maximize storage utilization
              M = Math.ceil(N / Math.pow(M, height - 1));
          }

          node = createNode$1([]);
          node.leaf = false;
          node.height = height;

          // split the items into M mostly square tiles

          var N2 = Math.ceil(N / M),
              N1 = N2 * Math.ceil(Math.sqrt(M)),
              i, j, right2, right3;

          multiSelect(items, left, right, N1, this.compareMinX);

          for (i = left; i <= right; i += N1) {

              right2 = Math.min(i + N1 - 1, right);

              multiSelect(items, i, right2, N2, this.compareMinY);

              for (j = i; j <= right2; j += N2) {

                  right3 = Math.min(j + N2 - 1, right2);

                  // pack each entry recursively
                  node.children.push(this._build(items, j, right3, height - 1));
              }
          }

          calcBBox(node, this.toBBox);

          return node;
      },

      _chooseSubtree: function (bbox, node, level, path) {

          var i, len, child, targetNode, area, enlargement, minArea, minEnlargement;

          while (true) {
              path.push(node);

              if (node.leaf || path.length - 1 === level) break;

              minArea = minEnlargement = Infinity;

              for (i = 0, len = node.children.length; i < len; i++) {
                  child = node.children[i];
                  area = bboxArea(child);
                  enlargement = enlargedArea(bbox, child) - area;

                  // choose entry with the least area enlargement
                  if (enlargement < minEnlargement) {
                      minEnlargement = enlargement;
                      minArea = area < minArea ? area : minArea;
                      targetNode = child;

                  } else if (enlargement === minEnlargement) {
                      // otherwise choose one with the smallest area
                      if (area < minArea) {
                          minArea = area;
                          targetNode = child;
                      }
                  }
              }

              node = targetNode || node.children[0];
          }

          return node;
      },

      _insert: function (item, level, isNode) {

          var toBBox = this.toBBox,
              bbox = isNode ? item : toBBox(item),
              insertPath = [];

          // find the best node for accommodating the item, saving all nodes along the path too
          var node = this._chooseSubtree(bbox, this.data, level, insertPath);

          // put the item into the node
          node.children.push(item);
          extend$1(node, bbox);

          // split on node overflow; propagate upwards if necessary
          while (level >= 0) {
              if (insertPath[level].children.length > this._maxEntries) {
                  this._split(insertPath, level);
                  level--;
              } else break;
          }

          // adjust bboxes along the insertion path
          this._adjustParentBBoxes(bbox, insertPath, level);
      },

      // split overflowed node into two
      _split: function (insertPath, level) {

          var node = insertPath[level],
              M = node.children.length,
              m = this._minEntries;

          this._chooseSplitAxis(node, m, M);

          var splitIndex = this._chooseSplitIndex(node, m, M);

          var newNode = createNode$1(node.children.splice(splitIndex, node.children.length - splitIndex));
          newNode.height = node.height;
          newNode.leaf = node.leaf;

          calcBBox(node, this.toBBox);
          calcBBox(newNode, this.toBBox);

          if (level) insertPath[level - 1].children.push(newNode);
          else this._splitRoot(node, newNode);
      },

      _splitRoot: function (node, newNode) {
          // split root node
          this.data = createNode$1([node, newNode]);
          this.data.height = node.height + 1;
          this.data.leaf = false;
          calcBBox(this.data, this.toBBox);
      },

      _chooseSplitIndex: function (node, m, M) {

          var i, bbox1, bbox2, overlap, area, minOverlap, minArea, index;

          minOverlap = minArea = Infinity;

          for (i = m; i <= M - m; i++) {
              bbox1 = distBBox(node, 0, i, this.toBBox);
              bbox2 = distBBox(node, i, M, this.toBBox);

              overlap = intersectionArea(bbox1, bbox2);
              area = bboxArea(bbox1) + bboxArea(bbox2);

              // choose distribution with minimum overlap
              if (overlap < minOverlap) {
                  minOverlap = overlap;
                  index = i;

                  minArea = area < minArea ? area : minArea;

              } else if (overlap === minOverlap) {
                  // otherwise choose distribution with minimum area
                  if (area < minArea) {
                      minArea = area;
                      index = i;
                  }
              }
          }

          return index;
      },

      // sorts node children by the best axis for split
      _chooseSplitAxis: function (node, m, M) {

          var compareMinX = node.leaf ? this.compareMinX : compareNodeMinX,
              compareMinY = node.leaf ? this.compareMinY : compareNodeMinY,
              xMargin = this._allDistMargin(node, m, M, compareMinX),
              yMargin = this._allDistMargin(node, m, M, compareMinY);

          // if total distributions margin value is minimal for x, sort by minX,
          // otherwise it's already sorted by minY
          if (xMargin < yMargin) node.children.sort(compareMinX);
      },

      // total margin of all possible split distributions where each node is at least m full
      _allDistMargin: function (node, m, M, compare) {

          node.children.sort(compare);

          var toBBox = this.toBBox,
              leftBBox = distBBox(node, 0, m, toBBox),
              rightBBox = distBBox(node, M - m, M, toBBox),
              margin = bboxMargin(leftBBox) + bboxMargin(rightBBox),
              i, child;

          for (i = m; i < M - m; i++) {
              child = node.children[i];
              extend$1(leftBBox, node.leaf ? toBBox(child) : child);
              margin += bboxMargin(leftBBox);
          }

          for (i = M - m - 1; i >= m; i--) {
              child = node.children[i];
              extend$1(rightBBox, node.leaf ? toBBox(child) : child);
              margin += bboxMargin(rightBBox);
          }

          return margin;
      },

      _adjustParentBBoxes: function (bbox, path, level) {
          // adjust bboxes along the given tree path
          for (var i = level; i >= 0; i--) {
              extend$1(path[i], bbox);
          }
      },

      _condense: function (path) {
          // go through the path, removing empty nodes and updating bboxes
          for (var i = path.length - 1, siblings; i >= 0; i--) {
              if (path[i].children.length === 0) {
                  if (i > 0) {
                      siblings = path[i - 1].children;
                      siblings.splice(siblings.indexOf(path[i]), 1);

                  } else this.clear();

              } else calcBBox(path[i], this.toBBox);
          }
      },

      _initFormat: function (format) {
          // data format (minX, minY, maxX, maxY accessors)

          // uses eval-type function compilation instead of just accepting a toBBox function
          // because the algorithms are very sensitive to sorting functions performance,
          // so they should be dead simple and without inner calls

          var compareArr = ['return a', ' - b', ';'];

          this.compareMinX = new Function('a', 'b', compareArr.join(format[0]));
          this.compareMinY = new Function('a', 'b', compareArr.join(format[1]));

          this.toBBox = new Function('a',
              'return {minX: a' + format[0] +
              ', minY: a' + format[1] +
              ', maxX: a' + format[2] +
              ', maxY: a' + format[3] + '};');
      }
  };

  function findItem(item, items, equalsFn) {
      if (!equalsFn) return items.indexOf(item);

      for (var i = 0; i < items.length; i++) {
          if (equalsFn(item, items[i])) return i;
      }
      return -1;
  }

  // calculate node's bbox from bboxes of its children
  function calcBBox(node, toBBox) {
      distBBox(node, 0, node.children.length, toBBox, node);
  }

  // min bounding rectangle of node children from k to p-1
  function distBBox(node, k, p, toBBox, destNode) {
      if (!destNode) destNode = createNode$1(null);
      destNode.minX = Infinity;
      destNode.minY = Infinity;
      destNode.maxX = -Infinity;
      destNode.maxY = -Infinity;

      for (var i = k, child; i < p; i++) {
          child = node.children[i];
          extend$1(destNode, node.leaf ? toBBox(child) : child);
      }

      return destNode;
  }

  function extend$1(a, b) {
      a.minX = Math.min(a.minX, b.minX);
      a.minY = Math.min(a.minY, b.minY);
      a.maxX = Math.max(a.maxX, b.maxX);
      a.maxY = Math.max(a.maxY, b.maxY);
      return a;
  }

  function compareNodeMinX(a, b) { return a.minX - b.minX; }
  function compareNodeMinY(a, b) { return a.minY - b.minY; }

  function bboxArea(a)   { return (a.maxX - a.minX) * (a.maxY - a.minY); }
  function bboxMargin(a) { return (a.maxX - a.minX) + (a.maxY - a.minY); }

  function enlargedArea(a, b) {
      return (Math.max(b.maxX, a.maxX) - Math.min(b.minX, a.minX)) *
             (Math.max(b.maxY, a.maxY) - Math.min(b.minY, a.minY));
  }

  function intersectionArea(a, b) {
      var minX = Math.max(a.minX, b.minX),
          minY = Math.max(a.minY, b.minY),
          maxX = Math.min(a.maxX, b.maxX),
          maxY = Math.min(a.maxY, b.maxY);

      return Math.max(0, maxX - minX) *
             Math.max(0, maxY - minY);
  }

  function contains(a, b) {
      return a.minX <= b.minX &&
             a.minY <= b.minY &&
             b.maxX <= a.maxX &&
             b.maxY <= a.maxY;
  }

  function intersects(a, b) {
      return b.minX <= a.maxX &&
             b.minY <= a.maxY &&
             b.maxX >= a.minX &&
             b.maxY >= a.minY;
  }

  function createNode$1(children) {
      return {
          children: children,
          height: 1,
          leaf: true,
          minX: Infinity,
          minY: Infinity,
          maxX: -Infinity,
          maxY: -Infinity
      };
  }

  // sort an array so that items come in groups of n unsorted items, with groups sorted between each other;
  // combines selection algorithm with binary divide & conquer approach

  function multiSelect(arr, left, right, n, compare) {
      var stack = [left, right],
          mid;

      while (stack.length) {
          right = stack.pop();
          left = stack.pop();

          if (right - left <= n) continue;

          mid = left + Math.ceil((right - left) / n / 2) * n;
          quickselect(arr, mid, left, right, compare);

          stack.push(left, mid, mid, right);
      }
  }
  rbush_1.default = default_1;

  /**
   * @file Glyph for drawing markers, a feature with position but no set size
   * @author awilkey
   * @module draw/glyph/marker
   *
   */
  /**
   * @description Adds an individual chromosome backbone to the group
   *
   * @param {object} data - The target backbone to draw.
   * @param {object} parentGroup - The group that the backbone is to be added to.
   * @param {object} view - Object that contains configuration information.
   *
   */

  class Glyph {
    constructor(data, config, view) {
      /* not passing constructor allows us to call Glyphs to access functions without
         the time cost of initial draw, used for measures */
      if (data) this.group = this.formatGlyph(data, config, view);
    } // getters and setters


    get children() {
      return this.group.children;
    }

    get bounds() {
      return this.group.getStrokeBounds();
    }

    formatGlyph(data, config, view) {
      data.name = data.attribute.hasOwnProperty('name') ? data.attribute.name : '';
      let fGroup = new paperFull.Group();
      fGroup.name = data.name;
      let labelGroup = new paperFull.Group();
      labelGroup.name = data.name + '-label';
      fGroup.addChild(labelGroup);
      let r = this.drawFeature(data, config, view);
      fGroup.addChild(r);
      r.info = data.attribute;
      let fillColor = config.color;

      if (data.attribute.hasOwnProperty('class')) {
        if (view.colorClasses.hasOwnProperty(data.attribute.class)) fillColor = view.colorClasses[data.attribute.class];
      }

      let transparent = config.transparent;
      let t_per = 1 - config.transparent_percent;
      /** set glyphs stroke */
      //TODO: play more with border glyph

      if (config.hasOwnProperty('border') && config.border || config.hasOwnProperty('stroke_width')) {
        r.strokeWidth = config.hasOwnProperty('border_width') ? config.border_width : config.hasOwnProperty('stroke_width') ? config.stroke_width : 2;
        let strokeColor = config.hasOwnProperty('border_color') ? config.border_color : r.info.hasOwnProperty('border_color') ? r.info.border_color : fillColor;
        r.strokeColor = formatColor(strokeColor);
        if (transparent) r.strokeColor.alpha = t_per;
      } else {
        r.strokeWidth = 0;
      }
      /** fill the figure, if it is an option for the glyph */


      let fill = config.hasOwnProperty('fill') ? config.fill : 1;
      if (fill) r.fillColor = formatColor(fillColor);
      if (transparent) r.fillColor.alpha = t_per;
      /** draw label */
      //TODO: Draw labels
      // TODO: Figure out if labels offset from item or from group?

      if (config.draw_label) {
        let name = data.name || data.attribute.id;
        let labelOffset = config['label_offset'];
        let labelY = r.position.y; //position = middle of target

        let label = new paperFull.PointText({
          point: [r.bounds.right, labelY],
          content: name,
          strokeSize: 1,
          fontSize: `${config['font_size']}pt`,
          fontFamily: config['font_face'],
          fontWeight: 'normal',
          fillColor: formatColor(config['label_color'])
        });
        labelGroup.addChild(label);

        if (offsetSign(labelOffset)) {
          label.translate(labelOffset, 0);
        } else {
          label.translate(r.getStrokeBounds().left - label.getStrokeBounds().right + labelOffset, 0);
        }
      }
      /** pileup */


      if (view.pileup) {
        let xOffset = config.offset;
        let pGap = xOffset >= +0 ? config.pileup_gap : -config.pileup_gap;
        fGroup.translate(new paperFull.Point(collisionOffset(fGroup, view, xOffset, config.offsetDir, pGap), 0));
      }
      /** Attach Popover Listener */


      r.onClick = e => {
        e.preventDefault();
        let pt = fGroup.localToGlobal(fGroup.getStrokeBounds().rightCenter).add(new paperFull.Point(paperFull.view.element.offsetLeft, paperFull.view.element.offsetTop));
        let cl = paperFull.projects[0].layers['cvitLayer'].children[0];
        if (cl.children['cvitPtr']) cl.children['cvitPtr'].remove();
        let ptrGrp = new paperFull.Group();
        ptrGrp.name = 'cvitPtr';
        ptrGrp.strokeWidth = 2;
        ptrGrp.strokeColor = 'white';
        let innerCross = new paperFull.CompoundPath({
          children: [new paperFull.Path.Line(e.point.add({
            x: 0,
            y: 1
          }), e.point.add({
            x: 0,
            y: 3
          })), new paperFull.Path.Line(e.point.add({
            x: 0,
            y: -1
          }), e.point.add({
            x: 0,
            y: -3
          })), new paperFull.Path.Line(e.point.add({
            y: 0,
            x: 1
          }), e.point.add({
            y: 0,
            x: 3
          })), new paperFull.Path.Line(e.point.add({
            y: 0,
            x: -1
          }), e.point.add({
            y: 0,
            x: -3
          }))],
          strokeColor: 'white',
          strokeWidth: 2
        });
        ptrGrp.addChild(innerCross);
        let outerCross = new paperFull.CompoundPath({
          children: [new paperFull.Path.Line(e.point.add({
            x: 0,
            y: 3
          }), e.point.add({
            x: 0,
            y: 6
          })), new paperFull.Path.Line(e.point.add({
            x: 0,
            y: -3
          }), e.point.add({
            x: 0,
            y: -6
          })), new paperFull.Path.Line(e.point.add({
            y: 0,
            x: 3
          }), e.point.add({
            y: 0,
            x: 6
          })), new paperFull.Path.Line(e.point.add({
            y: 0,
            x: -3
          }), e.point.add({
            y: 0,
            x: -6
          }))],
          strokeColor: 'black',
          strokeWidth: 2
        });
        ptrGrp.addChild(outerCross);
        cl.addChild(ptrGrp);
        view.setPopover({
          visible: true,
          position: {
            x: pt.x,
            y: pt.y
          },
          data: [data]
        });
        e.stopPropagation();
      };

      return fGroup;
    }
    /**
     * This needs to be extended by the actual glyph but
     * formats the actual drawn glyph
     *
     * @param data
     * @param config
     * @param view
     * @returns object
     */


    drawFeature(data, config, view) {
      if (data && config && view) {
        let topLeft = new paperFull.Point(0, 0);
        let rectSize = new paperFull.Size(1, 1);
        return new paperFull.Path.Rectangle(new paperFull.Rectangle(topLeft, rectSize));
      }
    }

  }

  /**
   * @file Glyph for drawing centromeres, a feature drawn on the backbone
   * @author awilkey
   * @module draw/glyph/marker
   *
   */
  class Border extends Glyph {
    drawFeature(data, config, view) {
      let featureWidth = view.chrBounds.width;
      let featureHeight = (data.end - data.start) * view.yScale;
      let yLoc = (data.start - view.min) * view.yScale + view.yOffset.offsetTop + view.yAdjust;
      let xLoc = view.chrBounds.left;
      let point = new paperFull.Point(xLoc, yLoc);
      let size = new paperFull.Size(featureWidth, featureHeight);
      return new paperFull.Path.Rectangle(new paperFull.Rectangle(point, size));
    }

  }

  /**
   * @file Glyph for drawing centromeres, a feature drawn on the backbone
   * @author awilkey
   * @module draw/glyph/marker
   *
   */
  class Centromere extends Glyph {
    drawFeature(data, config, view) {
      let overhang = parseInt(config.centromere_overhang);
      let featureWidth = 2 * overhang + view.chrBounds.width;
      let featureHeight = (data.end - data.start) * view.yScale;
      if (featureHeight < 2) featureHeight = 2;
      let yLoc = (data.start - view.min) * view.yScale + view.yOffset.offsetTop + view.yAdjust;
      let xLoc = view.chrBounds.left - overhang;
      let point = new paperFull.Point(xLoc, yLoc);
      let size = new paperFull.Size(featureWidth, featureHeight);
      return new paperFull.Path.Rectangle(new paperFull.Rectangle(point, size));
    }

  }

  /**
   * @file draws a "chromosome" backbone that serves as a reference for drawing other features.
   * called chromosome, but can in practice be anything with a length.
   * @author awilkey
   * @module draw/glyph/chromosome
   */
  /**
   * @description Adds an individual chromosome backbone to the group
   *
   * @param {object} data - The target backbone to draw.
   * @param {object} parentGroup - The group that the backbone is to be added to.
   * @param {object} view - Object that contains configuration information.
   *
   */

  class Chromosome {
    constructor(data, config, view) {
      this.positionTree = rbush_1();
      this.seqName = data.seqName;
      this.group = this.formatChromosome(data, config, view);
    } // getters and setters


    get children() {
      return this.group.children;
    }

    get labelGroup() {
      return this.group.children[`${this.seqName}-label`];
    }

    formatChromosome(data, config, view) {
      let group = new paperFull.Group();
      group.name = this.seqName;
      let labelGroup = new paperFull.Group();
      labelGroup.name = this.seqName + '-label';
      group.addChild(labelGroup);
      let xPos = view.xOffset;
      let yPos = view.yOffset.offsetTop + view.yAdjust;
      let startOffset = (data.start - view.min) * view.yScale;
      let point = new paperFull.Point(xPos, yPos + startOffset);
      let size = new paperFull.Size(view.chrWidth, (data.end - data.start) * view.yScale);
      let rectangle = new paperFull.Rectangle(point, size);
      let r = new paperFull.Path.Rectangle(rectangle);
      r.info = data.attribute;
      r.thisColor = 'black';
      r.fillColor = formatColor(config.chrom_color);

      if (config.chrom_border === 1) {
        r.strokeWidth = config.chrom_border_width ? config.chrom_border_width : 2;
        r.strokeColor = formatColor(config.chrom_border_color);
      }

      r.name = group.name;
      group.addChild(r);
      point.x = xPos + view.chrWidth / 2;
      point.y = yPos - view.chrWidth;
      let label = new paperFull.PointText(point);
      label.justification = 'center';
      label.fontFamily = config.chrom_font_face;
      label.content = data.attribute.hasOwnProperty('name') ? data.attribute.name : group.name;
      label.fontSize = config.chrom_font_size;
      label.fillColor = formatColor(config.chrom_label_color);
      label.name = group.name + 'Label';
      labelGroup.addChild(label);
      return group;
    }
    /**
     * simple console log to make sure class is loading properly
     */


    static test() {
      console.log('Access of centromere glyph');
    }

  }

  /**
   * @file Glyph for drawing markers, a feature with position but no set size
   * @author awilkey
   * @module draw/glyph/marker
   *
   */
  class Marker extends Glyph {
    drawFeature(data, config, view) {
      let featureWidth = config.width;
      let yLoc = (data.start - view.min) * view.yScale + view.yOffset.offsetTop + view.yAdjust;
      let xOffset = config.offset;
      let chrEdge = config.offsetDir ? view.chrBounds.right : view.chrBounds.left - featureWidth;
      let xLoc = chrEdge + xOffset;
      let point = new paperFull.Point(xLoc, yLoc);
      return new paperFull.Path.Line(point, new paperFull.Point(point.x + featureWidth, point.y));
    }

  }

  /**
   * @file Glyph for drawing ranges, a feature with length placed beside
   *   the chromosome.
   * @author awilkey
   * @module draw/glyph/range
   *
   */

  class Range extends Glyph {
    drawFeature(data, config, view) {
      let featureWidth = config.width;
      let yLoc = (data.start - view.min) * view.yScale + view.yOffset.offsetTop + view.yAdjust;
      let xOffset = config.offset;
      let chrEdge = config.offsetDir ? view.chrBounds.right : view.chrBounds.left - featureWidth;
      let xLoc = chrEdge + xOffset;
      let point = new paperFull.Point(xLoc, yLoc);
      let size = new paperFull.Size(featureWidth, (data.end - data.start) * view.yScale);
      return new paperFull.Path.Rectangle(new paperFull.Rectangle(point, size));
    }

  }

  /**
   * @file Glyph for drawing ranges, a feature with length placed beside
   *   the chromosome.
   * @author awilkey
   * @module draw/glyph/range
   *
   */

  class Rect extends Glyph {
    drawFeature(data, config, view) {
      let featureWidth = config.width;
      let yLoc = (data.start - view.min) * view.yScale + view.yOffset.offsetTop + view.yAdjust;
      let xOffset = config.offset;
      let chrEdge = config.offsetDir ? view.chrBounds.right : view.chrBounds.left - featureWidth;
      let xLoc = chrEdge + xOffset;
      let point = new paperFull.Point(xLoc, yLoc);
      let size = new paperFull.Size(featureWidth, featureWidth);
      return new paperFull.Path.Rectangle(new paperFull.Rectangle(point, size));
    }

  }

  /**
   * @file Glyph for drawing ranges, a feature with length placed beside
   *   the chromosome.
   * @author awilkey
   * @module draw/glyph/range
   *
   */

  class Doublecircle extends Glyph {
    drawFeature(data, config, view) {
      let featureWidth = config.width;
      let radius = featureWidth / 2;
      let xOffset = config.offset;
      let chrEdge = config.offsetDir ? view.chrBounds.right : view.chrBounds.left - featureWidth;
      let yLoc = (data.start - view.min) * view.yScale + view.yOffset.offsetTop + view.yAdjust;
      let xLoc = chrEdge + xOffset; //   let point = new paper.Point(xLoc, yLoc);

      return new paperFull.CompoundPath({
        children: [new paperFull.Path.Circle({
          center: new paperFull.Point(xLoc + radius / 2, yLoc + radius / 2),
          radius: radius / 2
        }), new paperFull.Path.Circle({
          center: new paperFull.Point(xLoc + (radius + radius / 2), yLoc + radius / 2),
          radius: radius / 2
        })]
      });
    }

  }

  /**
   * @file Glyph for drawing ranges, a feature with length placed beside
   *   the chromosome.
   * @author awilkey
   * @module draw/glyph/range
   *
   */

  class Circle extends Glyph {
    drawFeature(data, config, view) {
      let featureWidth = config.width;
      let radius = featureWidth / 2;
      let xOffset = config.offset;
      let chrEdge = config.offsetDir ? view.chrBounds.right : view.chrBounds.left - featureWidth;
      let yLoc = (data.start - view.min) * view.yScale + view.yOffset.offsetTop + view.yAdjust;
      let xLoc = chrEdge + xOffset;
      let point = new paperFull.Point(xLoc, yLoc);
      return new paperFull.Path.Circle(point.add(radius), radius);
    }

  }

  function Position$1(data, config, view, subglyph) {
    switch (subglyph) {
      case 'rect':
        return new Rect(data, config, view);

      case 'doublecircle':
        return new Doublecircle(data, config, view);

      case 'circle':
        return new Circle(data, config, view);

      default:
        console.log(`${subglyph} is not supported yet`);
    }
  }

  /**
   * @file Glyph for drawing a histogram bin, a feature with length and depth
   * placed beside the chromosome.
   * @author awilkey
   * @module draw/glyph/distance
   *
   */

  class Histogram extends Range {
    constructor(data, config, view) {
      super(data, config, view);
      let range = this.group.children[1];
      let mc = view.measureConfig;
      let max = mc.max;
      let min = mc.min;
      let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
      if (config.value_distribution !== 'linear') val = transformValue(val, config.value_distribution, config.value_base);
      if (val < min) val = min;
      if (val > max) val = max;
      let offset = calculateDistance(val, {
        start: config.offset,
        stop: config.offset + config.max_distance
      }, {
        start: min,
        stop: max
      }, config.invert_value);

      if (!config.offsetDir) {
        offset = -offset;
        range.translate(config.width, 0);
      }

      range.bounds.width = offset;
      /** if labelOffset and offset are same direction, shift label) */

      if (offsetSign(config.label_offset) === config.offsetDir) {
        this.group.children[0].translate(offset, 0);
      }
    }

  }

  function getDrawFeature(glyph, subglyph = glyph) {
    let drawAs;
    /* disable pileup to speed up */

    switch (glyph) {
      case 'border':
        drawAs = new Border();
        break;

      case 'centromere':
        drawAs = new Centromere();
        break;

      case 'chromosome':
        drawAs = new Chromosome();
        break;

      case 'marker':
        drawAs = new Marker();
        break;

      case 'position':
        drawAs = new Position$1(null, null, null, subglyph);
        break;

      case 'range':
        drawAs = new Range();
    }

    if (drawAs) {
      return drawAs.drawFeature;
    }

    return null;
  }

  /**
   * @file Glyph for drawing a histogram bin, a feature with length and depth
   * placed beside the chromosome.
   * @author awilkey
   * @module draw/glyph/distance
   *
   */

  class Heat extends Glyph {
    constructor(data, config, view) {
      super();
      this.drawFeature = getDrawFeature(config.draw_as, config.shape);
      let mc = view.measureConfig;
      if (config.bin_max !== 0 && mc.max !== config.maxScore) mc.max = config.bin_max;
      if (config.bin_min !== 0 && mc.min !== config.minScore) mc.min = config.bin_min;
      let max = mc.max;
      let min = mc.min;
      let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
      if (config.value_distribution !== 'linear') val = transformValue(val, config.value_distribution, config.value_base);
      let fc;
      let colorArray = config.heat_colors;
      let invert = config.invert_value;
      if (colorArray === 'redgreen') colorArray = ['#FF0000', '#00FF00'];
      if (colorArray === 'greyscale') colorArray = ['#000000', '#ffffff'];

      if (val <= min) {
        fc = invert ? formatColor(colorArray[colorArray.length - 1]) : formatColor(colorArray[0]);
      } else if (val >= max) {
        fc = invert ? formatColor(colorArray[0]) : formatColor(colorArray[colorArray.length - 1]);
      } else {
        fc = calculateColor(colorArray, min, max, val, invert);
      }

      if (config.transparent) fc.alpha = 1 - config.transparent_percent;
      this.group = this.formatGlyph(data, config, view);
      config.draw_as === 'marker' ? this.group.children[1].strokeColor = fc : this.group.children[1].fillColor = fc;
    }

  }

  /**
   * @file Glyph for drawing a histogram bin, a feature with length and depth
   * placed beside the chromosome.
   * @author awilkey
   * @module draw/glyph/distance
   *
   */

  class Distance extends Glyph {
    constructor(data, config, view) {
      super();
      this.drawFeature = getDrawFeature(config.draw_as, config.shape);
      let mc = view.measureConfig;
      this.group = this.formatGlyph(data, config, view);
      let max = mc.max;
      let min = mc.min;
      let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
      if (config.value_distribution !== 'linear') val = transformValue(val, config.value_distribution, config.value_base);
      if (val < min) val = min;
      if (val > max) val = max;
      let offset = calculateDistance(val, {
        start: config.offset,
        stop: config.offset + config.max_distance
      }, {
        start: min,
        stop: max
      }, config.invert_value);
      this.group.translate(config.offsetDir ? offset : -offset, 0);
    }

  }

  /**
   * @file Glyph for drawing a histogram bin, a feature with length and depth
   * placed beside the chromosome.
   * @author awilkey
   * @module draw/glyph/distance
   *
   */

  class StackedBar extends Glyph {
    constructor(data, config, view) {
      super();
      this.drawFeature = getDrawFeature('range');
      let mc = view.measureConfig;
      let lastOffset = 0;
      this.group = this.formatGlyph(data, config, view);
      this.group.children[1].remove();

      for (let key in view.colorClasses) {
        if (view.colorClasses.hasOwnProperty(key) && (data.attribute.hasOwnProperty(key) || data.attribute.hasOwnProperty(key.toLowerCase()))) {
          let val = data.attribute[key] || data.attribute[key.toLowerCase()];
          let offset = calculateDistance(val, {
            start: config.offset,
            stop: config.offset + config.max_distance
          }, {
            start: mc.min,
            stop: mc.max
          });
          offset = config.offsetDir ? offset : -offset;
          config.color = view.colorClasses[key];
          let bar = this.formatGlyph(data, config, view);
          bar.bounds.width = offset;
          bar.translate(lastOffset, 0);
          this.group.insertChild(1, bar);
          lastOffset += offset;
        }
      }
      /** shift label if the stack grows in direction of label */


      if (config.draw_label && offsetSign(config.label_offset) === config.offsetDir) {
        this.group.children[0].translate(lastOffset, 0);
      }
    }

  }

  /**
   * @file Glyph for drawing a histogram bin, a feature with length and depth
   * placed beside the chromosome.
   * @author awilkey
   * @module draw/glyph/distance
   *
   */

  class Ratio extends StackedBar {
    constructor(data, config, view) {
      view.measureConfig.max = data.attribute.value;
      super(data, config, view);
    }

  }

  function Measure(data, config, view, subglyph) {
    switch (subglyph) {
      case 'histogram':
        return new Histogram(data, config, view);

      case 'heat':
        return new Heat(data, config, view);

      case 'distance':
        return new Distance(data, config, view);

      case 'stackedbar':
        return new StackedBar(data, config, view);

      case 'ratio':
        return new Ratio(data, config, view);

      default:
        console.log(`${subglyph} is not supported yet`);
    }
  }

  /**
   * Meta glyph to draw a collection of glyphs broken up by categories in [classes]
   * @param data
   * @param config
   * @param view
   * @param glyph
   * @param subglyph
   * @returns {Ratio|Ratio|Ratio|Heat|Heat|Heat|Distance|Distance|Distance|StackedBar|StackedBar|StackedBar|Histogram|Histogram|Histogram}
   * @constructor
   */
  class ClassGroup {
    constructor(data, config, view, glyph, subglyph) {
      this.group = new paperFull.Group();
      let feature = {};
      let activeClasses = config['class_filter'].length > 0 ? config['class_filter'] : Object.keys(view.colorClasses);
      let baseValue = data.attribute.value;
      let baseClass = data.attribute.class;
      let lastOffset = 0;
      activeClasses.forEach(ac => {
        if (view.colorClasses.hasOwnProperty(ac) && (data.attribute.hasOwnProperty(ac) || data.attribute.hasOwnProperty(ac.toLowerCase()))) {
          data.attribute.class = ac;
          data.attribute.value = data.attribute[ac] || data.attribute[ac.toLowerCase()];

          switch (glyph) {
            case 'border':
              feature = new Border(data, config, view);
              break;

            case 'centromere':
              feature = new Centromere(data, config, view);
              break;

            case 'marker':
              feature = new Marker(data, config, view);
              break;

            case 'position':
              feature = new Position$1(data, config, view, subglyph);
              break;

            case 'range':
              feature = new Range(data, config, view);
              break;

            case 'measure':
              if (config['class_heat'].length > 0) {
                //update heat colors if requested.
                config['heat_colors'] = config['class_heat'].concat([view.colorClasses[ac]]);
              }

              feature = new Measure(data, config, view, subglyph);
              break;

            default:
              console.log(`${glyph}:${subglyph} is not supported`);
          }

          this.group.addChild(feature.group);
          feature.group.translate(lastOffset, 0);
          let offset = 0;

          if (config['class_space']) {
            offset = config.hasOwnProperty('max_distance') ? config['max_distance'] : config.hasOwnProperty['width'] ? config.width : config['stoke_width'];
          } else {
            offset = feature.group.bounds.width;
          }

          offset = config.offsetDir ? offset + config.class_offset : -offset - config.class_offset;
          lastOffset += offset;
        }
      });

      if (!baseClass) {
        delete data.attribute.class;
      } else {
        data.attribute.class = baseClass;
      }

      if (!baseValue) {
        delete data.attribute.value;
      } else {
        data.attribute.value = baseValue;
      }
    }

    get children() {
      return this.group.children;
    }

    get bounds() {
      return this.group.getStrokeBounds();
    }

  }

  function glyph({
    data,
    config,
    view
  }, glyph, subglyph = glyph) {
    if (config.by_class) {
      return new ClassGroup(data, config, view, glyph, subglyph);
    } else {
      switch (glyph) {
        case 'border':
          return new Border(data, config, view);

        case 'centromere':
          return new Centromere(data, config, view);

        case 'chromosome':
          return new Chromosome(data, config, view);

        case 'marker':
          return new Marker(data, config, view);

        case 'position':
          return new Position$1(data, config, view, subglyph);

        case 'range':
          return new Range(data, config, view);

        case 'measure':
          return new Measure(data, config, view, subglyph);

        default:
          console.log(`${glyph}:${subglyph} is not supported`);
      }
    }
  }

  /**
   * @file Adds rulers to the canvas.
   * @author awilkey
   */
  /**
   *
   * @param backbone
   * @param config
   * @param view
   */

  function layoutRulers(backbone, config, view) {
    // Establish layers and core groups
    let baseLayer = paperFull.project.getActiveLayer();
    if (paperFull.project.getLayers()['rulersLayer']) paperFull.project.getLayers['rulersLayer'].remove();
    let rulersLayer = new paperFull.Layer();
    rulersLayer.name = 'rulersLayer';
    let rulerGroup = new paperFull.Group();
    rulerGroup.name = 'rulers';
    rulerGroup.minSeq = view.chrMin;
    rulerGroup.maxSeq = view.chrMax;
    let rulerConfig = {};
    rulerConfig.min = view.min;
    rulerConfig.max = view.max;
    rulerConfig.fontSize = parseInt(config.general.ruler_font_size);
    rulerConfig.chromFont = parseInt(config.general.chrom_font_size);
    rulerConfig.yOffset = view.yOffset;
    rulerConfig.xOffset = view.xOffset;
    rulerConfig.scale = view.yScale;
    rulerConfig.color = formatColor(config.general.ruler_color);
    rulerConfig.ff = config.general.ruler_font_face;
    rulerConfig.width = parseInt(config.general.tick_line_width);
    rulerConfig.interval = parseInt(config.general.tick_interval);
    rulerConfig.division = parseInt(config.general.minor_tick_divisions); // TODO: display ruler units
    // TODO: invert ruler

    try {
      //Draw Left Ruler
      let dispRuler = `${config.general.display_ruler}`;

      if (dispRuler === '1' || dispRuler.toLowerCase() === 'l') {
        rulerGroup.addChild(_drawRuler(rulerConfig, 'left', 1));
        rulerGroup.children['leftRuler'].bounds.left = view.xOffset; // rulerConfig.xOffset;
      } //rulerConfig.xOffset = paper.view.size.width - rulerConfig.xOffset;
      //Draw Right Ruler


      if (dispRuler === '1' || dispRuler.toLowerCase() === 'r') {
        rulerGroup.addChild(_drawRuler(rulerConfig, 'right', 0));
        rulerGroup.children['rightRuler'].bounds.right = paperFull.view.size.width - view.xOffset; // rulerConfig.xOffset;
      }
    } catch (e) {
      console.log(e);
    }

    baseLayer.activate();
  }
  /**
   * @description Draws the ruler
   *
   * @param rc
   * @param side
   * @param dir
   *
   */

  function _drawRuler(rc, side, dir) {
    //Setup ruler's paper groups
    let rGroup = new paperFull.Group();
    rGroup.name = side + 'Ruler';
    let rTextGroup = new paperFull.Group();
    rTextGroup.name = 'rulerLabels';
    let rTicGroup = new paperFull.Group();
    rTicGroup.name = 'rulerTics';
    rGroup.addChild(rTextGroup);
    rGroup.addChild(rTicGroup); // get actual on-canvas size of label

    let label = new paperFull.PointText(0, 0);
    label.content = rc.max;
    label.fontSize = rc.fontSize + 'px';
    rc.labelWidth = label.bounds.width + rc.fontSize;
    label.remove(); //draw backbone line

    let min = rc.min;
    let max = rc.max;
    let rulerFontSize = rc.fontSize;
    let yPos = rc.yOffset.offsetTop + rc.chromFont;
    let xPos = dir === 1 ? rc.xOffset : rc.xOffset + rc.width + rc.labelWidth;
    let point = new paperFull.Point(xPos, yPos);
    let size = new paperFull.Point(0, (max + (0 - min)) * rc.scale);
    let r = new paperFull.Path.Line(point, point.add(size));
    r.name = 'ruler' + side[0].toUpperCase() + side.slice(1);
    r.strokeColor = rc.color;
    r.strokeWidth = 2;
    rGroup.addChild(r);
    rGroup.rulerStart = yPos; //Draw base ruler tic

    let ticW = rc.width + 1;
    let ticD = dir === 1 ? xPos - 1 : rc.xOffset + rc.labelWidth;
    let ticO = new paperFull.Point(ticW, 0);
    let ticP = new paperFull.Point(ticD, yPos);
    let tic = new paperFull.Path.Line(ticP, ticP.add(ticO));
    tic.strokeColor = rc.color;
    tic.strokeWidth = 2;
    rTicGroup.addChild(tic); //Draw base ruler label

    let labelX = dir === 1 ? ticP.x + ticO.x + rc.fontSize : ticD - rc.fontSize;
    label = new paperFull.PointText(labelX, ticP.y);
    label.content = min;
    label.fontSize = rulerFontSize + 'px';
    label.fontFamily = rc.ff;

    if (dir !== 1) {
      label.position.x -= label.bounds.width;
    }

    rTextGroup.addChild(label); // Draw remaining tics and labels

    let ticInt = rc.interval;
    let intDivision = Math.round(ticInt / rc.division);

    for (let i = min + intDivision; i <= max; i = i + intDivision) {
      let mTicP = new paperFull.Point(ticD, yPos + (i - min) * rc.scale);
      let mTic = new paperFull.Path.Line(mTicP, mTicP.add(ticO));
      mTic.strokeColor = rc.color;
      mTic.strokeWidth = 2;

      if (i % ticInt === 0) {
        label = new paperFull.PointText(labelX, mTicP.y);
        label.content = i;
        label.fontSize = rulerFontSize + 'px';
        rTextGroup.w = label.bounds.bottomRight.x;

        if (dir !== 1) {
          label.position.x -= label.bounds.width;
        }

        rTextGroup.addChild(label);
      }

      rTicGroup.addChild(mTic);
    }

    rc.xOffset = dir === 1 ? rc.xOffset + rc.width + rc.labelWidth : r.x;
    return rGroup; // rulerGroup.addChild(rGroup);
    // let rect = new paper.Path.Rectangle(rGroup.getHandleBounds());
    // rect.strokeWidth = 2;
    // rect.strokeColor = 'black';
    // rulerGroup.addChild(rect);
  }

  /**
   * Configure paper.project's view to reflect the current cvit model
   * @param data
   * @param config
   * @param view
   */

  function layoutView(data, config, view) {
    /** setup paper base layer's main group */
    let active = paperFull.project.getActiveLayer();
    active.removeChildren();
    active.cvitComponents = [];
    let baseGroup = new paperFull.Group();
    baseGroup.name = 'cvitView';
    let labelGroup = new paperFull.Group();
    labelGroup.name = 'cvitLabels';
    /** draw Title */

    _setTitle(config);
    /** setup rulers **/


    layoutRulers(data, config, view);
    let rulers = paperFull.project.getLayers()['rulersLayer'].children['rulers'];
    /** setup view area **/

    view.leftEdge = rulers.children['leftRuler'] ? rulers.children['leftRuler'].getStrokeBounds().right : 0;
    view.rightEdge = rulers.children['rightRuler'] ? rulers.children['rightRuler'].getStrokeBounds().left : paperFull.view.bounds.width;
    let rulerTop = rulers.children['leftRuler'] ? rulers.children['leftRuler'].rulerStart : rulers.children['rightRuler'] ? rulers.children['rightRuler'].rulerStart : view.yOffset.offsetTop;
    view.yAdjust = rulerTop - view.yOffset.offsetTop;
    view.xOffset = 0;
    /** draw backbones **/

    if (data.hasOwnProperty('chromosome')) {
      data.chromosome.features.forEach(chromosome => {
        let chr = glyph({
          data: chromosome,
          config: config.general,
          view: view
        }, 'chromosome');
        baseGroup.addChild(chr.group);
        labelGroup.addChild(chr.labelGroup);

        if (chromosome.seqName === view.chrMin) {
          //add a baseline at view.min to make ruler movement easier.
          let yVal = view.yOffset.offsetTop + view.yAdjust;
          let from = new paperFull.Point(view.leftEdge, yVal);
          let to = new paperFull.Point(view.rightEdge, yVal);
          let baseline = new paperFull.Path.Line(from, to);
          baseline.name = 'baseline';
          baseline.strokeWidth = 0;
          labelGroup.addChild(baseline);
        }
      });
    }
    /** draw all config groups **/


    for (let key in config) {
      //Iterate through data and add to their target chromosomes
      if (key !== 'general' && config.hasOwnProperty(key)) {
        //set glyph/subglyph and the data.<group> that the features can be found in.
        let cGlyph = config[key].glyph ? config[key].glyph : key;
        let cSubglyph = config[key].display ? config[key].display : config[key].shape ? config[key].shape : key;
        let cDataGroup; //Set data source if custom

        if (config[key].feature) {
          let split = config[key].feature.split(':');
          cDataGroup = split.length > 1 ? [split[1], split[0]] : split;
        } else {
          cDataGroup = [key];
        }
        /** Preprocessing required for 'measure' style glyphs */


        if (config[key].glyph === 'measure') {
          view.measureConfig = _setMeasure(data, view, config, key, cDataGroup);
        } //Go through each chromosome's backbone in order


        view.chrOrder.forEach(chr => {
          //Check if feature's target backbone exists
          if (data[cDataGroup[0]] && data[cDataGroup[0]][chr]) {
            let targetChr = baseGroup.children[chr].children[chr];
            view.chrBounds = targetChr.getStrokeBounds();
            let keyGroup = new paperFull.Group();
            keyGroup.name = key;
            baseGroup.children[chr].addChild(keyGroup); //setup pileup

            view.pileup = false;

            if (config[key].hasOwnProperty('enable_pileup') && config[key].enable_pileup > 0 || config[key].draw_label && config[key].hide_label_overlap) {
              keyGroup.rTree = rbush_1();
              view.pileup = true;
              view.pileupTree = keyGroup.rTree;
              view.pileupBounds = keyGroup.getStrokeBounds();
            } //make note of offset direction to make drawing a little faster


            if (config[key].hasOwnProperty('offset')) config[key].offsetDir = offsetSign(config[key].offset);
            let g = data[cDataGroup[0]][chr]; //set feature group to draw

            let dg = view.hasOwnProperty('measureConfig') && view.measureConfig.generateBin !== 'pre' ? g.calcFeatures : g.features; //Add features to be drawn

            dg.forEach(data => {
              //filter for feature <source>:<type>
              if (cDataGroup[1]) {
                if (data.source !== cDataGroup[1]) return;
              }

              let baseConf = {}; // allows overriding configuration option from gff.

              for (let att in data.attribute) {
                if (data.attribute.hasOwnProperty(att) && config[key].hasOwnProperty(att)) {
                  baseConf[att] = config[key][att];
                  config[key][att] = data.attribute[att];

                  if (att === 'display' || att === 'shape') {
                    baseConf[att].sg = cSubglyph;
                    cSubglyph = data.attribute[att];
                  }
                }
              }

              let feature = glyph({
                data: data,
                config: config[key],
                view: view
              }, cGlyph, cSubglyph); // reset config

              for (let att in baseConf) {
                if (baseConf.hasOwnProperty(att) && config[key].hasOwnProperty(att)) {
                  config[key][att] = baseConf[att];
                  if (att === 'display' || att === 'shape') cSubglyph = baseConf.sg;
                }
              }

              if (feature && feature.group && feature.children[0]) {
                /** add feature to group */
                keyGroup.addChild(feature.group);

                if (view.pileup || feature.children[0].children.length && config[key].hide_label_overlap) {
                  /** update bounds */
                  if (view.pileup) view.pileupBounds = keyGroup.getStrokeBounds();
                  /** hide label if it might overlap */

                  if (feature.children[0].children.length) {
                    let tg = feature.group.children[0].getStrokeBounds();
                    let test = keyGroup.rTree.search({
                      minX: tg.left + .001,
                      //account for sliiight overlap when there is 0 space between pileup
                      maxX: tg.right - .001,
                      minY: tg.top,
                      maxY: tg.bottom
                    });
                    if (test.length) feature.children[0].visible = false;
                  }
                  /** insert into rTree */


                  let fb = feature.group.bounds; //getStrokeBounds();

                  keyGroup.rTree.insert({
                    minX: fb.left,
                    maxX: fb.right,
                    minY: fb.top,
                    maxY: fb.bottom,
                    data: feature.group
                  });
                }
              }
            });
          }
        });
      }
    }
    /** Move backbone groups to prevent overlap */


    spreadBackbones(config, view);
    /** Set background */

    let act = paperFull.project.getActiveLayer();
    let bg = new paperFull.Layer();
    bg.name = 'background';
    let vb = paperFull.project.view.getViewSize();
    let r = paperFull.Path.Rectangle(0, 0, vb.width, vb.height);
    r.fillColor = view.canvas.color;
    bg.sendToBack();
    act.activate();
    zoomCanvas({
      zoom: 1
    }, 1);
    const x = baseGroup.position.x;
    const y = baseGroup.position.y;
    paperFull.view.cvtCenter = new paperFull.Point(x, y); //store the center-point for resetting the view
    //cvitModel.setDrawn();

    /** set listener for resize event, move right ruler and respread backbone. */

    paperFull.view.onResize = e => {
      view.rightEdge += e.delta.width;
      if (rulers.children['rightRuler']) rulers.children['rightRuler'].translate(new paperFull.Point(e.delta.width, 0));
      spreadBackbones(config, view);
    };

    paperFull.view.draw(); //return components;
  }
  /**
   * Draw title as a new layer
   *
   * @param config
   * @private
   */

  function _setTitle(config) {
    if (config.general.hasOwnProperty("title")) {
      let act = paperFull.project.getActiveLayer();
      let bg = new paperFull.Layer();
      bg.name = 'cvitTitle';
      let cvitTitle = config.general.title.split(/<[/i]+>/);
      let titleLoc;
      let titleSize = config.general.title_font_size;
      let titleX;
      let titleY;

      if (config.general.hasOwnProperty('title_location')) {
        let titlePos = config.general.title_location.match(/\((.*),(.*)\)/);
        titleX = parseInt(titlePos[1]);
        titleY = parseInt(titlePos[2]) + titleSize;
      } else {
        titleX = parseInt(config.general.image_padding) + parseInt(config.general.border_width);
        titleY = titleX + titleSize;
        let heightAllow = parseInt(config.general.title_height);

        if (heightAllow > titleY) {
          titleY = heightAllow;
        }
      }

      titleLoc = new paperFull.Point(titleX, titleY);

      for (let i = 0; i < cvitTitle.length; i++) {
        let title = new paperFull.PointText(titleLoc);
        title.fontFamily = config.general.title_font_face;
        title.content = cvitTitle[i];
        title.fontSize = titleSize;
        title.fontWeight = i % 2 === 1 ? 'Italic' : 'normal';
        title.fillColor = formatColor(config.general.title_font_color);
        titleLoc.x += title.getStrokeBounds().width;
      }

      act.activate();
    }
  }
  /**
   *
   * @param data
   * @param view
   * @param config
   * @param key
   * @param cDataGroup
   * @returns {{min: null, max: null, valueType: string, range: Array, generateBin: string}}
   * @private
   */


  function _setMeasure(data, view, config, key, cDataGroup) {
    let mb = {
      min: null,
      max: null,
      valueType: config[key].value_type,
      range: [],
      generateBin: '',
      countClasses: config[key]['count_classes']
    };
    let cc = config[key]['count_classes'];
    mb.generateBin = !config[key]['generate_bins'] ? 'pre' : config[key]['bin_size'] ? 'size' : config[key]['bin_count'] ? 'count' : 'auto';
    if (mb.generateBin === 'size') mb.range[0] = config[key]['bin_size'];
    /** calculation of data groups */

    if (mb.generateBin !== 'pre') {
      mb.valueType = 'value_attr';
      /** calculate range and bin */

      view.chrOrder.forEach(chr => {
        if (data[cDataGroup[0]] && data[cDataGroup[0]][chr]) {
          let itree = data[cDataGroup[0]][chr].itree;
          /** calculate bins, can work with any measure type */

          let ct = itree.all().length;
          let nBins = mb.generateBin === 'count' ? config[key]['bin_count'] : Math.ceil(Math.pow(2 * ct, 1 / 3));
          let target = data['chromosome'][chr].features[0];
          let range = (target.end - target.start) / nBins; // if count add range to array, if auto see if this is the smallest range and if so, replace;

          if (mb.generateBin === 'count') {
            // count maintains independent range-sizes
            mb.range.push(range);
          } else if (mb.generateBin === 'auto') {
            if (mb.range.length) {
              mb.range[0] = range < mb.range[0] ? range : mb.range[0];
            } else {
              mb.range[0] = range;
            }
          }
        }
      });
      /** generate new set of features to populate histogram */

      view.chrOrder.forEach((chr, i) => {
        if (data[cDataGroup[0]] && data[cDataGroup[0]][chr]) {
          let itree = data[cDataGroup[0]][chr].itree;
          let target = data['chromosome'][chr].features[0];
          let viewTarget = data[cDataGroup[0]][chr].features[0];
          let ct = 0;
          let r = mb.generateBin !== 'count' ? mb.range[0] : mb.range[i];
          /** fudge range to not overflow backbone  ceil as you want at least 1 bin per bb*/

          let bin = Math.ceil(Math.abs(target.end - target.start) / r);
          r = Math.abs(target.end - target.start) / bin;
          let pos = target.start;
          let end = target.end;
          let measureFeatures = [];
          /** generate features */

          for (pos; pos <= end && ct < bin; pos += r) {
            let itemcount = 0;
            let val = itree.search({
              minX: pos,
              maxX: pos + r,
              minY: 0,
              maxY: 0
            });
            let countItem = {};

            if (cc) {
              // count classes for overall use
              val.forEach(feature => {
                feature = feature.data;

                if (feature.attribute.hasOwnProperty('class')) {
                  let fclass = feature.attribute.class;

                  if (view.colorClasses.hasOwnProperty(fclass)) {
                    if (!countItem.hasOwnProperty(fclass)) countItem[fclass] = 0;
                    countItem[fclass]++;
                    itemcount++;
                  }
                }
              });
            }

            if (cc === 0 || cc === 2) {
              itemcount = val.length;
            }

            measureFeatures.push({
              seqName: target.seqName,
              source: viewTarget.source,
              feature: viewTarget.feature,
              start: pos,
              end: pos + r,
              score: '.',
              strand: '.',
              frame: '.',
              attribute: {
                name: `bin${ct}`,
                value: itemcount,
                note: 'generated by cmap'
              }
            });
            ct++;

            if (cc) {
              let cCount = 0;
              let measureAttributes = measureFeatures[measureFeatures.length - 1].attribute;

              for (let cclass in countItem) {
                if (countItem.hasOwnProperty(cclass)) {
                  measureAttributes[cclass] = countItem[cclass];
                  cCount += countItem[cclass];
                }
              }

              if (cc === 2) measureAttributes['uncategorized'] = val.length - cCount;
            }

            if (!config[key]['bin_min']) {
              mb.min = itemcount < mb.min || mb.min === null ? itemcount : mb.min;
            } else {
              mb.min = config[key]['bin_min'];
            }

            if (!config[key]['bin_max']) {
              mb.max = itemcount > mb.max ? itemcount : mb.max;
            } else {
              mb.max = config[key]['bin_max'];
            }
          }

          data[cDataGroup[0]][chr].calcFeatures = measureFeatures;
        }
      });
    } else {
      /** calculate min/max */
      view.chrOrder.forEach(chr => {
        if (data[cDataGroup[0]] && data[cDataGroup[0]][chr]) {
          if (cc) {
            data[cDataGroup[0]][chr].features.forEach(feature => {
              let count = 0;
              let val = mb.valueType === 'value_attr' ? feature.attribute.value : feature.scoreCol;
              if (!val) val = 0;

              for (let fkey in view.colorClasses) {
                if (view.colorClasses.hasOwnProperty(fkey)) {
                  fkey = fkey.toLowerCase();

                  if (feature.attribute.hasOwnProperty(fkey)) {
                    count += feature.attribute[fkey];
                  }

                  if (val < count || cc === 1) {
                    if (mb.valueType === 'value_attr') {
                      feature.attribute.value = count;
                    } else {
                      feature.scoreCol = count;
                    }

                    val = count;
                  }

                  if (cc === 2) {
                    feature.attribute.uncategorized = val - count;
                  }

                  if (mb.min >= val) mb.min = val;
                  if (mb.max <= val) mb.max = val;
                }
              }
            });
          } else {
            let chrGroup = data[cDataGroup[0]][chr];
            let min = mb.valueType === 'value_attr' ? chrGroup.minScore.value : chrGroup.minScore.scoreCol;
            mb.min = min < mb.min || mb.min === null ? min : mb.min;
            let max = mb.valueType === 'value_attr' ? chrGroup.maxScore.value : chrGroup.maxScore.scoreCol;
            mb.max = max > mb.max ? max : mb.max;
          }
        }
      });
    } // Use min/max config option.


    if (mb.max < config[key].max) mb.max = config[key].max;
    if (config[key]['bin_max']) mb.max = config[key]['bin_max'];
    if (mb.min > config[key].min) mb.min = config[key].min;
    if (config[key]['bin_min']) mb.min = config[key]['bin_min']; // transform from linear if needed.

    if (config[key].value_distribution !== 'linear') {
      mb.min = transformValue(mb.min, config[key].value_distribution, config[key].value_base);
      mb.max = transformValue(mb.max, config[key].value_distribution, config[key].value_base);
    } // min should always be < max


    if (mb.min > mb.max) {
      const tmp = mb.max;
      mb.max = mb.min;
      mb.min = tmp;
    }

    return mb;
  }

  class CvitCanvas extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isMouseDown: false
      };
      /** Bind mouse move events for click-and-drag events */

      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
    }

    layoutCanvasView(data, config, view) {
      let zoom = 1;
      if (paperFull.view !== null) zoom = paperFull.view.zoom;
      if (paperFull.project) paperFull.project.remove();
      paperFull.setup(this.base.children[0]);
      let layer = new paperFull.Layer();
      layer.name = 'cvitLayer';
      paperFull.view.zoom = zoom;
      layoutView(data, config, view);
      paperFull.view.draw();
      this.props.setDirty(false);
    }

    componentDidMount() {
      if (paperFull.view) paperFull.view.draw();

      if (this.props.dirty) {
        //only update paper state if there is reason to (changed config or new data)
        this.layoutCanvasView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
      }
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if (paperFull.view) paperFull.view.draw();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
      if (paperFull.view) {
        paperFull.view.draw();
      }
    }

    componentDidUpdate(previousProps, previousState, previousContext) {
      if (paperFull.view) {
        paperFull.view.draw();

        if (this.props.dirty) {
          //redraw layout on same canvas if dirty update
          this.layoutCanvasView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
        }
      }
    }

    zoomOnMouse(e) {
      e.preventDefault();
      let evtPt = paperFull.view.getEventPoint(e);
      let oz = paperFull.project.getActiveLayer().zoom;
      let nz = calculateZoomAndPan(oz, e.deltaY, evtPt); // panCanvas(nz[1].multiply(-1));

      zoomCanvas(nz, oz);
    }

    onMouseUp(e) {
      this.props.cvitView.setPopover({
        visible: false
      });
      this.setState({
        isMouseDown: false
      });

      if (paperFull.tool.omu) {
        paperFull.tool.omu(e);
      }

      paperFull.view.draw();
    }

    onMouseDown(e) {
      e.preventDefault();
      this.setState({
        isMouseDown: true
      });

      if (paperFull.tool.omd) {
        paperFull.tool.omd(e);
      }

      paperFull.view.draw();
    }

    onMouseMove(e) {
      e.preventDefault();

      if (this.state.isMouseDown) {
        paperFull.tool.omm(e); //tools are set in overlay_controls/tool
      } //paper.view.draw();

    }

    onClick(e) {
      e.preventDefault();
    }

    render(props, state) {
      let canvas = props.cvitView.canvas;
      let computedStyle = {
        backgroundColor: canvas.color,
        height: canvas.height,
        width: canvas.width ? canvas.width : '100%'
      };
      return h("div", {
        className: props.displayControls === 'none' ? 'twelve columns' : 'eleven columns',
        style: props.displayControls === 'none' ? {
          maxWidth: '100%'
        } : {},
        id: 'cvit-display'
      }, h("canvas", {
        id: 'cvit-canvas',
        style: computedStyle,
        onWheel: props.displayControls !== 'none' ? this.zoomOnMouse : null,
        onClick: this.onClick,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseMove: this.onMouseMove,
        "data-paper-resize": true
      }));
    }

  }

  class ExportModal extends Component {
    constructor() {
      super();
      this.state = {
        name: 'cvit',
        format: 'svg',
        quality: .95
      };
    }

    exportImage(blob) {
      let url = URL.createObjectURL(blob);
      this.saveImage(url);
    }

    saveImage(url) {
      let name = this.state.name !== '' ? this.state.name : 'cvit';
      name += `.${this.state.format}`;
      let link = document.createElement('a');
      link.download = name;
      link.href = url;
      document.body.appendChild(link);
      link.click();
    }

    onClick() {
      if (this.state.format === 'svg') {
        let url = 'data:image/svg+xml;utf8,' + encodeURIComponent(paperFull.project.exportSVG({
          asString: true
        }));
        this.saveImage(url);
      } else {
        paperFull.project.view.element.toBlob(blob => this.exportImage(blob));
      }
    }

    onInput(evt) {
      this.setState({
        name: evt.target.value
      });
    }

    onSelect(evt) {
      this.setState({
        format: evt.target.value
      });
    }

    render(props, state) {
      return h("div", {
        className: 'twelve columns cvit cvit-modal',
        id: 'export-modal'
      }, h("h4", null, " Export Image "), h("p", null, " Export the current view as an image."), h("hr", null), h("form", {
        style: {
          width: '100%'
        }
      }, h("h5", null, " Export Settings: "), h("tbody", null, h("tr", null, h("td", null, h("span", null, "File Name: ")), h("td", null, h("input", {
        type: 'text',
        value: state.name,
        onInput: evt => this.onInput(evt),
        placeholder: 'cvit'
      }))), h("tr", null, h("td", null, " ", h("span", null, " File Type: "), " "), h("td", null, h("label", null, h("input", {
        id: 'opt-svg',
        type: 'radio',
        value: 'svg',
        onChange: evt => this.onSelect(evt),
        checked: state.format === 'svg'
      }), h("span", null, " svg "))), h("td", null, h("label", null, h("input", {
        id: 'opt-png',
        type: 'radio',
        value: 'png',
        onChange: evt => this.onSelect(evt),
        checked: state.format === 'png'
      }), h("span", null, " png ")))))), h("button", {
        className: 'modal-confirm',
        onClick: () => this.onClick()
      }, " Export Image "));
    }

  }

  class ImportModal extends Component {
    constructor() {
      super();
      this.state = {
        name: 'cvit',
        format: 'svg',
        quality: .95
      };
    }

    render(props, state) {
      return h("div", {
        className: 'twelve columns cvit cvit-modal',
        id: 'export-modal'
      }, h("h4", null, " Import Data "), h("p", null, " Import your data locally to view it alongside the current image."), h("hr", null), h("h4", null, " This Feature Is Under Development "));
    }

  }

  class HelpModal extends Component {
    constructor() {
      super();
    }

    render(props, state) {
      return h("div", {
        className: 'twelve columns cvit cvit-modal',
        id: 'export-modal'
      }, h("h4", null, " Help and About "), h("hr", null), h("h5", null, "About"), h("p", null, h("strong", null, "CViTjs"), " - Chromosome Viewing Tool"), h("p", null, "Enabling quick visualizations of features on linkage groups, pseudochromosomes or cytogenic maps. Intended to be used for whole-genome visualisations."), h("p", null, "Development supported by the USDA-ARS, Corn Insects and Crop Genomics Research Unit."), h("h5", null, "Additional Help"), h("p", null, "Additional help and source may be found ", h("a", {
        href: 'https://github.com/LegumeFederation/cvitjs'
      }, "here")));
    }

  }

  class ColorModal extends Component {
    constructor() {
      super();
      this.state = {
        pointer: null,
        pGra: null,
        sSlide: null,
        sGra: null,
        aSlide: null,
        aGra: null,
        sRad: null,
        colPrev: null
      };
      this.onConfirm = this.onConfirm.bind(this);
      this.onCancel = this.onCancel.bind(this);
    }

    componentDidUpdate(previousProps, previousState, previousContext) {
      if (previousProps.target !== this.props.target) {
        let s = this.state;
        this.setPosition(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, this.props.cColors[this.props.target]);
        this.changeColor(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, s.sRad, s.colPrev);
      }
    }

    componentDidMount() {
      if (paperFull.projects[1]) paperFull.projects[1].remove();
      paperFull.setup(document.querySelector('#select-canvas'));
      let topLeft = new paperFull.Point(10, 10);
      let bottomRight = new paperFull.Point(240, 120);
      let topRight = new paperFull.Point(240, 10);
      let leftOffset = [20, 0];
      let rightOffset = [40, 0];
      new paperFull.Path.Rectangle({
        topLeft: topLeft,
        bottomRight: bottomRight,
        fillColor: {
          gradient: {
            stops: ['#F00', '#FF0', '#0F0', '#0FF', '#00F', '#F0F', '#F00']
          },
          origin: topLeft,
          destination: topRight
        },
        strokeColor: 'black',
        strokeWidth: 1
      });
      let pGra = new paperFull.Path.Rectangle({
        topLeft: topLeft,
        bottomRight: bottomRight,
        fillColor: {
          gradient: {
            stops: [new paperFull.Color(0, 0, 0, 0), new paperFull.Color(0, 0, 0, 1)]
          },
          origin: topRight,
          destination: bottomRight
        }
      });
      topLeft = topRight.add(leftOffset);
      bottomRight = bottomRight.add(rightOffset);
      topRight = topRight.add(rightOffset);
      let sRad = new paperFull.Path.Rectangle({
        topLeft: topLeft,
        bottomRight: bottomRight,
        fillColor: 'black',
        strokeColor: 'black',
        strokeWidth: 1
      });
      let sGra = sRad.clone();
      sGra.fillColor = {
        gradient: {
          stops: [new paperFull.Color(1, 1, 1, 0), new paperFull.Color(1, 1, 1, 1)]
        },
        origin: topRight,
        destination: bottomRight
      };
      topLeft = topRight.add(leftOffset);
      bottomRight = bottomRight.add(rightOffset);
      topRight = topRight.add(rightOffset);
      let aGra = new paperFull.Path.Rectangle({
        topLeft: topLeft,
        bottomRight: bottomRight,
        fillColor: {
          gradient: {
            stops: [new paperFull.Color(1, 1, 1, 1), new paperFull.Color(1, 1, 1, 0)]
          },
          origin: topRight,
          destination: bottomRight
        },
        strokeColor: 'black',
        strokeWidth: 1
      });
      let colBox = new paperFull.Path.Rectangle({
        topLeft: [10, 140],
        bottomRight: bottomRight.add([0, 60]),
        fillColor: 'white',
        strokeColor: 'black',
        strokeWidth: 1
      });
      new paperFull.CompoundPath({
        children: [new paperFull.Path.Circle({
          center: colBox.position,
          radius: 20
        }), new paperFull.Path.Circle({
          center: colBox.position,
          radius: 10
        })],
        fillColor: 'black'
      });
      let colPrev = new paperFull.Path.Rectangle({
        topLeft: [10, 140],
        bottomRight: bottomRight.add([0, 60]),
        fillColor: 'black',
        strokeColor: 'black',
        strokeWidth: 1
      }); // setup colorbox pointer for hue and brightness selection

      let pointer = new paperFull.CompoundPath({
        children: [new paperFull.Path.Line({
          from: [25, 20],
          to: [25, 30]
        }), new paperFull.Path.Line({
          from: [20, 25],
          to: [30, 25]
        })],
        strokeColor: 'black'
      });
      pointer.strokeColor = new paperFull.Color(0.6);
      pointer.position = pGra.bounds.bottomRight; // Setup sliders for saturation and alpha sliders

      let q = new paperFull.Point(10, 10);
      let w = new paperFull.Size(25, 10);
      let sSlide = new paperFull.Path.Rectangle(q, w);
      sSlide.fillColor = new paperFull.Color(0.6);
      sSlide.strokeColor = 'black';
      sSlide.strokeWidth = 1;
      sSlide.position = sGra.position;
      sSlide.position.y = sGra.bounds.topLeft.y;
      let aSlide = sSlide.clone();
      aSlide.position = aGra.position;
      aSlide.position.y = aGra.bounds.topLeft.y;
      /** set pointer position and box colors */

      this.setPosition(pointer, pGra, sSlide, sGra, aSlide, aGra, this.props.cColors[this.props.target]);
      this.changeColor(pointer, pGra, sSlide, sGra, aSlide, aGra, sRad, colPrev);
      this.changeColor(pointer, pGra, sSlide, sGra, aSlide, aGra, sRad, colPrev);
      paperFull.view.draw();
      let s = this.state;

      pGra.onMouseDown = e => {
        pointer.position = e.point;
        this.changeColor(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, s.sRad, s.colPrev);
      };

      pGra.onMouseDrag = pGra.onMouseDown; // Mouse control for sliders

      sGra.onMouseDown = e => {
        if (sGra.bounds.topLeft.y <= e.point.y && e.point.y <= sGra.bounds.bottomLeft.y) {
          sSlide.position.y = e.point.y;
        }

        this.changeColor(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, s.sRad, s.colPrev);
      };

      sGra.onMouseDrag = sGra.onMouseDown;
      sSlide.onMouseDown = sGra.onMouseDown;
      sSlide.onMouseDrag = sGra.onMouseDown;

      aGra.onMouseDown = e => {
        if (aGra.bounds.topLeft.y <= e.point.y && e.point.y <= aGra.bounds.bottomLeft.y) {
          aSlide.position.y = e.point.y;
        }

        this.changeColor(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, s.sRad, s.colPrev);
      };

      aGra.onMouseDrag = aGra.onMouseDown;
      aSlide.onMouseDown = aGra.onMouseDown;
      aSlide.onMouseDrag = aGra.onMouseDown;
      this.setState({
        pointer: pointer,
        pGra: pGra,
        sSlide: sSlide,
        sGra: sGra,
        aSlide: aSlide,
        aGra: aGra,
        sRad: sRad,
        colPrev: colPrev
      });
    }

    componentWillUnmount() {
      paperFull.projects[0].activate();
      if (paperFull.projects[1]) paperFull.projects[1].remove();
    }

    setPosition(pointer, pGra, sSlide, sGra, aSlide, aGra, color) {
      pointer.position.x = pGra.bounds.width * color.hue / 360 + pGra.topLeft.x;
      pointer.position.y = pGra.bounds.height * -color.brightness + pGra.bounds.height + pGra.bounds.topLeft.y;
      sSlide.position.y = sGra.bounds.height * -color.saturation + sGra.bounds.height + sGra.bounds.topLeft.y;
      aSlide.position.y = aGra.bounds.height * -color.alpha + aGra.bounds.height + aGra.bounds.topLeft.y;
      this.setState({
        pointer: pointer,
        sSlide: sSlide,
        aSlide: aSlide
      });
    }

    changeColor(pointer, pGra, sSlide, sGra, aSlide, aGra, sRad, colPrev) {
      let h$$1 = (pointer.position.x - pGra.topLeft.x) / pGra.bounds.width * 360;
      let b = 1 - (pointer.position.y - pGra.topLeft.y) / pGra.bounds.height;
      let s = 1 - (sSlide.position.y - sGra.bounds.topLeft.y) / sGra.bounds.height;
      let a = 1 - (aSlide.position.y - aGra.bounds.topLeft.y) / aGra.bounds.height;
      sRad.fillColor.hue = h$$1;
      sRad.fillColor.brightness = b;
      sRad.fillColor.saturation = 1;
      let sG1 = new paperFull.Color(sRad.fillColor);
      sG1.saturation = 1;
      let sG2 = new paperFull.Color(sG1);
      sG2.saturation = 0;
      sGra.fillColor.gradient.stops = [sG1, sG2];
      let aG1 = new paperFull.Color(sG1);
      aG1.saturation = s;
      let aG2 = new paperFull.Color(aG1);
      aG2.alpha = 0;
      aGra.fillColor.gradient.stops = [aG1, aG2];
      let prev = new paperFull.Color(aG1);
      prev.alpha = a;
      colPrev.fillColor = prev;
      paperFull.view.draw();
      this.setState({
        pointer: pointer,
        pGra: pGra,
        sSlide: sSlide,
        sGra: sGra,
        aSlide: aSlide,
        aGra: aGra,
        sRad: sRad,
        colPrev: colPrev
      });
    }

    onCancel(e) {
      e.preventDefault();
      let s = this.state;
      this.setPosition(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, this.props.cColors[this.props.target]);
      this.changeColor(s.pointer, s.pGra, s.sSlide, s.sGra, s.aSlide, s.aGra, s.sRad, s.colPrev);
    }

    onConfirm(e) {
      e.preventDefault();
      this.props.setColor(this.props.target, this.state.colPrev.fillColor);
    }

    render(props, state) {
      return h("div", {
        className: 'eleven columns cvit cvit-modal',
        id: 'export-modal'
      }, h("h4", null, " Color Select "), props.target === 'color1' ? h("p", null, " Change the stroke color and width of the freedraw and rectangle tools.") : h("p", null, " Change the fill color of the rectangle tool."), h("hr", null), h("div", null, h("canvas", {
        id: 'select-canvas',
        width: 500,
        height: 200
      })), h("div", null, h("button", {
        className: 'modal-confirm',
        onClick: this.onConfirm
      }, "Select Color"), h("button", {
        className: 'modal-confirm',
        onClick: this.onCancel
      }, "Reset")));
    }

  }

  class CvitModal extends Component {
    static chooseModal(props) {
      let test = props.active;
      if (/color.*/.test(test)) test = 'color';

      switch (test) {
        case 'export':
          return h(ExportModal, null);

        case 'import':
          return h(ImportModal, null);

        case 'help':
          return h(HelpModal, null);

        case 'color':
          return h(ColorModal, {
            target: props.active,
            cColors: props.cColors,
            setColor: props.setColor
          });

        default:
          return h("div", null, " This Menu Is Under Development ");
      }
    }

    render(props, state) {
      return CvitModal.chooseModal(props);
    }

  }

  class ZoomTool extends Component {
    constructor() {
      super();
      this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
      event.preventDefault();
      let oz = paperFull.project.getActiveLayer().zoom || 1;
      let nz = calculateZoomAndPan(oz, this.props.zoomDir, paperFull.view.center);
      zoomCanvas({
        zoom: nz.zoom
      }, oz);
      paperFull.view.draw();
      this.props.changeModal('canvas');
    }

    render(props, state) {
      return h("span", {
        title: props.zoomDir === 1 ? 'Zoom In' : 'Zoom Out'
      }, h("button", {
        className: 'u-full-width cvit-button',
        onClick: this.onClick
      }, h("i", {
        className: 'material-icons'
      }, " ", props.zoomDir === 1 ? 'zoom_in' : 'zoom_out', " ")));
    }

  }

  class ResetTool extends Component {
    onClick(event) {
      event.preventDefault();
      let al = paperFull.project.getActiveLayer();
      let oz = al.zoom || 1;
      let offset = paperFull.view.cvtCenter.subtract(al.children['cvitView'].position);
      panCanvas(offset);
      zoomCanvas({
        zoom: 1
      }, oz);
      offset = paperFull.view.cvtCenter.subtract(al.children['cvitView'].position);
      panCanvas(offset);
      paperFull.view.draw();
      this.props.changeModal('canvas');
    }

    render(props, state) {
      return h("span", {
        title: 'Reset Zoom and Pan'
      }, h("button", {
        className: 'u-full-width cvit-button',
        onClick: e => this.onClick(e)
      }, h("i", {
        className: 'material-icons'
      }, " ", 'all_out', " ")));
    }

  }

  class PanTool extends Component {
    constructor() {
      super();
      this.onClick = this.onClick.bind(this);
      this.state = {
        tool: null
      };
    }

    componentDidMount() {
      let tool = new paperFull.Tool();
      tool.name = 'pan';

      tool.omd = () => {
        document.body.style.cursor = 'all-scroll';
      };

      tool.omm = e => {
        panCanvas({
          x: e.movementX,
          y: e.movementY
        });
      };

      tool.omu = () => {
        document.body.style.cursor = 'default';
      };

      tool.activate();
      this.setState({
        tool: tool
      });
    }

    componentWillUnmount() {
      this.state.tool.remove();
    }

    onClick(e) {
      e.preventDefault();
      this.props.selectTool('pan');
      this.state.tool.activate();
      this.props.changeModal('canvas');
    }

    render(props, state) {
      return h("span", {
        title: 'Pan View'
      }, h("button", {
        className: 'u-full-width cvit-button',
        onClick: this.onClick,
        disabled: props.active === 'pan'
      }, h("i", {
        className: 'material-icons'
      }, " ", 'pan_tool', " ")));
    }

  }

  class FreeTool extends Component {
    constructor() {
      super();
      this.onClick = this.onClick.bind(this);
      this.state = {
        tool: null
      };
    }

    componentDidMount() {
      let tool = new paperFull.Tool();
      tool.name = 'free';

      tool.omd = e => {
        // mouse down
        if (!paperFull.project.toolStroke) {
          paperFull.project.toolStroke = 2;
        }

        let path = new paperFull.Path();
        let point = new paperFull.Point(e.layerX, e.layerY);
        path.add(point);
        path.strokeWidth = paperFull.project.toolStroke;
        path.isErasable = true;
        path.strokeColor = this.props.colors.color1;
        tool.path = path;
      };

      tool.omm = e => {
        // mouse move
        let point = new paperFull.Point(e.layerX, e.layerY);
        tool.path.add(point);
      };

      tool.omu = () => {
        //mouse up
        tool.path.simplify(10);
      };

      this.setState({
        tool: tool
      });
    }

    componentWillUnmount() {
      this.state.tool.remove();
    }

    onClick(event) {
      event.preventDefault();
      this.props.selectTool('free');
      this.state.tool.activate();
      this.props.changeModal('canvas');
    }

    render(props, state) {
      return h("span", {
        title: 'Free Draw'
      }, h("button", {
        className: 'u-full-width cvit-button',
        onClick: this.onClick,
        disabled: props.active === 'free'
      }, h("i", {
        className: 'material-icons'
      }, " ", 'create', " ")));
    }

  }

  class EraserTool extends Component {
    constructor() {
      super();
      this.state = {
        tool: null
      };
      this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
      let tool = new paperFull.Tool();
      let hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 5
      };

      tool.omd = e => {
        let hitTest = paperFull.project.hitTest(new paperFull.Point(e.layerX, e.layerY), hitOptions);

        if (hitTest.item.isErasable) {
          hitTest.item.remove();
        }
      };

      tool.name = 'eraser';
      this.setState({
        tool: tool
      });
    }

    componentWillUnmount() {
      this.state.tool.remove();
    }

    onClick(e) {
      e.preventDefault();
      this.props.selectTool('erase');
      this.state.tool.activate();
      this.props.changeModal('canvas');
    }

    render(props, state) {
      return h("span", {
        title: 'Eraser'
      }, h("button", {
        className: 'u-full-width cvit-button',
        onClick: this.onClick,
        disabled: props.active === 'erase'
      }, h("i", {
        className: 'material-icons'
      }, " ", 'remove', " ")));
    }

  }

  /**
   * Tool for drawing rectangles for picture annotation.
   */

  class RectTool extends Component {
    constructor() {
      super();
      this.onClick = this.onClick.bind(this);
      this.state = {
        tool: null
      };
    }

    drawRect(start, end) {
      let box = new paperFull.Path.Rectangle(start, end);
      box.strokeWidth = 2;
      box.strokeColor = this.props.colors.color1;
      box.dashArray = [2, 2];
      box.isErasable = true;
      box.fillColor = this.props.colors.color2;
      paperFull.view.draw();
      return box;
    }

    componentDidMount() {
      let tool = new paperFull.Tool();
      tool.name = 'rect';

      tool.omd = e => {
        // mouse down
        document.body.style.cursor = 'crosshair'; // if (!paper.project.color1) {
        //   paper.project.color1 = new paper.Color(0, 0, 0, 1);
        // }
        // if (!paper.project.color2) {
        //   paper.project.color2 = new paper.Color(0.7, 0.8, 0.8, 0.4);
        // }

        let pt = new paperFull.Point(e.layerX, e.layerY);
        tool.box = this.drawRect(pt, pt);
        tool.dwnPt = pt;
      };

      tool.omm = e => {
        // mouse move
        this.state.tool.box.remove();
        let pt = new paperFull.Point(e.layerX, e.layerY);
        tool.box = this.drawRect(tool.dwnPt, pt);
      };

      tool.omu = e => {
        //mouse up
        this.state.tool.box.remove();
        let pt = new paperFull.Point(e.layerX, e.layerY);
        tool.box = this.drawRect(tool.dwnPt, pt);
        document.body.style.cursor = 'default';
      };

      this.setState({
        tool: tool
      });
    }

    componentWillUnmount() {
      this.state.tool.remove();
    }

    onClick(e) {
      e.preventDefault();
      this.props.selectTool('rect');
      this.state.tool.activate();
    }

    render(props, state) {
      return h("span", {
        title: 'Draw Rectangle'
      }, h("button", {
        className: 'u-full-width cvit-button',
        onClick: this.onClick,
        disabled: props.active === 'rect'
      }, h("i", {
        className: 'material-icons'
      }, " ", 'crop_square', " ")));
    }

  }

  /**
   * Tool for drawing rectangles for picture annotation.
   */

  class ColorSelector extends Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
      e.preventDefault();
      this.props.changeModal(this.props.target);
    }

    render(props, state) {
      return h("span", {
        title: props.target === 'color1' ? 'Select Line Color' : 'Select Fill Color'
      }, h("button", {
        className: 'u-full-width cvit-button',
        onClick: this.onClick
      }, h("i", {
        className: 'material-icons',
        style: {
          color: props.color.toCSS()
        }
      }, 'stop')));
    }

  }

  class CvitControls extends Component {
    render(props, state) {
      return h("div", {
        className: 'one column',
        id: 'cvit-controls'
      }, h("div", {
        className: 'control-label'
      }, h("span", null, " Zoom ")), h(ZoomTool, {
        changeModal: props.changeModal,
        zoomDir: 1
      }), h(ZoomTool, {
        changeModal: props.changeModal,
        zoomDir: -1
      }), h(ResetTool, {
        changeModal: props.changeModal
      }), h("hr", null), props.displayControls === 'full' ? h("div", null, h("div", {
        className: 'control-label'
      }, h("span", null, " Mouse ")), h(PanTool, {
        changeModal: props.changeModal,
        active: props.mouseTool,
        selectTool: tool => props.selectTool(tool)
      }), h(FreeTool, {
        changeModal: props.changeModal,
        active: props.mouseTool,
        selectTool: tool => props.selectTool(tool),
        colors: props.cColors
      }), h(RectTool, {
        changeModal: props.changeModal,
        active: props.mouseTool,
        selectTool: tool => props.selectTool(tool),
        colors: props.cColors
      }), h(EraserTool, {
        changeModal: props.changeModal,
        active: props.mouseTool,
        selectTool: tool => props.selectTool(tool)
      }), h("hr", null)) : null, props.mouseTool === 'free' || props.mouseTool === 'rect' ? h(ColorSelector, {
        changeModal: props.changeModal,
        color: props.cColors.color1,
        setColor: props.setColor,
        target: 'color1'
      }) : null, props.mouseTool === 'rect' ? h(ColorSelector, {
        changeModal: props.changeModal,
        color: props.cColors.color2,
        setColor: props.setColor,
        target: 'color2'
      }) : null);
    }

  }

  class CvitHeader$1 extends Component {
    render(props, state) {
      let active = props.cvitModel.active;
      let ctrl = props.cvitModel.view.displayControls;
      return h("div", {
        className: 'row cvit',
        id: 'cvit-main'
      }, (active === 'canvas' || /color.*/.test(active)) && ctrl !== 'none' ? h(CvitControls, {
        mouseTool: props.cvitModel.mouseTool,
        selectTool: state => {
          props.cvitModel.setTool(state);
        },
        changeModal: state => {
          if (state !== active) {
            props.cvitModel.setActive(state);
          } else {
            props.cvitModel.setActive('canvas');
          }
        },
        cColors: {
          color1: props.cvitModel.color1,
          color2: props.cvitModel.color2
        },
        setColor: (target, color) => props.cvitModel.setColor(target, color),
        displayControls: ctrl
      }) : null, active === 'canvas' ? h(CvitCanvas, {
        cvitData: props.cvitModel.data,
        cvitConfig: props.cvitModel.config,
        cvitView: props.cvitModel.view,
        dirty: props.cvitModel.dirty,
        setDirty: newState => props.cvitModel.setDirty(newState),
        popover: props.cvitModel.popoverConfig,
        displayControls: ctrl
      }) : active === 'status' ? h("div", {
        className: 'twelve columns',
        id: 'loading-div'
      }, " \"Loading Cvit Canvas\" ") : h(CvitModal, {
        active: active,
        cColors: {
          color1: props.cvitModel.color1,
          color2: props.cvitModel.color2
        },
        setColor: (target, color) => props.cvitModel.setColor(target, color)
      }));
    }

  }

  function popoverContents(data) {
    let attributeContents = data.map(feature => {
      let attributes = [];

      for (let key in feature.attribute) {
        if (feature.attribute.hasOwnProperty(key)) {
          attributes.push(h("tr", null, h("th", null, `${key}:`), h("td", null, feature.attribute[key])));
        }
      }

      return h("div", {
        className: 'popover-contents'
      }, h("table", {
        style: {
          margin: 'auto'
        }
      }, h("thead", null, h("tr", null, h("th", {
        colSpan: 2,
        style: {
          textAlign: 'center'
        }
      }, " Feature Information "))), h("tbody", null, h("tr", null, h("th", null, " Name: "), h("td", null, " ", feature.name || feature.attribute.id, " ")), h("tr", null, h("th", null, " Chromosome: "), h("td", null, " ", feature.seqName, " ")), h("tr", null, h("th", null, " Start:"), h("td", null, " ", feature.start, " ")), h("tr", null, h("th", null, " End:"), h("td", null, " ", feature.end, " ")), attributes)), h("br", null), h("a", {
        href: `https://soybase.org/gb2/gbrowse/gmax2.0/?name=${feature.seqName}%3A${feature.start}..${feature.end}`
      }, " View Region in Soybase GBrowse "), h("br", null), h("a", {
        href: `https://legumeinfo.org/lis_context_viewer/search/lis/glyma.${feature.seqName}/${feature.start}-${feature.end}`
      }, " View Region in LIS Context Viewer "));
    });
    return h("div", {
      id: 'popover-contents'
    }, h("h5", null, " Selection "), h("hr", null), h("div", {
      className: 'popover-details'
    }, attributeContents));
  }

  class InformationPopover extends Component {
    constructor(props) {
      super(props);
    }

    render(props, state) {
      return h("div", {
        id: 'cvit-popover',
        style: {
          top: props.popoverData.position.y,
          left: props.popoverData.position.x
        }
      }, popoverContents(props.popoverData.data));
    }

  }

  class CvitUI extends Component {
    render(props, state) {
      return h("div", null, h(CvitHeader, {
        cvitModel: props.cvitModel
      }), h(CvitHeader$1, {
        cvitModel: props.cvitModel
      }), props.cvitModel.popoverConfig.visible ? h(InformationPopover, {
        popoverData: props.cvitModel.popoverConfig
      }) : null, h(CvitFooter, {
        cvitModel: props.cvitModel
      }));
    }

  }

  var has$1 = Object.prototype.hasOwnProperty;

  var hexTable = (function () {
      var array = [];
      for (var i = 0; i < 256; ++i) {
          array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
      }

      return array;
  }());

  var compactQueue = function compactQueue(queue) {
      while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];

          if (Array.isArray(obj)) {
              var compacted = [];

              for (var j = 0; j < obj.length; ++j) {
                  if (typeof obj[j] !== 'undefined') {
                      compacted.push(obj[j]);
                  }
              }

              item.obj[item.prop] = compacted;
          }
      }
  };

  var arrayToObject = function arrayToObject(source, options) {
      var obj = options && options.plainObjects ? Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== 'undefined') {
              obj[i] = source[i];
          }
      }

      return obj;
  };

  var merge = function merge(target, source, options) {
      if (!source) {
          return target;
      }

      if (typeof source !== 'object') {
          if (Array.isArray(target)) {
              target.push(source);
          } else if (typeof target === 'object') {
              if ((options && (options.plainObjects || options.allowPrototypes)) || !has$1.call(Object.prototype, source)) {
                  target[source] = true;
              }
          } else {
              return [target, source];
          }

          return target;
      }

      if (typeof target !== 'object') {
          return [target].concat(source);
      }

      var mergeTarget = target;
      if (Array.isArray(target) && !Array.isArray(source)) {
          mergeTarget = arrayToObject(target, options);
      }

      if (Array.isArray(target) && Array.isArray(source)) {
          source.forEach(function (item, i) {
              if (has$1.call(target, i)) {
                  if (target[i] && typeof target[i] === 'object') {
                      target[i] = merge(target[i], item, options);
                  } else {
                      target.push(item);
                  }
              } else {
                  target[i] = item;
              }
          });
          return target;
      }

      return Object.keys(source).reduce(function (acc, key) {
          var value = source[key];

          if (has$1.call(acc, key)) {
              acc[key] = merge(acc[key], value, options);
          } else {
              acc[key] = value;
          }
          return acc;
      }, mergeTarget);
  };

  var assign$1 = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function (acc, key) {
          acc[key] = source[key];
          return acc;
      }, target);
  };

  var decode = function (str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, ' ');
      if (charset === 'iso-8859-1') {
          // unescape never throws, no try...catch needed:
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      // utf-8
      try {
          return decodeURIComponent(strWithoutPlus);
      } catch (e) {
          return strWithoutPlus;
      }
  };

  var encode = function encode(str, defaultEncoder, charset) {
      // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
      // It has been adapted here for stricter adherence to RFC 3986
      if (str.length === 0) {
          return str;
      }

      var string = typeof str === 'string' ? str : String(str);

      if (charset === 'iso-8859-1') {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
              return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
          });
      }

      var out = '';
      for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);

          if (
              c === 0x2D // -
              || c === 0x2E // .
              || c === 0x5F // _
              || c === 0x7E // ~
              || (c >= 0x30 && c <= 0x39) // 0-9
              || (c >= 0x41 && c <= 0x5A) // a-z
              || (c >= 0x61 && c <= 0x7A) // A-Z
          ) {
              out += string.charAt(i);
              continue;
          }

          if (c < 0x80) {
              out = out + hexTable[c];
              continue;
          }

          if (c < 0x800) {
              out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          if (c < 0xD800 || c >= 0xE000) {
              out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          i += 1;
          c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
          out += hexTable[0xF0 | (c >> 18)]
              + hexTable[0x80 | ((c >> 12) & 0x3F)]
              + hexTable[0x80 | ((c >> 6) & 0x3F)]
              + hexTable[0x80 | (c & 0x3F)];
      }

      return out;
  };

  var compact = function compact(value) {
      var queue = [{ obj: { o: value }, prop: 'o' }];
      var refs = [];

      for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];

          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
              var key = keys[j];
              var val = obj[key];
              if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                  queue.push({ obj: obj, prop: key });
                  refs.push(val);
              }
          }
      }

      compactQueue(queue);

      return value;
  };

  var isRegExp = function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
  };

  var isBuffer = function isBuffer(obj) {
      if (obj === null || typeof obj === 'undefined') {
          return false;
      }

      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };

  var combine = function combine(a, b) {
      return [].concat(a, b);
  };

  var utils = {
      arrayToObject: arrayToObject,
      assign: assign$1,
      combine: combine,
      compact: compact,
      decode: decode,
      encode: encode,
      isBuffer: isBuffer,
      isRegExp: isRegExp,
      merge: merge
  };

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;

  var formats = {
      'default': 'RFC3986',
      formatters: {
          RFC1738: function (value) {
              return replace.call(value, percentTwenties, '+');
          },
          RFC3986: function (value) {
              return value;
          }
      },
      RFC1738: 'RFC1738',
      RFC3986: 'RFC3986'
  };

  var arrayPrefixGenerators = {
      brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
          return prefix + '[]';
      },
      indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
          return prefix + '[' + key + ']';
      },
      repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
          return prefix;
      }
  };

  var isArray$1 = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function (arr, valueOrArray) {
      push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
  };

  var toISO = Date.prototype.toISOString;

  var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: 'utf-8',
      charsetSentinel: false,
      delimiter: '&',
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
          return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
  };

  var stringify = function stringify( // eslint-disable-line func-name-matching
      object,
      prefix,
      generateArrayPrefix,
      strictNullHandling,
      skipNulls,
      encoder,
      filter,
      sort,
      allowDots,
      serializeDate,
      formatter,
      encodeValuesOnly,
      charset
  ) {
      var obj = object;
      if (typeof filter === 'function') {
          obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
          obj = serializeDate(obj);
      }

      if (obj === null) {
          if (strictNullHandling) {
              return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
          }

          obj = '';
      }

      if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
          if (encoder) {
              var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
              return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
          }
          return [formatter(prefix) + '=' + formatter(String(obj))];
      }

      var values = [];

      if (typeof obj === 'undefined') {
          return values;
      }

      var objKeys;
      if (Array.isArray(filter)) {
          objKeys = filter;
      } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (skipNulls && obj[key] === null) {
              continue;
          }

          if (Array.isArray(obj)) {
              pushToArray(values, stringify(
                  obj[key],
                  generateArrayPrefix(prefix, key),
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly,
                  charset
              ));
          } else {
              pushToArray(values, stringify(
                  obj[key],
                  prefix + (allowDots ? '.' + key : '[' + key + ']'),
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly,
                  charset
              ));
          }
      }

      return values;
  };

  var stringify_1 = function (object, opts) {
      var obj = object;
      var options = opts ? utils.assign({}, opts) : {};

      if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
          throw new TypeError('Encoder has to be a function.');
      }

      var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
      var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
      var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
      var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
      var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
      var sort = typeof options.sort === 'function' ? options.sort : null;
      var allowDots = typeof options.allowDots === 'undefined' ? defaults.allowDots : !!options.allowDots;
      var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
      var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
      var charset = options.charset || defaults.charset;
      if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {
          throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
      }

      if (typeof options.format === 'undefined') {
          options.format = formats['default'];
      } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
          throw new TypeError('Unknown format option provided.');
      }
      var formatter = formats.formatters[options.format];
      var objKeys;
      var filter;

      if (typeof options.filter === 'function') {
          filter = options.filter;
          obj = filter('', obj);
      } else if (Array.isArray(options.filter)) {
          filter = options.filter;
          objKeys = filter;
      }

      var keys = [];

      if (typeof obj !== 'object' || obj === null) {
          return '';
      }

      var arrayFormat;
      if (options.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = options.arrayFormat;
      } else if ('indices' in options) {
          arrayFormat = options.indices ? 'indices' : 'repeat';
      } else {
          arrayFormat = 'indices';
      }

      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

      if (!objKeys) {
          objKeys = Object.keys(obj);
      }

      if (sort) {
          objKeys.sort(sort);
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (skipNulls && obj[key] === null) {
              continue;
          }
          pushToArray(keys, stringify(
              obj[key],
              key,
              generateArrayPrefix,
              strictNullHandling,
              skipNulls,
              encode ? encoder : null,
              filter,
              sort,
              allowDots,
              serializeDate,
              formatter,
              encodeValuesOnly,
              charset
          ));
      }

      var joined = keys.join(delimiter);
      var prefix = options.addQueryPrefix === true ? '?' : '';

      if (options.charsetSentinel) {
          if (charset === 'iso-8859-1') {
              // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
              prefix += 'utf8=%26%2310003%3B&';
          } else {
              // encodeURIComponent('✓')
              prefix += 'utf8=%E2%9C%93&';
          }
      }

      return joined.length > 0 ? prefix + joined : '';
  };

  var has$2 = Object.prototype.hasOwnProperty;

  var defaults$1 = {
      allowDots: false,
      allowPrototypes: false,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: false,
      decoder: utils.decode,
      delimiter: '&',
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1000,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
  };

  var interpretNumericEntities = function (str) {
      return str.replace(/&#(\d+);/g, function ($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
      });
  };

  // This is what browsers will submit when the ✓ character occurs in an
  // application/x-www-form-urlencoded body and the encoding of the page containing
  // the form is iso-8859-1, or when the submitted form has an accept-charset
  // attribute of iso-8859-1. Presumably also with other charsets that do not contain
  // the ✓ character, such as us-ascii.
  var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

  // These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
  var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

  var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
      var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1; // Keep track of where the utf8 sentinel was found
      var i;

      var charset = options.charset;
      if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
              if (parts[i].indexOf('utf8=') === 0) {
                  if (parts[i] === charsetSentinel) {
                      charset = 'utf-8';
                  } else if (parts[i] === isoSentinel) {
                      charset = 'iso-8859-1';
                  }
                  skipIndex = i;
                  i = parts.length; // The eslint settings do not allow break;
              }
          }
      }

      for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
              continue;
          }
          var part = parts[i];

          var bracketEqualsPos = part.indexOf(']=');
          var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

          var key, val;
          if (pos === -1) {
              key = options.decoder(part, defaults$1.decoder, charset);
              val = options.strictNullHandling ? null : '';
          } else {
              key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset);
              val = options.decoder(part.slice(pos + 1), defaults$1.decoder, charset);
          }

          if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
              val = interpretNumericEntities(val);
          }
          if (has$2.call(obj, key)) {
              obj[key] = utils.combine(obj[key], val);
          } else {
              obj[key] = val;
          }
      }

      return obj;
  };

  var parseObject = function (chain, val, options) {
      var leaf = val;

      for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];

          if (root === '[]' && options.parseArrays) {
              obj = [].concat(leaf);
          } else {
              obj = options.plainObjects ? Object.create(null) : {};
              var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
              var index = parseInt(cleanRoot, 10);
              if (!options.parseArrays && cleanRoot === '') {
                  obj = { 0: leaf };
              } else if (
                  !isNaN(index)
                  && root !== cleanRoot
                  && String(index) === cleanRoot
                  && index >= 0
                  && (options.parseArrays && index <= options.arrayLimit)
              ) {
                  obj = [];
                  obj[index] = leaf;
              } else {
                  obj[cleanRoot] = leaf;
              }
          }

          leaf = obj;
      }

      return leaf;
  };

  var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
      if (!givenKey) {
          return;
      }

      // Transform dot notation to bracket notation
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

      // The regex chunks

      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;

      // Get the parent

      var segment = brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;

      // Stash the parent if it exists

      var keys = [];
      if (parent) {
          // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
          if (!options.plainObjects && has$2.call(Object.prototype, parent)) {
              if (!options.allowPrototypes) {
                  return;
              }
          }

          keys.push(parent);
      }

      // Loop through children appending to the array until we hit depth

      var i = 0;
      while ((segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          if (!options.plainObjects && has$2.call(Object.prototype, segment[1].slice(1, -1))) {
              if (!options.allowPrototypes) {
                  return;
              }
          }
          keys.push(segment[1]);
      }

      // If there's a remainder, just add whatever is left

      if (segment) {
          keys.push('[' + key.slice(segment.index) + ']');
      }

      return parseObject(keys, val, options);
  };

  var parse$1 = function (str, opts) {
      var options = opts ? utils.assign({}, opts) : {};

      if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
          throw new TypeError('Decoder has to be a function.');
      }

      options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
      options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults$1.delimiter;
      options.depth = typeof options.depth === 'number' ? options.depth : defaults$1.depth;
      options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults$1.arrayLimit;
      options.parseArrays = options.parseArrays !== false;
      options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults$1.decoder;
      options.allowDots = typeof options.allowDots === 'undefined' ? defaults$1.allowDots : !!options.allowDots;
      options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults$1.plainObjects;
      options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults$1.allowPrototypes;
      options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults$1.parameterLimit;
      options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults$1.strictNullHandling;

      if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {
          throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
      }
      if (typeof options.charset === 'undefined') {
          options.charset = defaults$1.charset;
      }

      if (str === '' || str === null || typeof str === 'undefined') {
          return options.plainObjects ? Object.create(null) : {};
      }

      var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
      var obj = options.plainObjects ? Object.create(null) : {};

      // Iterate over the keys and setup the new object

      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options);
          obj = utils.merge(obj, newObj, options);
      }

      return utils.compact(obj);
  };

  var lib = {
      formats: formats,
      parse: parse$1,
      stringify: stringify_1
  };

  /**
   * @file
   * Singleton class for manipulating cvit through the query string.
   */

  class QueryString {
    constructor() {
      this._data = [lib.parse(location.search, {
        ignoreQueryPrefix: true,
        encode: false,
        strictNullHandling: true
      })] || [{}];
    }

    get data() {
      return this._data[0];
    }

    get tag() {
      return this._data[0].data || 'general';
    }

    get config() {
      return this._data[0].config || null;
    }

    get gff() {
      let gff = this._data[0].gff || null;
      if (typeof gff === 'string') gff = [gff];
      return gff;
    }

  }

  const instance = new QueryString();
  Object.freeze(instance);

  function parseGff(text, seqNames = [], aliases = {}) {
    let parsed = {};
    let gffLine = {}; // Break up gff by line, then test if line is not a comment (starts with #)
    // if it is, do nothing, otherwise break up current line by tabs and
    // read into parsef File object. forEach is used for readability, can be
    // replaced by a for loop for performance.

    let gff = text.split('\n');
    gff.forEach(element => {
      if (element.match(/^[^#]/)) {
        element = element.split('\t');
        gffLine = {
          seqName: element[0],
          source: element[1],
          feature: element[2],
          start: parseInt(element[3]),
          end: parseInt(element[4]),
          score: Number(element[5]) || '.',
          strand: element[6],
          frame: element[7],
          // Break attribute tags into their own sub objects
          // so can be accessed as parsedFile[index].attribute.attributetype
          // this makes it easier to test if an attribute exists later
          // this function is self-invoking
          attribute: function () {
            let attributes = element[8].split(';');
            let parsedAttributes = {};
            attributes.forEach(attribute => {
              attribute = attribute.split('=');
              attribute[0] = attribute[0].toLowerCase();
              parsedAttributes[attribute[0]] = isNaN(attribute[1] - 0) ? attribute[1] : attribute[1] - 0; //parses a number as a number
            });
            return parsedAttributes;
          }()
        };
        /** attempt to match with existing sequences if data already loaded */

        if (!parsed.hasOwnProperty("alias")) {
          parsed.alias = aliases;
        }

        if (gffLine.feature === 'chromosome') {
          // build alias dictionary
          let seqName = gffLine.seqName;
          parsed.alias[seqName] = seqName;

          if (gffLine.attribute.hasOwnProperty('alias')) {
            let aliases = gffLine.attribute.alias.split(',');
            aliases.forEach(alias => {
              parsed.alias[alias] = seqName;
            });
          }
        }

        let seqName = parsed.alias[gffLine.seqName] || gffLine.seqName; //gffLine.seqName is a fallover if chromosomes don't come first in file

        if (seqNames.length > 0) {
          seqNames.some(seq => {
            let re = new RegExp('.*' + seqName).test(seq);

            if (re) {
              seqName = seq;
              gffLine.seqName = seq;
              return true;
            }

            return false;
          });
        }
        /**
         * Add the feature to the object of it's underlying
         * feature category (gff column 3)
         */


        if (parsed[gffLine.feature] === undefined) {
          parsed[gffLine.feature] = {
            features: []
          };
        }

        if (parsed[gffLine.feature][seqName] === undefined) {
          parsed[gffLine.feature][seqName] = {
            features: [],
            itree: rbush_1(),
            maxScore: {
              value: null,
              scoreCol: null
            },
            minScore: {
              value: null,
              scoreCol: null
            }
          };
        }

        parsed[gffLine.feature].features.push(gffLine);
        let sn = parsed[gffLine.feature][seqName];
        sn.features.push(gffLine);
        /** preprocess for drawing as measure -0 to cast to number if possible */

        sn.itree.insert({
          minX: gffLine.start,
          maxX: gffLine.end,
          minY: 0,
          maxY: 0,
          data: gffLine
        });
        let value = isNaN(gffLine.attribute.value - 0) ? null : gffLine.attribute.value - 0;
        let scoreCol = isNaN(gffLine.score - 0) ? null : gffLine.score - 0;
        let max = sn.maxScore;
        let min = sn.minScore;
        sn.maxScore = {
          value: value === null && max.value === null ? null : value > max.value ? value : max.value,
          scoreCol: scoreCol === null && max.scoreCol === null ? null : scoreCol > max.scoreCol ? scoreCol : max.scoreCol
        };
        sn.minScore = {
          value: value === null && min.value === null ? null : value < min.value || min.value === null ? value : min.value,
          scoreCol: scoreCol === null && min.scoreCol === null ? null : scoreCol < min.scoreCol || min.scoreCol === null ? scoreCol : min.scoreCol
        };
      }
    });
    return parsed;
  }

  function parseIni(text) {
    let parsed = {};
    let currentConfigKey = '';
    let confItem;
    let conf = text.split('\n');
    conf.forEach(element => {
      if (element.match(/^[^#;]/)) {
        //filter out comment lines # or ;
        let match = element.match(/\[(.*)]/); //catch arrays/new config section

        if (match !== null) {
          //distinguish between [Configheader] key or something = [array]
          if (element.match(/=/)) {
            //something = array
            confItem = element.split('=');
            let confArray = match[1].trim().split(/[\s]*,[\s]*/);

            if (parsed[currentConfigKey][confItem[0].trim()]) {
              parsed[currentConfigKey][confItem[0].trim()].concat(confArray);
            } else {
              parsed[currentConfigKey][confItem[0].trim()] = confArray;
            }
          } else {
            //new key
            currentConfigKey = match[1];
            if (!parsed.hasOwnProperty(currentConfigKey)) parsed[currentConfigKey] = {};
          }
        } else {
          //something = value
          confItem = element.split('=');

          if (confItem[1] && confItem[1].trim() !== '') {
            let ci = confItem[1].trim();
            if (!isNaN(ci - 0)) ci = ci - 0;

            if (ci[0] === '{') {
              // if value is an object, parse as JSON
              parsed[currentConfigKey][confItem[0].trim()] = JSON.parse(ci);
            } else {
              // parse as text
              parsed[currentConfigKey][confItem[0].trim()] = ci;
            }
          }
        }
      }
    });
    return parsed;
  }

  function parseFile(location, format, fetchParam, strArray = [], aliasArray = {}) {
    if (typeof location === 'object') {
      return location;
    }

    return fetch(location, fetchParam).then(response => {
      const ct = response.headers.get("content-type");

      if (response.status !== 200) {
        throw new Error(`Problem loading ${location}: status ${response.status}`);
      } else if (ct === 'application/json') {
        format = 'json';
        return response.json();
      } else {
        return response.text();
      }
    }) //supported file types ini/gff are plaintext blobs
    .then(responseText => {
      switch (format) {
        case 'ini':
          return parseIni(responseText);

        case 'gff':
          return parseGff(responseText, strArray, aliasArray);

        case 'json':
          return responseText;

        default:
          throw new Error(format + ' is not a supported file format.');
      }
    }).catch(e => console.error(e));
  }

  function defaultConfig() {
    return {
      'general': {
        'title': '',
        'title_height': 20,
        'title_font': 1,
        'title_font_size': 10,
        'title_font_color': 'black',
        'title_font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
        'image_padding': 10,
        'border_color': 'black',
        'border_width': 0,
        'chrom_width': 10,
        'fixed_chrom_spacing': 1,
        'chrom_spacing': 90,
        'chrom_padding_left': 0,
        'chrom_padding_right': 0,
        'chrom_padding_top': 50,
        'chrom_padding_bottom': 50,
        'chrom_color': 'gray50',
        'chrom_border': 1,
        'chrom_border_color': 'gray50',
        'chrom_border_width': 2,
        'chrom_font': 1,
        'chrom_font_size': 10,
        'chrom_font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
        'chrom_label_color': 'gray50',
        'show_strands': 0,
        'display_ruler': '1',
        'reverse_ruler': 0,
        'ruler_min': 0,
        'ruler_max': 0,
        'ruler_color': 'gray60',
        'ruler_font': 1,
        'ruler_font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
        'ruler_font_size': 6,
        'tick_line_width': 8,
        'tick_interval': 50000,
        'minor_tick_divisions': 2
      },
      'classes': {
        'uncategorized': 'black'
      },
      'centromere': {
        'centromere_overhang': 2,
        'color': 'gray30',
        'transparent': 0,
        'transparent_percent': 0.6,
        'border': 0,
        'border_width': 2,
        'border_color': 'black',
        'draw_label': 0,
        'font_size': 6,
        'label_offset': 0,
        'label_color': 'gray30',
        'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
        'hide_label_overlap': 0,
        'by_class': 0,
        'class_filter': [],
        'class_offset': 0,
        'class_space': 0
      },
      'position': {
        'color': 'gray30',
        'transparent': 0,
        'transparent_percent': 0.6,
        'shape': 'circle',
        'width': 5,
        'offset': 0,
        'border': 0,
        'border_width': 2,
        'border_color': 'black',
        'enable_pileup': 1,
        'pileup_gap': 0,
        'font_size': 6,
        'label_offset': 0,
        'label_color': 'gray30',
        'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
        'hide_label_overlap': 0,
        'by_class': 0,
        'class_filter': [],
        'class_offset': 0,
        'class_space': 0
      },
      'range': {
        'color': 'green',
        'transparent': 0,
        'transparent_percent': 0.6,
        'width': 6,
        'offset': 0,
        'border': 0,
        'border_width': 2,
        'enable_pileup': 1,
        'pileup_gap': 0,
        'draw_label': 1,
        'font_size': 6,
        'label_offset': 0,
        'label_color': 'black',
        'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
        'hide_label_overlap': 0,
        'by_class': 0,
        'class_filter': [],
        'class_offset': 0,
        'class_space': 0
      },
      'border': {
        'color': 'red',
        'border': 1,
        'border_width': 2,
        'fill': 0,
        'fill_color': 'red',
        'transparent': 0,
        'transparent_percent': 0.6,
        'draw_label': 1,
        'font_size': 6,
        'label_offset': 0,
        'label_color': 'black',
        'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
        'hide_label_overlap': 0,
        'by_class': 0,
        'class_filter': [],
        'class_offset': 0,
        'class_space': 0
      },
      'marker': {
        'color': 'green',
        'transparent': 0,
        'transparent_percent': 0.6,
        'offset': 0,
        'draw_label': 1,
        'font_size': 6,
        'label_offset': 0,
        'label_color': 'black',
        'stroke_width': 2,
        'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
        'hide_label_overlap': 0,
        'by_class': 0,
        'class_filter': [],
        'class_offset': 0,
        'class_space': 0
      },
      'measure': {
        'value_type': 'value_attr',
        'invert_value': 0,
        'value_distribution': 'linear',
        'value_base': Math.E,
        'min': 0,
        'max': 0,
        'display': 'heat',
        'draw_as': 'range',
        'width': 2,
        'enable_pileup': 0,
        'pileup_gap': 0,
        'heat_colors': 'redgreen',
        'color': 'red',
        'max_distance': 25,
        'hist_perc': 0.9,
        'transparent': 0,
        'transparent_percent': 0.6,
        'border': 0,
        'border_width': 2,
        'border_color': 'black',
        'offset': 0,
        'draw_label': 1,
        'font_size': 6,
        'label_offset': 0,
        'label_color': 'black',
        'hide_label_overlap': 0,
        'generate_bins': 0,
        'bin_size': 0,
        'bin_count': 0,
        'bin_min': 0,
        'bin_max': 0,
        'count_classes': 0,
        'by_class': 0,
        'class_filter': [],
        'class_offset': 0,
        'class_space': 0,
        'class_heat': []
      }
    };
  }

  class Index {
    /**
     * Default constructor
     * @param {{viewConf:string, gff:Array.string}} passedConfig
     * @param {callback} sub
     */
    constructor(passedConfig, sub) {
      this.cvitRoot = passedConfig.cvitRoot;
      this.onChanges = [sub];
      this._dirty = false;
      let qs = instance;
      this._viewLayout = {};
      this._viewData = {};
      this.defaultViewConf = defaultConfig();
      this._viewConfig = {};
      this._tag = '';
      this._active = 'status';
      this._mouseTool = 'pan';
      this._dataLoaded = new CustomEvent('baseDataLoaded');
      this._trigger = false;
      this._color1 = new paperFull.Color(0, 0, 0, 1);
      this._color2 = new paperFull.Color(0.7, 0.8, 0.8, 0.4);
      this._popoverConfig = {
        visible: false,
        position: {
          x: 0,
          y: 0
        },
        data: []
      };
      this._paperContext = paperFull;
      parseFile(`${this.cvitRoot}cvit.conf`, 'ini', {}).then(response => this.baseConfig = response).then(() => {
        this._dirty = true;
        this._tag = 'data.';

        if (passedConfig.hasOwnProperty('viewTag') && passedConfig.viewTag) {
          this._tag += passedConfig.viewTag;
        } else if (qs && qs.tag !== 'general') {
          this._tag += qs.tag;
        } else {
          if (this.baseConfig.general.hasOwnProperty('data_default')) {
            this._tag += this.baseConfig.general.data_default;
          } else {
            throw new Error('Default dataset has not been configured.');
          }
        }

        let tag = this._tag;
        let viewConfig = passedConfig.viewConf ? passedConfig.viewConf : this.baseConfig[tag].conf;
        let dataSources = passedConfig.gff ? passedConfig.gff : qs && qs.gff ? qs.gff : typeof this.baseConfig[tag].defaultData === 'string' ? [this.baseConfig[tag].defaultData] : this.baseConfig[tag].defaultData; // set fetch parameters

        let pcFetchParam = passedConfig.hasOwnProperty('fetchParam') ? passedConfig.fetchParam : {};
        let genFetchParam = this.baseConfig.general.hasOwnProperty('fetchParam') ? this.baseConfig.general.fetchParam : {};
        this._fetchParam = this._combineObjects(genFetchParam, pcFetchParam); // Load configuration for view

        this.loadViewConfig(this.cvitRoot + viewConfig); // Load _viewData for view

        this.loadInitialData(dataSources);

        this._inform();
      }).catch(e => console.error(e));
    }
    /**
     * Getters/Setters
     */


    get active() {
      return this._active;
    }

    set active(view) {
      this._active = view;
    }

    get config() {
      return this._viewConfig;
    }

    get data() {
      return this._viewData;
    }

    get dirty() {
      return this._dirty;
    }

    set dirty(state) {
      this._dirty = state;
    }

    get mouseTool() {
      return this._mouseTool;
    }

    set mouseTool(tool) {
      this._mouseTool = tool;
    }

    get paper() {
      return this._paperContext;
    }

    get view() {
      return this._viewLayout;
    }

    setActive(state) {
      this.active = state;

      this._inform();
    }

    setDirty(state) {
      this.dirty = state;

      this._inform();
    }

    get color1() {
      return this._color1;
    }

    get color2() {
      return this._color2;
    }

    set color1(color) {
      this._color1 = color;
    }

    set color2(color) {
      this._color2 = color;
    }

    get popoverConfig() {
      return this._popoverConfig;
    }

    setColor(target, color) {
      this[target] = color;
      this.active = 'canvas';

      this._inform();
    }

    setTool(state) {
      this.mouseTool = state;

      this._inform();
    }

    setPopover(props) {
      for (let key in props) {
        if (props.hasOwnProperty(key) && this._popoverConfig.hasOwnProperty(key)) {
          this._popoverConfig[key] = props[key];
        }
      }

      this._inform();
    }
    /**
     * Public Methods
     */


    loadInitialData(files) {
      files = files.map(file => this.cvitRoot + file);
      this.loadData(files);
    }
    /**
     * Load view _viewData from the passed file locations
     * @param files
     * @param fetchParam optional
     */


    loadData(files, fetchParam = {}) {
      this._viewData = {};
      files.forEach((file, i) => {
        let fp = fetchParam.hasOwnProperty(file) ? fetchParam[file] : this._fetchParam.hasOwnProperty(file) ? this._fetchParam[file] : fetchParam;
        this.appendData(file, fp).then(() => {
          if (i === files.length - 1) {
            this._dirty = true;

            this._inform();
          }
        }).catch(e => console.error(e));
      });
    }
    /**
     * Load _viewConfig from the passed file location
     * @param file
     * @param fetchParam optional
     */


    loadViewConfig(file, fetchParam = {}) {
      this._viewConfig = {};
      let fp = fetchParam.hasOwnProperty(file) ? fetchParam[file] : this._fetchParam.hasOwnProperty(file) ? this._fetchParam[file] : {};
      parseFile(file, 'ini', fp) //get <config.ini/conf>
      .then(response => this._viewConfig = this._combineObjects(this.defaultViewConf, response)) //overwrite default conf with passed data
      .then(() => {
        //set configuration info of custom types
        for (let key in this._viewConfig) {
          if (this._viewConfig.hasOwnProperty(key)) {
            if (this._viewConfig[key].glyph) {
              let append = this._viewConfig[key];
              this._viewConfig[key] = this._combineObjects(JSON.parse(JSON.stringify(this._viewConfig[append.glyph])), append);
            }
          }
        }
      }).then(() => {
        this._dirty = true;

        this._inform();
      }).catch(e => console.error(e));
    }
    /**
     * Append view _viewData from the passed file to existing dataset
     * @param {string} file
     * @param fetchParam
     * @returns {promise}
     */


    appendData(file, fetchParam = {}) {
      if (this._active !== 'status') {
        this._active = 'status';

        this._inform();
      }

      let fp = fetchParam.hasOwnProperty(file) ? fetchParam[file] : this._fetchParam.hasOwnProperty(file) ? this._fetchParam[file] : fetchParam;
      let aliases = this.data.hasOwnProperty('alias') ? this.data.alias : {};
      return parseFile(file, 'gff', fp, this._viewLayout.chrOrder, aliases).then(response => this._viewData = this._combineObjects(this._viewData, response)).then(() => this._viewLayout.chrOrder = this._setChrOrder(this._viewData)).then(() => {
        this._dirty = true;

        this._inform();
      }).catch(e => console.error(e));
    }

    appendGff(gff, fetchParam = {}) {
      let fp = fetchParam.hasOwnProperty(file) ? fetchParam[file] : this._fetchParam.hasOwnProperty(file) ? this._fetchParam[file] : fetchParam;
      parseFile(gff, 'gff', fp).then(response => this._viewData = this._combineObjects(this._viewData, response)).then(() => this._viewLayout.chrOrder = this._setChrOrder(this._viewData)).then(() => {
        this._dirty = true;

        this._inform();
      }).catch(e => console.error(e));
    }
    /**
     * Private Methods
     */

    /**
     * Callback to alert preact that model has updated and set _viewLayout
     * @private
     */


    _inform() {
      if (this._viewConfig.general && this._viewData.hasOwnProperty('chromosome') && this._dirty) {
        this._viewLayout = this._setupView(this._viewData, this._viewConfig);
        this._active = 'canvas';

        if (!this._trigger) {
          this._trigger = true;
          document.dispatchEvent(this._dataLoaded);
        }
      }

      this.onChanges.forEach(callBack => callBack());
    }
    /**
     * Deep combine append to base. Append will overwrite non-array
     * lowest-level key-values and concat arrays.
     * @param {object} base - base object (usually a default)
     * @param {object} append - object to append
     * @returns {*} edited base object
     * @private
     */


    _combineObjects(base, append) {
      if (typeof append !== 'object') return base;

      for (let key in append) {
        /** add glyph/draw_as sub-configuration to given configuration object */
        if (append[key].hasOwnProperty('glyph')) {
          append[key] = this._combineObjects(JSON.parse(JSON.stringify(base[append[key]['glyph']])), append[key]);
        }

        if (append[key].hasOwnProperty('draw_as')) {
          append[key] = this._combineObjects(JSON.parse(JSON.stringify(base[append[key]['draw_as']])), append[key]);
        }

        if (base.hasOwnProperty(key)) {
          if (Array.isArray(base[key])) {
            base[key] = base[key].concat(append[key]);
          } else if (typeof base[key] === 'object') {
            this._combineObjects(base[key], append[key]);
          } else {
            base[key] = append[key];
          }
        } else {
          base[key] = append[key];
        }
      }

      return base;
    }
    /**
     * Setups _viewLayout, which contains computed values based on
     * the chromosome backbone.
     * @param dataModel - data object
     * @param viewConfig - config object
     * @returns {{chrOrder: Array, yOffset: {offsetTop: number, offsetBottom: number}, canvas: {color: any, width: number, height: number}, min: number, xOffset: number, max: number, chrMax: *, chrWidth: number, zoom: number, chrMin: *, yScale: number}}
     * @private
     */


    _setupView(dataModel, viewConfig) {
      let chr = dataModel.hasOwnProperty('chromosome') ? dataModel.chromosome : null; //should never return null
      // set up view limits

      let viewSetup = {
        min: viewConfig.general.ruler_min,
        max: viewConfig.general.ruler_max,
        chrMin: chr.features[0].seqName,
        chrMax: chr.features[0].seqName,
        chrOrder: [],
        zoom: 0,
        yScale: 1,
        yOffset: {
          offsetTop: parseInt(viewConfig.general.chrom_padding_top) || 0,
          offsetBottom: parseInt(viewConfig.general.chrom_padding_bottom) || 0
        },
        xOffset: parseInt(viewConfig.general.image_padding),
        chrWidth: parseInt(viewConfig.general.chrom_width),
        canvas: {
          width: this.baseConfig[this._tag].hasOwnProperty('width') ? parseInt(this.baseConfig[this._tag].width) : this.baseConfig['general'].hasOwnProperty('width') ? parseInt(this.baseConfig['general'].width) : 0,
          height: this.baseConfig[this._tag].hasOwnProperty('height') ? parseInt(this.baseConfig[this._tag].height) : this.baseConfig['general'].hasOwnProperty('height') ? parseInt(this.baseConfig['general'].height) : 600,
          color: this.baseConfig[this._tag].hasOwnProperty('canvasColor') ? parseInt(this.baseConfig[this._tag].canvasColor) : this.baseConfig['general'].hasOwnProperty('canvasColor') ? this.baseConfig['general'].canvasColor : 'white'
        },
        displayControls: this.baseConfig[this._tag].hasOwnProperty('displayControls') ? this.baseConfig[this._tag].displayControls : this.baseConfig['general'].hasOwnProperty('displayControls') ? this.baseConfig['general'].displayControls : 'full',
        colorClasses: viewConfig.classes || {},
        setPopover: props => this.setPopover(props)
      };
      chr.features.forEach(data => {
        let name = data.seqName;

        if (data.start < viewSetup.min) {
          viewSetup.min = data.start;
          viewSetup.chrMin = name;
        }

        if (data.end > viewSetup.max) {
          viewSetup.max = data.end;
          viewSetup.chrMax = name;
        }

        viewSetup.chrOrder.push(name);
      });
      if (viewSetup.min > viewConfig.general.ruler_min) viewSetup.min = viewConfig.general.ruler_min;
      if (viewSetup.max < viewConfig.general.ruler_max) viewSetup.max = viewConfig.general.ruler_max;
      viewSetup.yScale = Index._setYScale(viewSetup.canvas.height, viewSetup.max, viewSetup.min, viewSetup.yOffset);
      return viewSetup;
    }

    _setChrOrder(viewData) {
      let order = this._viewLayout.chrOrder || [];

      for (let key in viewData) {
        if (viewData.hasOwnProperty(key)) {
          for (let k in viewData[key]) {
            if (viewData[key].hasOwnProperty(k) && k !== 'features' && order.indexOf(k) !== -1) {
              order.push(k);
            }
          }
        }
      }

      return order;
    }
    /**
     * @description
     * Set the y-scale factor for drawing on the canvas based on the actual
     * canvas dimensions and the vertical padding.
     * @param height
     * @param {number} chrMax - Minimum position of target chromosome
     * @param {number} chrMin - Maximum position of target chromosome
     * @param {number} offsetTop
     * @param {number} offsetBottom
     * @returns {number} y-scale factor
     * @private
     */


    static _setYScale(height, chrMax, chrMin, {
      offsetTop,
      offsetBottom = 0
    }) {
      return (height - (offsetTop + offsetBottom)) / (chrMax - chrMin);
    }

  }

  class CVIT {
    constructor(passedData) {
      this.model = new Index(passedData, () => {
        this._inform();
      });
      this.ui = render(h(CvitUI, {
        cvitModel: this.model
      }), document.querySelector('#cvit-app'));
    }
    /**
     * Pass file to append to CViT view _viewData post load
     * @param file
     * @param fetchConfig
     */


    appendData(file, fetchConfig = {}) {
      this.model.appendData(file, fetchConfig).then(() => {
        this.model.setDirty(true);
      });
    }

    _parseFile(file, format, fetchConfig = {}) {
      return parseFile(file, format, fetchConfig);
    }
    /**
     * overwrite CViT view _viewData post load
     * @param  files
     * @param fetchConfig
     */


    overwriteData(files, fetchConfig = {}) {
      this.model.setData(files, fetchConfig).then(() => {
        this.model.setDirty(true);
      });
    }
    /**
     * overwrite CViT view configuration post load
     * @param  file
     * @param fetchConfig
     */


    overwriteConfig(file, fetchConfig = {}) {
      this.model.loadViewConfig(file, fetchConfig).then(() => this.model.setDirty(true));
    }

    pingModel() {
      console.log('ping', this.model);
    }
    /**
     * Inform preact that the component's props have updated
     * @private
     */


    _inform() {
      render(h(CvitUI, {
        cvitModel: this.model
      }), document.querySelector('#cvit-app'), this.ui);
    }

  }

  /**
   * @file
   * Main entry point into CViTjs, done this way to allow pre-processing of _viewData before cvit is mounted
   * to the DOM than quickly entering react UI environment, also gives space to add more sources of configuration
   * and _viewData.
   * @author awilkey
   *
   */

  const main = () => {
    //if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    //  // support commonjs loading, if it exists.
    //  module.exports = CVIT;
    //}  else {
    //  // otherwise put cmap constructor in window global
    //  window.cvit = CVIT;
    //}
    //emit event when cvit _viewData is properly loaded
    const evtName = 'DOMContentLoaded'; // add alternative config/gff locations priority order: HTML _viewData attribute > querystring > cvit.conf

    const loadedHandler = () => {
      let dataset = document.getElementById('cvit-app').dataset;
      console.log('cvitroot', dataset.cvitroot);
      let dConf = dataset.config ? JSON.parse(dataset.config) : null;
      let dTag = dataset.tag ? dataset.tag : null;
      let dGff = dataset.gff ? JSON.parse(dataset.gff) : null;
      let croot = dataset.cvitroot ? dataset.cvitroot : '';
      let register = dataset.register ? dataset.register : true;
      let configData = {
        viewConf: dConf,
        viewTag: dTag,
        gff: dGff,
        cvitRoot: croot
      };

      let _cvit = new CVIT(configData);

      if (register) window.cvit = _cvit;

      const postLoadHandler = () => {
        console.log('CViTjs:', 'Data successfully loaded');
        document.removeEventListener('baseDataLoaded', postLoadHandler);
      };
      /** example loading post-creation data */

      /*
       const postLoadHandler = () => {
        //_cvit.appendData('data/test5/data2.gff');
        document.removeEventListener('baseDataLoaded',postLoadHandler);
      };
      **/


      document.addEventListener('baseDataLoaded', postLoadHandler);
      document.removeEventListener(evtName, loadedHandler);
    };

    document.addEventListener(evtName, loadedHandler);
  };

  main();

}());
