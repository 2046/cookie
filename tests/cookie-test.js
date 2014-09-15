define(function(require, exports, module){
    'use strict'

    var expect, cookie;

    expect = require('expect');
    cookie = require('cookie');

    function equals(){
        var args = arguments;
        expect(args[0]).to.equal(args[1]);
    };

    describe('Cookie', function(){
        describe('get', function(){
            document.cookie = '_sea_test_1=1';
            document.cookie = '_sea_test_2';
            document.cookie = '_sea_test_3=';
            document.cookie = '_sea_test_4[t]=xx';

            it('should return undefined for non-existing name.', function(){
                equals(cookie.get('_sea_test_none'), undefined);
                expect(function(){
                    cookie.get(true);
                }).to.throwError();
                expect(function(){
                    cookie.get({});
                }).to.throwError();
                expect(function(){
                    cookie.get(null)
                }).to.throwError();
            });

            it('should throw error for invalid name.', function(){
                expect(function(){
                    cookie.get(true);
                }).to.throwError();
                expect(function(){
                    cookie.get({});
                }).to.throwError();
                expect(function(){
                    cookie.get(null)
                }).to.throwError();
            });
        });

        describe('set', function(){
            it('should set a cookie with a given name and value', function(){
                cookie.set('_sea_test_11', 'xx');
                equals(cookie.get('_sea_test_11'), 'xx');

                cookie.set('_sea_test_12', 'xx', {
                    expires : -1
                });
                equals(cookie.get('_sea_test_12'), undefined);

                cookie.set('_sea_test_13', '2', {
                    expires : new Date(2099,1,1),
                    path : '/'
                });
                equals(cookie.get('_sea_test_13'), '2');

                cookie.remove('_sea_test_14');
                cookie.set('_sea_test_14', '4', {
                    domain : document.domain,
                    path : '/',
                    secure : true
                });
                equals(cookie.get('_sea_test_14'), undefined);

                cookie.set('_sea_test_15', '4', {
                    domain : document.domain,
                    path : '/'
                });
                equals(cookie.get('_sea_test_15'), '4');
            });
        });

        describe('remove', function(){
            it('should remove a cookie from the machine', function(){
                cookie.set('_sea_test_21', 'xx');
                cookie.remove('_sea_test_21');
                equals(cookie.get('_sea_test_21'), undefined);

                cookie.set('_sea_test_22', 'xx', {
                    expires : new Date(2099,1,1),
                    path : '/'
                });
                cookie.remove('_sea_test_22', {
                    path : '/'
                });
                equals(cookie.get('_sea_test_22'), undefined);
            });
        });
    });
});