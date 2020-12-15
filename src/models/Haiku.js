import firebase from 'firebase';
import { dbHaikus } from '../main';

class Haiku {
  constructor({
    id,
    name,
    date,
    text1,
    text2,
    text3
  }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.text1 = text1;
    this.text2 = text2;
    this.text3 = text3;
  }

  static async save({ name, text1, text2, text3}) {
    if(!text1 || !text2) {
      throw new Error('入力が必要です')
    }
    if (text1.length > 8) {
      throw new Error('入力は8文字までです');
    }
    if (text2.length > 8) {
      throw new Error('入力は8文字までです');
    }
    if (!text3 === null  || text3.length > 8) {
      throw new Error('入力は8文字までです');
    }

    const postData = {
      name,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      text1,
      text2,
      text3
    };

    const docRef = await dbHaikus.add(postData);
    const snapShot = await docRef.get();
    const data = snapShot.data();
    const model = this.create(docRef.id, data);

    return model;
  }

  static async fetchHaikus() {
    const collection = await dbHaikus.orderBy('date').get();
    if (collection.empty) {
      return [];
    }

    return collection.docs.map(doc => {
      return this.create(doc.id, doc.data())
    });
  }

  static create(id, data) {
    return new Haiku({
      id,
      name: data.name,
      date: data.date.toDate().toLocaleDateString(),
      text1: data.text1,
      text2: data.text2,
      text3: data.text3,
    });
  }
}

export default Haiku;