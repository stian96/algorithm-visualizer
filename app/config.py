class Config:
    DEBUG = False
    TESTING = False
    TREE_VALUES = []
    ARRAY_VALUES = []
    DIAGRAM_VALUES = []

class ProductionConfig(Config):
    TREE_VALUES = [100, 50, 120, 45, 63, 110, 135, 35, 47, 60, 77, 102, 117, 125, 150]
    ARRAY_VALUES = [12, 15, 17, 20, 32, 37, 43, 65, 98]
    DIAGRAM_VALUES = [10, 15, 23, 30, 37, 42, 48, 55, 63, 70, 75, 82, 88, 93, 100]

class DevelopmentConfig(Config):
    DEBUG = True
    TREE_VALUES = [100, 50, 120, 45, 63, 110, 135, 35, 47, 60, 77, 102, 117, 125, 150]
    ARRAY_VALUES = [12, 15, 17, 20, 32, 37, 43, 65, 98]
    DIAGRAM_VALUES = [10, 15, 23, 30, 37, 42, 48, 55, 63, 70, 75, 82, 88, 93, 100]

class TestingConfig(Config):
    TESTING = True
    TREE_VALUES = [100, 50, 120, 45, 63, 110, 135, 35, 47, 60, 77, 102, 117, 125, 150]
    ARRAY_VALUES = [12, 15, 17, 20, 32, 37, 43, 65, 98]
    DIAGRAM_VALUES = [10, 15, 23, 30, 37, 42, 48, 55, 63, 70, 75, 82, 88, 93, 100]
