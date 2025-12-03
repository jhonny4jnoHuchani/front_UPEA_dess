<template>
    <div class="api-tester">
        <h2>🧪 Probador de API v2</h2>

        <!-- Controles -->
        <div class="controls">
            <button @click="runAllTests" :disabled="loading" class="btn-primary">
                {{ loading ? 'Ejecutando...' : '🔍 Probar Todas las APIs' }}
            </button>
            <button @click="clearResults" class="btn-secondary">🗑️ Limpiar</button>
        </div>

        <!-- Selector de función individual -->
        <div class="function-selector">
            <label>Probar función individual:</label>
            <select v-model="selectedFunction" @change="testSingleFunction">
                <option value="">Selecciona una función</option>
                <option value="getInstitucion">getInstitucion</option>
                <option value="getCarrera">getCarrera</option>
                <option value="getEventos">getEventos</option>
                <option value="getGacetas">getGacetas</option>
                <option value="getLinksInstExtAll">getLinksInstExtAll</option>
                <option value="getConvocatorias">getConvocatorias</option>
                <option value="getCursos">getCursos</option>
                <option value="getServicios">getServicios</option>
                <option value="getOfertasAcademicas">getOfertasAcademicas</option>
                <option value="getPublicaciones">getPublicaciones</option>
                <option value="getVideos">getVideos</option>
            </select>
        </div>

        <!-- Resultados -->
        <div class="results">
            <!-- Resumen -->
            <div v-if="results.length > 0" class="summary">
                <h3>📊 Resumen</h3>
                <div class="stats">
                    <span class="stat passed">✅ {{ passedCount }}</span>
                    <span class="stat failed">❌ {{ failedCount }}</span>
                    <span class="stat total">📋 {{ results.length }}</span>
                </div>
            </div>

            <!-- Resultados detallados -->
            <div v-for="(result, index) in results" :key="index" :class="['result-item', result.status]">
                <div class="result-header">
                    <span class="status-icon">
                        {{ result.status === 'success' ? '✅' : '❌' }}
                    </span>
                    <strong>{{ result.function }}</strong>
                    <span class="timestamp">{{ result.timestamp }}</span>
                </div>

                <div class="result-body">
                    <p><strong>URL:</strong> {{ result.url }}</p>
                    <p><strong>Estado:</strong> {{ result.status }}</p>
                    <p><strong>Datos:</strong> {{ result.dataSummary }}</p>

                    <!-- Botón para ver datos completos -->
                    <button @click="toggleDetails(index)" class="btn-small">
                        {{ result.showDetails ? '👁️ Ocultar' : '👁️ Ver detalles' }}
                    </button>

                    <!-- Datos completos -->
                    <div v-if="result.showDetails" class="full-data">
                        <pre>{{ JSON.stringify(result.data, null, 2) }}</pre>
                    </div>

                    <!-- Error -->
                    <div v-if="result.error" class="error">
                        <strong>Error:</strong> {{ result.error }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="loading">
            <div class="spinner"></div>
            <p>Probando APIs...</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

// Configuración de API v2 (USANDO PROXY)
const institucionAPIv2 = axios.create({
    baseURL: '/api', // ← PROXY a http://200.105.169.11:1041/api/v2
    headers: {
        Authorization: 'Bearer fa488be0b12f0747d0f275afde2d78b1202ce84e3ace8b48f5dc2ccb991b476b',
    },
});

export default {
    name: 'APITester',
    data() {
        return {
            loading: false,
            results: [],
            selectedFunction: '',
            testId: '1' // ID para pruebas
        }
    },
    computed: {
        passedCount() {
            return this.results.filter(r => r.status === 'success').length;
        },
        failedCount() {
            return this.results.filter(r => r.status === 'error').length;
        }
    },
    methods: {
        /* === FUNCIONES API v2 === */
        async getInstitucion() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion;
        },

        async getCarrera() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion;
        },

        async getEventos() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion.eventos;
        },

        async getGacetas() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion.gacetas;
        },

        async getLinksInstExtAll() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion.linksExternoInterno;
        },

        async getConvocatorias() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion.convocatorias;
        },

        async getCursos() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion.cursos;
        },

        async getServicios() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion.serviciosCarrera;
        },

        async getOfertasAcademicas() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion.ofertasAcademicas;
        },

        async getPublicaciones() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion.publicaciones;
        },

        async getVideos() {
            const res = await institucionAPIv2.get(`/instituciones/${this.testId}`);
            return res.data.Descripcion.videos;
        },

        /* === FUNCIONES DE PRUEBA === */
        async runAllTests() {
            this.loading = true;
            this.results = [];

            const tests = [
                { name: 'getInstitucion', fn: this.getInstitucion },
                { name: 'getCarrera', fn: this.getCarrera },
                { name: 'getEventos', fn: this.getEventos },
                { name: 'getGacetas', fn: this.getGacetas },
                { name: 'getLinksInstExtAll', fn: this.getLinksInstExtAll },
                { name: 'getConvocatorias', fn: this.getConvocatorias },
                { name: 'getCursos', fn: this.getCursos },
                { name: 'getServicios', fn: this.getServicios },
                { name: 'getOfertasAcademicas', fn: this.getOfertasAcademicas },
                { name: 'getPublicaciones', fn: this.getPublicaciones },
                { name: 'getVideos', fn: this.getVideos }
            ];

            for (const test of tests) {
                await this.executeTest(test.name, test.fn);
            }

            this.loading = false;
        },

        async testSingleFunction() {
            if (!this.selectedFunction) return;

            const functionMap = {
                getInstitucion: this.getInstitucion,
                getCarrera: this.getCarrera,
                getEventos: this.getEventos,
                getGacetas: this.getGacetas,
                getLinksInstExtAll: this.getLinksInstExtAll,
                getConvocatorias: this.getConvocatorias,
                getCursos: this.getCursos,
                getServicios: this.getServicios,
                getOfertasAcademicas: this.getOfertasAcademicas,
                getPublicaciones: this.getPublicaciones,
                getVideos: this.getVideos
            };

            await this.executeTest(this.selectedFunction, functionMap[this.selectedFunction]);
            this.selectedFunction = '';
        },

        async executeTest(functionName, testFunction) {
            try {
                const startTime = Date.now();
                const data = await testFunction();
                const endTime = Date.now();

                this.results.unshift({
                    function: functionName,
                    status: 'success',
                    data: data,
                    dataSummary: this.getDataSummary(data),
                    url: `/api/instituciones/${this.testId}`,
                    timestamp: new Date().toLocaleTimeString(),
                    duration: `${endTime - startTime}ms`,
                    showDetails: false
                });

            } catch (error) {
                this.results.unshift({
                    function: functionName,
                    status: 'error',
                    error: error.message,
                    data: null,
                    dataSummary: 'Error en la petición',
                    url: `/api/instituciones/${this.testId}`,
                    timestamp: new Date().toLocaleTimeString(),
                    showDetails: false
                });
            }
        },

        getDataSummary(data) {
            if (Array.isArray(data)) {
                return `Array con ${data.length} elementos`;
            } else if (data && typeof data === 'object') {
                const keys = Object.keys(data);
                return `Objeto con ${keys.length} propiedades`;
            } else if (data) {
                return `Tipo: ${typeof data}`;
            }
            return 'Sin datos';
        },

        toggleDetails(index) {
            this.results[index].showDetails = !this.results[index].showDetails;
        },

        clearResults() {
            this.results = [];
        }
    }
}
</script>

<style scoped>
.api-tester {
    max-width: 1000px;
    margin: 20px;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.controls {
    margin: 20px 0;
    display: flex;
    gap: 10px;
}

.btn-primary,
.btn-secondary,
.btn-small {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary {
    background: #007bff;
    color: white;
}

.btn-primary:disabled {
    background: #6c757d;
    cursor: not-allowed;
}

.btn-secondary {
    background: #6c757d;
    color: white;
}

.btn-small {
    background: #28a745;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
}

.function-selector {
    margin: 15px 0;
}

.function-selector select {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-left: 10px;
}

.results {
    margin-top: 20px;
}

.summary {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.stats {
    display: flex;
    gap: 15px;
}

.stat {
    padding: 5px 10px;
    border-radius: 3px;
}

.passed {
    background: #d4edda;
    color: #155724;
}

.failed {
    background: #f8d7da;
    color: #721c24;
}

.total {
    background: #d1ecf1;
    color: #0c5460;
}

.result-item {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px 0;
    padding: 15px;
}

.result-item.success {
    border-left: 4px solid #28a745;
}

.result-item.error {
    border-left: 4px solid #dc3545;
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.timestamp {
    font-size: 12px;
    color: #6c757d;
}

.result-body {
    font-size: 14px;
}

.full-data {
    margin-top: 10px;
    background: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
    max-height: 300px;
    overflow: auto;
}

.full-data pre {
    margin: 0;
    font-size: 12px;
}

.error {
    color: #dc3545;
    background: #f8d7da;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
}

.loading {
    text-align: center;
    padding: 20px;
}

.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    margin: 0 auto 10px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>