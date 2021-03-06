/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Zimbra Mail Notifier.
 *
 * The Initial Developer of the Original Code is
 * David GUEHENNEC.
 * Portions created by the Initial Developer are Copyright (C) 2013
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 * Benjamin ROBIN
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

"use strict";

if (!com) {
    var com = {};
}
if (!com.zimbra) {
    com.zimbra = {};
}

/**
 * Creates a global instance of com.zimbra.UiUtil
 *
 * @constructor
 * @this {UiUtil}
 *
 */
com.zimbra.UiUtil = { };

/**
 * Option select tab
 *
 * @constant
 *
 */
com.zimbra.UiUtil.OPTION_SELECT_TAB = {
    GENERAL         : "option-tab-common",
    CALENDAR        : "option-tab-calendar",
    TASK            : "option-tab-task",
    IDENTIFICATION  : "option-tab-identifiant"
};

/**
 * install button.
 *
 * @this {UiUtil}
 * @param {String}
 *            toolbarid
 * @param {String}
 *            id
 * @param {String}
 *            afterId indicate after the object Id
 */
com.zimbra.UiUtil.installButton = function(toolbarId, id, afterId) {
    if (!window.document.getElementById(id)) {
        var toolbar = window.document.getElementById(toolbarId);
        var before = null;
        if (afterId) {
            var elem = window.document.getElementById(afterId);
            if (elem && elem.parentNode === toolbar) {
                before = elem.nextElementSibling;
            }
        }

        toolbar.insertItem(id, before);
        toolbar.setAttribute("currentset", toolbar.currentSet);
        window.document.persist(toolbar.id, "currentset");

        if (toolbarId === "addon-bar") {
            toolbar.collapsed = false;
        }
    }
};

/**
 * set menulist
 *
 * @this {UiUtil}
 */
com.zimbra.UiUtil.setMenulist = function(id, value) {
    var object = document.getElementById(id);
    var popup = object.menupopup;
    if (popup) {
        var children = popup.childNodes;
        for ( var index = 0; index < children.length; index++) {
            if (('' + children[index].value) === ('' + value)) {
                object.selectedIndex = index;
                return;
            }
        }
    }
};

/**
 * set visibility.
 *
 * @this {UiUtil}
 * @param {String}
 *            id
 * @param {String}
 *            visibility visibility of the object
 */
com.zimbra.UiUtil.setVisibility = function(id, visibility) {
    if (window.document.getElementById(id)) {
        window.document.getElementById(id).style.visibility = visibility;
    }
};

/**
 * set attribute.
 *
 * @this {UiUtil}
 * @param {String}
 *            id
 * @param {String}
 *            attribute attribute to set
 * @param {String}
 *            value value of the attribute
 */
com.zimbra.UiUtil.setAttribute = function(id, attribute, value) {
    if (window.document.getElementById(id)) {
        window.document.getElementById(id).setAttribute(attribute, value);
    }
};

/**
 * set the value of the textbox.
 *
 * @this {UiUtil}
 * @param {String}
 *            id
 * @param {String}
 *            value value to set
 */
com.zimbra.UiUtil.setTextboxValue = function(id,value) {
    if (window.document.getElementById(id)) {
        window.document.getElementById(id).value = value;
    }
};

/**
 * set the value of the textbox.
 *
 * @this {UiUtil}
 * @param {String}
 *            id
 * @param {String}
 *            value value to set
 * @param {String}
 *            prefid The prefpane id
 */
com.zimbra.UiUtil.setTextboxPref = function(id, value, prefid) {
    var obj = window.document.getElementById(id);
    if (obj) {
        obj.value = value;
    }
    var prefpan = window.document.getElementById(prefid);
    if (prefpan) {
        prefpan.userChangedValue(obj);
    }
};

/**
 * set textContent.
 *
 * @this {UiUtil}
 * @param {String}
 *            id
 * @param {String}
 *            attribute attribute to set
 * @param {String}
 *            value value of the attribute
 */
com.zimbra.UiUtil.setTextContent = function(id, value) {
    if (window.document.getElementById(id)) {
        window.document.getElementById(id).textContent = value;
    }
};
/**
 * get attribute.
 *
 * @this {UiUtil}
 * @param {String}
 *            id
 * @param {String}
 *            attribute attribute to get
 * @return {Object} value of the attribute
 */
com.zimbra.UiUtil.getAttribute = function(id, attribute) {
    if (window.document.getElementById(id)) {
        return window.document.getElementById(id)[attribute];
    }
    return undefined;
};

/**
 * remove attribute.
 *
 * @this {UiUtil}
 * @param {String}
 *            id
 * @param {String}
 *            attribute attribute to remove
 */
com.zimbra.UiUtil.removeAttribute = function(id, attribute) {
    if (window.document.getElementById(id)) {
        window.document.getElementById(id).removeAttribute(attribute);
    }
};
