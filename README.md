# react-test
store구조

store   -fetch      -id
                    -password
                    -phone
                    -userName

         -userById  -isFetching
                    -users(Array)   -id
                                    -password
                                    -phone
                                    -userName
                                    -createdAt
                                    -updatedAt

store   -userById   -유저아이디  -id
                              -password
                              -phone
                              -userName
                              -isLogin
                    -loginState
                    -loginID