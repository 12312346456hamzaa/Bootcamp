from flask import Flask, request, jsonify
from flask_cors import CORS  # ✅ Ajout
from menu_item import MenuItem
from menu_manager import MenuManager

app = Flask(__name__)
CORS(app)  # ✅ Active le CORS pour toutes les routes

@app.route('/api/items', methods=['GET'])
def get_all_items():
    items = MenuManager.all_items()
    return jsonify([{'name': item.name, 'price': item.price} for item in items])

@app.route('/api/items/<string:name>', methods=['GET'])
def get_item(name):
    item = MenuManager.get_by_name(name)
    if item:
        return jsonify({'name': item.name, 'price': item.price})
    return jsonify({'error': 'Item not found'}), 404

@app.route('/api/items', methods=['POST'])
def add_item():
    data = request.get_json()
    item = MenuItem(data['name'], data['price'])
    item.save()
    return jsonify({'message': 'Item added successfully'}), 201

@app.route('/api/items/<string:name>', methods=['PUT'])
def update_item(name):
    item = MenuManager.get_by_name(name)
    if not item:
        return jsonify({'error': 'Item not found'}), 404
    data = request.get_json()
    item.update(data['name'], data['price'])
    return jsonify({'message': 'Item updated successfully'})

@app.route('/api/items/<string:name>', methods=['DELETE'])
def delete_item(name):
    item = MenuManager.get_by_name(name)
    if not item:
        return jsonify({'error': 'Item not found'}), 404
    item.delete()
    return jsonify({'message': 'Item deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
