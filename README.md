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
- options **{{Object}}** 铺助参数，取值如下，可选
  - raw  **{{Boolean}}** 当有 raw 参数，且值为真时，不会对获取到的 cookie 值进行 URI 解码
  - converter **{{Function}}** 当有 converter 参数，且值为函数时，如果所获取的 cookie 有值，会在返回前传给 converter 函数进行转换
