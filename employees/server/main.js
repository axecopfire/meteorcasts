// Only executed on the server
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import _ from 'lodash';
import { image, helpers} from 'faker';

Meteor.startup(() => {
    // Great place to generate some data

    // Check to see if data exists in the collection
    // See if the collection has any records
    const numberRecords = Employees.find({}).count();
    if (!numberRecords) {
        // Generate some data...
        _.times(5000, () => {
            const { name, email, phone }= helpers.createCard();

            Employees.insert({
                name, email, phone,
                avatar: image.avatar()
            });
        });
    }

    Meteor.publish('employees', function() {
        return Employees.find({}, { limit: 20 });
    });
});