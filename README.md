# Context API - 2

After opening the website on localhost do this:-
Open dev tools in chrome
windows: control+shift+j
Mac: command+option+j

Navigate to console and paste this
<code>window.localstorage.setItem('key','accessKey')</code><br/>
<code>window.localstorage.setItem('accessKey','hi-IN')</code>

This is required so the context gets its value.

The context defined in App.js is being passed an object with key language.

In <code>LanguageSettings</code> component, use that context value and display the language
