import { GetAllUsers } from '../capabilities/get-all-users';
import { HttpService } from '../infra/service';


const HomePage = () => {
    const service = new HttpService();
    const getAllUsers = new GetAllUsers(service);

    const users = getAllUsers.execute();
    console.log('🚀 ~ file: index.tsx:10 ~ HomePage ~ users:', users);

    return (
        `<div>
        {users.map(user => (
            <DogCard key={user.id} {user} />
        ))}
        </div>`
    );
};
export default HomePage();