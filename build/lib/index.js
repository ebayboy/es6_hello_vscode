"use strict";

const person = {
    _name: 'rose',
    sayHi() {
        console.log("Hi");
    },
    set(value) {
        this._name = value;
    },
    get() {
        return this._name;
    }
};

console.log("get: ", person.get());

person.set('new rose');

console.log("get new: ", person.get());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJwZXJzb24iLCJfbmFtZSIsInNheUhpIiwiY29uc29sZSIsImxvZyIsInNldCIsInZhbHVlIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU1BLFNBQVM7QUFDWEMsV0FBTyxNQURJO0FBRVhDLFlBQVE7QUFDSkMsZ0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsS0FKVTtBQUtYQyxRQUFJQyxLQUFKLEVBQVc7QUFDUCxhQUFLTCxLQUFMLEdBQWFLLEtBQWI7QUFDSCxLQVBVO0FBUVhDLFVBQU07QUFDRixlQUFPLEtBQUtOLEtBQVo7QUFDSDtBQVZVLENBQWY7O0FBYUFFLFFBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSixPQUFPTyxHQUFQLEVBQXJCOztBQUVBUCxPQUFPSyxHQUFQLENBQVcsVUFBWDs7QUFFQUYsUUFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJKLE9BQU9PLEdBQVAsRUFBekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgcGVyc29uID0ge1xyXG4gICAgX25hbWU6ICdyb3NlJyxcclxuICAgIHNheUhpKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGlcIik7XHJcbiAgICB9LFxyXG4gICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlXHJcbiAgICB9LFxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwiZ2V0OiBcIiwgcGVyc29uLmdldCgpKVxyXG5cclxucGVyc29uLnNldCgnbmV3IHJvc2UnKVxyXG5cclxuY29uc29sZS5sb2coXCJnZXQgbmV3OiBcIiwgcGVyc29uLmdldCgpKVxyXG5cclxuIl19