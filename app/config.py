class Config:
    DEBUG = False
    TESTING = False
    TREE_VALUES = []
    ARRAY_VALUES = []

class ProductionConfig(Config):
    TREE_VALUES = [100, 50, 120, 45, 63, 110, 135, 35, 47, 60, 77, 102, 117, 125, 150]
    ARRAY_VALUES = [12, 15, 17, 20, 32, 37, 43, 65, 98]

class DevelopmentConfig(Config):
    DEBUG = True
    TREE_VALUES = [100, 50, 120, 45, 63, 110, 135, 35, 47, 60, 77, 102, 117, 125, 150]
    ARRAY_VALUES = [12, 15, 17, 20, 32, 37, 43, 65, 98]

class TestingConfig(Config):
    TESTING = True
    TREE_VALUES = [100, 50, 120, 45, 63, 110, 135, 35, 47, 60, 77, 102, 117, 125, 150]
    ARRAY_VALUES = [12, 15, 17, 20, 32, 37, 43, 65, 98]