#Cookie

提供基本的 cookie 获取，设置和删除功能

##使用

下载项目中 dist 目录里面的文件，并配置好模块相关信息（如：路径，别名），使用如下示例代码即可开始使用。

```
seajs.use(['cookie'], function(cookie){
    cookie.get('foo'); // undefined
    cookie.set('foo', 1);
    cookie.get('foo'); // 1
    cookie.remove('foo');
    cookie.get('foo'); // undefined
});

require(['cookie'], function(cookie){
    cookie.get('foo'); // undefined
    cookie.set('foo', 1);
    cookie.get('foo'); // 1
    cookie.remove('foo');
    cookie.get('foo'); // undefined
});
```

##使用说明

###get ``cookie.get(name, [options])``

获取 cookie 的值，如果要获取的 cookie 值不存在，则返回 undefined。

- name **{{String}}** 要获取的 cookie 的名称，必填
- options **{{Object}}** 附加属性，可选，取值如下：
  - raw  **{{Boolean}}** 是否对获取到的 cookie 值进行 URI 解码，值为真时，不会进行 URI 解码
  - converter **{{Function}}** 对获取的 cookie 值进行转换，如果所获取的 cookie 有值，会在返回前传给 converter 函数进行转换

```
var cookie = require('cookie');

cookie.set('foo', '1')
console.log(cookie.get('foo', {
    converter : function(s){
        return parseInt(s);
    }
})); // 1
```

###set ``cookie.set(name, value, [options])``

设置 cookie 的值。

- name **{{String}}** 要设置的 cookie 的名称，必填
- value **{{String}}** 要设置的 cookie 的值，必填
- options **{{Object}}** 附加属性，可选，取值如下：
  - raw **{{Boolean}}** 是否对设置的 cookie 值进行 URI 编码，值为真时，不会进行 URI 编码
  - path **{{String}}** 设置存储 cookie 的所属路径
  - domain **{{String}}** 设置存储 cookie 的所属域
  - expires **{{Number|Date}}** 设置存储 cookie 的过期时间，如果设置为 0，则浏览器关闭 cookie 将被删除
  - secure **{{Boolean}}** 设置存储的 cookie 信息只能从一个安全的环境中进行访问

```
var cookie = require('cookie');

cookie.set('foo', 3);

cookie.set('bar', 4, {
    path : '/',
    expires : 30,
    domain : 'example.com'
});
```

###remove ``cookie.remove(name, [options])``

删除一个 cookie。

- name **{{String}}** 要删除的 cookie 的名称，必填
- options **{{Object}}** 附加属性，跟 set 方法的 options 取值一样

```
var cookie = require('cookie');

cookie.remove('foo');

cookie.remove('bar', {
    path : '/',
    domain : 'example.com'
});
```

