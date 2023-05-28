import React from "react";

const UserList = () => {

    const User = ({userData}) => {
        return (
            <tr>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
            </tr>
        )
    }


    // array state 관리법 
    const users = [
        {email:'test1@naver.com',name:'esy'},
        {email:'test2@naver.com',name:'yyj'},
        {email:'test3@naver.com',name:'eyj'},
        {email:'test4@naver.com',name:'jhs'},
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody> 
                {/*자식 컴포넌트로 부터 userData property 값을 기반으로 데이터를 받아와 넣어줌*/}
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    )
}
export default UserList;