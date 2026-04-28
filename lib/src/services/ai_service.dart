import 'dart:convert';
import 'package:http/http.dart' as http;

class AI {
  static const String _ollamaUrl = 'http://localhost:11434/api/generate';
  static const String _model = 'llama3'; // Default model, change if needed

  /// Generates a response from the local Ollama instance.
  Future<String> getSuggestion(String prompt) async {
    try {
      final response = await http.post(
        Uri.parse(_ollamaUrl),
        body: jsonEncode({
          'model': _model,
          'prompt': prompt,
          'stream': false,
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        return data['response'] ?? 'Sin respuesta de la IA.';
      } else {
        return 'Error al conectar con Ollama: ${response.statusCode}';
      }
    } catch (e) {
      return 'Ollama no está disponible localmente. Asegúrate de que esté corriendo en el puerto 11434.';
    }
  }

  /// Specialized function for product descriptions.
  Future<String> generateProductDescription(String productName) async {
    return await getSuggestion(
      'Actúa como un experto en marketing para Miguezon Marketplace. Escribe una descripción atractiva y breve para el producto: $productName',
    );
  }
}
